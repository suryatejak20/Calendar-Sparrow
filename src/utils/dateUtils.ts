import { 
  startOfMonth, 
  endOfMonth, 
  startOfWeek, 
  endOfWeek, 
  eachDayOfInterval, 
  format, 
  isToday, 
  isSameMonth,
  parseISO
} from 'date-fns';
import { CalendarDay, Event } from '../types';

export const getDaysInMonth = (date: Date): CalendarDay[] => {
  const start = startOfWeek(startOfMonth(date), { weekStartsOn: 0 });
  const end = endOfWeek(endOfMonth(date), { weekStartsOn: 0 });
  
  const days = eachDayOfInterval({ start, end }).map(day => ({
    date: day,
    isCurrentMonth: isSameMonth(day, date),
    isToday: isToday(day),
    events: []
  }));
  
  return days;
};

export const formatDate = (date: Date, formatString: string): string => {
  return format(date, formatString);
};

export const getEventsForDay = (events: Event[], day: Date): Event[] => {
  const dayStr = format(day, 'yyyy-MM-dd');
  return events.filter(event => event.date === dayStr);
};

export const getDaysWithEvents = (
  calendarDays: CalendarDay[], 
  events: Event[]
): CalendarDay[] => {
  return calendarDays.map(day => {
    const dayEvents = getEventsForDay(events, day.date);
    return {
      ...day,
      events: dayEvents
    };
  });
};

export const sortEventsByStartTime = (events: Event[]): Event[] => {
  return [...events].sort((a, b) => {
    return a.startTime.localeCompare(b.startTime);
  });
};

export const checkEventsOverlap = (event1: Event, event2: Event): boolean => {
  // Check if events are on the same date
  if (event1.date !== event2.date) return false;
  
  const start1 = event1.startTime;
  const end1 = event1.endTime;
  const start2 = event2.startTime;
  const end2 = event2.endTime;
  
  // Check if one event starts during another event
  return (
    (start1 <= start2 && start2 < end1) || 
    (start2 <= start1 && start1 < end2)
  );
};

export const organizeOverlappingEvents = (events: Event[]): { 
  event: Event, 
  level: number 
}[] => {
  if (events.length <= 1) {
    return events.map(event => ({ event, level: 0 }));
  }
  
  const sortedEvents = sortEventsByStartTime(events);
  const result: { event: Event, level: number }[] = [];
  
  // Track levels currently in use at each position
  const levels: number[] = [];
  
  for (const event of sortedEvents) {
    // Find the first level that doesn't have an overlapping event
    let level = 0;
    while (
      result.some(
        ({ event: existingEvent, level: existingLevel }) => 
          existingLevel === level && 
          checkEventsOverlap(existingEvent, event)
      )
    ) {
      level++;
    }
    
    result.push({ event, level });
    
    // Update the maximum level if needed
    if (level >= levels.length) {
      levels.push(level);
    }
  }
  
  return result;
};

export const formatEventTime = (startTime: string, endTime: string): string => {
  const formatTimeToAmPm = (time: string): string => {
    const [hours, minutes] = time.split(':');
    const hour = parseInt(hours, 10);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour % 12 || 12;
    return `${displayHour}${minutes !== '00' ? ':' + minutes : ''}${ampm}`;
  };
  
  return `${formatTimeToAmPm(startTime)} - ${formatTimeToAmPm(endTime)}`;
};
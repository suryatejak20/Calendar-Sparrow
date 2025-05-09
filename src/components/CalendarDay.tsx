import React from 'react';
import { format } from 'date-fns';
import { Plus } from 'lucide-react';
import { CalendarDay as CalendarDayType } from '../types';
import { organizeOverlappingEvents } from '../utils/dateUtils';
import EventItem from './EventItem';

interface CalendarDayProps {
  day: CalendarDayType;
}

const CalendarDay: React.FC<CalendarDayProps> = ({ day }) => {
  const { date, isCurrentMonth, isToday, events } = day;
  
  const organizedEvents = organizeOverlappingEvents(events);
  const maxLevel = organizedEvents.length > 0 
    ? Math.max(...organizedEvents.map(item => item.level))
    : 0;

  return (
    <div 
      className={`
        min-h-[120px] p-2 border-r border-b relative
        ${isCurrentMonth ? 'bg-white' : 'bg-gray-50'}
        ${isToday ? 'bg-indigo-50' : ''}
      `}
    >
      <div className="flex items-center justify-between mb-1">
        <span
          className={`
            flex items-center justify-center w-7 h-7 text-sm font-medium rounded-full
            ${isToday ? 'bg-indigo-600 text-white' : isCurrentMonth ? 'text-gray-900' : 'text-gray-400'}
          `}
        >
          {format(date, 'd')}
        </span>
        
        {isCurrentMonth && (
          <button className="opacity-0 group-hover:opacity-100 p-1 hover:bg-gray-100 rounded-full transition-opacity">
            <Plus className="h-4 w-4 text-gray-600" />
          </button>
        )}
      </div>
      
      <div className="space-y-1">
        {organizedEvents.map(({ event, level }) => (
          <EventItem 
            key={event.id}
            event={event}
            level={level}
            totalLevels={maxLevel}
          />
        ))}
      </div>
    </div>
  );
};

export default CalendarDay;
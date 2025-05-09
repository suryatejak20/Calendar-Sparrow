import React, { useState, useEffect } from 'react';
import { addMonths, subMonths } from 'date-fns';
import CalendarHeader from './CalendarHeader';
import CalendarGrid from './CalendarGrid';
import { getDaysInMonth, getDaysWithEvents } from '../utils/dateUtils';
import { events } from '../data/events';
import { Event } from '../types';

interface CalendarProps {
  initialEvents?: Event[];
}

const Calendar: React.FC<CalendarProps> = ({ initialEvents = events }) => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [calendarDays, setCalendarDays] = useState(getDaysInMonth(currentDate));
  
  useEffect(() => {
    const days = getDaysInMonth(currentDate);
    const daysWithEvents = getDaysWithEvents(days, initialEvents);
    setCalendarDays(daysWithEvents);
  }, [currentDate, initialEvents]);
  
  const handlePrevMonth = () => {
    setCurrentDate(prevDate => subMonths(prevDate, 1));
  };
  
  const handleNextMonth = () => {
    setCurrentDate(prevDate => addMonths(prevDate, 1));
  };
  
  const handleToday = () => {
    setCurrentDate(new Date());
  };
  
  return (
    <div className="calendar-container p-4 max-w-7xl mx-auto">
      <CalendarHeader
        currentDate={currentDate}
        onPrevMonth={handlePrevMonth}
        onNextMonth={handleNextMonth}
        onToday={handleToday}
      />
      <CalendarGrid days={calendarDays} />
    </div>
  );
};

export default Calendar;
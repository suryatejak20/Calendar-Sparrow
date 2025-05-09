import React from 'react';
import { format } from 'date-fns';
import CalendarDay from './CalendarDay';
import { CalendarDay as CalendarDayType } from '../types';

interface CalendarGridProps {
  days: CalendarDayType[];
}

const CalendarGrid: React.FC<CalendarGridProps> = ({ days }) => {
  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  return (
    <div className="flex-1">
      {/* Weekday headers */}
      <div className="grid grid-cols-7 border-b border-gray-200">
        {weekdays.map((day, index) => (
          <div 
            key={index} 
            className="py-2 text-center text-sm font-medium text-gray-500"
          >
            {day}
          </div>
        ))}
      </div>
      
      {/* Calendar days grid */}
      <div className="grid grid-cols-7 border-l">
        {days.map((day, i) => (
          <CalendarDay key={format(day.date, 'yyyy-MM-dd')} day={day} />
        ))}
      </div>
    </div>
  );
};

export default CalendarGrid;
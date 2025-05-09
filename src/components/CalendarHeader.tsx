import React from 'react';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, Plus } from 'lucide-react';
import { format } from 'date-fns';

interface CalendarHeaderProps {
  currentDate: Date;
  onPrevMonth: () => void;
  onNextMonth: () => void;
  onToday: () => void;
}

const CalendarHeader: React.FC<CalendarHeaderProps> = ({
  currentDate,
  onPrevMonth,
  onNextMonth,
  onToday
}) => {
  return (
    <div className="p-6 border-b border-gray-200">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h2 className="text-2xl font-semibold text-gray-900">
            {format(currentDate, 'MMMM yyyy')}
          </h2>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={onPrevMonth}
              className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-600"
              aria-label="Previous month"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={onNextMonth}
              className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-600"
              aria-label="Next month"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
          
          <button
            onClick={onToday}
            className="px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg"
          >
            Today
          </button>
        </div>
        
        <div className="flex items-center space-x-3">
          <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
            <Plus className="h-4 w-4 mr-1.5" />
            New Event
          </button>
        </div>
      </div>
    </div>
  );
};

export default CalendarHeader;
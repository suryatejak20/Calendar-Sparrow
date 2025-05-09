import React from 'react';
import { Event } from '../types';
import { formatEventTime } from '../utils/dateUtils';

interface EventItemProps {
  event: Event;
  level: number;
  totalLevels: number;
}

const EventItem: React.FC<EventItemProps> = ({ event, level, totalLevels }) => {
  return (
    <div 
      className="group relative rounded-md px-2 py-1 text-sm cursor-pointer hover:ring-2 hover:ring-indigo-600 hover:ring-offset-1 transition-all"
      style={{ 
        backgroundColor: event.color || '#4F46E5',
      }}
    >
      <div className="flex items-center space-x-2">
        <div className="flex-1 min-w-0">
          <p className="font-medium text-white truncate">{event.title}</p>
          <p className="text-white text-opacity-90 text-xs">
            {formatEventTime(event.startTime, event.endTime)}
          </p>
        </div>
      </div>
      
      {/* Tooltip */}
      <div className="absolute z-10 w-64 p-4 bg-white rounded-lg shadow-lg border border-gray-200 invisible group-hover:visible top-full left-0 mt-2">
        <h4 className="font-medium text-gray-900">{event.title}</h4>
        <p className="text-sm text-gray-500 mt-1">
          {formatEventTime(event.startTime, event.endTime)}
        </p>
        {event.description && (
          <p className="text-sm text-gray-600 mt-2">{event.description}</p>
        )}
      </div>
    </div>
  );
};

export default EventItem;
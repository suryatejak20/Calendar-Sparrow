import React from 'react';
import Calendar from './components/Calendar';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-[1400px] mx-auto p-4 sm:p-6 lg:p-8">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="flex">
            {/* Sidebar */}
            <div className="hidden lg:block w-64 border-r border-gray-200 bg-white p-6">
              <div className="flex items-center space-x-2 mb-8">
                <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-semibold">C</span>
                </div>
                <h1 className="text-xl font-semibold text-gray-900">Calendar</h1>
              </div>
              
              <nav className="space-y-1">
                <a href="#" className="flex items-center px-3 py-2 text-sm font-medium rounded-lg bg-indigo-50 text-indigo-600">
                  <span>Month View</span>
                </a>
                <a href="#" className="flex items-center px-3 py-2 text-sm font-medium rounded-lg text-gray-600 hover:bg-gray-50">
                  <span>Week View</span>
                </a>
                <a href="#" className="flex items-center px-3 py-2 text-sm font-medium rounded-lg text-gray-600 hover:bg-gray-50">
                  <span>Day View</span>
                </a>
              </nav>
              
              <div className="mt-8">
                <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  Upcoming Events
                </h2>
                <div className="space-y-3">
                  {/* Upcoming events would go here */}
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <div className="text-sm font-medium text-gray-900">Team Meeting</div>
                    <div className="text-xs text-gray-500">Today, 9:00 AM</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Main content */}
            <div className="flex-1">
              <Calendar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
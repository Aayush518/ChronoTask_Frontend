import React from 'react';
import { Calendar as CalendarIcon, ChevronRight } from 'lucide-react';

const Calendar: React.FC = () => {
  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const currentDay = 15;

  return (
    <div className="vintage-card">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <CalendarIcon className="w-5 h-5 text-indigo-600" />
          <h3 className="font-semibold">March 2025</h3>
        </div>
        <ChevronRight className="w-5 h-5 text-gray-400 cursor-pointer hover:text-indigo-600 transition-colors" />
      </div>
      <div className="calendar-grid mb-4">
        {days.map((day, i) => (
          <div key={i} className="text-center text-gray-400 text-sm">{day}</div>
        ))}
        {Array.from({ length: 31 }, (_, i) => (
          <button 
            key={i} 
            className={`calendar-day ${i + 1 === currentDay ? 'active' : ''}`}
          >
            {i + 1}
          </button>
        ))}
      </div>
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
          <span>Team coffee break</span>
          <span className="ml-auto">10:00</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
          <span>Weekly newsletter</span>
          <span className="ml-auto">14:30</span>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
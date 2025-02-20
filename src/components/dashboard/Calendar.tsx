import React from 'react';
import { Calendar as CalendarIcon, ChevronRight, ChevronLeft } from 'lucide-react';
import FloatingElement from '../ui/FloatingElement';

const Calendar: React.FC = () => {
  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const currentDay = 15;
  const events = [
    {
      id: 1,
      title: 'Team coffee break',
      time: '10:00',
      color: 'orange',
      attendees: 4
    },
    {
      id: 2,
      title: 'Weekly newsletter',
      time: '14:30',
      color: 'blue',
      attendees: 6
    }
  ];

  return (
    <FloatingElement className="transform rotate-1">
      <div className="vintage-paper-card">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="vintage-stamp">
              <CalendarIcon className="w-5 h-5 text-amber-800" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-amber-900">March 2025</h3>
              <p className="text-sm text-amber-700">2 events today</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="vintage-nav-button">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="vintage-nav-button">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="calendar-container mb-6">
          <div className="calendar-grid">
            {days.map((day, i) => (
              <div key={i} className="calendar-header">{day}</div>
            ))}
            {Array.from({ length: 31 }, (_, i) => {
              const isToday = i + 1 === currentDay;
              const hasEvent = events.some(e => e.id === i + 1);
              return (
                <button 
                  key={i} 
                  className={`calendar-day group ${isToday ? 'today' : ''} ${hasEvent ? 'has-event' : ''}`}
                >
                  <span className="day-number">{i + 1}</span>
                  {hasEvent && <span className="event-dot"></span>}
                  <div className="day-hover-effect"></div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="space-y-3">
          {events.map(event => (
            <div key={event.id} className="event-card group">
              <div className="flex items-center gap-3">
                <div className={`event-indicator bg-${event.color}-500`}></div>
                <div className="flex-1">
                  <h4 className="text-sm font-medium text-amber-900 group-hover:text-amber-800 transition-colors">
                    {event.title}
                  </h4>
                  <div className="flex items-center gap-4 mt-1">
                    <span className="text-xs text-amber-700">{event.time}</span>
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-4 bg-amber-100 rounded-full flex items-center justify-center">
                        <span className="text-[10px] font-medium text-amber-800">
                          {event.attendees}
                        </span>
                      </div>
                      <span className="text-xs text-amber-700">attendees</span>
                    </div>
                  </div>
                </div>
                <button className="vintage-mini-button group-hover:opacity-100">
                  Join
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </FloatingElement>
  );
};

export default Calendar;
import React from 'react';
import { Bell, Users, Clock, Calendar as CalendarIcon } from 'lucide-react';
import FloatingElement from '../ui/FloatingElement';

const Reminders: React.FC = () => {
  const meetings = [
    {
      id: 1,
      title: 'Marketing Strategy',
      team: 'Marketing Team',
      time: '13:00 - 13:45',
      attendees: ['John D.', 'Sarah M.', 'Mike R.'],
      location: 'Main Conference Room'
    },
    {
      id: 2,
      title: 'Product Review',
      team: 'Design Team',
      time: '15:00 - 16:00',
      attendees: ['Alex K.', 'Emma S.', 'Tom B.', 'Lisa M.'],
      location: 'Virtual Meeting'
    }
  ];

  return (
    <FloatingElement className="transform -rotate-1">
      <div className="vintage-paper-card">
        <div className="flex items-center gap-3 mb-6">
          <div className="vintage-stamp">
            <Bell className="w-5 h-5 text-amber-800" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-amber-900">Upcoming meetings</h3>
            <p className="text-sm text-amber-700">2 meetings today</p>
          </div>
        </div>

        <div className="space-y-4">
          {meetings.map(meeting => (
            <div key={meeting.id} className="meeting-card group">
              <div className="flex items-start gap-4">
                <div className="meeting-time-badge">
                  <CalendarIcon className="w-4 h-4" />
                  <span>{meeting.time.split(' ')[0]}</span>
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-medium text-amber-900 group-hover:text-amber-800 transition-colors">
                        {meeting.title}
                      </h4>
                      <p className="text-sm text-amber-700 mt-1">{meeting.team}</p>
                    </div>
                    <button className="vintage-mini-button group-hover:opacity-100">
                      Join
                    </button>
                  </div>

                  <div className="flex items-center gap-4 mt-3">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4 text-amber-600" />
                      <span className="text-xs text-amber-600">{meeting.time}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4 text-amber-600" />
                      <span className="text-xs text-amber-600">
                        {meeting.attendees.length} attendees
                      </span>
                    </div>
                  </div>

                  <div className="mt-3 flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {meeting.attendees.slice(0, 3).map((attendee, i) => (
                        <div 
                          key={i}
                          className="w-6 h-6 rounded-full bg-amber-100 border border-white flex items-center justify-center"
                        >
                          <span className="text-xs font-medium text-amber-800">
                            {attendee.split(' ')[0][0]}
                          </span>
                        </div>
                      ))}
                      {meeting.attendees.length > 3 && (
                        <div className="w-6 h-6 rounded-full bg-amber-50 border border-white flex items-center justify-center">
                          <span className="text-xs font-medium text-amber-800">
                            +{meeting.attendees.length - 3}
                          </span>
                        </div>
                      )}
                    </div>
                    <span className="text-xs text-amber-600">{meeting.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </FloatingElement>
  );
};

export default Reminders;
import React from 'react';
import { Bell, Users, Clock } from 'lucide-react';

const Reminders: React.FC = () => {
  const meetings = [
    {
      id: 1,
      title: 'Marketing Strategy',
      team: 'Marketing Team',
      time: '13:00 - 13:45'
    },
    {
      id: 2,
      title: 'Product Review',
      team: 'Design Team',
      time: '15:00 - 16:00'
    }
  ];

  return (
    <div className="vintage-card">
      <div className="flex items-center gap-2 mb-6">
        <Bell className="w-5 h-5 text-indigo-600" />
        <h3 className="font-semibold">Upcoming meetings</h3>
      </div>
      <div className="space-y-4">
        {meetings.map(meeting => (
          <div key={meeting.id} className="task-card">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-indigo-600" />
              <div>
                <p className="text-sm font-medium">{meeting.title}</p>
                <p className="text-xs text-gray-500">with {meeting.team}</p>
              </div>
            </div>
            <div className="flex items-center gap-1 mt-2">
              <Clock className="w-4 h-4 text-indigo-600" />
              <span className="text-xs text-indigo-600">{meeting.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reminders;
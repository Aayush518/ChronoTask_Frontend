import React from 'react';
import { Grid } from 'lucide-react';

const Integrations: React.FC = () => {
  const integrations = [
    {
      id: 1,
      name: 'Gmail',
      description: 'Email Integration',
      icon: 'https://www.gstatic.com/images/branding/product/2x/gmail_48dp.png'
    },
    {
      id: 2,
      name: 'Slack',
      description: 'Team Chat',
      icon: 'https://assets.brandfolder.com/pl546j-7le8zk-btwjnu/v/3033396/original/Slack_Mark_Web.png'
    },
    {
      id: 3,
      name: 'Calendar',
      description: 'Schedule Sync',
      icon: 'https://www.gstatic.com/images/branding/product/2x/calendar_48dp.png'
    },
    {
      id: 4,
      name: 'Drive',
      description: 'File Storage',
      icon: 'https://www.gstatic.com/images/branding/product/2x/drive_48dp.png'
    }
  ];

  return (
    <div className="vintage-card">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Grid className="w-5 h-5 text-indigo-600" />
          <h3 className="font-semibold">Popular Integrations</h3>
        </div>
        <button className="text-sm text-indigo-600 hover:text-indigo-700 transition-colors">
          View all
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {integrations.map(integration => (
          <div key={integration.id} className="task-card flex items-center gap-3">
            <img 
              src={integration.icon} 
              alt={integration.name} 
              className="w-8 h-8 object-contain"
            />
            <div>
              <p className="text-sm font-medium">{integration.name}</p>
              <p className="text-xs text-gray-500">{integration.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Integrations;
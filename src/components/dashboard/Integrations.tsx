import React from 'react';
import { Grid, ArrowRight } from 'lucide-react';
import FloatingElement from '../ui/FloatingElement';

const IntegrationCard: React.FC<{
  integration: any;
  index: number;
}> = ({ integration, index }) => (
  <FloatingElement 
    className={`transform ${index % 2 === 0 ? 'rotate-2' : '-rotate-2'}`}
    delay={index * 0.2}
  >
    <div className="integration-card group">
      <div className="vintage-stamp absolute -right-3 -top-3 !w-16 !h-16 z-10">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg font-bold text-amber-800">{integration.rating}</span>
          <span className="text-xs text-amber-700 absolute -bottom-1">rating</span>
        </div>
      </div>
      
      <div className="relative z-20">
        <div className="integration-icon-container mb-4">
          <div className="integration-icon-wrapper">
            {integration.name === 'Slack' ? (
              <img 
                src="https://cdn.brandfolder.io/5H442O3W/as/pl546j-7le8zk-4nc9sr/Slack_Mark_Web.png"
                alt="Slack"
                className="w-12 h-12 object-contain"
              />
            ) : (
              <img 
                src={integration.icon} 
                alt={integration.name} 
                className="w-12 h-12 object-contain"
              />
            )}
          </div>
          <div className="integration-pattern"></div>
        </div>
        
        <h4 className="text-xl font-bold text-amber-900 mb-2">{integration.name}</h4>
        <p className="text-sm text-amber-700 mb-4">{integration.description}</p>
        
        <div className="flex items-center justify-between">
          <div className="vintage-users-badge">
            <span className="font-semibold">{integration.users}</span>
            <span className="text-xs ml-1">active users</span>
          </div>
          <button className="vintage-connect-button group-hover:opacity-100">
            <span>Connect</span>
            <div className="vintage-button-decoration"></div>
          </button>
        </div>
      </div>
    </div>
  </FloatingElement>
);

const Integrations: React.FC = () => {
  const integrations = [
    {
      id: 1,
      name: 'Gmail',
      description: 'Sync emails & tasks seamlessly',
      icon: 'https://www.gstatic.com/images/branding/product/2x/gmail_48dp.png',
      users: '10k+',
      rating: 4.8
    },
    {
      id: 2,
      name: 'Slack',
      description: 'Real-time team collaboration',
      icon: 'https://cdn.brandfolder.io/5H442O3W/as/pl546j-7le8zk-4nc9sr/Slack_Mark_Web.png',
      users: '8k+',
      rating: 4.9
    },
    {
      id: 3,
      name: 'Calendar',
      description: 'Smart schedule management',
      icon: 'https://www.gstatic.com/images/branding/product/2x/calendar_48dp.png',
      users: '15k+',
      rating: 4.7
    },
    {
      id: 4,
      name: 'Drive',
      description: 'Seamless file integration',
      icon: 'https://www.gstatic.com/images/branding/product/2x/drive_48dp.png',
      users: '12k+',
      rating: 4.8
    }
  ];

  return (
    <section className="vintage-section py-16 px-4 md:px-8 relative overflow-visible">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-6">
          <div className="flex items-center gap-4">
            <div className="vintage-stamp">
              <Grid className="w-8 h-8 text-amber-800" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-2">
                Popular Integrations
              </h2>
              <p className="text-amber-700">Connect your favorite tools seamlessly</p>
            </div>
          </div>
          <button className="vintage-view-all-button group">
            <span>View all integrations</span>
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {integrations.map((integration, index) => (
            <IntegrationCard 
              key={integration.id} 
              integration={integration} 
              index={index}
            />
          ))}
        </div>
      </div>
      
      <div className="vintage-pattern-overlay"></div>
    </section>
  );
};

export default Integrations;
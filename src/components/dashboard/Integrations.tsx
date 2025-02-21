import React from 'react';
import { Grid, ArrowRight } from 'lucide-react';
import FloatingElement from '../ui/FloatingElement';

const IntegrationIcon: React.FC<{ name: string }> = ({ name }) => {
  const icons = {
    Gmail: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
        <path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z" fill="#EA4335"/>
      </svg>
    ),
    Slack: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
        <path d="M6 15a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2h2v2zm1 0a2 2 0 0 1 2-2a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2a2 2 0 0 1-2-2v-5zm2-7a2 2 0 0 1-2-2a2 2 0 0 1 2-2a2 2 0 0 1 2 2v2H9zm0 1a2 2 0 0 1 2 2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2a2 2 0 0 1 2-2h5zm7 2a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2h-2v-2zm-1 0a2 2 0 0 1-2 2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2a2 2 0 0 1 2 2v7zm-2 7a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2v-2h2zm0-1a2 2 0 0 1-2-2a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2a2 2 0 0 1-2 2h-5z" fill="#E01E5A"/>
      </svg>
    ),
    Calendar: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
        <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="#4285F4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 2V6M8 2V6M3 10H21M8 14H8.01M12 14H12.01M16 14H16.01M8 18H8.01M12 18H12.01M16 18H16.01" stroke="#4285F4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    Drive: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
        <path d="M4.5 14.5L8 19.5H16L19.5 14.5" fill="#4285F4"/>
        <path d="M8 4.5L4 14.5L8 19.5L12 9.5L8 4.5Z" fill="#0F9D58"/>
        <path d="M16 4.5H8L12 9.5H20L16 4.5Z" fill="#FBBC04"/>
        <path d="M20 14.5L16 4.5L12 9.5L16 19.5L20 14.5Z" fill="#EA4335"/>
      </svg>
    )
  };

  return icons[name as keyof typeof icons] || null;
};

const IntegrationCard: React.FC<{
  integration: {
    id: number;
    name: string;
    description: string;
    users: string;
    rating: number;
  };
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
            <IntegrationIcon name={integration.name} />
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
      users: '10k+',
      rating: 4.8
    },
    {
      id: 2,
      name: 'Slack',
      description: 'Real-time team collaboration',
      users: '8k+',
      rating: 4.9
    },
    {
      id: 3,
      name: 'Calendar',
      description: 'Smart schedule management',
      users: '15k+',
      rating: 4.7
    },
    {
      id: 4,
      name: 'Drive',
      description: 'Seamless file integration',
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
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
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
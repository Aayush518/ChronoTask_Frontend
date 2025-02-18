import React from 'react';

interface StatsCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ icon, value, label }) => {
  return (
    <div className="stats-card group">
      <div className="relative">
        <div className="rating-stamp mb-4">
          <div className="absolute inset-0 flex items-center justify-center">
            {icon}
          </div>
        </div>
        <div className="text-center">
          <h3 className="text-3xl font-bold text-amber-900 mb-1 group-hover:scale-110 transition-transform">
            {value}
          </h3>
          <p className="text-amber-700">{label}</p>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
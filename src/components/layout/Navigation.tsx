import React from 'react';
import { Bell } from 'lucide-react';
import NotificationBadge from '../ui/NotificationBadge';

const Navigation: React.FC = () => {
  const notifications = 3;

  return (
    <>
      <nav className="hidden md:flex gap-8">
        <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">Features</a>
        <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">Solutions</a>
        <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">Resources</a>
        <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">Pricing</a>
      </nav>
      <div className="flex items-center gap-6">
        <div className="relative">
          <Bell className="w-5 h-5 text-gray-600 hover:text-indigo-600 cursor-pointer" />
          {notifications > 0 && <NotificationBadge count={notifications} />}
        </div>
        <button className="text-gray-600 hover:text-indigo-600 transition-colors">Sign in</button>
        <button className="vintage-button">Get demo</button>
      </div>
    </>
  );
};

export default Navigation;
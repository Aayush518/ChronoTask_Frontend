import React, { useState } from 'react';
import { Bell, Search, Menu } from 'lucide-react';
import NotificationBadge from '../ui/NotificationBadge';

const Navigation: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const notifications = 3;

  return (
    <div className="flex items-center gap-6">
      <nav className="hidden md:flex items-center gap-8">
        <div className="relative">
          <div className={`flex items-center gap-2 vintage-search-container ${isSearchOpen ? 'w-64' : 'w-48'}`}>
            <Search className="w-4 h-4 text-amber-700" />
            <input
              type="text"
              placeholder="Search tasks..."
              className="vintage-search-input"
              onFocus={() => setIsSearchOpen(true)}
              onBlur={() => setIsSearchOpen(false)}
            />
          </div>
        </div>
        <a href="#" className="nav-link group">
          Features
          <span className="nav-link-underline"></span>
        </a>
        <a href="#" className="nav-link group">
          Solutions
          <span className="nav-link-underline"></span>
        </a>
        <a href="#" className="nav-link group">
          Resources
          <span className="nav-link-underline"></span>
        </a>
        <a href="#" className="nav-link group">
          Pricing
          <span className="nav-link-underline"></span>
        </a>
      </nav>
      
      <div className="flex items-center gap-6">
        <div className="relative">
          <Bell className="w-5 h-5 text-amber-700 hover:text-amber-900 cursor-pointer transition-colors" />
          {notifications > 0 && <NotificationBadge count={notifications} />}
        </div>
        <button className="text-amber-700 hover:text-amber-900 transition-colors font-medium">
          Sign in
        </button>
        <button className="vintage-button">
          Get demo
        </button>
      </div>
      
      <button className="md:hidden text-amber-700">
        <Menu className="w-6 h-6" />
      </button>
    </div>
  );
};

export default Navigation
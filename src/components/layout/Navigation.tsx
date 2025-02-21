import React, { useState } from 'react';
import { Bell, Search, Menu, X } from 'lucide-react';
import NotificationBadge from '../ui/NotificationBadge';

const Navigation: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const notifications = 3;

  return (
    <div className="flex items-center gap-6">
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center gap-8">
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
      
      {/* Desktop Actions */}
      <div className="hidden lg:flex items-center gap-6">
        <button className="notification-button group">
          <Bell className="w-5 h-5 text-amber-700 group-hover:text-amber-900 transition-colors" />
          {notifications > 0 && <NotificationBadge count={notifications} />}
        </button>
        <button className="text-amber-700 hover:text-amber-900 transition-colors font-medium">
          Sign in
        </button>
        <button className="vintage-button">
          Get demo
        </button>
      </div>
      
      {/* Mobile Menu Button */}
      <button 
        className="lg:hidden text-amber-700 hover:text-amber-900 transition-colors"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>

      {/* Mobile Menu */}
      <div className={`
        fixed inset-0 z-50 lg:hidden transition-transform duration-300 ease-in-out
        ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        <div className="absolute inset-0 bg-amber-900/20 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
        <div className="absolute right-0 top-0 h-full w-64 bg-white shadow-xl">
          <div className="p-6 space-y-6">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-lg font-semibold text-amber-900">Menu</h3>
              <button 
                className="text-amber-700 hover:text-amber-900"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-4">
              <div className="vintage-search-container w-full">
                <Search className="w-4 h-4 text-amber-700" />
                <input
                  type="text"
                  placeholder="Search tasks..."
                  className="vintage-search-input"
                />
              </div>

              <div className="space-y-2">
                <a href="#" className="mobile-nav-link">Features</a>
                <a href="#" className="mobile-nav-link">Solutions</a>
                <a href="#" className="mobile-nav-link">Resources</a>
                <a href="#" className="mobile-nav-link">Pricing</a>
              </div>

              <div className="pt-4 border-t border-amber-100">
                <button className="notification-button group flex items-center gap-2 w-full mb-4">
                  <Bell className="w-5 h-5 text-amber-700 group-hover:text-amber-900" />
                  <span className="text-amber-700 group-hover:text-amber-900">Notifications</span>
                  {notifications > 0 && <NotificationBadge count={notifications} />}
                </button>
                <button className="vintage-button w-full mb-3">
                  Get demo
                </button>
                <button className="vintage-secondary-button w-full">
                  Sign in
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
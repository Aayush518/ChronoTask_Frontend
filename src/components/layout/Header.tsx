import React from 'react';
import { Grid } from 'lucide-react';
import Navigation from './Navigation';

const Header: React.FC = () => {
  return (
    <header className="glass-morphism sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-amber-100/80 backdrop-blur-sm flex items-center justify-center border-2 border-amber-300">
              <Grid className="w-6 h-6 text-amber-800" />
            </div>
            <span className="font-bold text-xl bg-gradient-to-r from-amber-800 to-amber-600 text-transparent bg-clip-text">
              ChronoTask
            </span>
          </div>
          <Navigation />
        </div>
      </div>
    </header>
  );
}

export default Header
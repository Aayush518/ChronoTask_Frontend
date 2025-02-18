import React from 'react';
import { Grid, Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-amber-50 border-t border-amber-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Grid className="w-6 h-6 text-amber-800" />
              <span className="font-bold text-xl text-amber-800">ChronoTask</span>
            </div>
            <p className="text-amber-700 mb-4">
              Vintage-inspired task management for modern productivity.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-amber-600 hover:text-amber-800 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-amber-600 hover:text-amber-800 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-amber-600 hover:text-amber-800 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-amber-600 hover:text-amber-800 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-amber-900 mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-amber-700 hover:text-amber-900">Features</a></li>
              <li><a href="#" className="text-amber-700 hover:text-amber-900">Integrations</a></li>
              <li><a href="#" className="text-amber-700 hover:text-amber-900">Pricing</a></li>
              <li><a href="#" className="text-amber-700 hover:text-amber-900">Changelog</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-amber-900 mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-amber-700 hover:text-amber-900">Documentation</a></li>
              <li><a href="#" className="text-amber-700 hover:text-amber-900">API Reference</a></li>
              <li><a href="#" className="text-amber-700 hover:text-amber-900">Blog</a></li>
              <li><a href="#" className="text-amber-700 hover:text-amber-900">Community</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-amber-900 mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-amber-700 hover:text-amber-900">About</a></li>
              <li><a href="#" className="text-amber-700 hover:text-amber-900">Careers</a></li>
              <li><a href="#" className="text-amber-700 hover:text-amber-900">Contact</a></li>
              <li><a href="#" className="text-amber-700 hover:text-amber-900">Press Kit</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-amber-200 text-center">
          <p className="text-amber-700">
            © {currentYear} ChronoTask. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer
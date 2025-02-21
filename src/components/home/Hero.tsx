import React from 'react';
import FloatingElement from '../ui/FloatingElement';
import { Clock, CheckSquare, Target, ArrowRight, Users } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative mb-32">
      <div className="text-center relative z-20">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight text-amber-900">
          <span className="typewriter-text inline-block">
            Think, plan, and track
          </span>
          <br />
          <span className="text-amber-600">all in one place</span>
        </h1>
        <p className="text-lg sm:text-xl text-amber-800 mb-12 max-w-2xl mx-auto">
          Efficiently manage your tasks and boost productivity with our vintage-inspired task manager.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-16">
          <button className="vintage-button text-lg px-8 py-3 w-full sm:w-auto">
            Get started for free
          </button>
          <button className="vintage-secondary-button text-lg px-8 py-3 flex items-center justify-center gap-2 w-full sm:w-auto">
            Watch demo
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="hidden md:block">
        <FloatingElement
          className="absolute -left-4 lg:-left-20 top-0 z-10 transform -rotate-12 float-animation"
        >
          <div className="sticky-note p-6 w-64">
            <p className="font-permanent-marker text-lg text-amber-900">
              Take notes to keep track of crucial details, and accomplish more tasks with ease.
            </p>
            <div className="absolute -right-2 -top-2">
              <div className="w-4 h-4 bg-amber-800 rounded-full" />
            </div>
          </div>
        </FloatingElement>

        <FloatingElement
          className="absolute -right-4 lg:-right-16 top-20 z-10 float-animation-delayed"
        >
          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-xl w-48 border border-amber-200">
            <Clock className="w-8 h-8 text-amber-800 mb-2" />
            <p className="text-sm text-amber-900">Next meeting in 15 minutes</p>
          </div>
        </FloatingElement>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
        <div className="stats-card-new group">
          <div className="stats-icon-wrapper">
            <Users className="w-8 h-8 text-amber-800" />
          </div>
          <div className="stats-content">
            <div className="stats-value">10k+</div>
            <div className="stats-label">Active Users</div>
            <div className="stats-description">Growing community of productive users</div>
          </div>
          <div className="stats-decoration"></div>
        </div>

        <div className="stats-card-new group">
          <div className="stats-icon-wrapper">
            <Target className="w-8 h-8 text-amber-800" />
          </div>
          <div className="stats-content">
            <div className="stats-value">98%</div>
            <div className="stats-label">Tasks Completed</div>
            <div className="stats-description">High completion rate across teams</div>
          </div>
          <div className="stats-decoration"></div>
        </div>

        <div className="stats-card-new group">
          <div className="stats-icon-wrapper">
            <Clock className="w-8 h-8 text-amber-800" />
          </div>
          <div className="stats-content">
            <div className="stats-value">4.9/5</div>
            <div className="stats-label">User Rating</div>
            <div className="stats-description">Trusted by thousands of teams</div>
          </div>
          <div className="stats-decoration"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
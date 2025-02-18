import React from 'react';
import Header from './components/layout/Header';
import Hero from './components/home/Hero';
import TaskList from './components/dashboard/TaskList';
import Calendar from './components/dashboard/Calendar';
import Reminders from './components/dashboard/Reminders';
import Integrations from './components/dashboard/Integrations';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-pattern flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Hero />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <TaskList />
            <Calendar />
            <Reminders />
          </div>

          <Integrations />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App
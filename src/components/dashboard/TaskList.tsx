import React from 'react';
import { BarChart, Plus, Star, Users } from 'lucide-react';
import TaskCard from './TaskCard';

const TaskList: React.FC = () => {
  const tasks = [
    { 
      id: 1, 
      title: 'New ideas for campaign',
      description: 'Brainstorm creative concepts for Q2',
      progress: 60, 
      color: 'amber',
      priority: 'high',
      assignees: ['John D.', 'Sarah M.']
    },
    { 
      id: 2, 
      title: 'Design PPT #4',
      description: 'Create presentation for client meeting',
      progress: 100, 
      color: 'amber',
      priority: 'medium',
      assignees: ['Mike R.']
    }
  ];

  return (
    <div className="vintage-card">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <BarChart className="w-5 h-5 text-amber-800" />
          <h3 className="font-semibold text-amber-900">Today's tasks</h3>
        </div>
        <button className="vintage-button !px-3 !py-1">
          <Plus className="w-4 h-4" />
        </button>
      </div>
      <div className="space-y-4">
        {tasks.map(task => (
          <div key={task.id} className="task-card group">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 bg-${task.color}-800 rounded-full`}></div>
                <span className="text-sm font-medium text-amber-900">{task.title}</span>
              </div>
              <div className="flex items-center gap-2">
                {task.priority === 'high' && (
                  <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                )}
                <span className="text-xs text-amber-600">{task.progress}%</span>
              </div>
            </div>
            <p className="text-xs text-amber-700 mb-3">{task.description}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4 text-amber-600" />
                <span className="text-xs text-amber-600">
                  {task.assignees.join(', ')}
                </span>
              </div>
              <div className="w-24 progress-bar">
                <div 
                  className="progress-value" 
                  style={{ width: `${task.progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
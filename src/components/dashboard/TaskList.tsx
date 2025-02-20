import React from 'react';
import { BarChart, Plus, Star, Users, Clock, CheckCircle } from 'lucide-react';
import FloatingElement from '../ui/FloatingElement';

const TaskList: React.FC = () => {
  const tasks = [
    { 
      id: 1, 
      title: 'New ideas for campaign',
      description: 'Brainstorm creative concepts for Q2',
      progress: 60, 
      color: 'amber',
      priority: 'high',
      assignees: ['John D.', 'Sarah M.'],
      dueDate: 'Today, 4:00 PM',
      category: 'Marketing'
    },
    { 
      id: 2, 
      title: 'Design PPT #4',
      description: 'Create presentation for client meeting',
      progress: 100, 
      color: 'amber',
      priority: 'medium',
      assignees: ['Mike R.'],
      dueDate: 'Today, 6:00 PM',
      category: 'Design'
    }
  ];

  return (
    <FloatingElement className="transform rotate-1">
      <div className="vintage-paper-card">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="vintage-stamp">
              <BarChart className="w-6 h-6 text-amber-800" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-amber-900">Today's tasks</h3>
              <p className="text-sm text-amber-700">2 of 5 completed</p>
            </div>
          </div>
          <button className="vintage-add-button">
            <Plus className="w-4 h-4" />
            <span>New Task</span>
          </button>
        </div>

        <div className="space-y-6">
          {tasks.map(task => (
            <div key={task.id} className="vintage-task-card group">
              <div className="flex items-start gap-6">
                <div className="task-checkbox">
                  {task.progress === 100 ? (
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  ) : (
                    <div className="w-6 h-6 rounded-full border-2 border-amber-300 transition-colors group-hover:border-amber-400" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="text-lg font-semibold text-amber-900 group-hover:text-amber-800 transition-colors">
                          {task.title}
                        </h4>
                        {task.priority === 'high' && (
                          <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                        )}
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="task-category-badge">{task.category}</span>
                        <span className="text-sm text-amber-600">•</span>
                        <span className="text-sm text-amber-600">{task.progress}% complete</span>
                      </div>
                    </div>
                    <button className="vintage-mini-button group-hover:opacity-100">
                      Edit
                    </button>
                  </div>
                  
                  <p className="text-sm text-amber-700 mb-4">{task.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-amber-600" />
                        <div className="flex -space-x-2">
                          {task.assignees.map((assignee, i) => (
                            <div 
                              key={i}
                              className="w-6 h-6 rounded-full bg-amber-100 border-2 border-white flex items-center justify-center"
                            >
                              <span className="text-xs font-medium text-amber-800">
                                {assignee.split(' ')[0][0]}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-amber-600" />
                        <span className="text-sm text-amber-600">{task.dueDate}</span>
                      </div>
                    </div>
                    <div className="w-32 progress-bar">
                      <div 
                        className="progress-value" 
                        style={{ width: `${task.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </FloatingElement>
  );
};

export default TaskList;
import React from 'react';

interface TaskCardProps {
  title: string;
  progress: number;
  color: string;
}

const TaskCard: React.FC<TaskCardProps> = ({ title, progress, color }) => {
  return (
    <div className="task-card">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 bg-${color}-500 rounded-full`}></div>
          <span className="text-sm font-medium">{title}</span>
        </div>
        <span className="text-xs text-gray-400">{progress}%</span>
      </div>
      <div className="progress-bar">
        <div className="progress-value" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};

export default TaskCard;
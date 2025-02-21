import React from 'react';

interface NotificationBadgeProps {
  count: number;
}

const NotificationBadge: React.FC<NotificationBadgeProps> = ({ count }) => (
  <span className="notification-badge">
    {count > 9 ? '9+' : count}
  </span>
);

export default NotificationBadge;
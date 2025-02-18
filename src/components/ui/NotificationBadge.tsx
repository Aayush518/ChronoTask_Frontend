import React from 'react';

interface NotificationBadgeProps {
  count: number;
}

const NotificationBadge: React.FC<NotificationBadgeProps> = ({ count }) => (
  <span className="notification-badge">{count}</span>
);

export default NotificationBadge;
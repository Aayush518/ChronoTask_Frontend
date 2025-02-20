import React from 'react';

interface FloatingElementProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
}

const FloatingElement: React.FC<FloatingElementProps> = ({ 
  children, 
  className = '', 
  style = {},
  delay = 0
}) => {
  return (
    <div 
      className={`float-animation ${className}`}
      style={{
        perspective: '1000px',
        animationDelay: `${delay}s`,
        ...style
      }}
    >
      {children}
    </div>
  );
};

export default FloatingElement;
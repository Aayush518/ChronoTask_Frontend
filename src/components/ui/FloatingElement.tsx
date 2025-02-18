import React from 'react';

interface FloatingElementProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const FloatingElement: React.FC<FloatingElementProps> = ({ children, className = '', style = {} }) => {
  return (
    <div 
      className={`float-animation ${className}`}
      style={{
        perspective: '1000px',
        ...style
      }}
    >
      {children}
    </div>
  );
};

export default FloatingElement;
import React from 'react';
import { useInView } from '../hooks/useInView';

interface AnimateOnScrollProps {
  children: React.ReactNode;
  className?: string;
}

export function AnimateOnScroll({ children, className = '' }: AnimateOnScrollProps) {
  const { ref, isInView } = useInView();

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${
        isInView
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-10'
      } ${className}`}
    >
      {children}
    </div>
  );
}
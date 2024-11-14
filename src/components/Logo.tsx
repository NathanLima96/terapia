import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function Logo({ size = 'md', className = '' }: LogoProps) {
  const sizes = {
    sm: 'h-8 w-8',
    md: 'h-14 w-14',
    lg: 'h-16 w-16 md:h-24 md:w-24',
  };

  return (
    <img
      src="https://res.cloudinary.com/dph6lpkbj/image/upload/v1731624677/oeewoycz6hseace2koin.png"
      alt="Raio de Luz Logo"
      className={`${sizes[size]} ${className}`}
    />
  );
}
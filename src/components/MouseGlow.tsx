import React from 'react';
import { useMousePosition } from '../hooks/useMousePosition';

export function MouseGlow() {
  const { x, y } = useMousePosition();
  
  return (
    <div 
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-150"
      style={{
        opacity: x === 0 && y === 0 ? 0 : 0.8,
      }}
    >
      <div
        className="absolute bg-[#9F73C1] blur-[80px] rounded-full w-32 h-32"
        style={{
          left: x,
          top: y,
          transform: `translate(-50%, -50%)`,
        }}
      />
    </div>
  );
}
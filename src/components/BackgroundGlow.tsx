import React, { useEffect, useState } from 'react';

interface GlowOrb {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export function BackgroundGlow() {
  const [orbs, setOrbs] = useState<GlowOrb[]>([]);

  useEffect(() => {
    // Create initial orbs with larger size and more orbs
    const initialOrbs = Array.from({ length: 4 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * (300 - 200) + 200, // Increased size range
      duration: Math.random() * (20 - 15) + 15,
      delay: Math.random() * -20
    }));
    setOrbs(initialOrbs);

    // Update orb positions periodically
    const interval = setInterval(() => {
      setOrbs(currentOrbs => 
        currentOrbs.map(orb => ({
          ...orb,
          x: Math.random() * 100,
          y: Math.random() * 100,
          duration: Math.random() * (20 - 15) + 15
        }))
      );
    }, 20000); // Update every 20 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {orbs.map((orb) => (
        <div
          key={orb.id}
          className="absolute rounded-full opacity-30 bg-[#9F73C1]" // Increased opacity from 0.2 to 0.3
          style={{
            width: orb.size,
            height: orb.size,
            left: `${orb.x}%`,
            top: `${orb.y}%`,
            transform: 'translate(-50%, -50%)',
            filter: 'blur(100px)', // Increased blur for a softer glow
            animationName: 'float',
            animationDuration: `${orb.duration}s`,
            animationIterationCount: 'infinite',
            animationTimingFunction: 'linear',
            animationDelay: `${orb.delay}s`
          }}
        />
      ))}
    </div>
  );
}
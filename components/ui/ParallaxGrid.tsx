import React, { useEffect, useRef } from 'react';

const ParallaxGrid: React.FC = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  const dotGridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate movement relative to center
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      const moveX = (centerX - e.clientX) * 0.02; // Grid moves opposite to mouse
      const moveY = (centerY - e.clientY) * 0.02;

      const moveXDots = (centerX - e.clientX) * 0.05; // Dots move faster for depth
      const moveYDots = (centerY - e.clientY) * 0.05;

      if (gridRef.current) {
        gridRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
      }
      
      if (dotGridRef.current) {
        dotGridRef.current.style.transform = `translate(${moveXDots}px, ${moveYDots}px)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Layer 1: Base Grid */}
      <div 
        ref={gridRef}
        className="absolute -inset-[100px] bg-grid-pattern dark:bg-grid-pattern-dark opacity-[0.03] dark:opacity-[0.05] will-change-transform"
      ></div>
      
      {/* Layer 2: Sparse Dots (for extra parallax depth) */}
      <div 
        ref={dotGridRef}
        className="absolute -inset-[100px] opacity-[0.05] dark:opacity-[0.08]"
        style={{
             backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
             backgroundSize: '48px 48px'
        }}
      ></div>

      {/* Vignette Overlay for focus */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(250,250,250,0.5)_100%)] dark:bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,10,10,0.5)_100%)] pointer-events-none"></div>
    </div>
  );
};

export default ParallaxGrid;
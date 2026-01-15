import React, { useEffect, useRef, useState } from 'react';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [isPointer, setIsPointer] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only activate on devices with fine pointer (mouse)
    const matchMedia = window.matchMedia('(pointer: fine)');
    if (!matchMedia.matches) return;

    // Hide default cursor
    document.documentElement.style.cursor = 'none';

    const updateCursor = (e: MouseEvent) => {
      setIsVisible(true);
      const { clientX, clientY } = e;
      setCoords({ x: clientX, y: clientY });
      
      // Update Main cursor position directly for performance
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
      }

      // Update Trail positions
      trailRefs.current.forEach((el, i) => {
        if (el) {
          // We set the target position, CSS transition handles the "drag" effect
          el.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
        }
      });

      // Detect interactive elements
      const target = e.target as HTMLElement;
      // Check for buttons, links, or pointer cursor style
      const computedStyle = window.getComputedStyle(target);
      const isClickable = 
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.closest('a') || 
        target.closest('button') ||
        target.getAttribute('role') === 'button' ||
        computedStyle.cursor === 'pointer';
      
      setIsPointer(isClickable);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', updateCursor);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.documentElement.style.cursor = 'auto';
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] hidden md:block overflow-hidden">
      
      {/* Trail Elements */}
      {[1, 2, 3].map((_, i) => (
        <div
          key={i}
          ref={el => trailRefs.current[i] = el}
          className={`absolute top-0 left-0 w-4 h-4 border border-wireframe-accent/40 bg-transparent -ml-2 -mt-2 transition-transform ease-out will-change-transform`}
          style={{ 
            transitionDuration: `${(i + 1) * 75}ms`,
            opacity: isVisible ? 0.4 - (i * 0.1) : 0 
          }}
        >
          {/* Decorative corners for trail */}
          <div className="absolute top-0 left-0 w-1 h-1 border-t border-l border-wireframe-accent"></div>
          <div className="absolute bottom-0 right-0 w-1 h-1 border-b border-r border-wireframe-accent"></div>
        </div>
      ))}

      {/* Main Cursor Container */}
      <div 
        ref={cursorRef}
        className={`absolute top-0 left-0 will-change-transform transition-opacity duration-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        {/* State 1: Default Crosshair */}
        <div className={`transition-all duration-300 ${isPointer ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}>
          <div className="absolute -left-6 -top-[1px] w-12 h-[2px] bg-wireframe-border dark:bg-wireframe-borderDark"></div>
          <div className="absolute -left-[1px] -top-6 w-[2px] h-12 bg-wireframe-border dark:bg-wireframe-borderDark"></div>
          {/* Center Dot */}
          <div className="absolute -left-1 -top-1 w-2 h-2 bg-wireframe-accent"></div>
        </div>

        {/* State 2: Hover/Pointer (Selector Box) */}
        <div className={`absolute -left-5 -top-5 w-10 h-10 border-2 border-wireframe-accent bg-wireframe-accent/10 transition-all duration-300 ${isPointer ? 'scale-100 opacity-100 rotate-0' : 'scale-50 opacity-0 -rotate-45'}`}>
          <div className="absolute -top-1 -left-1 w-2 h-2 bg-wireframe-accent"></div>
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-wireframe-accent"></div>
          <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-wireframe-accent"></div>
          <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-wireframe-accent"></div>
          
          {/* "SELECT" Label inside box */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[8px] font-bold bg-wireframe-accent text-white px-1">
            SELECT
          </div>
        </div>

        {/* Floating Coordinate Label */}
        <div className={`absolute top-4 left-4 transition-all duration-300 ${isPointer ? 'translate-x-2 opacity-50' : ''}`}>
          <div className="bg-wireframe-bg dark:bg-wireframe-bgDark border border-wireframe-border dark:border-wireframe-borderDark px-2 py-1 text-[10px] font-mono whitespace-nowrap shadow-sm flex items-center gap-2">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            <span>X:{Math.round(coords.x).toString().padStart(4, '0')}</span>
            <span className="text-gray-400">|</span>
            <span>Y:{Math.round(coords.y).toString().padStart(4, '0')}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomCursor;
import React, { useEffect, useState } from 'react';

const ScrollProgress: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("HERO");

  useEffect(() => {
    const handleScroll = () => {
      // Calculate Scroll %
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(Number(scroll));

      // Determine Active Section
      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'services', 'process', 'articles', 'recognition', 'tools', 'contact'];
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if section is near the top-middle of viewport
          if (rect.top <= window.innerHeight / 3 && rect.bottom >= window.innerHeight / 3) {
            setActiveSection(sectionId.toUpperCase());
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-[9999] pointer-events-none mix-blend-difference text-white dark:text-white">
        
        {/* Progress Bar Container */}
        <div className="h-1 w-full bg-gray-800/20 relative">
            {/* The Bar */}
            <div 
                className="h-full bg-wireframe-accent transition-all duration-100 ease-out"
                style={{ width: `${scrollProgress * 100}%` }}
            ></div>
            
            {/* Measurement Ticks (Decorative) */}
            <div className="absolute top-1 left-0 w-full flex justify-between px-2 opacity-50">
                {[...Array(20)].map((_, i) => (
                    <div key={i} className="w-px h-1 bg-gray-500"></div>
                ))}
            </div>
        </div>

        {/* Floating Indicator Box */}
        <div className="absolute top-4 right-4 md:right-8 flex flex-col items-end gap-1">
            {/* Percentage Badge */}
            <div className="bg-wireframe-border dark:bg-wireframe-borderDark text-wireframe-bg dark:text-wireframe-bgDark px-2 py-1 text-[10px] font-bold font-mono border border-wireframe-border dark:border-wireframe-borderDark">
                SCROLL: {Math.round(scrollProgress * 100)}%
            </div>
            
            {/* Active Section Badge */}
            <div className="flex items-center gap-2">
                <span className="h-px w-4 bg-wireframe-border dark:bg-wireframe-borderDark"></span>
                <span className="text-[10px] font-bold tracking-widest bg-white dark:bg-black text-black dark:text-white px-1 border border-dashed border-gray-500">
                    SECT: {activeSection}
                </span>
            </div>
        </div>
    </div>
  );
};

export default ScrollProgress;
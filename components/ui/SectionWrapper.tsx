import React from 'react';

interface SectionWrapperProps {
  id?: string;
  title?: string;
  subtitle?: string; // e.g., "01 — ABOUT"
  children: React.ReactNode;
  className?: string;
  widthLabel?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ 
  id, 
  title, 
  subtitle, 
  children, 
  className = "",
  widthLabel = "100%"
}) => {
  return (
    <section id={id} className={`relative py-16 md:py-24 px-4 ${className}`}>
      <div className="max-w-7xl mx-auto relative group">
        
        {/* Top Annotation Line with Width */}
        <div className="absolute -top-6 left-0 right-0 flex items-center justify-center text-xs text-gray-400 dark:text-gray-500 font-mono opacity-50 select-none">
          <span className="mr-2">←</span>
          <span className="border-b border-dashed border-gray-400 dark:border-gray-500 w-full mx-2"></span>
          <span className="whitespace-nowrap">{widthLabel}</span>
          <span className="border-b border-dashed border-gray-400 dark:border-gray-500 w-full mx-2"></span>
          <span className="ml-2">→</span>
        </div>

        {/* Section Header */}
        {(title || subtitle) && (
          <div className="mb-12 relative inline-block">
             <div className="absolute -top-3 -left-3 w-4 h-4 border-t-2 border-l-2 border-wireframe-accent"></div>
             <div className="border-2 border-wireframe-border dark:border-wireframe-borderDark p-4 bg-wireframe-bg dark:bg-wireframe-bgDark relative z-10 hover:shadow-[4px_4px_0px_0px_rgba(37,99,235,1)] transition-shadow duration-200">
               {subtitle && <span className="block text-sm text-wireframe-accent font-bold tracking-wider mb-1">{subtitle}</span>}
               {title && <h2 className="text-3xl font-bold uppercase">{title}</h2>}
             </div>
             <div className="absolute -bottom-3 -right-3 w-4 h-4 border-b-2 border-r-2 border-wireframe-accent"></div>
          </div>
        )}

        {/* Content Box */}
        <div className="relative">
          {/* Decorative Corner Brackets for the Main Content Area */}
          <div className="absolute -top-2 -left-2 w-8 h-8 border-t border-l border-wireframe-border dark:border-wireframe-borderDark pointer-events-none"></div>
          <div className="absolute -top-2 -right-2 w-8 h-8 border-t border-r border-wireframe-border dark:border-wireframe-borderDark pointer-events-none"></div>
          <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b border-l border-wireframe-border dark:border-wireframe-borderDark pointer-events-none"></div>
          <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b border-r border-wireframe-border dark:border-wireframe-borderDark pointer-events-none"></div>

          {children}
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper;
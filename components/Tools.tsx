import React from 'react';
import SectionWrapper from './ui/SectionWrapper';

const tools = [
  'Figma', 'Adobe XD', 'VS Code', 'React', 'Node.js', 'Git',
  'TypeScript', 'Tailwind', 'Next.js', 'Blender', 'Notion', 'Docker'
];

const Tools: React.FC = () => {
  return (
    <SectionWrapper id="tools" subtitle="11 — TOOLKIT">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {tools.map((tool, index) => (
          <div key={index} className="group relative">
            <div className="border border-wireframe-border dark:border-wireframe-borderDark h-24 flex flex-col items-center justify-center bg-white dark:bg-black hover:border-wireframe-accent hover:shadow-[4px_4px_0px_0px_#2563EB] transition-all cursor-default">
              
              {/* Corner Markers */}
              <div className="absolute top-1 left-1 w-1 h-1 bg-wireframe-border dark:bg-wireframe-borderDark opacity-20"></div>
              <div className="absolute top-1 right-1 w-1 h-1 bg-wireframe-border dark:bg-wireframe-borderDark opacity-20"></div>
              <div className="absolute bottom-1 left-1 w-1 h-1 bg-wireframe-border dark:bg-wireframe-borderDark opacity-20"></div>
              <div className="absolute bottom-1 right-1 w-1 h-1 bg-wireframe-border dark:bg-wireframe-borderDark opacity-20"></div>

              <span className="font-bold text-sm z-10">{tool}</span>
              <span className="text-[9px] text-gray-400 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                V.LATEST
              </span>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Tools;
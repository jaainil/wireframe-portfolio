import React from 'react';
import SectionWrapper from './ui/SectionWrapper';
import { PenTool, Code, Layout, Smartphone, Database, Terminal, Search, Layers } from 'lucide-react';

const skills = [
  { name: 'UI/UX Design', icon: Layout, level: 90 },
  { name: 'Frontend Dev', icon: Code, level: 85 },
  { name: 'Prototyping', icon: PenTool, level: 80 },
  { name: 'Mobile Design', icon: Smartphone, level: 75 },
  { name: 'React System', icon: Database, level: 95 },
  { name: 'Terminal/Git', icon: Terminal, level: 85 },
  { name: 'User Research', icon: Search, level: 70 },
  { name: 'Design Systems', icon: Layers, level: 90 },
];

const Skills: React.FC = () => {
  return (
    <SectionWrapper id="skills" subtitle="02 — SKILLS" widthLabel="GRID_SYSTEM">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <div 
            key={index}
            className="border border-wireframe-border dark:border-wireframe-borderDark p-6 hover:border-wireframe-accent dark:hover:border-wireframe-accent group transition-colors bg-white dark:bg-black relative overflow-hidden"
          >
            {/* Background Grid Hover Effect */}
            <div className="absolute inset-0 bg-grid-pattern opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none"></div>

            <div className="flex items-start justify-between mb-4">
              <div className="w-10 h-10 border border-dashed border-wireframe-border dark:border-wireframe-borderDark flex items-center justify-center group-hover:border-solid group-hover:bg-wireframe-accent group-hover:text-white transition-all">
                <skill.icon size={20} strokeWidth={1.5} />
              </div>
              <span className="text-[10px] font-bold opacity-50">0{index + 1}</span>
            </div>

            <h3 className="text-sm font-bold uppercase mb-3">{skill.name}</h3>

            <div className="w-full h-2 border border-wireframe-border dark:border-wireframe-borderDark p-[1px]">
              <div 
                className="h-full bg-wireframe-border dark:bg-wireframe-borderDark group-hover:bg-wireframe-accent transition-all duration-500 ease-out"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
            <div className="text-right mt-1 text-[10px] opacity-70 font-mono">{skill.level}%</div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;
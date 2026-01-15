import React from 'react';
import SectionWrapper from './ui/SectionWrapper';
import { Search, FileText, PenTool, Code, Rocket } from 'lucide-react';

const steps = [
  { id: '01', title: 'Discovery', icon: Search, desc: 'Requirements & Goals' },
  { id: '02', title: 'Research', icon: FileText, desc: 'Market & User Analysis' },
  { id: '03', title: 'Design', icon: PenTool, desc: 'Wireframes & Visuals' },
  { id: '04', title: 'Develop', icon: Code, desc: 'Clean Code Implementation' },
  { id: '05', title: 'Launch', icon: Rocket, desc: 'Deployment & Handover' },
];

const Process: React.FC = () => {
  return (
    <SectionWrapper id="process" subtitle="08 — MY PROCESS" widthLabel="WORKFLOW_PIPELINE">
      <div className="relative">
        {/* Connecting Line (Desktop) */}
        <div className="hidden lg:block absolute top-12 left-0 right-0 h-px border-t-2 border-dashed border-wireframe-border dark:border-wireframe-borderDark z-0"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative z-10 group">
              {/* Box */}
              <div className="bg-wireframe-bg dark:bg-wireframe-bgDark border-2 border-wireframe-border dark:border-wireframe-borderDark p-4 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
                <div className="w-16 h-16 bg-white dark:bg-black border border-wireframe-border dark:border-wireframe-borderDark flex items-center justify-center mb-4 group-hover:border-wireframe-accent group-hover:text-wireframe-accent transition-colors shadow-sm">
                  <step.icon size={24} strokeWidth={1.5} />
                </div>
                
                <span className="text-[10px] font-bold text-wireframe-accent mb-1 border border-wireframe-accent px-1 rounded-sm">STEP {step.id}</span>
                <h3 className="font-bold uppercase text-sm mb-2">{step.title}</h3>
                <p className="text-[10px] text-gray-500 uppercase tracking-wide">{step.desc}</p>
              </div>

              {/* Mobile Connector */}
              {index < steps.length - 1 && (
                <div className="lg:hidden absolute left-1/2 bottom-[-32px] w-px h-8 border-l-2 border-dashed border-wireframe-border dark:border-wireframe-borderDark -translate-x-1/2"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Process;
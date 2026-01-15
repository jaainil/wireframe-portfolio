import React from 'react';
import SectionWrapper from './ui/SectionWrapper';
import { Experience as ExperienceType } from '../types';

const experiences: ExperienceType[] = [
  {
    year: '2023 - PRS',
    company: 'TechFlow Systems',
    role: 'Senior Product Designer',
    description: 'Leading the design system migration and establishing core UI components for enterprise SaaS products.'
  },
  {
    year: '2021 - 2023',
    company: 'Creative Box Agency',
    role: 'Frontend Developer',
    description: 'Built high-performance marketing sites and interactive web applications for Fortune 500 clients.'
  },
  {
    year: '2019 - 2021',
    company: 'Startup Inc.',
    role: 'Junior UI Designer',
    description: 'Collaborated with engineering teams to ship the MVP of a fintech mobile application.'
  }
];

const Experience: React.FC = () => {
  return (
    <SectionWrapper id="experience" subtitle="04 — EXPERIENCE">
      <div className="relative pl-8 md:pl-0">
        {/* Central timeline line for desktop */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px border-l-2 border-dashed border-wireframe-border dark:border-wireframe-borderDark transform md:-translate-x-1/2"></div>

        <div className="flex flex-col gap-12">
          {experiences.map((exp, index) => (
            <div key={index} className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Timeline Node */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-wireframe-bg dark:bg-wireframe-bgDark border-2 border-wireframe-accent transform -translate-x-1/2 md:-translate-x-1/2 z-10 mt-1.5 md:mt-0"></div>
              
              {/* Spacer for the other side */}
              <div className="hidden md:block md:w-1/2"></div>
              
              {/* Content Card */}
              <div className="w-full md:w-1/2 pl-8 md:pl-12 pr-0 md:pr-12">
                <div className={`
                  border border-wireframe-border dark:border-wireframe-borderDark p-6 bg-white dark:bg-black relative hover:border-wireframe-accent dark:hover:border-wireframe-accent transition-colors group
                  ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}
                `}>
                  {/* Connector Line Horizontal */}
                  <div className={`absolute top-1/2 h-px w-8 border-t border-dashed border-wireframe-border dark:border-wireframe-borderDark -translate-y-1/2
                    ${index % 2 !== 0 ? 'md:right-0 md:-mr-8 right-auto -left-8' : 'md:left-0 md:-ml-8 -left-8'}
                    hidden md:block
                  `}></div>

                  {/* Mobile connector */}
                  <div className="absolute top-2 -left-8 w-8 h-px border-t border-dashed border-wireframe-border dark:border-wireframe-borderDark md:hidden"></div>

                  <div className={`inline-block px-2 py-1 mb-2 text-xs font-bold border border-wireframe-border dark:border-wireframe-borderDark bg-wireframe-bg dark:bg-wireframe-bgDark
                     ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}
                  `}>
                    {exp.year}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-1">{exp.company}</h3>
                  <h4 className="text-wireframe-accent font-medium text-sm mb-3 uppercase tracking-wider">{exp.role}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-mono leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Experience;
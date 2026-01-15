import React, { useState } from 'react';
import SectionWrapper from './ui/SectionWrapper';
import { Project } from '../types';
import WireframeButton from './ui/WireframeButton';
import { ExternalLink, Github } from 'lucide-react';

const projects: Project[] = [
  { id: 1, title: 'E-Commerce Dashboard', category: 'Web', image: 'project_01' },
  { id: 2, title: 'Finance Tracker App', category: 'Mobile', image: 'project_02' },
  { id: 3, title: 'Tech Brand Identity', category: 'Branding', image: 'project_03' },
  { id: 4, title: 'Architecture Portfolio', category: 'Web', image: 'project_04' },
  { id: 5, title: 'Health Monitor SaaS', category: 'Web', image: 'project_05' },
  { id: 6, title: 'Travel Guide Interface', category: 'Mobile', image: 'project_06' },
];

const categories = ['All', 'Web', 'Mobile', 'Branding'];

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <SectionWrapper id="projects" subtitle="03 — PROJECTS" widthLabel="BENTO_GRID">
      {/* Filter Controls */}
      <div className="flex flex-wrap gap-4 mb-8 border-b border-dashed border-wireframe-border dark:border-wireframe-borderDark pb-6">
        <span className="text-xs font-bold self-center mr-4 hidden sm:block">[FILTER_BY]:</span>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 text-sm uppercase tracking-wider border transition-all ${
              filter === cat 
                ? 'bg-wireframe-border text-white border-wireframe-border dark:bg-wireframe-borderDark dark:text-black dark:border-wireframe-borderDark' 
                : 'bg-transparent text-gray-500 border-transparent hover:border-gray-300 dark:hover:border-gray-700'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
        {filteredProjects.map((project) => (
          <div 
            key={project.id} 
            className="group border-2 border-dashed border-wireframe-border dark:border-wireframe-borderDark p-4 hover:border-solid hover:bg-white dark:hover:bg-black hover:shadow-[8px_8px_0px_0px_#2563EB] hover:-translate-y-1 transition-all duration-300 flex flex-col"
          >
            {/* Image Placeholder */}
            <div className="aspect-video w-full bg-gray-100 dark:bg-gray-900 border border-wireframe-border dark:border-wireframe-borderDark mb-4 relative cross-bg overflow-hidden group-hover:border-wireframe-accent transition-colors duration-300">
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10 bg-wireframe-bg/90 dark:bg-wireframe-bgDark/90 backdrop-blur-[2px]">
                <div className="flex gap-2">
                  <button className="p-2 border border-wireframe-border dark:border-wireframe-borderDark hover:bg-wireframe-accent hover:text-white hover:border-wireframe-accent transition-colors">
                    <ExternalLink size={16} />
                  </button>
                  <button className="p-2 border border-wireframe-border dark:border-wireframe-borderDark hover:bg-wireframe-accent hover:text-white hover:border-wireframe-accent transition-colors">
                    <Github size={16} />
                  </button>
                </div>
              </div>
              <span className="absolute bottom-2 left-2 text-[10px] bg-wireframe-bg dark:bg-wireframe-bgDark px-1 border border-wireframe-border dark:border-wireframe-borderDark group-hover:text-wireframe-accent group-hover:border-wireframe-accent transition-colors">
                IMG_ASSET_{project.id}
              </span>
            </div>

            <div className="mt-auto">
              <div className="flex justify-between items-end mb-2">
                <h3 className="text-lg font-bold leading-none group-hover:text-wireframe-accent transition-colors">{project.title}</h3>
                <span className="text-[10px] px-2 py-0.5 border border-wireframe-border dark:border-wireframe-borderDark uppercase bg-wireframe-bg dark:bg-wireframe-bgDark">
                  {project.category}
                </span>
              </div>
              <div className="w-full h-px bg-gray-300 dark:bg-gray-800 my-2 group-hover:bg-wireframe-accent transition-colors"></div>
              <p className="text-xs text-gray-500 font-mono truncate group-hover:text-gray-900 dark:group-hover:text-gray-300">
                React • TypeScript • Tailwind
              </p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Projects;
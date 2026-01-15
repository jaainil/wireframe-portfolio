import React from 'react';
import SectionWrapper from './ui/SectionWrapper';
import { ArrowUpRight, Clock, Calendar } from 'lucide-react';

const articles = [
  {
    date: 'OCT 12, 2023',
    title: 'The Return of Brutalism in Web Design',
    excerpt: 'Exploring why raw, structural aesthetics are making a comeback in modern digital interfaces.',
    readTime: '5 MIN READ',
    image: 'blog_01'
  },
  {
    date: 'SEP 28, 2023',
    title: 'CSS Grid: A Structural Approach',
    excerpt: 'How to think like an architect when building layouts with CSS Grid and Subgrid.',
    readTime: '8 MIN READ',
    image: 'blog_02'
  },
  {
    date: 'AUG 15, 2023',
    title: 'Wireframing as a Design System',
    excerpt: 'Why high-fidelity wireframes are often better than polished mockups for complex applications.',
    readTime: '6 MIN READ',
    image: 'blog_03'
  }
];

const Articles: React.FC = () => {
  return (
    <SectionWrapper id="articles" subtitle="09 — ARTICLES">
      <div className="grid md:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <article key={index} className="group border border-wireframe-border dark:border-wireframe-borderDark bg-white dark:bg-black hover:border-wireframe-accent transition-colors flex flex-col">
            {/* Thumbnail */}
            <div className="h-48 bg-gray-100 dark:bg-gray-900 border-b border-wireframe-border dark:border-wireframe-borderDark relative overflow-hidden cross-bg">
               <div className="absolute top-2 right-2 bg-wireframe-bg dark:bg-wireframe-bgDark border border-wireframe-border dark:border-wireframe-borderDark px-2 py-1 text-[10px] flex items-center gap-1">
                 <Clock size={10} /> {article.readTime}
               </div>
               <div className="absolute inset-0 flex items-center justify-center text-xs opacity-50 font-mono">
                 [THUMBNAIL_{index+1}]
               </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <div className="flex items-center gap-2 text-[10px] text-gray-500 mb-3 font-mono">
                <Calendar size={12} />
                {article.date}
              </div>
              
              <h3 className="text-lg font-bold mb-3 leading-tight group-hover:text-wireframe-accent transition-colors">
                {article.title}
              </h3>
              
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-6 leading-relaxed flex-grow">
                {article.excerpt}
              </p>

              <a href="#" className="inline-flex items-center text-xs font-bold uppercase hover:text-wireframe-accent decoration-dashed underline underline-offset-4">
                Read Article <ArrowUpRight size={14} className="ml-1" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Articles;
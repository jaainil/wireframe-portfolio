import React from 'react';
import SectionWrapper from './ui/SectionWrapper';

const StatBox = ({ value, label }: { value: string; label: string }) => (
  <div className="border border-wireframe-border dark:border-wireframe-borderDark p-6 flex flex-col items-center justify-center hover:bg-wireframe-bg dark:hover:bg-wireframe-bgDark hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] transition-all bg-white dark:bg-black group">
    <span className="text-4xl font-bold text-wireframe-accent mb-2 group-hover:scale-110 transition-transform">{value}</span>
    <span className="text-xs uppercase tracking-widest text-center">{label}</span>
  </div>
);

const About: React.FC = () => {
  return (
    <SectionWrapper id="about" subtitle="01 — ABOUT">
      <div className="grid md:grid-cols-3 gap-8">
        
        {/* Bio Content */}
        <div className="md:col-span-2 border border-wireframe-border dark:border-wireframe-borderDark p-8 relative bg-white dark:bg-black">
          <span className="absolute -top-3 left-4 bg-wireframe-bg dark:bg-wireframe-bgDark px-2 text-xs font-bold border border-wireframe-border dark:border-wireframe-borderDark">
            BIO_CONTENT.txt
          </span>
          <div className="prose dark:prose-invert max-w-none font-mono text-sm md:text-base">
            <p className="mb-4">
              I am a multidisciplinary designer and developer based in San Francisco. My work bridges the gap between functional utility and aesthetic precision. I believe that good design is transparent—it reveals the structure of information rather than decorating it.
            </p>
            <p className="mb-4">
              With a background in architectural drafting, I bring a unique perspective to the web. I treat every pixel as a building block and every component as part of a larger structural system.
            </p>
            <p>
              When I'm not coding, I'm likely sketching layouts on graph paper or exploring brutalist architecture in the city.
            </p>
          </div>
          
          <div className="mt-6 pt-6 border-t border-dashed border-wireframe-border dark:border-wireframe-borderDark flex flex-wrap gap-2">
            {['Problem Solver', 'System Thinker', 'Minimalist'].map((tag) => (
              <span key={tag} className="px-3 py-1 text-xs border border-wireframe-border dark:border-wireframe-borderDark rounded-none hover:bg-wireframe-accent hover:text-white hover:border-wireframe-accent cursor-default transition-colors">
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Stats Column */}
        <div className="flex flex-col gap-4">
          <StatBox value="05+" label="Years Experience" />
          <StatBox value="42" label="Projects Shipped" />
          <StatBox value="100%" label="Client Satisfaction" />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
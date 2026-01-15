import React from 'react';
import WireframeButton from './ui/WireframeButton';
import SectionWrapper from './ui/SectionWrapper';

const Hero: React.FC = () => {
  return (
    <SectionWrapper id="hero" className="pt-32" widthLabel="VIEWPORT_WIDTH">
      <div className="grid md:grid-cols-12 gap-6 min-h-[60vh]">
        
        {/* Left: Text Content */}
        <div className="md:col-span-7 flex flex-col justify-center border-2 border-dashed border-wireframe-border dark:border-wireframe-borderDark p-8 md:p-12 relative">
          <span className="absolute top-2 left-2 text-[10px] text-gray-500">[TEXT_CONTAINER]</span>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            HELLO, I'M <br />
            <span className="text-wireframe-accent bg-wireframe-bg dark:bg-wireframe-bgDark px-2 inline-block border border-wireframe-accent mt-2">
              ALEX_DEV
            </span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-6 font-medium">
            &lt;UI/UX Designer & Developer /&gt;
          </h2>
          
          <p className="max-w-xl mb-8 text-sm md:text-base leading-relaxed border-l-2 border-wireframe-accent pl-4">
            Building digital experiences with a focus on structural integrity, user-centric architecture, and clean code. Turning complex problems into elegant wireframes and functional realities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-auto">
            <WireframeButton onClick={() => document.getElementById('projects')?.scrollIntoView({behavior: 'smooth'})}>
              [VIEW WORK]
            </WireframeButton>
            <WireframeButton variant="outline" onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}>
              [CONTACT ME]
            </WireframeButton>
          </div>
        </div>

        {/* Right: Profile Image Placeholder */}
        <div className="md:col-span-5 relative group">
          <div className="w-full h-full min-h-[300px] border-2 border-wireframe-border dark:border-wireframe-borderDark bg-gray-100 dark:bg-gray-900 cross-bg flex items-center justify-center relative hover:border-wireframe-accent transition-colors duration-300">
            
            {/* Annotation markers on the image */}
            <div className="absolute top-1/2 left-0 right-0 h-px border-t border-dotted border-wireframe-border dark:border-wireframe-borderDark opacity-50"></div>
            <div className="absolute left-1/2 top-0 bottom-0 w-px border-l border-dotted border-wireframe-border dark:border-wireframe-borderDark opacity-50"></div>
            
            <div className="bg-wireframe-bg dark:bg-wireframe-bgDark px-3 py-1 border border-wireframe-border dark:border-wireframe-borderDark relative z-10 text-xs">
              PROFILE_IMG: 600x800
            </div>

            {/* Corner measurements */}
            <span className="absolute bottom-2 right-2 text-[10px] font-mono">H: 100%</span>
            <span className="absolute bottom-2 left-2 text-[10px] font-mono">W: 100%</span>
          </div>

          {/* Floating decorative elements */}
          <div className="absolute -right-3 -bottom-3 w-24 h-24 border-r-2 border-b-2 border-wireframe-accent opacity-50"></div>
        </div>

      </div>
    </SectionWrapper>
  );
};

export default Hero;
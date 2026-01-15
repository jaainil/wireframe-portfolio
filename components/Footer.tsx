import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t-2 border-wireframe-border dark:border-wireframe-borderDark bg-wireframe-bg dark:bg-wireframe-bgDark text-sm relative mt-24">
      <div className="max-w-7xl mx-auto px-4 py-12">
        
        {/* Top Annotation */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-wireframe-bg dark:bg-wireframe-bgDark px-4 border border-wireframe-border dark:border-wireframe-borderDark text-xs font-mono">
          [FOOTER_SECTION]
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          
          {/* Col 1 */}
          <div className="flex flex-col space-y-4">
            <div className="w-12 h-12 border-2 border-wireframe-border dark:border-wireframe-borderDark flex items-center justify-center bg-white dark:bg-black">
               <span className="font-bold">[L]</span>
            </div>
            <p className="text-xs text-gray-500 max-w-xs leading-relaxed">
              Designed with structural integrity in mind. Built with React & Tailwind CSS. © {new Date().getFullYear()}
            </p>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="font-bold border-b border-dashed border-wireframe-border dark:border-wireframe-borderDark pb-2 mb-4 inline-block w-full">
              QUICK_LINKS
            </h4>
            <ul className="space-y-2 text-xs">
              {['Home', 'Projects', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-wireframe-accent hover:underline decoration-dashed underline-offset-4 block py-1">
                    &gt; {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="font-bold border-b border-dashed border-wireframe-border dark:border-wireframe-borderDark pb-2 mb-4 inline-block w-full">
              STATUS
            </h4>
             <div className="flex items-center gap-2 mb-2">
               <span className="w-2 h-2 bg-green-500 rounded-none animate-pulse"></span>
               <span className="text-xs">SYSTEM: ONLINE</span>
             </div>
             <div className="flex items-center gap-2">
               <span className="w-2 h-2 bg-wireframe-accent rounded-none"></span>
               <span className="text-xs">AVAILABILITY: OPEN</span>
             </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-dotted border-wireframe-border dark:border-wireframe-borderDark flex justify-between items-center text-[10px] opacity-60 font-mono">
          <span>ID: PORTFOLIO_V1.0.2</span>
          <span>LAT: 37.7749° N / LON: 122.4194° W</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
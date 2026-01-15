import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={`fixed bottom-8 right-8 z-40 transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
      <button
        onClick={scrollToTop}
        className="w-12 h-12 bg-wireframe-bg dark:bg-wireframe-bgDark border-2 border-wireframe-border dark:border-wireframe-borderDark flex items-center justify-center hover:bg-wireframe-accent hover:text-white hover:border-wireframe-accent hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_currentColor] transition-all group"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} strokeWidth={2} className="group-hover:animate-bounce" />
        
        {/* Decorative corners */}
        <div className="absolute top-0 left-0 w-1 h-1 bg-current opacity-50"></div>
        <div className="absolute top-0 right-0 w-1 h-1 bg-current opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-1 h-1 bg-current opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-1 h-1 bg-current opacity-50"></div>
      </button>
      <div className="text-[8px] text-center mt-1 font-bold opacity-50 bg-wireframe-bg dark:bg-wireframe-bgDark border border-wireframe-border dark:border-wireframe-borderDark py-0.5">
          TOP
      </div>
    </div>
  );
};

export default BackToTop;
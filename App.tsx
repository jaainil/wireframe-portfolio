import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/ui/CustomCursor';
import ParallaxGrid from './components/ui/ParallaxGrid';
import Services from './components/Services';
import Process from './components/Process';
import Articles from './components/Articles';
import Recognition from './components/Recognition';
import Tools from './components/Tools';
import Loader from './components/ui/Loader';
import ScrollProgress from './components/ui/ScrollProgress';
import BackToTop from './components/ui/BackToTop';

function App() {
  const [isDark, setIsDark] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Initial Theme Check
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDark(true);
    }
  }, []);

  // Theme Toggle Effect
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className="min-h-screen bg-wireframe-bg dark:bg-wireframe-bgDark text-wireframe-border dark:text-wireframe-borderDark overflow-x-hidden font-mono relative cursor-none">
      
      {isLoading && <Loader onComplete={() => setIsLoading(false)} />}

      <CustomCursor />
      <ParallaxGrid />
      <ScrollProgress />
      <BackToTop />
      
      {/* Left/Right Margin Guides (Decorative) */}
      <div className="fixed top-0 bottom-0 left-4 w-px border-l border-dashed border-gray-300 dark:border-gray-800 z-40 hidden xl:block opacity-50"></div>
      <div className="fixed top-0 bottom-0 right-4 w-px border-r border-dashed border-gray-300 dark:border-gray-800 z-40 hidden xl:block opacity-50"></div>

      <div className={`relative z-10 transition-opacity duration-700 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Navbar isDark={isDark} toggleTheme={toggleTheme} />
        
        <main className="flex flex-col gap-0">
          <Hero />
          
          {/* Section Connector Lines */}
          <div className="w-full border-t border-dotted border-wireframe-border dark:border-wireframe-borderDark opacity-20 my-0"></div>
          
          <About />
          <Skills />
          <Projects />
          
          <div className="max-w-7xl mx-auto w-full px-4">
             <div className="w-full border-t-2 border-wireframe-border dark:border-wireframe-borderDark my-8"></div>
          </div>
          
          <Experience />
          <Testimonials />
          
          {/* New Sections added here to maintain flow before Contact */}
          <Services />
          <Process />
          <Articles />
          <Recognition />
          <Tools />

          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
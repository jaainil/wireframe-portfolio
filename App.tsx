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

function App() {
  const [isDark, setIsDark] = useState(false);

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
    <div className="min-h-screen bg-wireframe-bg dark:bg-wireframe-bgDark text-wireframe-border dark:text-wireframe-borderDark overflow-x-hidden font-mono relative">
      
      {/* Background Grid Pattern - Fixed */}
      <div className="fixed inset-0 bg-grid-pattern dark:bg-grid-pattern-dark pointer-events-none z-0 opacity-[0.03] dark:opacity-[0.05]"></div>
      
      {/* Left/Right Margin Guides (Decorative) */}
      <div className="fixed top-0 bottom-0 left-4 w-px border-l border-dashed border-gray-300 dark:border-gray-800 z-40 hidden xl:block opacity-50"></div>
      <div className="fixed top-0 bottom-0 right-4 w-px border-r border-dashed border-gray-300 dark:border-gray-800 z-40 hidden xl:block opacity-50"></div>

      <div className="relative z-10">
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
          <Contact />
        </main>

        <Footer />
      </div>

      {/* Scroll to top button area could go here */}
    </div>
  );
}

export default App;
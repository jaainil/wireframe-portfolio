import React, { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'HOME', href: '#hero' },
    { name: 'ABOUT', href: '#about' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'EXPERIENCE', href: '#experience' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4 bg-wireframe-bg/90 dark:bg-wireframe-bgDark/90 backdrop-blur-sm border-b border-wireframe-border dark:border-wireframe-borderDark">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo Placeholder */}
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 border-2 border-wireframe-border dark:border-wireframe-borderDark flex items-center justify-center bg-white dark:bg-black relative">
            <div className="absolute inset-0 bg-transparent cross-bg text-wireframe-border dark:text-wireframe-borderDark"></div>
            <span className="relative z-10 font-bold text-xs bg-wireframe-bg dark:bg-wireframe-bgDark px-1">[L]</span>
          </div>
          <span className="hidden sm:block font-bold tracking-tight">PORTFOLIO_V1.0</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-px border border-wireframe-border dark:border-wireframe-borderDark bg-wireframe-border dark:bg-wireframe-borderDark">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-6 py-2 bg-wireframe-bg dark:bg-wireframe-bgDark text-sm font-medium hover:bg-wireframe-accent hover:text-white transition-colors duration-200 border-r last:border-r-0 border-wireframe-border dark:border-wireframe-borderDark"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="w-10 h-10 flex items-center justify-center border-2 border-wireframe-border dark:border-wireframe-borderDark hover:bg-wireframe-accent hover:text-white transition-colors"
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center border-2 border-wireframe-border dark:border-wireframe-borderDark hover:bg-wireframe-accent hover:text-white transition-colors"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 border-b border-wireframe-border dark:border-wireframe-borderDark bg-wireframe-bg dark:bg-wireframe-bgDark p-4">
          <div className="flex flex-col space-y-2">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block p-3 border border-dashed border-wireframe-border dark:border-wireframe-borderDark hover:border-solid hover:bg-wireframe-accent hover:text-white transition-all text-center"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
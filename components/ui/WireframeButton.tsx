import React from 'react';

interface WireframeButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
}

const WireframeButton: React.FC<WireframeButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseClasses = "relative px-6 py-3 font-bold uppercase text-sm tracking-wider transition-all duration-200 border-2 active:translate-y-1 active:shadow-none focus:outline-none focus:ring-2 focus:ring-wireframe-accent focus:ring-offset-2 dark:focus:ring-offset-black";
  
  const variants = {
    primary: "bg-wireframe-border text-white border-wireframe-border hover:bg-wireframe-accent hover:border-wireframe-accent dark:bg-wireframe-borderDark dark:text-black dark:border-wireframe-borderDark dark:hover:bg-wireframe-accent dark:hover:text-white dark:hover:border-wireframe-accent",
    secondary: "bg-transparent text-wireframe-border border-wireframe-border hover:bg-wireframe-border hover:text-white dark:text-wireframe-borderDark dark:border-wireframe-borderDark dark:hover:bg-wireframe-borderDark dark:hover:text-black",
    outline: "bg-transparent text-wireframe-border border-dashed border-wireframe-border hover:border-solid hover:bg-wireframe-bg/5 dark:text-wireframe-borderDark dark:border-wireframe-borderDark"
  };

  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {/* Corner accents for that technical feel */}
      <span className="absolute top-0 left-0 w-1 h-1 bg-current opacity-50"></span>
      <span className="absolute bottom-0 right-0 w-1 h-1 bg-current opacity-50"></span>
      
      {children}
    </button>
  );
};

export default WireframeButton;
import React, { useState, useEffect } from 'react';

interface LoaderProps {
  onComplete: () => void;
}

const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("INITIALIZING_CORE...");
  const [logs, setLogs] = useState<string[]>([]);

  const tasks = [
    "LOADING_MODULES...",
    "PARSING_GRID_SYSTEM...",
    "CALIBRATING_VIEWPORT...",
    "FETCHING_ASSETS...",
    "RENDERING_UI_COMPONENTS...",
    "ESTABLISHING_CONNECTION...",
    "SYSTEM_READY"
  ];

  useEffect(() => {
    // Simulate loading progress
    const timer = setInterval(() => {
      setProgress(prev => {
        const next = prev + Math.random() * 5;
        if (next >= 100) {
          clearInterval(timer);
          return 100;
        }
        return next;
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Update status text based on progress
    const taskIndex = Math.min(Math.floor((progress / 100) * tasks.length), tasks.length - 1);
    const currentTask = tasks[taskIndex];
    
    if (status !== currentTask) {
        setStatus(currentTask);
        setLogs(prev => [...prev, `[OK] ${currentTask}`].slice(-5)); // Keep last 5 logs
    }

    if (progress === 100) {
      setTimeout(onComplete, 500); // Small delay before unmounting
    }
  }, [progress, status, tasks, onComplete]);

  return (
    <div className="fixed inset-0 z-[10000] bg-wireframe-bg dark:bg-wireframe-bgDark flex flex-col items-center justify-center font-mono text-wireframe-border dark:text-wireframe-borderDark p-4 cursor-wait">
      {/* Background Grid Animation */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 animate-pulse"></div>
      
      <div className="max-w-md w-full relative z-10">
        {/* Box Container */}
        <div className="border-2 border-wireframe-border dark:border-wireframe-borderDark p-8 bg-white dark:bg-black relative shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.1)]">
            
            {/* Corner Markers */}
            <div className="absolute -top-1 -left-1 w-2 h-2 bg-wireframe-accent"></div>
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-wireframe-accent"></div>
            <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-wireframe-accent"></div>
            <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-wireframe-accent"></div>

            <div className="flex justify-between items-end mb-2">
                <span className="text-xs font-bold animate-pulse">SYSTEM_BOOT_SEQUENCE</span>
                <span className="text-2xl font-bold">{Math.round(progress)}%</span>
            </div>

            {/* Progress Bar */}
            <div className="h-4 border border-wireframe-border dark:border-wireframe-borderDark p-1 mb-6">
                <div 
                    className="h-full bg-wireframe-accent transition-all duration-75 ease-out relative"
                    style={{ width: `${progress}%` }}
                >
                    {/* Stripes effect on bar */}
                    <div className="absolute inset-0 opacity-20 bg-[linear-gradient(45deg,rgba(255,255,255,.15)_25%,transparent_25%,transparent_50%,rgba(255,255,255,.15)_50%,rgba(255,255,255,.15)_75%,transparent_75%,transparent)] bg-[length:1rem_1rem]"></div>
                </div>
            </div>

            {/* Terminal Logs */}
            <div className="h-32 border-t border-dashed border-wireframe-border dark:border-wireframe-borderDark pt-4 overflow-hidden flex flex-col justify-end">
                {logs.map((log, i) => (
                    <div key={i} className="text-[10px] md:text-xs opacity-70 mb-1 truncate">
                        <span className="text-wireframe-accent mr-2">&gt;</span>
                        {log}
                    </div>
                ))}
                <div className="text-[10px] md:text-xs font-bold mt-1 animate-pulse">
                    <span className="text-wireframe-accent mr-2">&gt;</span>
                    {status}_
                </div>
            </div>
        </div>

        {/* Footer text */}
        <div className="text-center mt-4 text-[10px] opacity-50">
            PORTFOLIO_V1.0 // LOADING ASSETS
        </div>
      </div>
    </div>
  );
};

export default Loader;
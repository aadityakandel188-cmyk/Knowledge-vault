
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-cyan-500/20 px-6 py-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center electric-glow rotate-45 group-hover:rotate-90 transition-transform duration-500">
            <div className="-rotate-45 group-hover:-rotate-90 transition-transform duration-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-950" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-black tracking-tighter text-white">THE KNOWLEDGE <span className="text-cyan-400">VAULT</span></h1>
            <p className="text-[10px] uppercase tracking-[0.2em] text-cyan-500/60 font-mono">Advanced Repository v2.0</p>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          <a href="#" className="hover:text-cyan-400 transition-colors">Archive</a>
          <a href="#" className="hover:text-cyan-400 transition-colors">Research</a>
          <a href="#" className="hover:text-cyan-400 transition-colors">Protocols</a>
          <button className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 rounded-md hover:bg-cyan-500 hover:text-slate-950 transition-all font-bold">
            ACCESS TERMINAL
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

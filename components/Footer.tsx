
import React from 'react';
import { Theme } from '../types';


interface FooterProps {
  theme: Theme;
}

export const Footer: React.FC<FooterProps> = ({ theme }) => {
  return (
    <footer className={`py-12 border-t px-6 transition-colors duration-500 ${theme === 'dark' ? 'bg-slate-950 border-slate-900 text-slate-500' : 'bg-slate-50 border-slate-200 text-slate-400'}`}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Built with React.
          </p>
        </div>


        <div className="text-sm font-mono uppercase tracking-widest text-indigo-500">
          Portfolio by Vivek Vardhan
        </div>
      </div>
    </footer>
  );
};

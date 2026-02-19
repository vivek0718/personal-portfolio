
import React from 'react';
import { Theme } from '../types';
import { SOCIAL_LINKS, USER_INFO } from '../constants';

interface HeroProps {
  theme: Theme;
}

export const Hero: React.FC<HeroProps> = ({ theme }) => {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight animate-fade-in-up">
          Hi, I'm <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">{USER_INFO.name}</span>
        </h1>
        
        <p className={`text-lg md:text-xl max-w-2xl mb-10 transition-colors duration-500 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
          A passionate <span className="text-indigo-500 font-semibold">Full Stack Developer</span> with expertise in
          <span className="text-purple-500 font-semibold"> Java,</span> focused on building scalable, efficient, and user-friendly web applications.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a
            href="#projects"
            className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-all hover:scale-105 shadow-lg shadow-indigo-500/25"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className={`px-8 py-3 font-semibold rounded-lg border transition-all hover:scale-105 ${theme === 'dark' ? 'border-slate-700 hover:bg-slate-800' : 'border-slate-200 hover:bg-slate-100'}`}
          >
            Get In Touch
          </a>
        </div>

        <div className="flex items-center space-x-6">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.name}
              href={social.url}
              className={`transition-all hover:scale-125 hover:text-indigo-500 ${theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center">
        <div className={`w-px h-12 ${theme === 'dark' ? 'bg-gradient-to-b from-slate-800 to-transparent' : 'bg-gradient-to-b from-slate-200 to-transparent'}`} />
        <span className={`text-[10px] uppercase tracking-[0.2em] mt-4 font-semibold ${theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}`}>Scroll Down</span>
      </div>
    </section>
  );
};

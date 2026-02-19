
import React from 'react';
import { Theme } from '../types';
import { ABOUT_ME, USER_INFO } from '../constants';

interface AboutProps {
  theme: Theme;
}

export const About: React.FC<AboutProps> = ({ theme }) => {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16 relative">
          <h2 className="text-5xl font-extrabold mb-4">About Me</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Photo Card */}
          <div className="flex justify-center">
             <div className={`relative p-8 rounded-[40px] w-full max-w-md aspect-square flex items-center justify-center transition-all duration-500 shadow-2xl ${
                theme === 'dark' ? 'bg-[#151c2c] border border-slate-800' : 'bg-white border border-slate-200'
             }`}>
                <div className="relative w-full aspect-square max-w-[320px]">
                    <div className="absolute inset-0 rounded-full border-2 border-indigo-500/20 scale-105"></div>
                    <img 
                      src={USER_INFO.profileImage} 
                      alt={USER_INFO.name} 
                      className="w-full h-full object-cover rounded-full shadow-lg"
                    />
                </div>
             </div>
          </div>

          {/* Right Side: Content */}
          <div className="flex flex-col">
            <h3 className={`text-3xl md:text-4xl font-bold mb-8 leading-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
               {ABOUT_ME.heading}
            </h3>
            
            <div className={`space-y-6 text-lg mb-10 leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
              <p>{ABOUT_ME.content1}</p> 
            </div>

            {/* Feature Cards Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {ABOUT_ME.focusAreas.map((area, idx) => (
                <div 
                  key={idx} 
                  className={`p-8 rounded-2xl border transition-all duration-300 hover:translate-y-[-5px] ${
                    theme === 'dark' ? 'bg-[#151c2c]/80 border-slate-800 hover:border-indigo-500/30' : 'bg-white border-slate-100 shadow-sm'
                  }`}
                >
                  <div className="mb-4">
                    {area.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-3">{area.title}</h4>
                  <p className={`text-sm leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
                    {area.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

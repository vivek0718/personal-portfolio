
import React, { useState } from 'react';
import { Theme } from '../types';
import { SKILLS } from '../constants';

interface SkillsProps {
  theme: Theme;
}

export const Skills: React.FC<SkillsProps> = ({ theme }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'languages', name: 'Languages' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'tools', name: 'Tools' },
  ];

  const filteredSkills = activeCategory === 'all' 
    ? SKILLS 
    : SKILLS.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className={`py-20 px-6 transition-colors duration-500 ${theme === 'dark' ? 'bg-slate-900/30' : 'bg-slate-100/50'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Arsenal</h2>
          <p className={`max-w-xl mx-auto ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
            Tools and technologies I've mastered during my academic journey and professional projects.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? 'bg-indigo-600 text-white'
                  : theme === 'dark' 
                    ? 'bg-slate-800 text-slate-400 hover:bg-slate-700' 
                    : 'bg-white text-slate-600 hover:bg-slate-200 shadow-sm'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className={`p-6 rounded-2xl flex flex-col items-center justify-center transition-all duration-300 hover:scale-105 group border ${
                theme === 'dark' 
                  ? 'bg-slate-900/50 border-slate-800 hover:border-indigo-500/50' 
                  : 'bg-white border-slate-100 hover:border-indigo-300 shadow-sm'
              }`}
            >
              <div className="text-4xl mb-3 group-hover:animate-bounce">
                {skill.icon}
              </div>
              <h4 className="font-semibold text-sm text-center mb-3">{skill.name}</h4>
              <div className="w-full bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div 
                  className="bg-indigo-600 h-full rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.proficiency}%` }}
                />
              </div>
              <span className="text-[10px] mt-2 font-mono text-slate-500">{skill.proficiency}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

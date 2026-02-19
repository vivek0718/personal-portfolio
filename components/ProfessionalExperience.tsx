
import React from 'react';
import { Theme } from '../types';
import { EXPERIENCE } from '../constants';

interface ProfessionalExperienceProps {
  theme: Theme;
}

export const ProfessionalExperience: React.FC<ProfessionalExperienceProps> = ({ theme }) => {
  return (
    <div className={`h-full rounded-3xl p-8 md:p-12 border shadow-xl transition-all duration-500 ${
      theme === 'dark' 
        ? 'bg-[#1a2332] border-slate-700' 
        : 'bg-white border-slate-200'
    }`}>
      <div className="flex items-center space-x-4 mb-12">
        <div className="p-3 bg-blue-500/10 rounded-xl text-blue-500">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold">Professional Experience</h2>
      </div>

      <div className="space-y-12">
        {EXPERIENCE.map((exp, index) => (
          <div key={index} className="relative pl-10">
            {/* Timeline Line */}
            {index !== EXPERIENCE.length - 1 && (
              <div className="absolute left-[11px] top-6 bottom-[-48px] w-0.5 bg-slate-700/50"></div>
            )}
            
            {/* Timeline Dot */}
            <div className="absolute left-0 top-2 w-[24px] h-[24px] bg-blue-600 rounded-full border-4 border-slate-900 z-10 shadow-[0_0_15px_rgba(37,99,235,0.4)]"></div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
              <h3 className="text-xl font-bold text-slate-100">{exp.title}</h3>
              <div className="flex items-center space-x-2 text-sm font-medium text-blue-500/80">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>{exp.period}</span>
              </div>
            </div>

            <h4 className="text-lg font-semibold text-slate-300 mb-4">{exp.company}</h4>
            
            <p className={`text-sm leading-relaxed mb-6 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
              {exp.description}
            </p>

            <ul className="space-y-3">
              {exp.points.map((point, i) => (
                <li key={i} className="flex items-start text-sm text-slate-400">
                  <span className="text-green-500 mr-3 mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500 shrink-0"></span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

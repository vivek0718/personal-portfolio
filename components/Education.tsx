
import React from 'react';
import { Theme } from '../types';
import { EDUCATION } from '../constants';

interface EducationProps {
  theme: Theme;
}

export const Education: React.FC<EducationProps> = ({ theme }) => {
  return (
    <div className={`rounded-3xl p-8 md:p-12 border shadow-xl transition-all duration-500 ${
      theme === 'dark' 
        ? 'bg-[#1a2332] border-slate-700' 
        : 'bg-white border-slate-200'
    }`}>
      <div className="flex items-center space-x-4 mb-12">
        <div className="p-3 bg-blue-500/10 rounded-xl text-blue-500">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
          </svg>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold">Education</h2>
      </div>

      <div className="space-y-8">
        {EDUCATION.map((edu, index) => (
          <div 
            key={index} 
            className={`p-6 md:p-8 rounded-2xl border transition-all duration-300 ${
              theme === 'dark' ? 'bg-[#151c2c]/50 border-slate-700/50 hover:border-blue-500/30' : 'bg-slate-50 border-slate-200 hover:border-blue-300'
            }`}
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
              <div className="flex-1">
                <h3 className={`text-xl font-bold mb-2 ${theme === 'dark' ? 'text-slate-100' : 'text-slate-900'}`}>
                  {edu.degree}
                </h3>
                <h4 className="text-lg font-semibold text-blue-500/90 mb-2">
                  {edu.institution}
                </h4>
                <p className={`text-sm font-medium ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
                  {edu.score}
                </p>
              </div>
              <div className="flex items-center space-x-2 text-sm font-bold text-blue-500 bg-blue-500/10 px-4 py-1.5 rounded-full shrink-0 h-fit">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>{edu.period}</span>
              </div>
            </div>

            {edu.tags && (
              <div className="flex flex-wrap gap-2 mt-6">
                {edu.tags.map((tag, tIdx) => (
                  <span 
                    key={tIdx} 
                    className={`text-xs font-bold px-3 py-1.5 rounded-full transition-colors ${
                      theme === 'dark' ? 'bg-slate-800 text-slate-300 border border-slate-700' : 'bg-white text-slate-600 border border-slate-200 shadow-sm'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};


import React from 'react';
import { Theme } from '../types';
import { USER_INFO } from '../constants';

interface ProfileSidebarProps {
  theme: Theme;
}

export const ProfileSidebar: React.FC<ProfileSidebarProps> = ({ theme }) => {
  return (
    <div className={`bg-[#1a2332] rounded-3xl overflow-hidden shadow-2xl p-10 flex flex-col items-center text-white relative border border-slate-700 h-full`}>
      <div className="relative w-48 h-48 mb-8">
         <div className="absolute inset-0 rounded-full border-2 border-indigo-500/30 scale-110"></div>
         <img 
          src="https://res.cloudinary.com/dlavjizfs/image/upload/v1753418382/vivek_pp_cqgoox.jpg" 
          alt={USER_INFO.name} 
          className="w-full h-full object-cover rounded-full"
         />
      </div>
      
      <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">{USER_INFO.name}</h2>
      <p className="text-slate-400 text-lg mb-10 text-center">{USER_INFO.title}</p>
      
      <div className="w-full space-y-6 mb-12">
        <div className="flex items-center space-x-4">
          <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-500">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
          </div>
          <span className="text-slate-300 text-sm">{USER_INFO.location}</span>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-500">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
          </div>
          <span className="text-slate-300 truncate text-sm">{USER_INFO.email}</span>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-500">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
          </div>
          <span className="text-slate-300 text-sm">{USER_INFO.phone}</span>
        </div>
      </div>
      
      <div className="w-full">
        <h3 className="text-xl font-bold mb-6">Certifications</h3>
        <div className="space-y-3">
          {USER_INFO.certifications.map((cert, i) => (
            <div key={i} className="flex items-center space-x-3 p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-indigo-500/50 transition-colors">
              <div className="text-yellow-500">
                 <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" /></svg>
              </div>
              <span className="text-xs font-medium text-slate-200">{cert}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

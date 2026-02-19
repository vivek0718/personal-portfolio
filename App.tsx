
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { ProfileSidebar } from './components/ProfileSidebar';
import { ProfessionalExperience } from './components/ProfessionalExperience';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.body.className = 'bg-slate-950 text-slate-200 antialiased overflow-x-hidden transition-colors duration-500';
    } else {
      document.body.className = 'bg-slate-50 text-slate-900 antialiased overflow-x-hidden transition-colors duration-500';
    }
  }, [theme]);

  return (
    <div className={`min-h-screen relative ${theme === 'light' ? 'light' : 'dark'}`}>
      {/* Background decoration */}
      <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
        <div className={`absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full blur-[120px] opacity-20 ${theme === 'dark' ? 'bg-indigo-600' : 'bg-blue-200'}`} />
        <div className={`absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full blur-[150px] opacity-15 ${theme === 'dark' ? 'bg-purple-600' : 'bg-pink-100'}`} />
      </div>

      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      <main>
        <Hero theme={theme} />
        <About theme={theme} />
        
        {/* Education Section moved after About */}
        <div className="max-w-7xl mx-auto px-6 mb-20">
          <Education theme={theme} />
        </div>

        <Skills theme={theme} />
        <Projects theme={theme} />
        
        {/* Profile and Professional Experience row */}
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 py-10">
          <div className="lg:col-span-4">
            <ProfileSidebar theme={theme} />
          </div>
          <div className="lg:col-span-8">
            <ProfessionalExperience theme={theme} />
          </div>
        </div>

        <Contact theme={theme} />
      </main>

      <Footer theme={theme} />
    </div>
  );
};

export default App;

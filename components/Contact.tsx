
import React, { useState } from 'react';
import { Theme } from '../types';
import { USER_INFO, SOCIAL_LINKS, EMAILJS_CONFIG } from '../constants';
import emailjs from 'https://esm.sh/@emailjs/browser';

interface ContactProps {
  theme: Theme;
}

export const Contact: React.FC<ContactProps> = ({ theme }) => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // Prepare template parameters for EmailJS
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_name: USER_INFO.name,
    };

    // If configuration is still placeholder, simulate success for demo purposes
    if (EMAILJS_CONFIG.SERVICE_ID === 'YOUR_SERVICE_ID') {
      console.warn("EmailJS not configured. Simulating success.");
      setTimeout(() => {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      }, 1500);
      return;
    }

    emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      templateParams,
      EMAILJS_CONFIG.PUBLIC_KEY
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, (err) => {
      console.error('FAILED...', err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    });
  };

  return (
    <section id="contact" className={`py-20 px-6 ${theme === 'dark' ? 'bg-[#0f172a]' : 'bg-slate-50'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
           <p className={`text-lg mb-4 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
            I'm always interested in discussing new opportunities and exciting projects. Let's connect and see how we can work together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column */}
          <div>
            <h2 className="text-3xl font-bold mb-10">Let's Start a Conversation</h2>
            
            <div className="space-y-8 mb-16">
              <div className="flex items-start space-x-5">
                <div className="p-3 bg-indigo-500/10 rounded-xl text-indigo-500">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Location</h4>
                  <p className="text-slate-400">{USER_INFO.location}</p>
                </div>
              </div>

              <div className="flex items-start space-x-5">
                <div className="p-3 bg-indigo-500/10 rounded-xl text-indigo-500">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Email</h4>
                  <p className="text-slate-400">{USER_INFO.email}</p>
                </div>
              </div>

              <div className="flex items-start space-x-5">
                <div className="p-3 bg-indigo-500/10 rounded-xl text-indigo-500">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Phone</h4>
                  <p className="text-slate-400">{USER_INFO.phone}</p>
                </div>
              </div>
            </div>

            <h4 className="font-bold text-lg mb-6">Follow Me</h4>
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="p-3 bg-slate-800 rounded-xl text-indigo-500 hover:bg-indigo-500 hover:text-white transition-all shadow-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right Column Form */}
          <div className={`p-8 rounded-3xl border ${theme === 'dark' ? 'bg-[#1a2332] border-slate-700' : 'bg-white border-slate-200'}`}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-slate-400">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-5 py-3 rounded-xl bg-slate-800/50 border border-slate-700 text-white outline-none focus:border-indigo-500 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-slate-400">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-5 py-3 rounded-xl bg-slate-800/50 border border-slate-700 text-white outline-none focus:border-indigo-500 transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-slate-400">Subject</label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-5 py-3 rounded-xl bg-slate-800/50 border border-slate-700 text-white outline-none focus:border-indigo-500 transition-all"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-slate-400">Message</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-5 py-3 rounded-xl bg-slate-800/50 border border-slate-700 text-white outline-none focus:border-indigo-500 transition-all resize-none"
                  placeholder="Tell me about your project or idea..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:opacity-90 transition-all flex items-center justify-center space-x-3 shadow-lg shadow-indigo-500/20"
              >
                {status === 'sending' ? (
                  <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                ) : (
                  <>
                    <svg className="w-5 h-5 transform rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                    <span>Send Message</span>
                  </>
                )}
              </button>
              
              {status === 'success' && (
                <p className="text-center text-green-500 text-sm mt-4 animate-bounce">Message sent successfully!</p>
              )}
              {status === 'error' && (
                <p className="text-center text-red-500 text-sm mt-4">Failed to send message. Please try again later.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

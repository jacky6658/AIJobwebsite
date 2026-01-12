
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '首頁', href: '#' },
    { name: '關於我們', href: '#about' },
    { name: 'AI工具庫', href: '#tool-library' },
    { name: 'AI職缺', href: '#jobs' },
    { name: 'AI小程式', href: '#apps' },
    { name: '實戰培訓', href: '#courses' },
  ];

  const LOGO_PATH = "image/aijoblogo.svg";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm h-16' : 'bg-white h-20'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          
          <a href="#" className="flex items-center group">
            <div className="w-10 h-10 mr-2 flex items-center justify-center overflow-hidden">
              <img 
                src={LOGO_PATH} 
                alt="AIJob Logo" 
                className="w-full h-full object-contain group-hover:scale-105 transition-transform"
              />
            </div>
            <span className="text-2xl font-black tracking-tighter text-slate-900">
              AI<span className="text-indigo-600">JOB</span>
            </span>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                className="text-slate-600 hover:text-indigo-600 font-bold text-sm transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-indigo-600 text-white px-6 py-2.5 rounded-xl font-black text-sm hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 active:scale-95">
              立即諮詢
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-600 p-2 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 transition-all duration-300 ${
        isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}>
        <div className="px-4 pt-2 pb-6 space-y-1 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-4 text-base font-bold text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 px-3">
            <button className="w-full bg-indigo-600 text-white py-3 rounded-xl font-black text-center">
              立即諮詢
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-40 pb-32 px-4 bg-white">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-50 rounded-full blur-[120px] opacity-60"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-50 rounded-full blur-[120px] opacity-40"></div>
      </div>

      <div className="relative max-w-5xl mx-auto text-center space-y-12">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 px-5 py-2 bg-indigo-50 text-indigo-600 rounded-2xl border border-indigo-100 text-[10px] font-black uppercase tracking-[0.3em] shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
            </span>
            未來已來 • AIJOB
          </span>
          <h1 className="text-5xl md:text-8xl font-black leading-[1.1] tracking-tighter text-slate-900">
            打造您的 <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500">
              專屬 AI 智能體
            </span>
          </h1>
          <p className="text-slate-500 text-lg md:text-2xl max-w-2xl mx-auto font-medium leading-relaxed">
            我們提供頂尖的客製化 AI 系統開發服務，<br />
            並透過實戰課程手把手教您掌握這項未來核心技能。
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-5">
          <button className="px-12 py-5 bg-slate-900 text-white rounded-2xl font-black text-base hover:bg-slate-800 transition-all shadow-2xl shadow-slate-200 active:scale-95">
            客製化 AI 諮詢
          </button>
          <a href="#courses" className="px-12 py-5 bg-white text-slate-600 rounded-2xl font-black text-center text-base hover:bg-slate-50 transition-all border border-slate-200 active:scale-95">
            探索實戰課程
          </a>
        </div>

        <div className="pt-16 grid grid-cols-1 sm:grid-cols-3 gap-12 max-w-3xl mx-auto border-t border-slate-100">
          <div className="space-y-1">
            <div className="text-slate-900 font-black text-3xl tracking-tighter">AI AGENT</div>
            <div className="text-[10px] text-slate-400 uppercase tracking-[0.2em] font-bold">智能體客製開發</div>
          </div>
          <div className="space-y-1">
            <div className="text-slate-900 font-black text-3xl tracking-tighter">MINI APPS</div>
            <div className="text-[10px] text-slate-400 uppercase tracking-[0.2em] font-bold">微型應用生態</div>
          </div>
          <div className="space-y-1">
            <div className="text-slate-900 font-black text-3xl tracking-tighter">COURSES</div>
            <div className="text-[10px] text-slate-400 uppercase tracking-[0.2em] font-bold">實戰教學課程</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

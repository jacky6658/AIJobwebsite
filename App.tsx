
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AIAgent from './components/AIAgent';
import JobBoard from './components/JobBoard';
import MarketTrends from './components/MarketTrends';
import { AI_APPS, COURSES, JOBS } from './constants';

const App: React.FC = () => {
  const TOOL_LIBRARY_URL = "https://aitools.aijob.com.tw/";
  const LOGO_IMAGE_URL = "image/aijoblogo.svg"; 

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.src = `https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800`;
  };

  const renderIcon = (type: string) => {
    switch (type) {
      case 'toolbox':
        return (
          <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center border-2 border-amber-400/30 shadow-inner">
            <svg className="w-9 h-9 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
               <path d="M20 8h-3V6c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6h6v2H9V6zm11 14H4v-7h16v7zm0-9H4v-1h16v1zm-7 3h-2v2h2v-2z"/>
            </svg>
          </div>
        );
      default:
        return (
          <svg className="w-10 h-10 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-indigo-100">
      <Navbar />
      
      <main className="pt-16">
        <Hero />
        
        {/* Tool Library Header Section */}
        <section id="tool-library" className="py-24 px-4 bg-white scroll-mt-20">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
                AIJob AI 工具庫
              </h2>
              <p className="text-xl font-bold text-slate-800">
                歡迎使用 AIJob AI 工具庫
              </p>
              <p className="text-slate-500 max-w-3xl mx-auto leading-relaxed font-medium">
                這是一個免費提供大家使用的 AI 工具集合平台。我們精心收錄了市面上各種實用的 AI 工具與智能體，幫助你快速找到適合的工具，提升工作效率。
              </p>
            </div>

            {/* YouTube Embed */}
            <div className="mt-12 aspect-video w-full rounded-[2.5rem] overflow-hidden shadow-2xl shadow-indigo-100 border-8 border-slate-50 relative group">
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/Wqulhvlj5gk?si=7Ee_txHAo1Z-jjUW" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
              <button className="px-10 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-black transition-all flex items-center justify-center gap-2 shadow-xl shadow-indigo-100">
                我也要客製化 AI 應用
              </button>
              <a 
                href={TOOL_LIBRARY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 bg-white border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 rounded-2xl font-black transition-all flex items-center justify-center gap-2"
              >
                查看更多 AI 應用工具
              </a>
            </div>
          </div>
        </section>

        {/* AI Job Board & Market Section */}
        <section id="jobs" className="py-24 px-4 bg-slate-50 scroll-mt-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-8">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-3xl font-black text-slate-900">熱門 AI 職缺</h2>
                    <p className="text-slate-500 font-medium">尋找下一代 AI 驅動的職業機會</p>
                  </div>
                  <button className="text-indigo-600 font-bold hover:underline">查看全部職缺</button>
                </div>
                <JobBoard jobs={JOBS} />
              </div>
              <div className="space-y-8">
                <h2 className="text-3xl font-black text-slate-900">市場趨勢分析</h2>
                <MarketTrends />
                <div className="p-8 bg-indigo-600 rounded-[2.5rem] text-white shadow-xl shadow-indigo-200">
                  <h4 className="text-xl font-bold mb-4">想要成為 AI 專才？</h4>
                  <p className="text-indigo-100 text-sm mb-6 leading-relaxed">
                    加入我們的培訓課程，掌握最前沿的 AI 工具應用，提升您的市場競爭力。
                  </p>
                  <a href="#courses" className="inline-block w-full text-center py-3 bg-white text-indigo-600 rounded-xl font-black hover:bg-indigo-50 transition-colors">
                    探索課程
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Apps Grid */}
        <section id="apps" className="py-24 px-4 bg-white scroll-mt-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl font-black text-slate-900">精選 AI 小程式</h2>
              <p className="text-slate-500 font-medium text-lg">快速啟動您的 AI 智能工作流程</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {AI_APPS.map(app => (
                <div key={app.id} className="group flex flex-col h-full bg-white border border-slate-100 p-10 rounded-[3rem] hover:border-indigo-200 hover:shadow-2xl hover:shadow-indigo-500/5 transition-all duration-500 relative">
                  <div className="flex justify-center mb-8 transform group-hover:scale-110 transition-transform duration-500">
                    {renderIcon(app.icon)}
                  </div>
                  <div className="text-center space-y-4 flex-grow">
                    <h3 className="text-2xl font-black text-slate-900">{app.name}</h3>
                    <div className="text-indigo-600 font-bold text-sm">{app.category}</div>
                    <p className="text-slate-500 text-sm leading-relaxed max-w-[240px] mx-auto">
                      {app.description}
                    </p>
                  </div>
                  <div className="mt-8 flex flex-wrap justify-center gap-2">
                    {app.tags.map(tag => (
                      <span key={tag} className="px-4 py-1.5 bg-indigo-50 text-indigo-500 rounded-full text-xs font-bold transition-colors">#{tag}</span>
                    ))}
                  </div>
                  <div className="mt-10 pt-8 border-t border-slate-50">
                    <a href={TOOL_LIBRARY_URL} target="_blank" rel="noopener noreferrer" className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-black transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-100">
                      立即體驗 <span>→</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 px-4 bg-slate-50 scroll-mt-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-extrabold text-indigo-600 uppercase tracking-tight">
                關於 AIJOB
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                在 AIJOB，我們相信 AI 不僅僅是工具，更是人類創造力的延伸。我們專注於研發具備深度的 <strong>客製化 AI 智能體</strong>，並致力於透過高品質的 <strong>實戰培訓</strong>，讓每個人都能駕馭這項強大的技術。
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <div className="text-3xl font-black text-indigo-600">10+</div>
                  <div className="text-xs text-slate-400 uppercase tracking-widest font-bold mt-1">開發中智能體</div>
                </div>
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <div className="text-3xl font-black text-cyan-500">500+</div>
                  <div className="text-xs text-slate-400 uppercase tracking-widest font-bold mt-1">結訓學員</div>
                </div>
              </div>
            </div>
            <div className="relative bg-white rounded-3xl p-8 border border-slate-200 shadow-xl shadow-slate-200/50">
              <blockquote className="text-xl italic text-slate-700 leading-relaxed">
                "我們不只是跟隨趨勢，我們在創造能與您共同進化的數位生命體。"
              </blockquote>
              <div className="mt-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center font-black text-white shadow-lg">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 4L4 20H20L12 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-slate-900">AIJOB Team</div>
                  <div className="text-sm text-slate-500 font-medium">致力於 AI 民主化與普及</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section id="courses" className="py-24 px-4 bg-white scroll-mt-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight">精選培訓課程</h2>
              <p className="text-slate-500 max-w-xl mx-auto font-medium text-lg">
                與專業導師合作，手把手帶您駕馭 AI 的無限潛能
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {COURSES.map(course => (
                <div key={course.id} className="bg-white border border-slate-200 rounded-[2.5rem] overflow-hidden group hover:border-indigo-400 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 flex flex-col h-full">
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <img 
                      src={course.thumbnail} 
                      alt={course.title} 
                      onError={handleImageError}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    />
                    <div className="absolute top-5 left-5">
                      <span className="px-3 py-1.5 bg-white/95 backdrop-blur-md rounded-xl text-[10px] font-black text-indigo-600 shadow-lg uppercase tracking-widest">
                        {course.level}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex-grow space-y-4">
                      <h3 className="text-xl font-extrabold text-slate-900 leading-tight min-h-[3rem] group-hover:text-indigo-600 transition-colors">
                        {course.title}
                      </h3>
                      <p className="text-slate-500 text-sm leading-relaxed line-clamp-3">
                        {course.description}
                      </p>
                    </div>
                    <div className="mt-8 pt-6 border-t border-slate-100">
                      <a href={course.url} target="_blank" rel="noopener noreferrer" className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-black text-sm transition-all flex items-center justify-center gap-2 shadow-lg active:scale-95">
                        了解課程詳情 <span>→</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white text-slate-500 py-24 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-12">
          <div className="flex justify-center items-center gap-3">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg border border-slate-100 overflow-hidden">
              <img src={LOGO_IMAGE_URL} alt="AIJob" className="w-full h-full object-contain p-1" />
            </div>
            <span className="text-3xl font-black text-slate-900 tracking-tighter">AI<span className="text-indigo-600">JOB</span></span>
          </div>
          <p className="max-w-md mx-auto text-sm leading-relaxed text-slate-400 font-medium text-center">
            我們致力於推動 AI 實戰應用與教育，協助企業與個人在自動化時代保持領先。
          </p>
          <div className="pt-8 border-t border-slate-50">
            <p className="text-[10px] font-bold text-slate-300 tracking-[0.3em] uppercase text-center">© 2024 AIJOB LABS. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </footer>

      <AIAgent />
    </div>
  );
};

export default App;

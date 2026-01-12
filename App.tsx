
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AIAgent from './components/AIAgent';
import { TOOL_CATEGORIES, MENTORS, AI_APPS } from './constants';
import * as Icons from 'lucide-react';

const DynamicIcon = ({ name, className }: { name: string; className?: string }) => {
  const iconName = name.split('-').map(part => part.charAt(0).toUpperCase() + part.slice(1)).join('') as keyof typeof Icons;
  const IconComponent = (Icons[iconName] || Icons.Box) as React.ElementType;
  return <IconComponent className={className} />;
};

interface ParserSlot {
  id: number;
  url: string;
  isParsing: boolean;
  data: any | null;
  error: string;
}

const App: React.FC = () => {
  const [slots, setSlots] = useState<ParserSlot[]>([
    { id: 1, url: '', isParsing: false, data: null, error: '' },
    { id: 2, url: '', isParsing: false, data: null, error: '' },
    { id: 3, url: '', isParsing: false, data: null, error: '' }
  ]);

  const updateSlot = (id: number, newData: Partial<ParserSlot>) => {
    setSlots(prev => prev.map(slot => slot.id === id ? { ...slot, ...newData } : slot));
  };

  const handleParse = async (id: number, url: string) => {
    if (!url) return;
    let targetUrl = url.trim();
    if (!/^https?:\/\//i.test(targetUrl)) targetUrl = 'https://' + targetUrl;

    updateSlot(id, { isParsing: true, error: '', url: targetUrl });

    const proxies = [
      `https://corsproxy.io/?${encodeURIComponent(targetUrl)}`,
      `https://api.allorigins.win/get?url=${encodeURIComponent(targetUrl)}`
    ];

    let success = false;
    for (const proxy of proxies) {
      try {
        const response = await fetch(proxy);
        const resData = await response.json();
        const htmlString = resData.contents || (typeof resData === 'string' ? resData : null);

        if (htmlString && htmlString.length > 200) {
          const parser = new DOMParser();
          const doc = parser.parseFromString(htmlString, 'text/html');
          const getMeta = (prop: string) => 
            doc.querySelector(`meta[property="${prop}"]`)?.getAttribute('content') || 
            doc.querySelector(`meta[name="${prop}"]`)?.getAttribute('content') || '';

          let title = getMeta('og:title') || doc.title || '課程已偵測';
          let description = getMeta('og:description') || getMeta('description') || '已成功解析連結，點擊下方按鈕前往原始頁面查看更多細節。';
          let thumbnail = getMeta('og:image') || `https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800`;

          if (thumbnail.startsWith('/')) {
            const urlObj = new URL(targetUrl);
            thumbnail = urlObj.origin + thumbnail;
          }

          updateSlot(id, { 
            data: { title, description, thumbnail, link: targetUrl }, 
            isParsing: false 
          });
          success = true;
          break;
        }
      } catch (err) {
        console.warn(`Proxy failed, trying next...`);
      }
    }

    if (!success) {
      updateSlot(id, { 
        error: '此網站設有強大防護，無法直接提取內容', 
        isParsing: false 
      });
    }
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.src = `https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?q=80&w=800`;
  };

  return (
    <div className="min-h-screen bg-[#fafbfc] text-slate-900 selection:bg-indigo-100">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* --- Tool Library Section --- */}
        <section id="tool-library" className="py-24 px-4 bg-white scroll-mt-20">
          <div className="max-w-7xl mx-auto text-center space-y-16">
            <div className="space-y-4">
              <span className="text-indigo-600 font-bold tracking-[0.2em] text-xs uppercase block">AI Ecosystem</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">AIJob 萬用工具庫</h2>
              <p className="text-slate-500 max-w-3xl mx-auto leading-relaxed font-medium text-lg">
                整合全球最頂尖的 AI 應用，從寫作到開發，一鍵啟動您的智能轉型。
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {TOOL_CATEGORIES.map((cat, idx) => (
                <div key={idx} className="group relative">
                  <div className={`p-8 rounded-[2.5rem] ${cat.color} h-full border border-slate-50 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer flex flex-col items-center justify-center overflow-hidden`}>
                    <div className="absolute top-0 right-0 -mr-4 -mt-4 w-24 h-24 bg-white opacity-10 rounded-full blur-2xl group-hover:scale-150 transition-transform"></div>
                    <div className="relative z-10 p-5 bg-white rounded-2xl mb-5 shadow-lg group-hover:rotate-12 transition-transform">
                      <DynamicIcon name={cat.icon} className="w-8 h-8" />
                    </div>
                    <div className="relative z-10 font-black text-slate-900 text-lg tracking-tight">{cat.title}</div>
                    <div className="mt-2 text-[10px] font-bold opacity-60 uppercase tracking-widest">Solutions</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- AI Recruitment & Solution Showcase --- */}
        <section id="apps" className="py-24 px-4 bg-[#fcfdfe] scroll-mt-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <span className="text-indigo-600 font-bold tracking-[0.2em] text-xs uppercase block">AI Recruitment & Enterprise Solutions</span>
              <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tight">AI 招募與企業智能工具</h2>
              <p className="text-slate-500 max-w-xl mx-auto font-medium text-lg">
                專門為人力資源與內容生產設計的高效率 AI 智能體。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {AI_APPS.map((app) => (
                <div key={app.id} className="group bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl shadow-indigo-500/5 hover:shadow-indigo-500/10 hover:border-indigo-100 transition-all duration-500 flex flex-col relative overflow-hidden">
                  <div className="absolute top-6 right-6">
                    <span className="flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-[10px] font-black uppercase tracking-widest">
                      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                      {app.status}
                    </span>
                  </div>
                  
                  <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 mb-8 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 shadow-inner">
                    <DynamicIcon name={app.icon} className="w-8 h-8" />
                  </div>

                  <div className="mb-2">
                    <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">
                      {app.category}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors">
                    {app.name}
                  </h3>
                  
                  <p className="text-slate-500 text-sm leading-relaxed mb-8 font-medium">
                    {app.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-10 mt-auto">
                    {app.tags.map((tag, i) => (
                      <span key={i} className="px-4 py-1.5 bg-slate-50 text-slate-500 rounded-xl text-[11px] font-bold border border-slate-100">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <a 
                    href="https://aitools.aijob.com.tw/#category=AI%E5%93%A1%E5%B7%A5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 bg-slate-900 text-white rounded-2xl font-black text-sm hover:bg-indigo-600 transition-all shadow-lg active:scale-95 text-center flex items-center justify-center"
                  >
                    立即使用工具
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Course Parser Grid --- */}
        <section id="courses" className="py-32 px-4 bg-white scroll-mt-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24 space-y-4">
              <span className="text-indigo-600 font-bold tracking-[0.2em] text-xs uppercase block">Smart Parsing Technology</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">智慧課程解析插槽</h2>
              <p className="text-slate-500 max-w-xl mx-auto font-medium text-lg">
                只需貼上連結，AI 將為您自動產生高品質的課程卡片與摘要。
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {slots.map((slot) => (
                <div key={slot.id} className="bg-white border-2 border-dashed border-indigo-100 rounded-[4rem] overflow-hidden flex flex-col h-full min-h-[680px] transition-all hover:border-indigo-400 hover:shadow-2xl group relative shadow-2xl shadow-indigo-200/10">
                  
                  {!slot.data ? (
                    <div className="flex flex-col h-full justify-center items-center p-14 text-center space-y-12 bg-gradient-to-br from-white to-indigo-50/20">
                      <div className="w-32 h-32 bg-white rounded-[3rem] flex items-center justify-center shadow-[0_20px_50px_rgba(79,70,229,0.15)] text-indigo-500 animate-pulse border border-slate-50">
                        <DynamicIcon name="link-2" className="w-16 h-16" />
                      </div>
                      <div className="space-y-4">
                        <h3 className="text-3xl font-black text-slate-800 tracking-tighter">解析插槽 {slot.id}</h3>
                        <p className="text-slate-400 text-base font-medium px-4">支持 YouTube, PressPlay, Udemy 等平台連結</p>
                      </div>
                      <div className="w-full space-y-6">
                        <input 
                          type="text" 
                          value={slot.url}
                          onChange={(e) => updateSlot(slot.id, { url: e.target.value })}
                          onKeyDown={(e) => e.key === 'Enter' && handleParse(slot.id, slot.url)}
                          placeholder="請貼上網址..."
                          className="w-full px-8 py-6 bg-white border border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 rounded-3xl text-sm font-semibold transition-all outline-none shadow-sm text-slate-700 placeholder:text-slate-300"
                        />
                        <button 
                          onClick={() => handleParse(slot.id, slot.url)}
                          disabled={slot.isParsing || !slot.url}
                          className="w-full py-6 bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-200 text-white rounded-3xl font-black text-base shadow-[0_15px_30px_-5px_rgba(79,70,229,0.4)] transition-all active:scale-95 flex items-center justify-center gap-3"
                        >
                          {slot.isParsing ? (
                            <>
                              <DynamicIcon name="loader-2" className="w-6 h-6 animate-spin" />
                              正在破解防護...
                            </>
                          ) : (
                            <>
                              <DynamicIcon name="zap" className="w-6 h-6" />
                              立即解析課程
                            </>
                          )}
                        </button>
                        {slot.error && (
                          <div className="py-4 px-6 bg-rose-50 rounded-2xl border border-rose-100 animate-in fade-in zoom-in-95">
                             <p className="text-rose-500 text-xs font-black flex items-center justify-center gap-2">
                               <DynamicIcon name="shield-alert" className="w-4 h-4" /> {slot.error}
                             </p>
                          </div>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col h-full animate-in zoom-in-95 duration-700 bg-white">
                      <div className="relative aspect-[4/3] overflow-hidden bg-slate-900">
                        <img 
                          src={slot.data.thumbnail} 
                          alt="Cover" 
                          className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-1000" 
                          onError={handleImageError} 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                        <div className="absolute top-8 left-8">
                          <span className="px-5 py-2.5 bg-cyan-500 backdrop-blur-md rounded-2xl text-[10px] font-black text-white shadow-2xl uppercase tracking-[0.2em] flex items-center gap-2 border border-white/20">
                            <DynamicIcon name="check-circle" className="w-4 h-4" /> 解析完成
                          </span>
                        </div>
                        <button 
                          onClick={() => updateSlot(slot.id, { data: null, url: '', error: '' })} 
                          className="absolute top-8 right-8 p-4 bg-white/10 hover:bg-rose-500 backdrop-blur-md rounded-full text-white transition-all shadow-2xl group border border-white/10"
                        >
                          <DynamicIcon name="rotate-ccw" className="w-5 h-5" />
                        </button>
                      </div>
                      <div className="p-12 flex flex-col flex-grow">
                        <div className="flex-grow space-y-6">
                          <h3 className="text-3xl font-black text-slate-900 leading-tight group-hover:text-indigo-600 transition-colors line-clamp-2">
                            {slot.data.title}
                          </h3>
                          <p className="text-slate-500 text-base leading-relaxed line-clamp-4 font-medium">
                            {slot.data.description}
                          </p>
                        </div>
                        <div className="mt-12 pt-10 border-t border-slate-50">
                          <a 
                            href={slot.data.link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="w-full py-6 bg-slate-900 hover:bg-indigo-600 text-white rounded-3xl font-black text-base shadow-xl flex items-center justify-center gap-3 transition-all active:scale-95"
                          >
                            前往學習平台 <DynamicIcon name="external-link" className="w-5 h-5" />
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mentors Section */}
        <section id="mentors" className="py-32 px-4 bg-[#f8fafc] scroll-mt-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24 space-y-4">
              <span className="text-indigo-600 font-bold tracking-[0.2em] text-xs uppercase block">Expert Faculty</span>
              <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter">業界<span className="text-indigo-600 font-black">頂尖導師</span>團隊</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {MENTORS.map((mentor) => (
                <div key={mentor.id} className="bg-white p-14 rounded-[4rem] border border-slate-100 shadow-xl shadow-indigo-500/5 flex flex-col items-center text-center group hover:border-indigo-200 transition-all duration-500">
                  <div className="relative mb-12">
                    <div className="w-44 h-44 rounded-full overflow-hidden border-8 border-white shadow-2xl p-1">
                      <img src={mentor.avatar} alt={mentor.name} className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-700" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-2">{mentor.name}</h3>
                  <p className="text-indigo-600 font-black text-xs tracking-[0.2em] mb-8 uppercase">{mentor.title}</p>
                  <p className="text-slate-500 text-sm leading-relaxed mb-12 flex-grow font-medium opacity-80">{mentor.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white text-slate-500 py-32 border-t border-slate-100 text-center">
        <div className="max-w-7xl mx-auto px-4 space-y-12">
           <div className="text-5xl font-black text-slate-900 tracking-tighter">AI<span className="text-indigo-600">JOB</span></div>
           <div className="flex justify-center gap-8 text-xs font-bold text-slate-400">
             <a href="#" className="hover:text-indigo-600 transition-colors">隱私條款</a>
             <a href="#" className="hover:text-indigo-600 transition-colors">服務協議</a>
             <a href="#" className="hover:text-indigo-600 transition-colors">商務合作</a>
           </div>
           <p className="text-[10px] font-black text-slate-300 tracking-[0.5em] uppercase">© 2024 AIJOB LABS. POWERED BY AI GENERATION.</p>
        </div>
      </footer>

      <AIAgent />
    </div>
  );
};

export default App;

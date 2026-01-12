
import { AIApp, Course, ToolCategory, MarketTrend, Mentor } from './types';

export const AI_APPS: AIApp[] = [
  {
    id: 'app-hr',
    name: 'AI 獵才招募與文案大師',
    category: '招募核心',
    description: '專為 HR 與獵才顧問設計，一鍵生成高轉換率的招募職缺文案與企業品牌故事，精準過濾候選人。',
    tags: ['招募優化', '高轉換率'],
    icon: 'user-plus',
    status: 'Live'
  },
  {
    id: 'app-video',
    name: 'AI 短影音智能體',
    category: '內容行銷',
    description: '全自動生成帳號定位、腳本選題與短影音內容，助理品牌快速獲客。',
    tags: ['自動化', '影音增長'],
    icon: 'film',
    status: 'Live'
  },
  {
    id: 'app-yt',
    name: 'YT 頻道分析助手',
    category: '數據監測',
    description: 'YouTube 頻道大數據分析，洞察競品策略與爆款關鍵字。',
    tags: ['數據分析', '競品監測'],
    icon: 'youtube',
    status: 'Live'
  }
];

export const TOOL_CATEGORIES: ToolCategory[] = [
  { title: '寫作助手', description: '文案生成、SEO優化', icon: 'edit-3', color: 'bg-blue-50 text-blue-600' },
  { title: '影像生成', description: 'AI繪圖、照片處理', icon: 'image', color: 'bg-purple-50 text-purple-600' },
  { title: '影音創作', description: '影片剪輯、AI配音', icon: 'video', color: 'bg-rose-50 text-rose-600' },
  { title: '辦公效率', description: '數據分析、簡報製作', icon: 'layout', color: 'bg-emerald-50 text-emerald-600' },
  { title: '程式開發', description: '代碼生成、技術支援', icon: 'code', color: 'bg-slate-50 text-slate-600' },
  { title: '營銷增長', description: '社群管理、廣告投放', icon: 'rocket', color: 'bg-orange-50 text-orange-600' },
];

export const COURSES: Course[] = [
  {
    id: 'course-marketing',
    title: 'AI 自動化行銷實戰營',
    duration: '掌握行銷全自動化流程',
    level: '專業',
    price: '了解詳情',
    thumbnail: 'https://static.pressplay.cc/static/uploads/timeline/20240327/988458D4DE763C52E9B3901BD3B17743/20240327113645851480.png',
    description: '從內容生成、廣告投放到數據分析，手把手帶您構建不眠不休的 AI 行銷系統。',
    url: 'https://ppa.tw/s/04CADA38'
  },
  {
    id: 'course-senior',
    title: 'AI 樂齡生活：輕鬆學會 ChatGPT',
    duration: '專為樂齡族設計的智慧課',
    level: '入門',
    price: '了解詳情',
    thumbnail: 'https://static.pressplay.cc/static/uploads/timeline/20240105/9284D7F7E04C7410884F268155A03B0A/20240105151240428945.png',
    description: '讓 ChatGPT 成為您的生活好幫手，從寫信、查詢資訊到日常陪伴，輕鬆上手。',
    url: 'https://ppa.tw/s/C1A2F3C6'
  },
  {
    id: 'course-video',
    title: 'AI 短影音智能體課程',
    duration: '腳本選題全自動 & 一年授權',
    level: '進階',
    price: '了解詳情',
    thumbnail: 'https://static.pressplay.cc/static/uploads/timeline/20240522/D838B57069E7238290295627680D9F0B/20240522105943764836.png',
    description: '解決創作瓶頸！利用 AI 智能體自動化腳本撰寫與選題，附帶工具授權。',
    url: 'https://ppa.tw/s/E009BDED'
  }
];

export const MENTORS: Mentor[] = [
  {
    id: 'willy',
    name: 'Willy 柏燁',
    title: '科技教育講師',
    description: '專注於科技教育與創新應用，擁有跨領域教學與實作經驗，擅長以淺顯易懂方式帶領學員理解 AI 與自動化。',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
    socials: {
      instagram: '#',
      website: '#'
    }
  },
  {
    id: 'nick',
    name: 'Nick',
    title: 'ZN Studio 創意實踐者',
    description: '來自 ZN Studio 的創意實踐者，專注於 AI 與內容生產流程，累積多元合作經驗，擅長把工具串接為高效能的製作線，打造穩定輸出。',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400',
    socials: {
      instagram: '#',
      twitter: '#'
    }
  }
];

export const MARKET_TRENDS: MarketTrend[] = [
  { name: 'AI 訓練師', demand: 85, salary: 120 },
  { name: '智能體開發', demand: 95, salary: 150 },
  { name: '提示工程師', demand: 70, salary: 95 },
  { name: '數據科學家', demand: 80, salary: 130 },
  { name: '自動化專員', demand: 90, salary: 110 },
];

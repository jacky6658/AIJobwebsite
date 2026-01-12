
import { AIApp, Course, Job } from './types';

export const AI_APPS: AIApp[] = [
  {
    id: 'app-video',
    name: 'AI 短影音智能體',
    category: 'AI 員工',
    description: '輸入需求即可自動生成帳號定位、腳本選題與短影音腳本。',
    tags: ['短影音'],
    icon: 'toolbox',
    status: 'Live'
  },
  {
    id: 'app-yt',
    name: 'YT 頻道戰情室智能體',
    category: 'AI 員工',
    description: 'YouTube 頻道戰情室：分析爆款、題材與內容策略。',
    tags: ['YouTube', 'YT', '頻道分析'],
    icon: 'toolbox',
    status: 'Live'
  },
  {
    id: 'app-hr',
    name: 'AI 人資招募智能體',
    category: 'AI 員工',
    description: '快速生成職缺描述、面試問題與人才畫像分析。',
    tags: ['HR', '面試題目'],
    icon: 'toolbox',
    status: 'Live'
  }
];

export const JOBS: Job[] = [
  {
    id: '1',
    title: 'AI 提示工程師 (Prompt Engineer)',
    company: 'AIJOB 實驗室',
    logo: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=200',
    salary: '80,000 - 120,000 TWD',
    location: '台北市 (遠端可)',
    category: '技術開發',
    type: '全職',
    description: '負責優化大型語言模型（LLM）的提示詞輸出，提升 AI 智能體在不同商務場景的表現。',
    postedAt: '2 小時前'
  },
  {
    id: '2',
    title: 'AI 產品經理',
    company: '未來科技',
    logo: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=200',
    salary: '70,000 - 100,000 TWD',
    location: '新竹市',
    category: '產品管理',
    type: '全職',
    description: '協調工程團隊與商務團隊，將 AI 技術轉化為可商業化的 SaaS 產品。',
    postedAt: '昨天'
  },
  {
    id: '3',
    title: 'AI 自動化行銷顧問',
    company: '智慧行銷代理',
    logo: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=200',
    salary: '60,000 - 90,000 TWD',
    location: '台中市',
    category: '數位行銷',
    type: '兼職/接案',
    description: '協助客戶建立基於 AI 的自動化行銷工作流，包含內容生成與廣告投放自動化。',
    postedAt: '3 天前'
  }
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

export const MARKET_TRENDS = [
  { name: 'AI 研發', demand: 85, salary: 120 },
  { name: '提示詞工程', demand: 70, salary: 90 },
  { name: 'RAG 系統架構', demand: 90, salary: 130 },
  { name: '智能法律', demand: 45, salary: 95 },
  { name: '行銷自動化', demand: 60, salary: 80 }
];

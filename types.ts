
export interface AIApp {
  id: string;
  name: string;
  category: string;
  description: string;
  tags: string[];
  icon: string;
  status: 'Live' | 'Beta' | 'Internal';
}

export interface Course {
  id: string;
  title: string;
  duration: string;
  level: '入門' | '進階' | '專業';
  price: string;
  thumbnail: string;
  description: string;
  url: string;
}

export interface Mentor {
  id: string;
  name: string;
  title: string;
  description: string;
  avatar: string;
  socials: {
    instagram?: string;
    website?: string;
    twitter?: string;
  };
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface ToolCategory {
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface Job {
  id: string;
  title: string;
  company: string;
  logo: string;
  salary: string;
  location: string;
  category: string;
  type: string;
  description: string;
  postedAt: string;
}

export interface MarketTrend {
  name: string;
  demand: number;
  salary: number;
}


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

// Added Job interface to fix error in JobBoard.tsx
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

// Added MarketTrend interface for MarketTrends component
export interface MarketTrend {
  name: string;
  demand: number;
  salary: number;
}

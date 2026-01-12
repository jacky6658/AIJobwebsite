
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
  url: string; // Added to support external links
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

// Fixed: Added Job interface for JobBoard.tsx
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

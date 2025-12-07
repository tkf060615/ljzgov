
export interface NewsItem {
  id: number;
  title: string;
  date: string;
  category: 'policy' | 'news' | 'notice' | '产业' | '公告' | '文旅' | '政策' | 'Industry' | 'Notice' | 'Tourism' | 'Policy' | '民生' | '荣誉' | 'Public' | 'Honor';
  summary?: string;
  content?: string[];
}

export interface ServiceLink {
  id: number;
  title: string;
  iconName: string;
  description: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
  isError?: boolean;
}

export interface HistoryItem {
  id: string;
  date: string;
  title: string;
  source: string;
  summary: string;
  content: string[];
}

export interface SearchResultItem {
  id: string | number;
  type: SectionType;
  title: string;
  description: string;
  matchType: 'Title' | 'Content' | 'Summary';
}

export interface FutureComparisonItem {
  category: string;
  past: string; // 2025
  future: string; // 2041
}

export enum SectionType {
  HOME = 'home',
  NEWS = 'news',
  SERVICES = 'services',
  TOURISM = 'tourism',
  MAYOR = 'mayor',
  HISTORY = 'history',
  CONTACT = 'contact',
  SEARCH = 'search',
  LEGAL = 'legal',
  OPENGOV = 'opengov',
  FUTURE = 'future'
}

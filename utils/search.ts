
import { translations } from './translations';
import { SectionType, SearchResultItem } from '../types';

export const performSearch = (query: string, lang: string): SearchResultItem[] => {
  if (!query || query.trim().length === 0) return [];

  const t = translations[lang] || translations['EN'];
  const results: SearchResultItem[] = [];
  const lowerQuery = query.toLowerCase().trim();

  // Helper to safely check inclusion
  const matches = (text?: string | string[]) => {
    if (!text) return false;
    if (Array.isArray(text)) {
      return text.some(line => line.toLowerCase().includes(lowerQuery));
    }
    return text.toLowerCase().includes(lowerQuery);
  };

  // 1. Search News
  if (t.news?.items) {
    t.news.items.forEach((item: any) => {
      if (matches(item.title)) {
        results.push({ id: item.id, type: SectionType.NEWS, title: item.title, description: item.summary || '', matchType: 'Title' });
      } else if (matches(item.summary)) {
        results.push({ id: item.id, type: SectionType.NEWS, title: item.title, description: item.summary || '', matchType: 'Summary' });
      } else if (matches(item.content)) {
        results.push({ id: item.id, type: SectionType.NEWS, title: item.title, description: 'Found in article content...', matchType: 'Content' });
      }
    });
  }

  // 2. Search Services
  if (t.services?.items) {
    t.services.items.forEach((item: any, idx: number) => {
      if (matches(item.title) || matches(item.desc)) {
        results.push({ id: idx, type: SectionType.SERVICES, title: item.title, description: item.desc, matchType: 'Title' });
      }
    });
  }

  // 3. Search History
  if (t.history?.items) {
    t.history.items.forEach((item: any) => {
      if (matches(item.title)) {
        results.push({ id: item.id, type: SectionType.HISTORY, title: item.title, description: item.summary, matchType: 'Title' });
      } else if (matches(item.summary)) {
        results.push({ id: item.id, type: SectionType.HISTORY, title: item.title, description: item.summary, matchType: 'Summary' });
      } else if (matches(item.content)) {
        results.push({ id: item.id, type: SectionType.HISTORY, title: item.title, description: 'Found in historical records...', matchType: 'Content' });
      }
    });
  }

  // 4. Search Mayor
  if (t.mayor?.profile) {
    if (matches(t.mayor.profile.name) || matches(t.mayor.profile.desc) || matches(t.mayor.profile.nickname)) {
        results.push({ id: 'profile', type: SectionType.MAYOR, title: t.mayor.title, description: `${t.mayor.profile.name} - ${t.mayor.profile.role}`, matchType: 'Content' });
    }
  }

  // 5. Search Tourism
  if (t.tourism?.labels) {
    const l = t.tourism.labels;
    Object.keys(l).forEach(key => {
        if (typeof l[key] === 'string' && matches(l[key])) {
             results.push({ id: 'main', type: SectionType.TOURISM, title: t.tourism.headline, description: l[key], matchType: 'Content' });
        }
    });
  }

  return results;
};


import React from 'react';
import { ArrowUpRight, ArrowRight, Calendar, ArrowLeft, FileText } from 'lucide-react';
import { translations } from '../utils/translations';
import { NewsItem } from '../types';

interface NewsSectionProps {
  currentLang: string;
  isHome: boolean;
  onNavigate?: (id?: number) => void;
  selectedArticleId?: number | null;
  onCloseDetail?: () => void;
}

const NewsSection: React.FC<NewsSectionProps> = ({ currentLang, isHome, onNavigate, selectedArticleId, onCloseDetail }) => {
  const t = translations[currentLang] || translations['EN'];
  const newsItems: NewsItem[] = t.news.items;
  
  // Find selected article
  const selectedArticle = selectedArticleId ? newsItems.find(i => i.id === selectedArticleId) : null;

  // HOME MODE: Show top 2 items
  if (isHome) {
    const displayItems = newsItems.slice(0, 2);

    return (
      <div className="py-20 bg-slate-50 dark:bg-slate-900 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-end mb-10">
             <div>
                 <h2 className="text-3xl font-serif text-brand-dark dark:text-white mb-2">{t.news.title}</h2>
                 <p className="text-gray-500 dark:text-gray-400 text-sm max-w-md">{t.news.eventDesc}</p>
             </div>
             <button onClick={() => onNavigate && onNavigate()} className="flex items-center gap-2 text-sm font-bold text-brand-accent hover:text-brand-dark dark:hover:text-white transition-colors group">
                 {t.nav.news} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
             </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             {displayItems.map((item, idx) => (
                 <div key={item.id} onClick={() => onNavigate && onNavigate(item.id)} className="group cursor-pointer">
                    <div className="aspect-[16/9] overflow-hidden rounded-lg mb-4 bg-gray-200 dark:bg-gray-800">
                        <img 
                            src={
                                idx === 0 ? "https://picsum.photos/id/10/800/450" : // Nature/Industry
                                "https://picsum.photos/id/16/800/450" // Winter
                            }
                            alt="" 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            referrerPolicy="no-referrer"
                        />
                    </div>
                    <div className="solid-card p-6 rounded-lg group-hover:shadow-card-hover transition-shadow bg-white dark:bg-slate-800">
                        <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-3">
                            <Calendar size={12} />
                            <span>{item.date}</span>
                            <span className="w-px h-3 bg-gray-300 dark:bg-gray-600"></span>
                            <span className="text-brand-accent font-bold uppercase tracking-wider">{item.category}</span>
                        </div>
                        <h3 className="text-xl font-bold text-brand-dark dark:text-gray-100 leading-snug group-hover:text-brand-accent transition-colors mb-2">
                            {item.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                            {item.summary}
                        </p>
                    </div>
                 </div>
             ))}
          </div>
        </div>
      </div>
    );
  }

  // PAGE MODE: DETAIL VIEW (Text Only)
  if (selectedArticle) {
      return (
        <div className="min-h-screen pt-32 pb-24 bg-white dark:bg-slate-900 animate-in fade-in slide-in-from-right-8 duration-300">
            <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
                 <button 
                    onClick={onCloseDetail}
                    className="flex items-center gap-2 mb-8 text-sm font-bold text-gray-500 hover:text-brand-accent transition-colors group"
                >
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    {currentLang.startsWith('ZH') ? '返回列表' : 'Back to List'}
                </button>

                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 p-8 md:p-12">
                    {/* Header Info */}
                    <div className="flex flex-wrap items-center gap-4 mb-8 pb-8 border-b border-gray-100 dark:border-gray-700">
                        <span className="px-3 py-1 rounded bg-blue-50 dark:bg-blue-900/20 text-brand-accent text-sm font-bold uppercase tracking-wider">
                            {selectedArticle.category}
                        </span>
                        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                            <Calendar size={14} />
                            <span>{selectedArticle.date}</span>
                        </div>
                    </div>

                    {/* Title */}
                    <h1 className="text-3xl md:text-5xl font-serif font-bold text-brand-dark dark:text-white leading-tight mb-10">
                        {selectedArticle.title}
                    </h1>

                    {/* Content - No Images */}
                    <div className="prose dark:prose-invert max-w-none space-y-6">
                        {selectedArticle.content ? (
                            selectedArticle.content.map((paragraph, idx) => (
                                <p key={idx} className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 text-justify font-serif indent-8">
                                    {paragraph}
                                </p>
                            ))
                        ) : (
                            <p className="text-gray-500 italic">Content not available.</p>
                        )}
                    </div>

                    <div className="mt-16 pt-8 border-t border-gray-100 dark:border-gray-700 text-center text-sm text-gray-400 italic">
                        — {currentLang.startsWith('ZH') ? '本文完' : 'End of Article'} —
                    </div>
                </div>
            </div>
        </div>
      );
  }

  // PAGE MODE: LIST VIEW
  return (
    <div className="min-h-screen pt-32 pb-24 bg-slate-50 dark:bg-slate-900 animate-in fade-in duration-300">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="mb-16">
             <span className="inline-block px-3 py-1 rounded bg-blue-100 dark:bg-blue-900/40 text-brand-accent font-bold tracking-widest text-xs uppercase mb-4">{t.nav.news}</span>
             <h1 className="text-5xl md:text-6xl font-serif text-brand-dark dark:text-white mb-6">{t.news.press}</h1>
             <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl font-serif italic">
                {t.news.eventDesc}
             </p>
        </div>

        {/* List */}
        <div className="grid grid-cols-1 gap-6 max-w-5xl">
            {newsItems.map((item, idx) => (
                <div 
                    key={item.id} 
                    onClick={() => onNavigate && onNavigate(item.id)}
                    className="group cursor-pointer bg-white dark:bg-slate-800 rounded-xl p-6 md:p-8 border border-gray-200 dark:border-gray-700 hover:border-brand-accent dark:hover:border-brand-accent transition-all hover:shadow-lg flex flex-col md:flex-row gap-6 md:items-center"
                >
                    <div className="flex-1 space-y-3">
                         <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-gray-400">
                            <span className="text-brand-accent">{item.category}</span>
                            <span>•</span>
                            <span>{item.date}</span>
                        </div>
                        <h3 className="text-2xl font-serif font-bold text-brand-dark dark:text-white group-hover:text-brand-accent transition-colors">
                            {item.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-2">
                            {item.summary}
                        </p>
                    </div>
                    <div className="shrink-0 self-start md:self-center">
                        <button className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-gray-400 group-hover:bg-brand-accent group-hover:text-white transition-all">
                            <ArrowRight size={20} />
                        </button>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default NewsSection;

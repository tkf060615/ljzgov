
import React from 'react';
import { translations } from '../utils/translations';
import { FileText, ArrowRight, ArrowLeft } from 'lucide-react';
import { HistoryItem } from '../types';

interface HistoryPageProps {
  currentLang: string;
  selectedArticleId?: string | null;
  onSelectArticle?: (id: string | null) => void;
}

const HistoryPage: React.FC<HistoryPageProps> = ({ currentLang, selectedArticleId, onSelectArticle }) => {
  const t = translations[currentLang] || translations['EN'];
  const h = t.history || {};
  const items = h.items || [];

  const handleReadMore = (id: string) => {
    if (onSelectArticle) onSelectArticle(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    if (onSelectArticle) onSelectArticle(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const selectedArticle = selectedArticleId ? items.find((item: HistoryItem) => item.id === selectedArticleId) : null;

  return (
    <div className="min-h-screen pt-32 pb-24 bg-slate-50 dark:bg-slate-900 animate-in fade-in duration-500">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Header - Always Visible */}
        <div className="mb-16 text-center">
            <span className="inline-block px-3 py-1 rounded bg-red-100 dark:bg-red-900/40 text-red-600 dark:text-red-400 font-bold tracking-widest text-xs uppercase mb-4">
                {t.nav?.history || 'History'}
            </span>
            <h1 className="text-5xl md:text-6xl font-serif text-brand-dark dark:text-white mb-4">
                {h.title || 'Chronicles'}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 font-serif italic">
                {h.subtitle}
            </p>
        </div>

        <div className="max-w-4xl mx-auto">
            
            {/* DETAIL VIEW */}
            {selectedArticle ? (
                <div className="animate-in fade-in slide-in-from-right-8 duration-300">
                    <button 
                        onClick={handleBack}
                        className="flex items-center gap-2 mb-8 text-sm font-bold text-gray-500 hover:text-brand-accent transition-colors group"
                    >
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        {currentLang.startsWith('ZH') ? '返回列表' : 'Back to List'}
                    </button>

                    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-2xl border-t-4 border-red-600 overflow-hidden">
                        <div className="p-8 md:p-12">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="px-3 py-1 rounded bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-sm font-bold uppercase tracking-wider">
                                    {selectedArticle.date}
                                </span>
                                <span className="text-gray-400">|</span>
                                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 font-medium">
                                    <FileText size={16} />
                                    <span>{selectedArticle.source}</span>
                                </div>
                            </div>

                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 dark:text-white leading-tight mb-8">
                                {selectedArticle.title}
                            </h2>
                            
                            <div className="prose dark:prose-invert max-w-none space-y-6">
                                {Array.isArray(selectedArticle.content) && selectedArticle.content.map((paragraph: string, pIdx: number) => {
                                    // Header detection for bolding
                                    const isHeader = paragraph && (
                                        paragraph.match(/^[一二三四五六七八九1-9][、.]/) || 
                                        paragraph.startsWith('——') ||
                                        paragraph.match(/^\d+\./)
                                    );
                                    
                                    return (
                                        <p 
                                            key={pIdx} 
                                            className={`text-lg leading-relaxed text-gray-700 dark:text-gray-300 font-serif text-justify ${isHeader ? 'font-bold text-gray-900 dark:text-white text-xl mt-8 mb-4' : 'indent-8'}`}
                                        >
                                            {paragraph}
                                        </p>
                                    );
                                })}
                            </div>

                            {/* Article Footer */}
                            <div className="mt-12 pt-8 border-t border-gray-100 dark:border-gray-700 text-center text-sm text-gray-400 italic">
                                — {currentLang.startsWith('ZH') ? '本文完' : 'End of Article'} —
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                /* LIST VIEW (TIMELINE) */
                <div className="relative border-l-2 border-red-200 dark:border-red-900/50 pl-8 ml-4 md:ml-0 space-y-16 animate-in fade-in duration-500">
                    {items.map((item: HistoryItem) => (
                        <div key={item.id} className="relative group">
                            {/* Timeline Dot */}
                            <div className="absolute -left-[41px] top-0 w-6 h-6 rounded-full bg-red-600 border-4 border-white dark:border-slate-900 shadow-md group-hover:scale-110 transition-transform duration-300"></div>
                            
                            {/* Date Label */}
                            <div className="flex items-center gap-2 mb-3">
                                <span className="text-sm font-bold text-red-600 dark:text-red-400 uppercase tracking-wider">
                                    {item.date}
                                </span>
                                <span className="h-px w-8 bg-gray-200 dark:bg-gray-700"></span>
                            </div>

                            {/* Summary Card */}
                            <div 
                                onClick={() => handleReadMore(item.id)}
                                className="bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="p-8">
                                    <h2 className="text-2xl font-serif font-bold text-gray-900 dark:text-white leading-snug mb-3 group-hover:text-brand-accent transition-colors">
                                        {item.title}
                                    </h2>
                                    <div className="flex items-center gap-2 text-xs text-gray-400 uppercase tracking-wider mb-6">
                                        <FileText size={12} />
                                        <span>{item.source}</span>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed mb-6 line-clamp-3">
                                        {item.summary}
                                    </p>
                                    <button className="flex items-center gap-2 text-sm font-bold text-brand-accent uppercase tracking-wider group-hover:gap-3 transition-all">
                                        {h.readFull || 'Read Full'} <ArrowRight size={16} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default HistoryPage;

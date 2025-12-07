
import React from 'react';
import { translations } from '../utils/translations';
import { SectionType, FutureComparisonItem } from '../types';
import { ArrowLeft, ArrowRight, Zap, Clock } from 'lucide-react';

interface FuturePageProps {
  currentLang: string;
  onNavigate?: (section: SectionType) => void;
}

const FuturePage: React.FC<FuturePageProps> = ({ currentLang, onNavigate }) => {
  const t = translations[currentLang] || translations['EN'];
  const future = t.future || {};
  const items: FutureComparisonItem[] = future.items || [];
  const cols = future.cols || ['Category', '2025', '2041'];

  return (
    <div className="min-h-screen pt-32 pb-24 bg-slate-900 text-white animate-in fade-in duration-500">
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        
        {/* Header */}
        <div className="mb-16 text-center relative">
            {onNavigate && (
                 <button 
                    onClick={() => onNavigate(SectionType.HOME)}
                    className="md:absolute top-0 left-0 flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-white transition-colors group mb-8 md:mb-0 mx-auto md:mx-0"
                >
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    {currentLang === 'ZH' ? '返回首页' : 'Back to Home'}
                </button>
            )}

            <span className="inline-block px-3 py-1 rounded bg-purple-900/50 text-purple-400 font-bold tracking-widest text-xs uppercase mb-4 border border-purple-500/30">
                {t.nav?.future || 'Future Outlook'}
            </span>
            <h1 className="text-4xl md:text-6xl font-serif text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-blue-200">
                {future.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-serif italic">
                {future.subtitle}
            </p>
        </div>

        {/* Comparison Table / Cards */}
        <div className="max-w-5xl mx-auto rounded-2xl md:shadow-2xl md:border border-gray-700 md:bg-slate-800/50 backdrop-blur-md overflow-hidden">
            
            {/* Desktop Header */}
            <div className="hidden md:grid grid-cols-3 bg-slate-800 border-b border-gray-700 font-bold text-lg">
                <div className="p-6 text-gray-400 uppercase tracking-wider text-sm flex items-center gap-2">
                    {cols[0]}
                </div>
                <div className="p-6 text-gray-400 uppercase tracking-wider text-sm flex items-center gap-2 bg-slate-800/80">
                    <Clock size={16} /> {cols[1]}
                </div>
                <div className="p-6 text-brand-accent uppercase tracking-wider text-sm flex items-center gap-2 bg-brand-accent/10">
                    <Zap size={16} /> {cols[2]}
                </div>
            </div>

            <div className="grid grid-cols-1 divide-y divide-gray-700/50">
                {items.map((item, idx) => (
                    <div key={idx} className="grid grid-cols-1 md:grid-cols-3 hover:bg-white/5 transition-colors group bg-slate-800/30 md:bg-transparent mb-4 md:mb-0 rounded-xl md:rounded-none border border-gray-700 md:border-none overflow-hidden">
                        {/* Category */}
                        <div className="p-5 md:p-6 font-bold text-white md:text-gray-200 flex items-center md:border-r border-gray-700/50 bg-slate-800 md:bg-slate-800/30 text-lg md:text-base border-b md:border-b-0 border-gray-700">
                            {item.category}
                        </div>
                        
                        {/* 2025 (Past) */}
                        <div className="p-5 md:p-6 text-gray-400 leading-relaxed flex flex-col md:flex-row md:items-center md:border-r border-gray-700/50 text-sm md:text-base">
                             <span className="md:hidden text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 flex items-center gap-2">
                                <Clock size={12} /> {cols[1]}
                             </span>
                             {item.past}
                        </div>
                        
                        {/* 2041 (Future) */}
                        <div className="p-5 md:p-6 text-white font-medium leading-relaxed flex flex-col md:flex-row md:items-center bg-brand-accent/5 group-hover:bg-brand-accent/10 transition-colors shadow-[inset_0_0_20px_rgba(2,132,199,0.05)] text-sm md:text-base">
                             <span className="md:hidden text-xs font-bold text-brand-accent uppercase tracking-wider mb-2 flex items-center gap-2">
                                <Zap size={12} /> {cols[2]}
                             </span>
                             {item.future}
                        </div>
                    </div>
                ))}
            </div>
        </div>
        
        <div className="mt-12 md:mt-16 text-center text-gray-500 text-xs md:text-sm">
            <p>数据来源：隆家寨数字公社大数据中心 · 2041年预测模型</p>
        </div>

      </div>
    </div>
  );
};

export default FuturePage;

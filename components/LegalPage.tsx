
import React from 'react';
import { translations } from '../utils/translations';
import { SectionType } from '../types';
import { ArrowLeft, FileText, ChevronRight } from 'lucide-react';

interface LegalPageProps {
  currentLang: string;
  docId: string | null;
  onNavigate: (section: SectionType, id?: string) => void;
}

const LegalPage: React.FC<LegalPageProps> = ({ currentLang, docId, onNavigate }) => {
  const t = translations[currentLang] || translations['EN'];
  const legal = t.legal || {};
  
  // Default to privacy if no ID
  const activeId = docId || 'privacy';
  const data = legal[activeId];

  const handleBack = () => {
    onNavigate(SectionType.HOME);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItemClass = (id: string) => `block w-full text-left px-4 py-3 rounded-lg text-sm font-bold transition-colors ${activeId === id ? 'bg-brand-accent text-white shadow-md' : 'text-gray-600 dark:text-gray-400 hover:bg-slate-100 dark:hover:bg-slate-800'}`;

  return (
    <div className="min-h-screen pt-32 pb-24 bg-slate-50 dark:bg-slate-900 animate-in fade-in duration-500">
      <div className="container mx-auto px-6 lg:px-12">
        <button 
            onClick={handleBack}
            className="flex items-center gap-2 mb-8 text-sm font-bold text-gray-500 hover:text-brand-accent transition-colors group"
        >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            {currentLang.startsWith('ZH') ? '返回首页' : 'Back to Home'}
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4 space-y-2 sticky top-32">
                    <button onClick={() => onNavigate(SectionType.LEGAL, 'privacy')} className={navItemClass('privacy')}>
                        {legal.privacy?.title || 'Privacy Policy'}
                    </button>
                    <button onClick={() => onNavigate(SectionType.LEGAL, 'terms')} className={navItemClass('terms')}>
                        {legal.terms?.title || 'Terms of Use'}
                    </button>
                    <button onClick={() => onNavigate(SectionType.LEGAL, 'sitemap')} className={navItemClass('sitemap')}>
                        {legal.sitemap?.title || 'Sitemap'}
                    </button>
                </div>
            </div>

            {/* Content Area */}
            <div className="lg:col-span-3">
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 p-8 md:p-12 min-h-[500px]">
                    <h1 className="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-100 dark:border-gray-700 pb-4">
                        {data?.title}
                    </h1>

                    {activeId === 'sitemap' ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {data?.links?.map((link: any, idx: number) => (
                                <button 
                                    key={idx}
                                    onClick={() => onNavigate(link.section)}
                                    className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg hover:bg-brand-accent hover:text-white transition-all group"
                                >
                                    <span className="font-bold">{link.label}</span>
                                    <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                </button>
                            ))}
                        </div>
                    ) : (
                        <div className="prose dark:prose-invert max-w-none space-y-4">
                            {data?.content?.map((paragraph: string, idx: number) => (
                                <p key={idx} className="text-gray-600 dark:text-gray-300 leading-relaxed text-justify">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default LegalPage;

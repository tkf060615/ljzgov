
import React from 'react';
import { translations } from '../utils/translations';
import { SectionType } from '../types';

interface FooterProps {
  currentLang: string;
  onNavigate?: (section: SectionType, id?: number | string) => void;
}

const Footer: React.FC<FooterProps> = ({ currentLang, onNavigate }) => {
  const t = translations[currentLang] || translations['EN'];

  const handleLegalClick = (e: React.MouseEvent, index: number) => {
    e.preventDefault();
    if (!onNavigate) return;
    
    // Map index to ID
    const ids = ['privacy', 'terms', 'sitemap'];
    if (ids[index]) {
        onNavigate(SectionType.LEGAL, ids[index]);
    }
  };

  const handleOpenGovClick = (e: React.MouseEvent, index: number) => {
      e.preventDefault();
      if (!onNavigate) return;

      // Check if it is "Future Outlook" (Index 4)
      // The links1 array is: ['Leadership', 'Organization', 'Policies', 'Finance', 'Future Outlook']
      if (index === 4) {
          onNavigate(SectionType.FUTURE);
          return;
      }

      const tabs = ['leadership', 'organization', 'policies', 'finance'];
      if (tabs[index]) {
          onNavigate(SectionType.OPENGOV, tabs[index]);
      }
  };

  return (
    <footer className="relative z-10 bg-slate-100 dark:bg-slate-900 border-t border-gray-200 dark:border-gray-800 mt-auto">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            {/* Brand Column */}
            <div className="lg:col-span-2 space-y-6">
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 bg-brand-dark dark:bg-white rounded-lg flex items-center justify-center text-white dark:text-brand-dark font-serif font-bold text-xl">L</div>
                   <span className="text-xl font-bold tracking-tight uppercase text-brand-dark dark:text-white">
                      {currentLang.startsWith('ZH') ? '隆家寨实验区' : 'Longjiazhai Exp. Zone'}
                   </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-sm">
                    {t.footer.desc}
                </p>
                <div className="pt-4">
                     <button 
                        onClick={() => onNavigate && onNavigate(SectionType.MAYOR)}
                        className="px-5 py-2.5 bg-white dark:bg-slate-800 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-slate-700 text-brand-dark dark:text-white text-xs font-bold uppercase tracking-wider rounded-md transition-colors"
                     >
                        {t.footer.feedback}
                     </button>
                </div>
            </div>

            {/* Links Column 1: Gov Openness + Future */}
            <div>
                <h4 className="font-bold text-brand-dark dark:text-white mb-6 text-sm uppercase tracking-wider">{t.footer.cols[0]}</h4>
                <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
                    {t.footer.links1.map((link: string, i: number) => (
                         <li key={i}>
                             <button 
                                onClick={(e) => handleOpenGovClick(e, i)}
                                className="hover:text-brand-accent transition-colors hover:underline decoration-1 underline-offset-4 text-left"
                             >
                                 {link}
                             </button>
                         </li>
                    ))}
                </ul>
            </div>

            {/* Links Column 2: Contact */}
            <div>
                <h4 className="font-bold text-brand-dark dark:text-white mb-6 text-sm uppercase tracking-wider">{t.footer.cols[1]}</h4>
                <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
                    {t.footer.address.map((line: string, i: number) => (
                        <li key={i}>{line}</li>
                    ))}
                </ul>
            </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-500 dark:text-gray-500 font-medium">
                {t.footer.copyright}
            </p>
            <div className="flex gap-6 text-xs text-gray-500 dark:text-gray-500 font-medium">
                {t.footer.bottomLinks.map((link: string, i: number) => (
                    <button 
                        key={i} 
                        onClick={(e) => handleLegalClick(e, i)}
                        className="hover:text-brand-dark dark:hover:text-white transition-colors"
                    >
                        {link}
                    </button>
                ))}
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

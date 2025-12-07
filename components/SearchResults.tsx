import React from 'react';
import { SectionType, SearchResultItem } from '../types';
import { performSearch } from '../utils/search';
import { ArrowRight, Search, FileText, History, Briefcase, Map, User } from 'lucide-react';
import { translations } from '../utils/translations';

interface SearchResultsProps {
  currentLang: string;
  query: string;
  onNavigate: (section: SectionType, id?: number | string) => void;
}

const SearchResults: React.FC<SearchResultsProps> = ({ currentLang, query, onNavigate }) => {
  const results: SearchResultItem[] = performSearch(query, currentLang);
  const t = translations[currentLang] || translations['EN'];

  const getIcon = (type: SectionType) => {
    switch (type) {
      case SectionType.NEWS: return <FileText size={18} />;
      case SectionType.HISTORY: return <History size={18} />;
      case SectionType.SERVICES: return <Briefcase size={18} />;
      case SectionType.TOURISM: return <Map size={18} />;
      case SectionType.MAYOR: return <User size={18} />;
      default: return <Search size={18} />;
    }
  };

  const getSectionLabel = (type: SectionType) => {
      switch (type) {
        case SectionType.NEWS: return t.nav.news;
        case SectionType.HISTORY: return t.nav.history;
        case SectionType.SERVICES: return t.nav.services;
        case SectionType.TOURISM: return t.nav.tourism;
        case SectionType.MAYOR: return t.footer.feedback;
        default: return 'General';
      }
  };

  return (
    <div className="min-h-screen pt-32 pb-24 bg-slate-50 dark:bg-slate-900 animate-in fade-in duration-500">
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
        
        {/* Header */}
        <div className="mb-12">
            <span className="inline-block px-3 py-1 rounded bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 font-bold tracking-widest text-xs uppercase mb-4">
                {t.nav.search}
            </span>
            <h1 className="text-4xl md:text-5xl font-serif text-brand-dark dark:text-white mb-4">
                "{query}"
            </h1>
            <p className="text-gray-600 dark:text-gray-400 font-serif italic">
                {results.length} result(s) found
            </p>
        </div>

        {/* Results List */}
        <div className="space-y-4">
          {results.length > 0 ? (
            results.map((result, idx) => (
              <div 
                key={`${result.type}-${result.id}-${idx}`}
                onClick={() => onNavigate(result.type, result.id)}
                className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-brand-accent hover:shadow-lg transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-2 mb-2 text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                   {getIcon(result.type)}
                   <span className="text-brand-accent">{getSectionLabel(result.type)}</span>
                   <span className="text-gray-300">|</span>
                   <span>Matched in {result.matchType}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-brand-accent transition-colors">
                  {result.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2">
                  {result.description}
                </p>
                
                <div className="mt-4 flex justify-end">
                    <span className="text-xs font-bold text-gray-400 group-hover:text-brand-accent flex items-center gap-1 transition-colors">
                        View Details <ArrowRight size={12} />
                    </span>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-20 bg-white dark:bg-slate-800 rounded-xl border border-dashed border-gray-300 dark:border-gray-700">
                <Search size={48} className="mx-auto text-gray-300 mb-4" />
                <p className="text-gray-500 text-lg">No results found for "{query}".</p>
                <p className="text-sm text-gray-400 mt-2">Try different keywords or check the spelling.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default SearchResults;

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import NewsSection from './components/NewsSection';
import ServiceGrid from './components/ServiceGrid';
import TourismSection from './components/TourismSection';
import Footer from './components/Footer';
import AiAssistant from './components/AiAssistant';
import MayorPage from './components/MayorPage';
import HistoryPage from './components/HistoryPage';
import SearchResults from './components/SearchResults';
import LegalPage from './components/LegalPage';
import OpenGovPage from './components/OpenGovPage';
import FuturePage from './components/FuturePage';
import { SectionType } from './types';
import { ChevronLeft } from 'lucide-react';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<SectionType>(SectionType.HOME);
  const [currentLang, setCurrentLang] = useState<string>('ZH');
  const [selectedNewsId, setSelectedNewsId] = useState<number | null>(null);
  const [selectedHistoryId, setSelectedHistoryId] = useState<string | null>(null);
  const [selectedLegalId, setSelectedLegalId] = useState<string | null>(null);
  const [selectedOpenGovTab, setSelectedOpenGovTab] = useState<string>('leadership');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Theme State: 'light' | 'dark' | 'system'
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('system');

  // Handle Theme Changes
  useEffect(() => {
    const root = window.document.documentElement;
    const systemQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const applyTheme = () => {
      if (theme === 'dark' || (theme === 'system' && systemQuery.matches)) {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    };

    applyTheme();

    if (theme === 'system') {
      systemQuery.addEventListener('change', applyTheme);
    }

    return () => {
      systemQuery.removeEventListener('change', applyTheme);
    };
  }, [theme]);

  // Cycle through themes: System -> Light -> Dark
  const toggleTheme = () => {
      if (theme === 'system') setTheme('light');
      else if (theme === 'light') setTheme('dark');
      else setTheme('system');
  };

  useEffect(() => {
    // Handle browser back/forward buttons
    const handlePopState = (event: PopStateEvent) => {
      if (event.state && event.state.page) {
        setCurrentPage(event.state.page);
        setSelectedNewsId(event.state.newsId || null);
        setSelectedHistoryId(event.state.historyId || null);
        setSelectedLegalId(event.state.legalId || null);
        setSelectedOpenGovTab(event.state.openGovTab || 'leadership');
        setSearchQuery(event.state.query || '');
      } else {
        setCurrentPage(SectionType.HOME);
        setSelectedNewsId(null);
        setSelectedHistoryId(null);
        setSelectedLegalId(null);
        setSelectedOpenGovTab('leadership');
        setSearchQuery('');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // SCROLL TO TOP ON PAGE CHANGE
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage, selectedNewsId, selectedHistoryId, selectedLegalId, selectedOpenGovTab]);

  const handleNavigate = (page: SectionType, id?: number | string) => {
    setCurrentPage(page);
    
    // Reset selections based on target page
    if (page === SectionType.NEWS && typeof id === 'number') {
        setSelectedNewsId(id);
    } else {
        setSelectedNewsId(null);
    }

    if (page === SectionType.HISTORY && typeof id === 'string') {
       setSelectedHistoryId(id);
    } else {
       setSelectedHistoryId(null);
    }

    if (page === SectionType.LEGAL && typeof id === 'string') {
       setSelectedLegalId(id);
    } else {
       setSelectedLegalId(null);
    }

    if (page === SectionType.OPENGOV && typeof id === 'string') {
        setSelectedOpenGovTab(id);
    }

    // Push state to browser history
    const path = page === SectionType.HOME ? '/' : `/${page}`;
    window.history.pushState({ page, newsId: id, historyId: id, legalId: id, openGovTab: id, query: searchQuery }, '', path);
  };

  const handleSearch = (query: string) => {
      setSearchQuery(query);
      setCurrentPage(SectionType.SEARCH);
      window.history.pushState({ page: SectionType.SEARCH, query }, '', '/search');
  };

  const getBackLabel = () => {
    if (currentLang === 'ZH') return '返回首页';
    return 'Back to Home';
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800 dark:text-gray-100 relative bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      
      {/* Ambient Streaming Light Background Effects */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
          {/* Top Left - Blue/Indigo */}
          <div className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-sky-200/20 dark:bg-indigo-900/10 blur-[100px] animate-float opacity-60"></div>
          
          {/* Middle Right - Purple/Violet */}
          <div className="absolute top-[30%] -right-[10%] w-[40vw] h-[40vw] rounded-full bg-violet-200/20 dark:bg-purple-900/10 blur-[100px] animate-float-delayed opacity-60"></div>
          
          {/* Bottom Left - Teal/Emerald */}
          <div className="absolute -bottom-[20%] left-[20%] w-[45vw] h-[45vw] rounded-full bg-teal-100/30 dark:bg-emerald-900/10 blur-[100px] animate-float opacity-50" style={{ animationDuration: '28s' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col flex-grow">
          <Navbar 
            currentSection={currentPage} 
            onNavigate={(page, id) => handleNavigate(page, id as number)} 
            currentLang={currentLang}
            onLanguageChange={setCurrentLang}
            theme={theme}
            onToggleTheme={toggleTheme}
            onSearch={handleSearch}
          />
          
          <main className="flex-grow relative">
            
            {/* Back Button for Sub-pages - FIXED positioning to stay visible */}
            {currentPage !== SectionType.HOME && !selectedNewsId && !selectedHistoryId && !selectedLegalId && currentPage !== SectionType.OPENGOV && (
                <div className="fixed top-24 left-6 lg:left-12 z-[45] animate-in fade-in slide-in-from-left-4 duration-500">
                    <button 
                        onClick={() => handleNavigate(SectionType.HOME)}
                        className="flex items-center gap-2 px-4 py-2 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-full shadow-lg hover:bg-white dark:hover:bg-slate-700 hover:scale-105 transition-all text-sm font-bold text-gray-600 dark:text-gray-300 group"
                    >
                        <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        {getBackLabel()}
                    </button>
                </div>
            )}

            {currentPage === SectionType.HOME && (
              <>
                <Hero currentLang={currentLang} onSearch={handleSearch} />
                <NewsSection 
                    currentLang={currentLang} 
                    isHome={true} 
                    onNavigate={(id) => handleNavigate(SectionType.NEWS, id)} 
                />
                <ServiceGrid currentLang={currentLang} isHome={true} onNavigate={() => handleNavigate(SectionType.SERVICES)} onSearch={handleSearch} />
                <TourismSection currentLang={currentLang} isHome={true} onNavigate={() => handleNavigate(SectionType.TOURISM)} />
              </>
            )}

            {currentPage === SectionType.SEARCH && (
                <SearchResults 
                    currentLang={currentLang} 
                    query={searchQuery} 
                    onNavigate={handleNavigate} 
                />
            )}

            {currentPage === SectionType.NEWS && (
              <div className="animate-in fade-in duration-300">
                <NewsSection 
                    currentLang={currentLang} 
                    isHome={false} 
                    selectedArticleId={selectedNewsId}
                    onCloseDetail={() => handleNavigate(SectionType.NEWS)}
                    onNavigate={(id) => handleNavigate(SectionType.NEWS, id)}
                />
              </div>
            )}

            {currentPage === SectionType.SERVICES && (
              <div className="animate-in fade-in duration-300">
                <ServiceGrid currentLang={currentLang} isHome={false} onSearch={handleSearch} />
              </div>
            )}

            {currentPage === SectionType.TOURISM && (
              <div className="animate-in fade-in duration-300">
                <TourismSection currentLang={currentLang} isHome={false} />
              </div>
            )}

            {currentPage === SectionType.MAYOR && (
              <div className="animate-in fade-in duration-300">
                <MayorPage currentLang={currentLang} />
              </div>
            )}

            {currentPage === SectionType.HISTORY && (
              <div className="animate-in fade-in duration-300">
                <HistoryPage 
                    currentLang={currentLang} 
                    selectedArticleId={selectedHistoryId}
                    onSelectArticle={(id) => handleNavigate(SectionType.HISTORY, id)}
                />
              </div>
            )}

            {currentPage === SectionType.LEGAL && (
              <div className="animate-in fade-in duration-300">
                <LegalPage 
                    currentLang={currentLang} 
                    docId={selectedLegalId}
                    onNavigate={handleNavigate}
                />
              </div>
            )}

            {currentPage === SectionType.OPENGOV && (
                <div className="animate-in fade-in duration-300">
                    <OpenGovPage 
                        currentLang={currentLang} 
                        initialTab={selectedOpenGovTab}
                        onNavigate={handleNavigate}
                    />
                </div>
            )}

            {currentPage === SectionType.FUTURE && (
                <div className="animate-in fade-in duration-300">
                    <FuturePage 
                        currentLang={currentLang} 
                        onNavigate={handleNavigate}
                    />
                </div>
            )}
          </main>

          <Footer currentLang={currentLang} onNavigate={(page, id) => handleNavigate(page, id as number | string)} />
          <AiAssistant currentLang={currentLang} />
      </div>
    </div>
  );
};

export default App;

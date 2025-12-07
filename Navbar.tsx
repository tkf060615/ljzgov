
import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Search, Globe, ChevronDown, Check, Sun, Moon, Monitor } from 'lucide-react';
import { SectionType } from '../types';
import { translations } from '../utils/translations';

interface NavbarProps {
  currentSection: SectionType;
  onNavigate: (section: SectionType, id?: number) => void;
  currentLang: string;
  onLanguageChange: (lang: string) => void;
  theme: 'light' | 'dark' | 'system';
  onToggleTheme: () => void;
  onSearch?: (query: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentSection, onNavigate, currentLang, onLanguageChange, theme, onToggleTheme, onSearch }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const langMenuRef = useRef<HTMLDivElement>(null);

  const t = translations[currentLang] || translations['EN'];

  const languages = [
    { code: 'ZH', label: '简体中文' },
    { code: 'ZH-TW', label: '繁體中文' },
    { code: 'EN', label: 'English' },
    { code: 'JA', label: '日本語' },
    { code: 'KO', label: '한국어' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // If we are not on HOME, navbar should always have background
      if (currentSection !== SectionType.HOME) {
        setIsScrolled(true);
      } else {
        setIsScrolled(window.scrollY > 20);
      }
    };
    
    // Initial check
    handleScroll();

    const handleClickOutside = (event: MouseEvent) => {
        if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
            setIsLangMenuOpen(false);
        }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
        window.removeEventListener('scroll', handleScroll);
        document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [currentSection]);

  const navItems = [
    { id: SectionType.NEWS, label: t.nav.news },
    { id: SectionType.SERVICES, label: t.nav.services },
    { id: SectionType.TOURISM, label: t.nav.tourism },
    { id: SectionType.HISTORY, label: t.nav.history },
  ];

  const handleSearchSubmit = () => {
      if (searchInput.trim() && onSearch) {
          onSearch(searchInput);
          setShowSearchInput(false);
          setSearchInput('');
      } else {
          setShowSearchInput(!showSearchInput);
      }
  };

  const isHome = currentSection === SectionType.HOME;
  // If scrolled or not on home, use solid background
  const useSolidBg = !isHome || isScrolled;

  // BLURRED NAVBAR STYLES
  // Changed from bg-white to bg-white/80 + backdrop-blur-md
  const navClasses = useSolidBg
    ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm py-3 top-0 border-b border-gray-200/50 dark:border-gray-700/50' 
    : 'bg-transparent py-5 top-0';

  // Text color Logic
  // Solid State: Dark Text (Light Mode), White Text (Dark Mode)
  // Transparent State (Hero): Always White
  const textClasses = useSolidBg 
    ? 'text-slate-800 dark:text-white' 
    : 'text-white';

  const buttonHoverClass = useSolidBg
    ? 'hover:bg-slate-100/50 dark:hover:bg-slate-800/50'
    : 'hover:bg-white/10';

  const getThemeIcon = () => {
      if (theme === 'light') return <Sun size={18} />;
      if (theme === 'dark') return <Moon size={18} />;
      return <Monitor size={18} />;
  };

  return (
    <nav className={`fixed left-0 right-0 z-50 transition-all duration-300 ease-in-out ${navClasses}`}>
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => onNavigate(SectionType.HOME)}>
             <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-xl transition-colors duration-300 ${useSolidBg ? 'bg-brand-accent text-white' : 'bg-white text-brand-dark'}`}>
               L
             </div>
            <div className={`flex flex-col ${textClasses}`}>
              <span className="text-lg font-bold tracking-tight leading-none uppercase font-sans">
                {currentLang.startsWith('ZH') || currentLang === 'JA' ? '隆家寨' : 'Longjiazhai'}
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase opacity-80 mt-1">
                {currentLang.startsWith('ZH') || currentLang === 'JA' ? '实验区人民政府' : 'Experiment Zone Gov'}
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
                {navItems.map((item) => (
                <button
                    key={item.id}
                    onClick={() => onNavigate(item.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${textClasses} ${buttonHoverClass} ${currentSection === item.id ? 'font-bold underline underline-offset-4 decoration-2 decoration-brand-accent' : ''}`}
                >
                    {item.label}
                </button>
                ))}
                <button 
                    onClick={() => {
                        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                    }}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${textClasses} ${buttonHoverClass}`}
                >
                    {t.nav.contact}
                </button>
            
            <div className="flex items-center gap-2 pl-4 border-l border-gray-200/20 ml-2 relative">
                
                {/* Expandable Search */}
                <div className={`flex items-center overflow-hidden transition-all duration-300 ${showSearchInput ? 'w-48 bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-gray-700' : 'w-9'}`}>
                    <button 
                        onClick={handleSearchSubmit}
                        className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all shrink-0 ${textClasses} ${buttonHoverClass}`} 
                        title={t.nav.search}
                    >
                        <Search size={18} strokeWidth={2} className={showSearchInput ? 'text-brand-dark dark:text-white' : ''} />
                    </button>
                    <input 
                        type="text" 
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSearchSubmit()}
                        className={`w-full bg-transparent border-none text-sm text-gray-800 dark:text-white focus:ring-0 px-2 ${showSearchInput ? 'opacity-100' : 'opacity-0'}`}
                        placeholder={t.nav.search}
                    />
                </div>
                
                {/* Theme Toggle */}
                <button 
                    onClick={onToggleTheme}
                    className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all ${textClasses} ${buttonHoverClass}`}
                    title="Toggle Theme"
                >
                    {getThemeIcon()}
                </button>

                {/* Language Dropdown - Solid */}
                <div className="relative" ref={langMenuRef}>
                    <button 
                        onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                        className={`px-3 py-1.5 rounded-lg flex items-center gap-2 text-xs font-bold uppercase tracking-wider transition-all ${textClasses} ${buttonHoverClass} border ${useSolidBg ? 'border-gray-200/50 dark:border-gray-700/50' : 'border-white/30'}`}
                    >
                        <Globe size={14} strokeWidth={2} /> 
                        {currentLang}
                        <ChevronDown size={12} className={`transition-transform duration-300 ${isLangMenuOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {isLangMenuOpen && (
                        <div className="absolute right-0 top-full mt-2 w-40 bg-white dark:bg-slate-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 py-1 overflow-hidden text-gray-800 dark:text-gray-200 z-50">
                             {languages.map((lang, index) => (
                                 <button
                                    key={lang.code}
                                    style={{ animationDelay: `${index * 50}ms` }}
                                    onClick={() => {
                                        onLanguageChange(lang.code);
                                        setIsLangMenuOpen(false);
                                    }}
                                    className={`w-full text-left px-4 py-2 text-sm flex items-center justify-between hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors animate-menu-item ${currentLang === lang.code ? 'text-brand-accent font-bold' : ''}`}
                                 >
                                     {lang.label}
                                     {currentLang === lang.code && <Check size={14} />}
                                 </button>
                             ))}
                        </div>
                    )}
                </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
             <button
                onClick={onToggleTheme}
                className={`p-2 rounded-lg ${textClasses} ${buttonHoverClass}`}
            >
                {getThemeIcon()}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg ${textClasses} ${buttonHoverClass}`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown - Solid */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800 shadow-xl animate-in slide-in-from-top-2">
          <div className="flex flex-col p-6 space-y-2">
             <div className="relative mb-4">
                 <input 
                    type="text" 
                    placeholder={t.nav.search}
                    className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-lg px-4 py-3"
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' && onSearch) {
                            onSearch((e.target as HTMLInputElement).value);
                            setIsMobileMenuOpen(false);
                        }
                    }}
                 />
                 <Search className="absolute right-4 top-3 text-gray-400" size={20} />
             </div>

            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className="text-left text-lg font-medium text-slate-800 dark:text-white hover:text-brand-accent transition-all py-3 border-b border-gray-100 dark:border-gray-800"
              >
                {item.label}
              </button>
            ))}
             <button
                onClick={() => {
                  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                  setIsMobileMenuOpen(false);
                }}
                className="text-left text-lg font-medium text-slate-800 dark:text-white hover:text-brand-accent transition-all py-3 border-b border-gray-100 dark:border-gray-800"
              >
                {t.nav.contact}
              </button>

            {/* Mobile Language Selector */}
            <div className="pt-4">
                <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-3">{t.nav.langLabel}</p>
                <div className="grid grid-cols-2 gap-2">
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => {
                                onLanguageChange(lang.code);
                                setIsMobileMenuOpen(false);
                            }}
                            className={`px-2 py-2 text-xs rounded-lg border text-center transition-colors ${currentLang === lang.code ? 'border-brand-accent text-brand-accent bg-brand-accent/10' : 'border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300'}`}
                        >
                            {lang.label}
                        </button>
                    ))}
                </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

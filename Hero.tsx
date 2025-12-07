
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { translations } from '../utils/translations';

interface HeroProps {
  currentLang: string;
  onSearch: (query: string) => void;
}

const Hero: React.FC<HeroProps> = ({ currentLang, onSearch }) => {
  const t = translations[currentLang] || translations['EN'];
  const [input, setInput] = useState('');

  const handleSearch = () => {
      if (input.trim()) {
          onSearch(input);
      }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === 'Enter') {
          handleSearch();
      }
  };

  return (
    <div className="relative h-[90vh] w-full overflow-hidden flex items-center justify-center bg-slate-900">
      {/* Background Image - Northeast Winter Mountain (Qianshan Vibe) */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
            // Unsplash: Snowy mountains and pine trees
            backgroundImage: `url('https://images.unsplash.com/photo-1498855926480-d98e83099315?q=80&w=2070&auto=format&fit=crop')`,
            opacity: 0.9 
        }}
      ></div>
      
      {/* Solid Gradient Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-transparent to-slate-900/80"></div>

      {/* Content */}
      <div className="relative z-20 max-w-4xl w-full px-4 text-center space-y-10 animate-fade-in-up">
            
            {/* Headlines */}
            <div className="space-y-4">
                <h2 className="inline-block px-4 py-1.5 rounded-full bg-slate-900/60 text-white text-xs md:text-sm font-bold tracking-[0.2em] uppercase border border-white/20 backdrop-blur-sm">
                    {t.hero.welcome}
                </h2>
                <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight tracking-tight drop-shadow-2xl">
                    {t.hero.headline}
                </h1>
            </div>
            
            {/* Solid Search Input */}
            <div className="max-w-2xl mx-auto w-full">
                <div className="relative flex items-center bg-white rounded-lg shadow-2xl overflow-hidden">
                    <Search className="h-5 w-5 text-gray-400 ml-4" />
                    <input 
                        type="text" 
                        className="block w-full px-4 py-4 bg-transparent border-0 text-gray-800 placeholder-gray-400 focus:ring-0 text-lg"
                        placeholder={t.hero.searchPlaceholder}
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                    <button 
                        onClick={handleSearch}
                        className="bg-brand-accent hover:bg-blue-700 text-white px-8 py-4 font-bold transition-colors text-sm uppercase tracking-wide shrink-0"
                    >
                        {t.hero.searchBtn}
                    </button>
                </div>
            </div>

            {/* Quick Links */}
            <div className="pt-2 flex flex-wrap justify-center gap-3 text-sm font-medium">
                <span className="text-white/90 py-1.5 font-bold shadow-black drop-shadow-md">{t.hero.popular}</span>
                {t.hero.tags.map((tag: string) => (
                    <button 
                        key={tag} 
                        onClick={() => onSearch(tag)}
                        className="px-3 py-1.5 rounded-md bg-white/20 hover:bg-white/30 text-white transition-colors border border-white/10 backdrop-blur-sm"
                    >
                        {tag}
                    </button>
                ))}
            </div>
      </div>
    </div>
  );
};

export default Hero;

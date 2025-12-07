import React, { useState } from 'react';
import { ArrowRight, FileText, UserCheck, Thermometer, Briefcase, HeartHandshake, Home, Leaf, ShieldCheck, Search, ExternalLink, AlertCircle, GraduationCap } from 'lucide-react';
import { translations } from '../utils/translations';

interface ServiceGridProps {
  currentLang: string;
  isHome: boolean;
  onNavigate?: (id?: number) => void;
  onSearch?: (query: string) => void;
}

const ServiceGrid: React.FC<ServiceGridProps> = ({ currentLang, isHome, onNavigate, onSearch }) => {
  const t = translations[currentLang] || translations['EN'];
  const [searchInput, setSearchInput] = useState('');
  
  const icons = [FileText, UserCheck, Thermometer, HeartHandshake, Briefcase, Leaf, Home, ShieldCheck, GraduationCap];

  const handleServiceClick = (url?: string) => {
      if (url) {
          window.open(url, '_blank');
      } else {
          if (window.confirm(t.services.redirectConfirm)) {
              window.open('http://www.qianshan.gov.cn/', '_blank');
          }
      }
  };

  const handleSearchSubmit = () => {
      if (searchInput.trim() && onSearch) {
          onSearch(searchInput);
      }
  };

  if (isHome) {
      return (
        <div className="py-20 bg-white dark:bg-slate-800">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                <div className="max-w-2xl">
                    <h2 className="text-3xl font-serif text-brand-dark dark:text-white mb-2">{t.services.title}</h2>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {t.services.subtitle}
                    </p>
                </div>
                <button onClick={() => onNavigate && onNavigate()} className="flex items-center gap-2 text-sm font-bold text-brand-accent hover:text-brand-dark dark:hover:text-white transition-colors mt-4 md:mt-0 group px-5 py-2 bg-slate-100 dark:bg-slate-700 rounded-full">
                    {t.services.allBtn} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform"/>
                </button>
                </div>

                {/* Banner for Qianshan District Redirect */}
                <div className="mb-8 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-lg flex items-start gap-3">
                    <AlertCircle className="text-brand-accent shrink-0 mt-0.5" size={20} />
                    <div>
                        <p className="text-sm text-brand-dark dark:text-gray-200 font-medium">
                            {t.services.notice}
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {t.services.items.slice(0, 4).map((service: any, index: number) => {
                    const Icon = icons[index % icons.length];
                    return (
                        <div 
                            key={index} 
                            onClick={() => handleServiceClick(service.url)}
                            className="solid-card p-6 rounded-lg hover:shadow-card-hover hover:border-brand-accent/50 transition-all duration-300 group cursor-pointer flex flex-col items-center text-center justify-center h-44 relative overflow-hidden"
                        >
                            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <ExternalLink size={14} className="text-gray-400" />
                            </div>
                            <div className="w-14 h-14 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center mb-4 group-hover:bg-brand-accent group-hover:text-white transition-colors duration-300">
                                <Icon className="w-7 h-7 text-slate-600 dark:text-slate-200 group-hover:text-white transition-colors stroke-[1.5]" />
                            </div>
                            <h3 className="text-sm font-bold text-brand-dark dark:text-gray-100">
                                {service.title}
                            </h3>
                        </div>
                    );
                })}
                </div>
            </div>
        </div>
      );
  }

  // Full Page
  return (
    <div className="min-h-screen pt-32 pb-24 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-12">
            <span className="inline-block px-3 py-1 rounded bg-blue-100 dark:bg-blue-900/40 text-brand-accent font-bold tracking-widest text-xs uppercase mb-4">{t.nav.services}</span>
            <h1 className="text-5xl md:text-6xl font-serif text-brand-dark dark:text-white mb-8">{t.services.title}</h1>
            
            {/* Search Bar */}
            <div className="relative max-w-xl mb-10">
                <div className="relative bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 flex items-center">
                    <input 
                        type="text" 
                        placeholder={t.hero.searchPlaceholder} 
                        className="w-full pl-12 pr-4 py-4 bg-transparent border-none text-brand-dark dark:text-white placeholder-gray-400 focus:ring-0 text-lg"
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSearchSubmit()}
                    />
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                </div>
            </div>

            {/* Large Banner */}
            <div className="p-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl flex items-start gap-4 shadow-sm">
                <div className="p-2 bg-blue-100 dark:bg-blue-800 rounded-full text-brand-accent dark:text-blue-300">
                     <AlertCircle size={24} />
                </div>
                <div>
                    <h3 className="text-lg font-bold text-brand-dark dark:text-white mb-1">
                        {currentLang.startsWith('ZH') ? '服务提供方提示' : 'Service Provider Notice'}
                    </h3>
                    <p className="text-brand-primary dark:text-gray-300 leading-relaxed">
                        {t.services.notice}
                    </p>
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.services.items.map((service: any, index: number) => {
            const Icon = icons[index % icons.length];
            return (
                <div 
                    key={index} 
                    onClick={() => handleServiceClick(service.url)}
                    className="solid-card p-8 rounded-lg hover:shadow-card-hover hover:border-brand-accent transition-all duration-300 group cursor-pointer flex flex-col justify-between h-60 bg-white dark:bg-slate-800 relative"
                >
                     <div className="absolute top-4 right-4 text-gray-300 group-hover:text-brand-accent transition-colors">
                        <ExternalLink size={18} />
                    </div>
                    <div>
                        <div className="flex justify-between items-start mb-6">
                            <div className="w-12 h-12 rounded-lg bg-blue-50 dark:bg-slate-700 flex items-center justify-center">
                                <Icon className="w-6 h-6 text-brand-accent dark:text-blue-400" />
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-brand-dark dark:text-gray-100 mb-2">
                            {service.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                            {service.desc}
                        </p>
                    </div>
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-4 group-hover:text-brand-accent transition-colors">
                        {service.url && service.url.includes('uncle-loong') ? (currentLang.startsWith('ZH') ? '直接访问' : 'Visit Now') : (currentLang.startsWith('ZH') ? '前往办理' : 'Go to Service')}
                    </div>
                </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServiceGrid;
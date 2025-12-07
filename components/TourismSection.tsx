
import React from 'react';
import { translations } from '../utils/translations';
import { MapPin, Thermometer, ArrowRight, PlayCircle, ExternalLink } from 'lucide-react';

interface TourismSectionProps {
  currentLang: string;
  isHome: boolean;
  onNavigate?: (id?: number) => void;
}

const TourismSection: React.FC<TourismSectionProps> = ({ currentLang, isHome, onNavigate }) => {
  const t = translations[currentLang] || translations['EN'];
  const labels = t.tourism?.labels || translations['EN'].tourism.labels;
  const spots = t.tourism?.spots || translations['EN'].tourism.spots;
  const links = t.tourism?.links || translations['EN'].tourism.links;

  const openLink = (url: string) => {
    if (url) window.open(url, '_blank');
  };

  if (isHome) {
      return (
        <div className="relative h-[600px] overflow-hidden group cursor-pointer bg-slate-900" onClick={() => onNavigate && onNavigate()}>
            {/* Base Image - Majestic Snowy Peaks */}
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] ease-out group-hover:scale-105" 
                 style={{ backgroundImage: `url('https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=2076&auto=format&fit=crop')` }} // Snowy Mountain
            ></div>
            
            {/* Content Overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-700 flex flex-col items-center justify-center text-center p-6">
                 <span className="inline-block px-3 py-1 mb-4 rounded border border-white/30 bg-white/10 backdrop-blur-md text-white text-xs font-bold uppercase tracking-[0.3em]">
                     {t.tourism.badge}
                 </span>
                 <h2 className="text-5xl md:text-7xl font-serif text-white font-bold mb-6 tracking-tight drop-shadow-lg">
                     {t.tourism.headline}
                 </h2>
                 <p className="max-w-xl text-lg text-white/90 font-medium mb-10 leading-relaxed drop-shadow-md">
                     {t.tourism.desc}
                 </p>
                 <button className="px-8 py-3 bg-white text-brand-dark hover:bg-brand-accent hover:text-white transition-all font-bold uppercase tracking-widest text-sm rounded">
                     {t.tourism.btn1}
                 </button>
            </div>
        </div>
      );
  }

  // Full Page Layout
  return (
    <div className="min-h-screen pt-32 pb-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-20 text-center">
             <span className="inline-block px-3 py-1 rounded bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400 font-bold tracking-widest text-xs uppercase mb-4">{t.nav.tourism}</span>
             <h1 className="text-5xl md:text-6xl font-serif text-brand-dark dark:text-white mb-6">{t.tourism.headline}</h1>
             <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-serif italic">
                 {t.tourism.desc}
             </p>
        </div>

        {/* Cinematic Gallery Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-4">
            {/* Main Item 1 - Qianshan Mountains */}
            <div className="lg:col-span-8 relative h-[500px] group overflow-hidden rounded-2xl cursor-pointer" onClick={() => openLink(links.qianshan)}>
                <img 
                    src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop" 
                    alt="Qianshan" 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90"></div>
                <div className="absolute bottom-0 left-0 p-8 md:p-12 text-white">
                    <div className="flex items-center gap-2 mb-2 text-xs font-bold uppercase tracking-wider text-green-400">
                        <MapPin size={14} />
                        {spots[0]}
                    </div>
                    <h3 className="text-4xl font-serif font-bold mb-3">{labels.nature}</h3>
                    <p className="text-white/80 max-w-md text-sm leading-relaxed mb-4">
                        {labels.natureDesc}
                    </p>
                     <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest border-b border-green-500 pb-1 w-fit group-hover:text-green-400 transition-colors">
                        {labels.viewGuide} <ExternalLink size={12} />
                    </div>
                </div>
            </div>

            {/* Side Item 2 - Hot Springs */}
            <div className="lg:col-span-4 relative h-[500px] group overflow-hidden rounded-2xl cursor-pointer" onClick={() => openLink(links.hotspring)}>
                 <img 
                    src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=800&auto=format&fit=crop" 
                    alt="Hot Spring" 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90"></div>
                <div className="absolute bottom-0 left-0 p-8 text-white">
                    <div className="flex items-center gap-2 mb-2 text-xs font-bold uppercase tracking-wider text-blue-400">
                        <Thermometer size={14} />
                        {spots[1]}
                    </div>
                    <h3 className="text-3xl font-serif font-bold mb-3">{labels.wellness}</h3>
                    <p className="text-white/80 text-sm leading-relaxed mb-4">
                        {labels.wellnessDesc}
                    </p>
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest border-b border-blue-500 pb-1 w-fit group-hover:text-blue-400 transition-colors">
                        {labels.bookVisit} <ExternalLink size={12} />
                    </div>
                </div>
            </div>
        </div>

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             {/* Ski Resort */}
             <div className="relative h-64 group overflow-hidden rounded-2xl cursor-pointer" onClick={() => openLink(links.ski)}>
                <img 
                    src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=800&auto=format&fit=crop" 
                    alt="Ski" 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                />
                 <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors"></div>
                 <div className="absolute bottom-6 left-6 text-white">
                     <h4 className="text-xl font-bold mb-1">{labels.ski}</h4>
                     <div className="flex items-center gap-2 text-xs opacity-75 group-hover:opacity-100"><PlayCircle size={14}/> {labels.more}</div>
                 </div>
                 <div className="absolute top-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                     <ExternalLink size={18} />
                 </div>
             </div>
             
             {/* Science Museum */}
             <div className="relative h-64 group overflow-hidden rounded-2xl cursor-pointer" onClick={() => openLink(links.museum)}>
                <img 
                    src="https://picsum.photos/seed/science/800/600" 
                    alt="Science" 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                />
                 <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors"></div>
                 <div className="absolute bottom-6 left-6 text-white">
                     <h4 className="text-xl font-bold mb-1">{labels.museum}</h4>
                     <div className="flex items-center gap-2 text-xs opacity-75 group-hover:opacity-100"><PlayCircle size={14}/> {labels.more}</div>
                 </div>
                 <div className="absolute top-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                     <ExternalLink size={18} />
                 </div>
             </div>
        </div>
      </div>
    </div>
  );
};

export default TourismSection;

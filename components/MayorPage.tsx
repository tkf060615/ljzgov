
import React, { useState } from 'react';
import { translations } from '../utils/translations';
import { Copy, Check, MessageCircle } from 'lucide-react';

interface MayorPageProps {
  currentLang: string;
}

const MayorPage: React.FC<MayorPageProps> = ({ currentLang }) => {
  const t = translations[currentLang] || translations['EN'];
  const m = t.mayor;
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(m.contact.id);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen pt-32 pb-24 bg-slate-50 dark:bg-slate-900 animate-in fade-in duration-500">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 text-center">
            <span className="inline-block px-3 py-1 rounded bg-red-100 dark:bg-red-900/40 text-red-600 dark:text-red-400 font-bold tracking-widest text-xs uppercase mb-4">
                {t.nav.contact}
            </span>
            <h1 className="text-5xl md:text-6xl font-serif text-brand-dark dark:text-white mb-4">
                {m.title}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 font-serif italic">
                {m.subtitle}
            </p>
        </div>

        <div className="max-w-3xl mx-auto">
            {/* Profile Card - Single Column Centered */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700">
                <div className="p-10 md:p-16 flex flex-col items-center text-center">
                    <div className="mb-8">
                         <h2 className="text-4xl font-serif font-bold text-brand-dark dark:text-white mb-2">{m.profile.name}</h2>
                         <p className="text-brand-accent font-bold uppercase tracking-wider text-xs">{m.profile.role}</p>
                    </div>

                    <div className="space-y-6 mb-10">
                        <div className="flex items-center justify-center gap-4">
                            <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-bold">
                                {m.profile.birth}
                            </span>
                            <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-xs font-bold">
                                {m.profile.nickname}
                            </span>
                        </div>
                        
                        <p className="text-xl text-gray-600 dark:text-gray-300 italic leading-relaxed font-serif">
                            {m.profile.desc}
                        </p>
                    </div>

                    {/* Contact */}
                    <div className="w-full max-w-md bg-slate-50 dark:bg-slate-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700 text-left">
                             <div className="flex items-center gap-2 mb-3 text-brand-accent font-bold uppercase tracking-wider text-xs">
                                <MessageCircle size={14} />
                                {m.contact.method}
                             </div>
                             
                             <div className="flex items-center gap-2 mb-4">
                                 <code className="flex-1 block p-3 bg-white dark:bg-slate-800 rounded border border-gray-200 dark:border-gray-600 font-mono text-sm text-gray-600 dark:text-gray-300 break-all">
                                     {m.contact.id}
                                 </code>
                                 <button 
                                    onClick={handleCopy}
                                    className="p-3 bg-brand-accent text-white rounded hover:bg-blue-600 transition-colors shadow-sm"
                                    title={m.contact.copy}
                                 >
                                     {copied ? <Check size={18} /> : <Copy size={18} />}
                                 </button>
                             </div>
                             
                             <p className="text-xs text-gray-400">
                                 {copied ? <span className="text-green-500 font-bold">{m.contact.copied}</span> : m.contact.note}
                             </p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default MayorPage;

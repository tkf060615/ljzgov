
import React, { useState, useEffect } from 'react';
import { translations } from '../utils/translations';
import { User, Building, FileText, PieChart, Phone, ArrowLeft, Download } from 'lucide-react';
import { SectionType } from '../types';

interface OpenGovPageProps {
  currentLang: string;
  initialTab?: string;
  onNavigate: (section: SectionType) => void;
}

const OpenGovPage: React.FC<OpenGovPageProps> = ({ currentLang, initialTab, onNavigate }) => {
  const t = translations[currentLang] || translations['EN'];
  const gov = t.opengov || {};
  
  const [activeTab, setActiveTab] = useState('leadership');
  const [selectedDoc, setSelectedDoc] = useState<any | null>(null);

  useEffect(() => {
    if (initialTab && ['leadership', 'organization', 'policies', 'finance'].includes(initialTab)) {
        setActiveTab(initialTab);
        setSelectedDoc(null);
    }
  }, [initialTab]);

  const tabs = [
    { id: 'leadership', label: gov.tabs?.leadership, icon: User },
    { id: 'organization', label: gov.tabs?.organization, icon: Building },
    { id: 'policies', label: gov.tabs?.policies, icon: FileText },
    { id: 'finance', label: gov.tabs?.finance, icon: PieChart },
  ];

  const handleDocClick = (doc: any) => {
      setSelectedDoc(doc);
      window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closeDetail = () => {
      setSelectedDoc(null);
  };

  return (
    <div className="min-h-screen pt-32 pb-24 bg-slate-50 dark:bg-slate-900 animate-in fade-in duration-500">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="mb-12">
            <button 
                onClick={() => onNavigate(SectionType.HOME)}
                className="flex items-center gap-2 mb-6 text-sm font-bold text-gray-500 hover:text-brand-accent transition-colors group"
            >
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                {currentLang.startsWith('ZH') ? '返回首页' : 'Back to Home'}
            </button>
            <span className="inline-block px-3 py-1 rounded bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-400 font-bold tracking-widest text-xs uppercase mb-4">
                {gov.title}
            </span>
            <h1 className="text-4xl md:text-5xl font-serif text-brand-dark dark:text-white mb-4">
                {gov.subtitle}
            </h1>
        </div>

        {/* Tabs Navigation (Hide if detail view open) */}
        {!selectedDoc && (
            <div className="flex flex-wrap gap-2 mb-10 border-b border-gray-200 dark:border-gray-700 pb-1">
                {tabs.map((tab) => {
                    const Icon = tab.icon;
                    const isActive = activeTab === tab.id;
                    return (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center gap-2 px-6 py-3 rounded-t-lg font-bold text-sm transition-all relative ${isActive ? 'bg-white dark:bg-slate-800 text-brand-accent border-t border-x border-gray-200 dark:border-gray-700 z-10' : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-white/50 dark:hover:bg-slate-800/50'}`}
                        >
                            <Icon size={16} />
                            {tab.label}
                            {isActive && <div className="absolute bottom-[-5px] left-0 right-0 h-[5px] bg-white dark:bg-slate-800"></div>}
                        </button>
                    );
                })}
            </div>
        )}

        {/* Content Area */}
        <div className="bg-white dark:bg-slate-800 rounded-b-xl rounded-tr-xl shadow-sm border border-gray-200 dark:border-gray-700 p-8 min-h-[500px]">
            
            {/* Detail View for Policies/Finance */}
            {selectedDoc && (
                <div className="animate-in fade-in slide-in-from-right-8">
                     <button 
                        onClick={closeDetail}
                        className="flex items-center gap-2 mb-8 text-sm font-bold text-gray-500 hover:text-brand-accent transition-colors group"
                    >
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        {currentLang.startsWith('ZH') ? '返回列表' : 'Back to List'}
                    </button>

                    <div className="max-w-4xl mx-auto border border-gray-200 dark:border-gray-700 p-8 md:p-12 shadow-sm rounded-lg">
                        <div className="text-center mb-10 pb-6 border-b-2 border-red-600">
                             <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-dark dark:text-white mb-4">{selectedDoc.title}</h2>
                             <div className="flex justify-center gap-6 text-sm text-gray-500 font-mono">
                                 {selectedDoc.id && <span>{selectedDoc.id}</span>}
                                 <span>{selectedDoc.date}</span>
                                 {selectedDoc.dept && <span>{selectedDoc.dept}</span>}
                             </div>
                        </div>
                        <div className="prose dark:prose-invert max-w-none">
                            {Array.isArray(selectedDoc.content) ? selectedDoc.content.map((p: string, i: number) => (
                                <p key={i} className="text-lg leading-relaxed mb-4 text-justify font-serif">
                                    {p}
                                </p>
                            )) : (
                                <p className="italic text-gray-400">Content loading...</p>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* Leadership Tab */}
            {!selectedDoc && activeTab === 'leadership' && (
                <div className="flex justify-center animate-in fade-in slide-in-from-bottom-4">
                    {gov.leadership?.slice(0, 1).map((leader: any, idx: number) => (
                        <div key={idx} className="flex flex-col items-center text-center p-12 rounded-xl border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow max-w-2xl">
                             {/* No Image as requested */}
                            <div className="w-24 h-24 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-brand-accent mb-6">
                                <User size={40} />
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold text-brand-dark dark:text-white mb-2">{leader.name}</h3>
                                <p className="text-brand-accent font-bold text-lg mb-6 uppercase tracking-wider">{leader.title}</p>
                                <div className="text-base text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg">
                                    <span className="font-bold block mb-2 text-gray-800 dark:text-gray-200">工作分工：</span>
                                    {leader.duty}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Organization Tab */}
            {!selectedDoc && activeTab === 'organization' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4">
                    {gov.organization?.map((org: any, idx: number) => (
                        <div key={idx} className="p-6 rounded-xl bg-slate-50 dark:bg-slate-700/30 border border-gray-200 dark:border-gray-700 hover:border-brand-accent transition-colors">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent">
                                    <Building size={20} />
                                </div>
                                <h3 className="font-bold text-lg text-brand-dark dark:text-white">{org.name}</h3>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 h-20 overflow-hidden text-ellipsis">
                                {org.duty}
                            </p>
                            <div className="flex items-center gap-2 text-xs font-mono text-gray-500">
                                <Phone size={12} />
                                {org.tel}
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Policies Tab */}
            {!selectedDoc && activeTab === 'policies' && (
                <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4">
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="text-xs text-gray-500 uppercase bg-gray-50 dark:bg-slate-700/50">
                                <tr>
                                    <th className="px-6 py-3">文件名称</th>
                                    <th className="px-6 py-3">文号</th>
                                    <th className="px-6 py-3">发布日期</th>
                                    <th className="px-6 py-3">发文机构</th>
                                </tr>
                            </thead>
                            <tbody>
                                {gov.policies?.map((doc: any, idx: number) => (
                                    <tr 
                                        key={idx} 
                                        onClick={() => handleDocClick(doc)}
                                        className="bg-white dark:bg-slate-800 border-b border-gray-100 dark:border-gray-700 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors cursor-pointer group"
                                    >
                                        <td className="px-6 py-4 font-medium text-brand-dark dark:text-white group-hover:text-brand-accent">
                                            {doc.title}
                                        </td>
                                        <td className="px-6 py-4 font-mono text-gray-500">{doc.id}</td>
                                        <td className="px-6 py-4 text-gray-500">{doc.date}</td>
                                        <td className="px-6 py-4">
                                            <span className="px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-xs font-bold">
                                                {doc.type}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            {/* Finance Tab */}
            {!selectedDoc && activeTab === 'finance' && (
                <div className="animate-in fade-in slide-in-from-bottom-4">
                     <div className="space-y-4">
                        {gov.finance?.map((item: any, idx: number) => (
                            <div 
                                key={idx} 
                                onClick={() => handleDocClick(item)}
                                className="flex items-center justify-between p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow bg-white dark:bg-slate-800 cursor-pointer group"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 shrink-0">
                                        <PieChart size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-800 dark:text-white mb-1 group-hover:text-brand-accent transition-colors">{item.title}</h4>
                                        <div className="flex items-center gap-3 text-xs text-gray-500">
                                            <span>发布部门：{item.dept}</span>
                                            <span>•</span>
                                            <span>{item.date}</span>
                                        </div>
                                    </div>
                                </div>
                                <button className="p-2 text-gray-400 group-hover:text-brand-accent transition-colors">
                                    <Download size={20} />
                                </button>
                            </div>
                        ))}
                     </div>
                </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default OpenGovPage;

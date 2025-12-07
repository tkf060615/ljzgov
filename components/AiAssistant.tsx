import React, { useState, useRef, useEffect } from 'react';
import { Send, X, Sparkles, Loader2, Minimize2 } from 'lucide-react';
import { ChatMessage } from '../types';
import { sendMessageToGemini } from '../services/geminiService';
import { translations } from '../utils/translations';

interface AiAssistantProps {
    currentLang: string;
}

const AiAssistant: React.FC<AiAssistantProps> = ({ currentLang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const t = translations[currentLang] || translations['EN'];

  // Reset welcome message when language changes
  useEffect(() => {
      setMessages([{ role: 'model', text: t.ai.welcome, timestamp: Date.now() }]);
  }, [currentLang, t.ai.welcome]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: input, timestamp: Date.now() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const responseText = await sendMessageToGemini(userMsg.text, currentLang);
      const botMsg: ChatMessage = { role: 'model', text: responseText, timestamp: Date.now() };
      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: t.ai.connectionError, timestamp: Date.now(), isError: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleClose = () => {
      setIsClosing(true);
      // Wait for animation
      setTimeout(() => {
          setIsOpen(false);
          setIsClosing(false);
      }, 300); 
  };

  const handleOpen = () => {
      setIsOpen(true);
  };

  return (
    <>
      {/* Floating Button - Animated Transition */}
      {/* The button now reappears immediately when closing starts to create a morph effect */}
      <button
        onClick={handleOpen}
        className={`fixed bottom-8 right-8 w-14 h-14 rounded-full bg-brand-accent hover:bg-blue-700 shadow-2xl z-[60] transition-all duration-300 flex items-center justify-center text-white ${isOpen && !isClosing ? 'scale-0 opacity-0 pointer-events-none' : 'scale-100 opacity-100 hover:scale-105'}`}
        title={t.ai.title}
      >
        <Sparkles size={24} />
      </button>

      {/* Chat Window - Animated */}
      {(isOpen || isClosing) && (
        <div 
            className={`fixed bottom-8 right-8 w-[90vw] md:w-[380px] h-[600px] bg-white dark:bg-slate-900 rounded-xl shadow-2xl flex flex-col z-[60] overflow-hidden font-sans border border-gray-200 dark:border-gray-700 origin-bottom-right transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${isClosing ? 'scale-50 opacity-0 translate-y-20' : 'scale-100 opacity-100 translate-y-0'}`}
            style={{ 
                animation: !isClosing ? 'popIn 0.4s cubic-bezier(0.16, 1, 0.3, 1)' : 'none' 
            }}
        >
          
          {/* Header */}
          <div className="bg-slate-50 dark:bg-slate-800 p-4 flex justify-between items-center sticky top-0 z-10 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-brand-accent flex items-center justify-center shadow-sm">
                  <Sparkles size={16} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-slate-800 dark:text-white text-sm">{t.ai.title}</h3>
                <p className="text-xs text-green-600 dark:text-green-400 flex items-center gap-1 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span> {t.ai.status}
                </p>
              </div>
            </div>
            {/* Top Close button removed as requested, moved to bottom */}
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-5 space-y-6 bg-white dark:bg-slate-900 scroll-smooth">
            <div className="text-center text-xs text-gray-400 py-2">{t.ai.today}</div>
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
              >
                {msg.role === 'model' && (
                    <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0 text-brand-accent border border-gray-200 dark:border-gray-700">
                        <Sparkles size={14} />
                    </div>
                )}
                <div
                  className={`max-w-[80%] p-3.5 rounded-lg text-sm leading-relaxed shadow-sm ${
                    msg.role === 'user'
                      ? 'bg-brand-accent text-white rounded-tr-none'
                      : 'bg-slate-50 dark:bg-slate-800 text-gray-800 dark:text-gray-100 rounded-tl-none border border-gray-200 dark:border-gray-700'
                  } ${msg.isError ? 'bg-red-50 text-red-600 border border-red-200' : ''}`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex items-center gap-2 text-gray-500 text-xs ml-11">
                <Loader2 size={14} className="animate-spin" />
                <span>{t.ai.thinking}</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-gray-700">
            <div className="relative flex items-center gap-2">
              
              {/* Bottom Left Close Button */}
              <button 
                  onClick={handleClose} 
                  className="p-3 rounded-lg bg-gray-100 dark:bg-slate-800 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors shrink-0"
                  title="Close"
              >
                <Minimize2 size={18} />
              </button>

              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={t.ai.placeholder}
                className="w-full bg-slate-50 dark:bg-slate-800 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-brand-accent focus:border-transparent text-slate-800 dark:text-white transition-all placeholder-gray-400"
                disabled={isLoading}
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className={`p-3 rounded-lg transition-all ${
                  input.trim() && !isLoading 
                    ? 'bg-brand-accent text-white hover:bg-blue-600' 
                    : 'bg-gray-100 dark:bg-slate-800 text-gray-400 cursor-not-allowed'
                }`}
              >
                <Send size={18} />
              </button>
            </div>
            <div className="mt-2 text-center">
                 <span className="text-[10px] text-gray-400 font-medium">{t.ai.powered}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AiAssistant;
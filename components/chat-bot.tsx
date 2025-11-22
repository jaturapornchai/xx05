'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Loader2, Bot, Maximize2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [sizeMode, setSizeMode] = useState<0 | 1 | 2>(0); // 0: Small, 1: Medium, 2: Large
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'สวัสดีครับ มีอะไรให้ผมช่วยค้นหาในระบบสหกรณ์ไหมครับ?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleSize = () => {
    setSizeMode((prev) => (prev + 1) % 3 as 0 | 1 | 2);
  };

  const getSizeClasses = () => {
    switch (sizeMode) {
      case 1:
        return 'w-[600px] h-[700px]';
      case 2:
        return 'w-[90vw] h-[85vh]';
      default:
        return 'w-96 h-[500px]';
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userMessage,
          history: messages.filter(m => m.role !== 'assistant' || m.content !== 'สวัสดีครับ มีอะไรให้ผมช่วยค้นหาในระบบสหกรณ์ไหมครับ?'), // Send history excluding initial greeting if needed, or just send all
        }),
      });

      if (!response.ok) throw new Error('Failed to fetch response');

      const data = await response.json();
      setMessages((prev) => [...prev, { role: 'assistant', content: data.content }]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: 'ขออภัยครับ เกิดข้อผิดพลาดในการเชื่อมต่อ' },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={cn(
              "fixed bottom-20 right-6 z-50 bg-white rounded-xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden font-sans transition-all duration-300 ease-in-out",
              getSizeClasses()
            )}
          >
            {/* Header */}
            <div className="bg-[#354a5f] p-4 flex items-center justify-between text-white">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-white/10 rounded-lg">
                  <Bot size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Smart Assistant</h3>
                  <p className="text-xs text-blue-200">Powered by Gemini AI</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={toggleSize}
                  className="p-1 hover:bg-white/10 rounded-lg transition-colors"
                  title="ปรับขนาดหน้าต่าง"
                >
                  <Maximize2 size={18} />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={cn(
                    'flex w-full',
                    msg.role === 'user' ? 'justify-end' : 'justify-start'
                  )}
                >
                  <div
                    className={cn(
                      'max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm',
                      msg.role === 'user'
                        ? 'bg-[#0a6ed1] text-white rounded-br-none'
                        : 'bg-white text-slate-700 border border-slate-200 rounded-bl-none'
                    )}
                  >
                    {msg.role === 'assistant' ? (
                      <div
                        className="space-y-2 text-sm [&>ul]:list-disc [&>ul]:pl-4 [&>ol]:list-decimal [&>ol]:pl-4 [&>p]:mb-1 [&_b]:font-semibold [&_strong]:font-semibold [&_table]:w-full [&_table]:border-collapse [&_table]:border [&_table]:border-slate-200 [&_table]:mt-2 [&_th]:bg-slate-100 [&_th]:p-2 [&_th]:text-left [&_th]:font-semibold [&_th]:border [&_th]:border-slate-200 [&_td]:p-2 [&_td]:border [&_td]:border-slate-200"
                        dangerouslySetInnerHTML={{ __html: msg.content }}
                      />
                    ) : (
                      msg.content
                    )}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white p-3 rounded-2xl rounded-bl-none border border-slate-200 shadow-sm">
                    <Loader2 className="w-5 h-5 animate-spin text-[#0a6ed1]" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-3 bg-white border-t border-slate-200">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="พิมพ์คำถามของคุณ..."
                  className="flex-1 px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-full text-sm text-slate-900 focus:outline-none focus:border-[#0a6ed1] focus:ring-1 focus:ring-[#0a6ed1] transition-all"
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="p-2.5 bg-[#0a6ed1] text-white rounded-full hover:bg-[#0854a0] disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm"
                >
                  <Send size={18} />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 p-4 bg-[#0a6ed1] text-white rounded-full shadow-lg hover:bg-[#0854a0] hover:shadow-xl transition-all"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>
    </>
  );
}

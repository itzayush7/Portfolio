import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Sparkles, Trash2 } from 'lucide-react';
import { useChat } from '../../context/ChatContext';
import clsx from 'clsx';

const quickReplies = [
  "Tell me about your projects",
  "What technologies do you use?",
  "How can I contact you?"
];

export default function Chatbot() {
  const { messages, isOpen, isTyping, toggleChat, sendMessage, clearChat } = useChat();
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, isOpen]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    sendMessage(inputText.trim());
    setInputText('');
  };

  const handleQuickReply = (text) => {
    sendMessage(text);
  };

  return (
    <>
      {/* Chat Trigger Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={toggleChat}
            className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-white shadow-lg flex items-center justify-center hover:bg-primary-dark transition-colors"
          >
            <MessageSquare size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 z-50 w-[350px] max-w-[calc(100vw-3rem)] max-h-[600px] h-[calc(100vh-6rem)] glass dark:glass-dark rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-white/20"
          >
            {/* Header */}
            <div className="bg-primary/10 border-b border-primary/20 p-4 flex items-center justify-between backdrop-blur-md">
              <div className="flex items-center space-x-2">
                <Sparkles size={20} className="text-primary" />
                <span className="font-semibold text-slate-800 dark:text-white">AI Assistant</span>
              </div>
              <div className="flex items-center space-x-2">
                <button 
                  onClick={clearChat}
                  className="p-1 hover:bg-red-500/20 rounded-md transition-colors text-slate-500 hover:text-red-500"
                  title="Clear Chat"
                >
                  <Trash2 size={18} />
                </button>
                <button 
                  onClick={toggleChat}
                  className="text-slate-500 hover:text-slate-800 dark:hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth">
              {messages.map((msg, idx) => (
                <div 
                  key={idx} 
                  className={clsx(
                    "flex w-full",
                    msg.sender === 'user' ? "justify-end" : "justify-start"
                  )}
                >
                  <div 
                    className={clsx(
                      "max-w-[85%] px-4 py-2 rounded-2xl text-sm",
                      msg.sender === 'user' 
                        ? "bg-primary text-white rounded-tr-sm" 
                        : "bg-slate-100 dark:bg-white/10 text-slate-800 dark:text-slate-200 rounded-tl-sm"
                    )}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="max-w-[85%] px-4 py-3 rounded-2xl bg-slate-100 dark:bg-white/10 rounded-tl-sm flex space-x-1.5 items-center">
                    <motion.div className="w-1.5 h-1.5 bg-slate-400 rounded-full" animate={{ y: [0, -5, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0 }} />
                    <motion.div className="w-1.5 h-1.5 bg-slate-400 rounded-full" animate={{ y: [0, -5, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }} />
                    <motion.div className="w-1.5 h-1.5 bg-slate-400 rounded-full" animate={{ y: [0, -5, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }} />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            {messages.length === 1 && (
              <div className="px-4 pb-2 flex flex-col space-y-2">
                {quickReplies.map((reply, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleQuickReply(reply)}
                    className="text-xs text-left px-3 py-2 rounded-lg border border-primary/30 text-primary hover:bg-primary hover:text-white transition-colors"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            )}

            {/* Input Form */}
            <form onSubmit={handleSend} className="p-4 border-t border-slate-200 dark:border-white/10 flex items-center space-x-2 bg-white/50 dark:bg-black/50">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Ask me anything..."
                className="flex-1 bg-transparent border-none focus:outline-none text-sm dark:text-white placeholder-slate-400"
              />
              <button 
                type="submit"
                disabled={!inputText.trim()}
                className="p-2 rounded-full bg-primary text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary-dark transition-colors flex-shrink-0"
              >
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

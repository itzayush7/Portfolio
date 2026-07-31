import { motion } from 'framer-motion';
import { Mail, Code, User, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      e.target.reset();
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="glass dark:glass-dark rounded-2xl p-8 transform-gpu hover:-translate-y-1 transition-all">
              <h3 className="text-2xl font-bold mb-6 text-slate-800 dark:text-white">Let's Connect</h3>
              
              <div className="flex flex-col space-y-6">
                <a href="mailto:mishraayush986@gmail.com" className="flex items-center space-x-4 text-slate-600 dark:text-slate-400 hover:text-primary transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 dark:text-white group-hover:text-primary transition-colors">Email</h4>
                    <span>mishraayush986@gmail.com</span>
                  </div>
                </a>

                <a href="https://www.linkedin.com/in/ayush-mishra-040a3b261" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 text-slate-600 dark:text-slate-400 hover:text-primary transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                    <User size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 dark:text-white group-hover:text-primary transition-colors">LinkedIn</h4>
                    <span>Ayush Mishra</span>
                  </div>
                </a>

                <a href="https://github.com/itzayush7" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 text-slate-600 dark:text-slate-400 hover:text-primary transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                    <Code size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 dark:text-white group-hover:text-primary transition-colors">GitHub</h4>
                    <span>@itzayush7</span>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6 glass dark:glass-dark rounded-2xl p-8 relative overflow-hidden">
              {submitted && (
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  className="absolute inset-0 bg-white/90 dark:bg-black/90 backdrop-blur-sm z-10 flex flex-col items-center justify-center rounded-2xl"
                >
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4 text-white">
                    <Send size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-green-500">Message Sent!</h3>
                  <p className="text-slate-600 dark:text-slate-400 mt-2">I'll get back to you soon.</p>
                </motion.div>
              )}

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Name</label>
                <input 
                  type="text" 
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-black/20 border border-slate-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all dark:text-white placeholder-slate-400"
                  placeholder="Your Name"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Email</label>
                <input 
                  type="email" 
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-black/20 border border-slate-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all dark:text-white placeholder-slate-400"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Message</label>
                <textarea 
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-black/20 border border-slate-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none dark:text-white placeholder-slate-400"
                  placeholder="How can we help you?"
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-primary hover:bg-primary-dark text-white font-semibold flex items-center justify-center space-x-2 transition-all shadow-[0_4px_14px_0_rgba(155,135,245,0.39)] hover:shadow-[0_6px_20px_rgba(155,135,245,0.23)] hover:-translate-y-0.5 disabled:opacity-70"
              >
                {isSubmitting ? (
                  <span className="animate-pulse">Sending...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

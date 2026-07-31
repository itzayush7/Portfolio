import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import Canvas3D from './Canvas3D';
import { ArrowRight, MapPin, Code2, FileDown } from 'lucide-react';
import profilePhoto from '../assets/profile.jpg';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* 3D Canvas Background — subtle, behind everything */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <Canvas3D />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left: Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <div className="inline-block px-4 py-2 rounded-full glass dark:glass-dark text-sm font-medium text-primary shadow-lg mb-6">
            Welcome to my universe
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight">
            Hi, I'm <br />
            <span className="text-gradient">Ayush Mishra</span>
          </h1>
          
          <div className="text-2xl lg:text-3xl font-semibold h-12 text-slate-700 dark:text-slate-300">
            <span>I build with </span>
            <span className="text-primary font-bold">
              <Typewriter
                words={['React', 'Node.js', 'MongoDB', 'JavaScript', 'HTML', 'CSS', 'Bootstrap']}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </div>
          
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed">
            I'm a Full Stack Developer passionate about crafting premium, high-performance web experiences with elegant animations and scalable architecture.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a 
              href="#projects" 
              className="px-8 py-4 rounded-full bg-primary hover:bg-primary-dark text-white font-semibold flex items-center space-x-2 transition-all shadow-[0_0_20px_rgba(155,135,245,0.4)] hover:shadow-[0_0_30px_rgba(155,135,245,0.6)] hover:-translate-y-1"
            >
              <span>View Projects</span>
              <ArrowRight size={20} />
            </a>
            
            <a 
              href="#contact" 
              className="px-8 py-4 rounded-full glass dark:glass-dark font-semibold hover:border-primary/50 transition-all hover:-translate-y-1 flex items-center space-x-2"
            >
              <span>Contact Me</span>
            </a>

            {/* Resume Download Button */}
            <a
              href="https://drive.google.com/file/d/1seHO-Y2KBCge1auJfhBaAkWlPOtIHKNh/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="relative px-8 py-4 rounded-full font-semibold flex items-center gap-2 transition-all hover:-translate-y-1 overflow-hidden group border border-primary/40 hover:border-primary"
              style={{ background: 'linear-gradient(135deg, rgba(155,135,245,0.15), rgba(6,182,212,0.15))' }}
            >
              {/* Shimmer effect */}
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"></span>
              <FileDown size={18} className="text-primary" />
              <span className="text-slate-700 dark:text-slate-200">Resume</span>
            </a>
          </div>
        </motion.div>

        {/* Right: Profile Photo Card */}
        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative">
            {/* Animated glow ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-secondary to-primary opacity-70 blur-2xl scale-110 animate-pulse"></div>
            
            {/* Rotating border ring */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: 'conic-gradient(from 0deg, #9b87f5, #7c3aed, #06b6d4, #9b87f5)',
                padding: '3px',
                borderRadius: '50%',
                animation: 'spin 4s linear infinite',
              }}
            ></div>

            {/* Photo container */}
            <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl z-10">
              <img
                src={profilePhoto}
                alt="Ayush Mishra — Full Stack Developer"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Floating badge — Available */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full glass dark:glass-dark shadow-lg border border-green-400/30 flex items-center gap-2 whitespace-nowrap z-20"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse inline-block"></span>
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">Available for hire</span>
            </motion.div>

            {/* Floating badge — Location */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -left-8 top-8 px-3 py-2 rounded-xl glass dark:glass-dark shadow-lg border border-primary/20 flex items-center gap-2 z-20"
            >
              <MapPin size={14} className="text-primary" />
              <span className="text-xs font-medium text-slate-700 dark:text-slate-200">India</span>
            </motion.div>

            {/* Floating badge — Dev */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              className="absolute -right-8 top-12 px-3 py-2 rounded-xl glass dark:glass-dark shadow-lg border border-secondary/20 flex items-center gap-2 z-20"
            >
              <Code2 size={14} className="text-secondary" />
              <span className="text-xs font-medium text-slate-700 dark:text-slate-200">Full Stack</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Decorative gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse delay-1000"></div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}

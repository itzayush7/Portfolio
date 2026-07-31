import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

const timeline = [
  {
    type: 'work',
    title: 'Web Developer Intern',
    subtitle: 'Zidio Development',
    date: 'April 2025 - July 2025',
    description: 'Built applications serving 1000+ users maintaining 99% uptime. Reduced API response time by 40% and improved mobile engagement by 35%. Delivered 8+ production-ready modules while working in an Agile team utilizing Git.',
    icon: <Briefcase size={20} />
  },
  {
    type: 'education',
    title: 'BCA (Bachelor of Computer Applications)',
    subtitle: 'Dr. Ram Manohar Lohia Avadh University',
    date: '2022 - 2025',
    description: 'Developed a strong foundation in computer science principles, database architectures, and software engineering. Graduating with practical knowledge of full-stack development and systemic lifecycle methodologies.',
    icon: <GraduationCap size={20} />
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experience & <span className="text-gradient">Education</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            My professional journey and academic background.
          </p>
        </div>

        {/* Timeline Line */}
        <div className="absolute left-[38px] md:left-1/2 top-[200px] bottom-0 w-0.5 bg-slate-200 dark:bg-white/10 -translate-x-1/2"></div>

        <div className="space-y-12 relative z-10">
          {timeline.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[14px] md:left-1/2 w-12 h-12 rounded-full glass dark:glass-dark flex items-center justify-center text-primary border-4 border-white dark:border-[#0a0a0b] shadow-lg -translate-x-1/2 z-10 hidden md:flex">
                  {item.icon}
                </div>
                
                <div className="flex md:hidden absolute left-0 w-12 h-12 rounded-full glass dark:glass-dark items-center justify-center text-primary border-4 border-white dark:border-[#0a0a0b] z-10">
                  {item.icon}
                </div>

                {/* Content */}
                <div className={`w-full pl-16 md:pl-0 md:w-1/2 ${isEven ? 'md:pl-12' : 'md:pr-12'}`}>
                  <div className="glass dark:glass-dark rounded-2xl p-6 hover:-translate-y-1 transition-transform duration-300">
                    <div className="flex items-center space-x-2 text-primary font-semibold mb-2">
                      <Calendar size={16} />
                      <span className="text-sm">{item.date}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-1 text-slate-800 dark:text-white">{item.title}</h3>
                    <h4 className="text-lg text-slate-600 dark:text-slate-300 mb-4 font-medium">{item.subtitle}</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { Database, Server, Layout, FileJson, Code, Terminal, Palette, Grid } from 'lucide-react';

const skills = [
  { name: 'React.js', level: 95, icon: <Layout className="text-[#61DAFB]" /> },
  { name: 'Node.js', level: 90, icon: <Server className="text-[#339933]" /> },
  { name: 'Express.js', level: 85, icon: <Terminal className="text-gray-500" /> },
  { name: 'MongoDB', level: 90, icon: <Database className="text-[#47A248]" /> },
  { name: 'JavaScript', level: 95, icon: <FileJson className="text-[#F7DF1E]" /> },
  { name: 'HTML5/CSS3', level: 95, icon: <Code className="text-[#E34F26]" /> },
  { name: 'Tailwind CSS', level: 90, icon: <Palette className="text-[#38B2AC]" /> },
  { name: 'SQL/PostgreSQL', level: 85, icon: <Grid className="text-[#336791]" /> },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto text-lg leading-relaxed">
            I am a results-driven Full-Stack Developer skilled in building scalable web applications using React.js, Node.js, and MongoDB. I have a strong problem-solving mindset and a passion for creating user-centric applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-slate-700 dark:text-slate-300 text-lg leading-relaxed"
          >
            <p>
              My journey is rooted in developing production-ready features and diving deep into scalable architecture. Over my career, I've consistently sought out complex challenges, translating them into elegant, optimized code. 
            </p>
            <p>
              I take pride in my technical ability to significantly boost performance. In recent roles, I successfully achieved <strong className="text-primary">API optimization resulting in a 40% improvement</strong> in response times, alongside establishing highly scalable database interactions accommodating large user bases.
            </p>
            <p>
              Beyond the MERN stack universe, my toolbox includes Python, Postman, Git, and advanced UX/UI prototyping. I hold an AI Fundamentals Certification and have completed the Deloitte Technology Job Simulation, equipping me with broad industry perspectives.
            </p>
          </motion.div>

          {/* Skills Chart */}
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="space-y-2"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 font-medium text-slate-800 dark:text-white">
                    {skill.icon}
                    <span>{skill.name}</span>
                  </div>
                  <span className="text-sm font-semibold text-primary">{skill.level}%</span>
                </div>
                <div className="h-3 w-full bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: 'easeOut' }}
                    className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

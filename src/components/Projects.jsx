import { motion, useMotionValue, useTransform } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';
import React from 'react';

const projects = [
  {
    title: 'Excel Analytics Platform',
    description: 'An advanced data plotting tool seamlessly converting CSV/Excel files into interactive dashboards. Efficiently handles 100,000+ rows, featuring Chart.js visualizations, role-based access, and 60% faster database queries.',
    tags: ['React', 'Chart.js', 'JWT Auth', 'MongoDB', 'Node.js'],
    gradient: 'from-[#11998E] to-[#38EF7D]',
    liveDemo: 'https://xcelanalyticsplatform.netlify.app/',
    github: 'https://github.com/itzayush7/Excel-Analytics-Platform'
  },
  {
    title: 'BlogBlaze',
    description: 'A comprehensive full MERN stack blogging platform. Features robust JWT authentication, an interactive admin dashboard to manage users/blogs, and Cloudinary integration for scalable media hosting.',
    tags: ['MongoDB', 'Express', 'React', 'Node.js', 'Auth', 'Cloudinary'],
    gradient: 'from-[#8E2DE2] to-[#4A00E0]',
    liveDemo: 'https://blogblazeis.netlify.app/',
    github: 'https://github.com/itzayush7/BlogBlaze'
  },
  {
    title: 'WeatherLens App',
    description: 'A fast-performance, visually engaging weather application with optimized rendering and real-time forecast data. Beautiful UI displaying temperature, conditions, and location-based data with smooth transitions.',
    tags: ['React', 'Weather API', 'Tailwind', 'Performance Optimization'],
    gradient: 'from-[#FFB75E] to-[#ED8F03]',
    liveDemo: 'https://weatherlensss.netlify.app/',
    github: 'https://github.com/itzayush7/weather-app'
  }
];

function ProjectCard({ project, index }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  function handleMouse(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{ perspective: 1000 }}
      className="group relative h-[450px]"
    >
      <motion.div
        onMouseMove={handleMouse}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY }}
        className="w-full h-full rounded-2xl glass dark:glass-dark overflow-hidden transform-gpu border border-white/10 flex flex-col transition-shadow duration-300 group-hover:shadow-2xl"
      >
        <div className={`h-48 w-full bg-gradient-to-br ${project.gradient} opacity-80 group-hover:opacity-100 transition-opacity duration-300 relative overflow-hidden flex items-center justify-center`}>
           <div className="absolute inset-0 bg-black/20" />
           <span className="relative z-10 text-white font-bold text-2xl tracking-wider drop-shadow-md text-center px-4">{project.title.toUpperCase()}</span>
           <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500 ease-out" />
        </div>
        
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-2xl font-bold mb-2 text-slate-800 dark:text-white group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-3">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map(tag => (
              <span key={tag} className="text-xs font-semibold px-2 py-1 rounded bg-slate-200 dark:bg-white/10 text-slate-700 dark:text-slate-300">
                {tag}
              </span>
            ))}
          </div>
          
          <div className="mt-auto pt-4 flex space-x-4 border-t border-slate-200 dark:border-white/10">
            <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-sm font-semibold text-primary hover:text-primary-dark transition-colors">
              <ExternalLink size={16} />
              <span>Live Demo</span>
            </a>
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
              <Code size={16} />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-50/50 dark:bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            A selection of my recent works. These applications showcase my ability to solve complex problems, manage heavy database queries, and build scalable software experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 cursor-pointer">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

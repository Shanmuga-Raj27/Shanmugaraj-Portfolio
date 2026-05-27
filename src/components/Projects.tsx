import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ExternalLink, 
  Github, 
  Sparkles, 
  Cpu, 
  Bot, 
  Languages, 
  Cloud, 
  Layers, 
  Workflow, 
  Image as ImageIcon, 
  Binary, 
  Activity, 
  Gauge, 
  Radio, 
  Users, 
  Database, 
  Lock, 
  Code2, 
  TrendingUp,
  Inbox,
  Terminal,
  Server
} from 'lucide-react';

const projects = [
  {
    id: 'neic',
    title: 'National Election Information Companion (NEIC)',
    liveLink: 'https://neic-project.web.app/',
    githubLink: 'https://github.com/Shanmuga-Raj27/Election_process',
    category: 'AI & Full-Stack',
    description: 'An AI-powered civic information platform designed to simplify public access to election-related information through multilingual chatbot guidance and scalable backend services.',
    features: [
      { text: 'AI-powered chatbot integration', icon: Bot },
      { text: 'Multilingual election guidance', icon: Languages },
      { text: 'Gemini API integration', icon: Sparkles },
      { text: 'FastAPI backend services', icon: Server },
      { text: 'REST API architecture', icon: Workflow },
      { text: 'Google Cloud deployment', icon: Cloud }
    ],
    tech: [
      { name: 'React.js', icon: Code2 },
      { name: 'FastAPI', icon: Server },
      { name: 'Gemini API', icon: Sparkles },
      { name: 'GCP', icon: Cloud },
      { name: 'REST APIs', icon: Workflow }
    ],
    accentGlow: 'from-neon/10 to-transparent'
  },
  {
    id: 'garbage',
    title: 'Garbage Classification AI',
    liveLink: 'https://garbage-classification-frontend.netlify.app',
    githubLink: 'https://github.com/Shanmuga-Raj27/AICTE-internship-Garbage-Classification',
    category: 'Machine Learning',
    description: 'An AI-powered waste classification platform using deep learning and real-time image prediction workflows for intelligent garbage detection and classification.',
    features: [
      { text: 'Real-time image classification', icon: ImageIcon },
      { text: 'Deep learning model integration', icon: Cpu },
      { text: '90% model accuracy benchmark', icon: Gauge },
      { text: 'REST prediction APIs', icon: Workflow },
      { text: 'Docker containerization', icon: Layers },
      { text: 'Hugging Face integration', icon: Sparkles }
    ],
    tech: [
      { name: 'React.js', icon: Code2 },
      { name: 'FastAPI', icon: Server },
      { name: 'TensorFlow', icon: Cpu },
      { name: 'NumPy', icon: Binary },
      { name: 'Pandas', icon: Database },
      { name: 'Docker', icon: Layers },
      { name: 'Hugging Face', icon: Sparkles }
    ],
    accentGlow: 'from-neon/5 to-transparent'
  },
  {
    id: 'stadium',
    title: 'Google Stadium Real-Time App',
    liveLink: 'https://google-stadium-app.onrender.com',
    githubLink: 'https://github.com/Shanmuga-Raj27/Google-Stadium-',
    category: 'Backend & WebSockets',
    description: 'A scalable real-time application built with FastAPI and WebSockets focused on backend optimization, secure APIs, and operational workflow management.',
    features: [
      { text: 'Real-time order tracking', icon: Activity },
      { text: 'WebSocket subscription pipeline', icon: Radio },
      { text: 'Role-based access control', icon: Lock },
      { text: 'SQL query optimization', icon: Database },
      { text: 'Backend performance tuning', icon: Gauge },
      { text: 'Scalable FastAPI state architecture', icon: Server }
    ],
    tech: [
      { name: 'FastAPI', icon: Server },
      { name: 'WebSockets', icon: Radio },
      { name: 'SQL', icon: Database },
      { name: 'REST APIs', icon: Workflow },
      { name: 'Python', icon: Terminal }
    ],
    accentGlow: 'from-neon/10 to-transparent'
  }
];

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<string | null>(null);

  return (
    <section id="projects" className="max-w-5xl mx-auto px-4 sm:px-6 md:px-12 relative z-10 scroll-mt-24 sm:scroll-mt-28">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="space-y-12"
      >
        {/* Section Header - Left-aligned for mobile and desktop */}
        <div className="flex flex-col items-start text-left space-y-2.5 pl-1 sm:pl-0 w-full max-w-full">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#00ff9c] uppercase">
            <Layers size={14} className="animate-spin-slow" />
            <span>04 / INTELLECTUAL IP & REPOS</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-sans font-extrabold tracking-tight text-soft-white select-none leading-tight">
            Featured <span className="bg-linear-to-r from-[#00ff9c] to-[#00b36c] bg-clip-text text-transparent">Projects</span>
          </h2>
          
          <p className="font-mono text-[11px] sm:text-xs md:text-sm text-soft-white tracking-wide max-w-2xl leading-relaxed">
            Real-world AI-powered and full-stack applications focused on scalability, backend engineering, intelligent automation, and modern user experiences.
          </p>
          
          <div className="h-0.5 w-20 bg-linear-to-r from-neon to-transparent mt-1" />
        </div>

        {/* Project cards responsive matching grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.4 }}
                onMouseEnter={() => setHoveredIndex(project.id)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="bg-zinc-900/95 backdrop-blur-md rounded-2xl p-5 sm:p-6 md:p-8 border border-neon/20 hover:border-neon/60 transition-all duration-500 flex flex-col justify-between hover:shadow-[0_0_25px_rgba(0,255,156,0.08)] relative overflow-hidden group"
              >
                {/* Embedded background subtle gradient overlay */}
                <div className={`absolute inset-0 bg-linear-to-b ${project.accentGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div>
                  {/* Category Pill Tag */}
                  <div className="flex items-center justify-between mb-4 relative z-10">
                    <span className="px-2.5 py-1 text-[10px] font-mono font-semibold uppercase tracking-wider bg-neon/10 border border-neon/20 text-neon rounded-md">
                      {project.category}
                    </span>
                    <Terminal size={14} className="text-neon/35 group-hover:text-neon transition-colors duration-300" />
                  </div>

                  <h3 className="text-xl font-sans font-extrabold text-soft-white tracking-tight leading-snug group-hover:text-neon transition-colors duration-300 relative z-10">
                    {project.title}
                  </h3>

                  <p className="text-xs text-platinum leading-relaxed mt-3 mb-5 font-sans font-light relative z-10">
                    {project.description}
                  </p>

                  <div className="space-y-4 relative z-10 mb-6">
                    <span className="font-mono text-[9.5px] text-platinum tracking-widest uppercase block border-b border-white/5 pb-1 font-bold">
                      ENGINEERING CAPABILITIES:
                    </span>
                    <ul className="space-y-2">
                      {project.features.map((feat) => {
                        const FeatIcon = feat.icon;
                        return (
                          <li key={feat.text} className="flex items-start gap-2 text-xs text-platinum/90 font-sans font-normal">
                            <FeatIcon size={12} className="text-neon mt-0.5 shrink-0" />
                            <span>{feat.text}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>

                <div>
                  {/* Exact Technology Badges with Individual Small Icons */}
                  <div className="space-y-2.5 relative z-10 mb-5 border-t border-white/5 pt-4">
                    <span className="font-mono text-[9.5px] text-platinum tracking-widest uppercase block font-bold">
                      BUILT WITH:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t) => {
                        const TechIcon = t.icon;
                        return (
                          <span 
                            key={t.name}
                            className="inline-flex items-center gap-1 px-2 py-1 rounded text-[10px] font-mono bg-white/5 border border-white/5 text-soft-white hover:border-neon hover:text-neon transition-all"
                          >
                            <TechIcon size={10} className="text-neon" />
                            <span>{t.name}</span>
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  {/* Buttons with Modern styling */}
                  <div className="flex items-center gap-2.5 relative z-10 pt-2">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-3 sm:py-2.5 rounded-xl bg-white text-zinc-900 font-mono text-[11px] uppercase tracking-wider font-bold hover:bg-neon hover:text-zinc-950 active:scale-98 transition-all duration-300"
                    >
                      <ExternalLink size={12} />
                      <span>Live Demo</span>
                    </a>
                    
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-3.5 py-3 sm:py-2.5 rounded-xl bg-zinc-900/80 border border-white/10 text-soft-white hover:border-neon hover:text-neon hover:bg-neon/5 active:scale-98 transition-all duration-300"
                      title="View GitHub Repository"
                    >
                      <Github size={14} />
                    </a>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </section>
  );
}

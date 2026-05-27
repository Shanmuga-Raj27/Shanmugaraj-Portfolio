import React from 'react';
import { motion } from 'motion/react';
import { row1Techs, row2Techs } from './TechLogos';
import { 
  Code2, 
  Terminal, 
  Database, 
  Globe, 
  Server, 
  Cpu, 
  Cloud, 
  Layers, 
  Binary,
  Sparkles,
  Atom,
  Flame,
  Braces,
  Wind,
  Monitor,
  Zap,
  FlaskConical,
  Shield,
  GitBranch,
  Github,
  Box,
  Compass,
  Smile,
  Boxes,
  TableProperties,
  GitFork,
  Radio,
  Brain,
  MessageSquare,
  Search,
  Command,
  Hash
} from 'lucide-react';

const getSkillIcon = (name: string) => {
  switch (name.toLowerCase()) {
    case 'python': return Terminal;
    case 'javascript': return Braces;
    case 'sql': return Database;
    case 'c/c++': return Binary;
    case 'react js': return Atom;
    case 'html5': return Code2;
    case 'css3': return Sparkles;
    case 'tailwind css': return Wind;
    case 'responsive design': return Monitor;
    case 'fastapi': return Zap;
    case 'flask': return FlaskConical;
    case 'django': return Shield;
    case 'rest apis': return GitFork;
    case 'websockets': return Radio;
    case 'machine learning': return Brain;
    case 'ai integrations': return Sparkles;
    case 'llms': return MessageSquare;
    case 'rag': return Search;
    case 'prompt engineering': return Command;
    case 'numpy': return Hash;
    case 'pandas': return TableProperties;
    case 'gcp': return Cloud;
    case 'firebase': return Flame;
    case 'postgresql': return Database;
    case 'vector database': return Boxes;
    case 'git': return GitBranch;
    case 'github': return Github;
    case 'docker': return Box;
    case 'google antigravity': return Compass;
    case 'hugging face': return Smile;
    default: return Code2;
  }
};



const categories = [
  {
    title: 'Programming Languages',
    description: 'Core syntax and foundations for systems, scripts, and algorithms.',
    icon: Terminal,
    color: 'border-neon/20 hover:border-neon',
    accentColor: 'text-neon',
    glowColor: 'from-neon/10 to-transparent',
    skills: [
      { name: 'Python' },
      { name: 'JavaScript' },
      { name: 'SQL' },
      { name: 'C/C++' }
    ]
  },
  {
    title: 'Frontend Development',
    description: 'Crafting pixel-perfect, accessible, and responsive user interfaces.',
    icon: Globe,
    color: 'border-neon/20 hover:border-neon',
    accentColor: 'text-neon',
    glowColor: 'from-neon/10 to-transparent',
    skills: [
      { name: 'React JS' },
      { name: 'HTML5' },
      { name: 'CSS3' },
      { name: 'Tailwind CSS' },
      { name: 'Responsive Design' }
    ]
  },
  {
    title: 'Backend Development',
    description: 'Designing resilient servers, asynchronous flows, and API architectures.',
    icon: Server,
    color: 'border-neon/20 hover:border-neon',
    accentColor: 'text-neon',
    glowColor: 'from-neon/10 to-transparent',
    skills: [
      { name: 'FastAPI' },
      { name: 'Flask' },
      { name: 'Django' },
      { name: 'REST APIs' },
      { name: 'WebSockets' }
    ]
  },
  {
    title: 'AI & Machine Learning',
    description: 'Integrating models, context generation engines, and smart behaviors.',
    icon: Cpu,
    color: 'border-neon/20 hover:border-neon',
    accentColor: 'text-neon',
    glowColor: 'from-neon/10 to-transparent',
    skills: [
      { name: 'Machine Learning' },
      { name: 'AI Integrations' },
      { name: 'LLMs' },
      { name: 'RAG' },
      { name: 'Prompt Engineering' },
      { name: 'NumPy' },
      { name: 'pandas' }
    ]
  },
  {
    title: 'Database & Cloud',
    description: 'Managing structured datasets, persistent systems, and cloud instances.',
    icon: Database,
    color: 'border-neon/20 hover:border-neon',
    accentColor: 'text-neon',
    glowColor: 'from-neon/10 to-transparent',
    skills: [
      { name: 'GCP' },
      { name: 'Firebase' },
      { name: 'PostgreSQL' },
      { name: 'Vector Database' }
    ]
  },
  {
    title: 'Tools & Platforms',
    description: 'Ecosystem tools, container standards, and specialized AI environments.',
    icon: Layers,
    color: 'border-neon/20 hover:border-neon',
    accentColor: 'text-neon',
    glowColor: 'from-neon/10 to-transparent',
    skills: [
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'Docker' },
      { name: 'Google Antigravity' },
      { name: 'Hugging Face' }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-12 relative z-10 scroll-mt-24 sm:scroll-mt-28 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="space-y-10 sm:space-y-12 w-full max-w-full"
      >
        {/* Section Header - Perfectly Left Aligned and fits any screen */}
        <div className="flex flex-col items-start text-left space-y-2.5 pt-2 sm:pt-4 pl-1 sm:pl-0 w-full max-w-full">
          <div className="flex items-center gap-2 text-[10px] sm:text-xs font-mono tracking-widest text-[#00FF51] uppercase">
            <Cpu size={13} className="animate-spin-slow text-neon" />
            <span>02 / TECHNICAL CAPABILITY</span>
          </div>
          
          <h2 className="text-xl sm:text-3xl md:text-5xl font-sans font-extrabold tracking-tight text-soft-white leading-tight">
            Technical <span className="bg-linear-to-r from-neon to-deep-green bg-clip-text text-transparent">Skills</span>
          </h2>
          
          <p className="font-mono text-[10.5px] sm:text-xs md:text-sm text-soft-white/90 tracking-wide max-w-xl leading-relaxed">
            Technologies, frameworks, and tools I use to build scalable full-stack and AI-powered applications.
          </p>
          
          <div className="h-0.5 w-16 sm:w-20 bg-linear-to-r from-neon to-transparent mt-1" />
        </div>

        {/* Animated Tech Stack Marquee Section */}
        <div className="relative py-4 sm:py-6 w-full max-w-full overflow-hidden bg-zinc-950/20 backdrop-blur-sm rounded-2xl sm:rounded-3xl border border-white/5 sm:border-white/10 group shadow-inner">
          {/* Subtle background glow element */}
          <div className="absolute inset-0 bg-radial-gradient from-neon/5 to-transparent pointer-events-none opacity-50" />
          
          {/* Left and Right ambient blur shadows for seamless fade effects */}
          <div className="absolute top-0 bottom-0 left-0 w-8 sm:w-28 bg-linear-to-r from-matte via-matte/80 to-transparent z-15 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-8 sm:w-28 bg-linear-to-l from-matte via-matte/80 to-transparent z-15 pointer-events-none" />
          
          <div className="space-y-3 sm:space-y-5">
            {/* Row 1 - Marquee leftwards */}
            <div className="relative w-full max-w-full overflow-hidden flex flex-row transform-gpu">
              <div className="flex w-max gap-2 sm:gap-4 animate-marquee hover:[animation-play-state:paused] py-1 transform-gpu will-change-transform">
                <div className="flex gap-2 sm:gap-4 shrink-0">
                  {row1Techs.map((tech, idx) => (
                    <div
                      key={`r1-item1-${tech.name}-${idx}`}
                      className={`flex items-center gap-1.5 sm:gap-3 py-1 px-2.5 sm:py-3 sm:px-4.5 rounded-xl bg-zinc-950/90 md:bg-zinc-950/50 md:backdrop-blur-md border border-white/5 transition-all duration-300 group/item cursor-pointer text-soft-white transform-gpu ${tech.color}`}
                    >
                      <div className="shrink-0 transform scale-[0.7] sm:scale-100 group-hover/item:scale-110 transition-transform duration-300">
                        {tech.icon}
                      </div>
                      <span className="font-mono text-[9px] sm:text-xs font-semibold tracking-wide text-platinum group-hover/item:text-neon transition-colors duration-200 uppercase whitespace-nowrap">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2 sm:gap-4 shrink-0" aria-hidden="true">
                  {row1Techs.map((tech, idx) => (
                    <div
                      key={`r1-item2-${tech.name}-${idx}`}
                      className={`flex items-center gap-1.5 sm:gap-3 py-1 px-2.5 sm:py-3 sm:px-4.5 rounded-xl bg-zinc-950/90 md:bg-zinc-950/50 md:backdrop-blur-md border border-white/5 transition-all duration-300 group/item cursor-pointer text-soft-white transform-gpu ${tech.color}`}
                    >
                      <div className="shrink-0 transform scale-[0.7] sm:scale-100 group-hover/item:scale-110 transition-transform duration-300">
                        {tech.icon}
                      </div>
                      <span className="font-mono text-[9px] sm:text-xs font-semibold tracking-wide text-platinum group-hover/item:text-neon transition-colors duration-200 uppercase whitespace-nowrap">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Row 2 - Marquee rightwards (reverse) */}
            <div className="relative w-full max-w-full overflow-hidden flex flex-row transform-gpu">
              <div className="flex w-max gap-2 sm:gap-4 animate-marquee-reverse hover:[animation-play-state:paused] py-1 transform-gpu will-change-transform">
                <div className="flex gap-2 sm:gap-4 shrink-0">
                  {row2Techs.map((tech, idx) => (
                    <div
                      key={`r2-item1-${tech.name}-${idx}`}
                      className={`flex items-center gap-1.5 sm:gap-3 py-1 px-2.5 sm:py-3 sm:px-4.5 rounded-xl bg-zinc-950/90 md:bg-zinc-950/50 md:backdrop-blur-md border border-white/5 transition-all duration-300 group/item cursor-pointer text-soft-white transform-gpu ${tech.color}`}
                    >
                      <div className="shrink-0 transform scale-[0.7] sm:scale-100 group-hover/item:scale-110 transition-transform duration-300">
                        {tech.icon}
                      </div>
                      <span className="font-mono text-[9px] sm:text-xs font-semibold tracking-wide text-platinum group-hover/item:text-neon transition-colors duration-200 uppercase whitespace-nowrap">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2 sm:gap-4 shrink-0" aria-hidden="true">
                  {row2Techs.map((tech, idx) => (
                    <div
                      key={`r2-item2-${tech.name}-${idx}`}
                      className={`flex items-center gap-1.5 sm:gap-3 py-1 px-2.5 sm:py-3 sm:px-4.5 rounded-xl bg-zinc-950/90 md:bg-zinc-950/50 md:backdrop-blur-md border border-white/5 transition-all duration-300 group/item cursor-pointer text-soft-white transform-gpu ${tech.color}`}
                    >
                      <div className="shrink-0 transform scale-[0.7] sm:scale-100 group-hover/item:scale-110 transition-transform duration-300">
                        {tech.icon}
                      </div>
                      <span className="font-mono text-[9px] sm:text-xs font-semibold tracking-wide text-platinum group-hover/item:text-neon transition-colors duration-200 uppercase whitespace-nowrap">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Category Skills Grid - Fully responsive single-column on mobile, styled with full width and max viewport safety */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-full">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className={`w-full max-w-full bg-[#0d0d0d]/90 backdrop-blur-md rounded-2xl p-4 sm:p-6 md:p-8 border ${category.color} transition-all duration-300 group hover:shadow-[0_0_25px_rgba(0,255,156,0.1)] relative overflow-hidden flex flex-col justify-between`}
              >
                {/* Subtle gradient backdrop highlight */}
                <div className={`absolute inset-0 bg-linear-to-b ${category.glowColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div>
                  {/* Header info of Category */}
                  <div className="flex items-start gap-3 sm:gap-4 mb-4 relative z-10 w-full min-w-0">
                    <div className={`p-2 rounded-xl bg-white/5 border border-white/5 group-hover:bg-neon/10 group-hover:border-neon/25 transition-all duration-300 shrink-0 ${category.accentColor}`}>
                      <Icon size={18} className="group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-sans text-sm sm:text-base font-extrabold text-soft-white tracking-tight leading-snug wrap-break-word">
                        {category.title}
                      </h3>
                      <p className="text-[9px] sm:text-[10px] text-[#00FF51] font-mono mt-0.5 font-semibold">
                        {category.skills.length} core assets
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-platinum leading-relaxed mb-6 font-sans font-normal relative z-10 wrap-break-word">
                    {category.description}
                  </p>
                </div>

                {/* Sub-skills Badges Layout inside Category */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5 relative z-10 w-full">
                  {category.skills.map((skill) => {
                    const SkillIcon = getSkillIcon(skill.name);
                    return (
                      <div
                        key={skill.name}
                        className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md sm:rounded-lg bg-white/5 border border-white/5 hover:border-neon/20 hover:bg-neon/5 transition-all duration-200 group/badge max-w-full min-w-0"
                      >
                        <SkillIcon size={11} className="text-neon/75 group-hover/badge:text-neon group-hover/badge:scale-110 transition-all duration-200 shrink-0" />
                        <span className="font-mono text-[9.5px] sm:text-[10.5px] text-soft-white font-medium tracking-wide group-hover/badge:text-neon transition-colors truncate">
                          {skill.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>

      </motion.div>
    </section>
  );
}

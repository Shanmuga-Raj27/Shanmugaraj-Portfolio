import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { row1Techs, row2Techs } from './TechLogos';
import { 
  Code2, 
  Terminal, 
  Database, 
  Server, 
  Cpu, 
  Cloud, 
  Layers, 
  Binary,
  Sparkles,
  GitBranch,
  Github,
  Box,
  Boxes,
  Shield,
  Brain,
  MessageSquare,
  Search,
  Command,
  Hash,
  GitFork,
  Zap,
  Users,
  Send,
  FlaskConical
} from 'lucide-react';

const getSkillIcon = (name: string) => {
  switch (name.toLowerCase()) {
    case 'python': return Terminal;
    case 'sql': return Database;
    case 'object-oriented programming (oop)': return Binary;
    case 'llm integration': return MessageSquare;
    case 'rag': return Search;
    case 'prompt engineering': return Command;
    case 'embeddings': return Hash;
    case 'nlp': return MessageSquare;
    case 'semantic search': return Search;
    case 'fastapi': return Zap;
    case 'rest apis': return GitFork;
    case 'api integration': return GitFork;
    case 'pydantic': return Shield;
    case 'mysql': return Database;
    case 'qdrant': return Boxes;
    case 'database design': return Layers;
    case 'sql queries': return Database;
    case 'git': return GitBranch;
    case 'github': return Github;
    case 'docker': return Box;
    case 'aws (ec2, s3)': return Cloud;
    case 'aws': return Cloud;
    case 'render': return Cloud;
    case 'gemini ai': return Sparkles;
    case 'hugging face': return Sparkles;
    case 'google antigravity': return Cloud;
    case 'llm apis': return MessageSquare;
    case 'postman': return Send;
    case 'pytest': return FlaskConical;
    case 'problem solving': return Brain;
    case 'analytical thinking': return Cpu;
    case 'collaboration': return Users;
    case 'continuous learning': return Sparkles;
    default: return Code2;
  }
};



const categories = [
  {
    title: 'Programming',
    description: 'Core foundations for building intelligent backend systems and algorithms.',
    icon: Terminal,
    color: 'border-neon/20 hover:border-neon',
    accentColor: 'text-neon',
    glowColor: 'from-neon/10 to-transparent',
    skills: [
      { name: 'Python' },
      { name: 'SQL' },
      { name: 'Object-Oriented Programming (OOP)' }
    ]
  },
  {
    title: 'Generative AI',
    description: 'Building LLM-powered systems, semantic retrieval, and NLP pipelines.',
    icon: Sparkles,
    color: 'border-neon/20 hover:border-neon',
    accentColor: 'text-neon',
    glowColor: 'from-neon/10 to-transparent',
    skills: [
      { name: 'LLM Integration' },
      { name: 'RAG' },
      { name: 'Prompt Engineering' },
      { name: 'Embeddings' },
      { name: 'NLP' },
      { name: 'Semantic Search' }
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
      { name: 'REST APIs' },
      { name: 'API Integration' },
      { name: 'Pydantic' }
    ]
  },
  {
    title: 'Databases & Cloud',
    description: 'Managing structured and vector datasets, cloud hosting, and reliable query design.',
    icon: Database,
    color: 'border-neon/20 hover:border-neon',
    accentColor: 'text-neon',
    glowColor: 'from-neon/10 to-transparent',
    skills: [
      { name: 'MySQL' },
      { name: 'Qdrant' },
      { name: 'Database Design' },
      { name: 'SQL Queries' },
      { name: 'AWS' },
      { name: 'Render' }
    ]
  },
  {
    title: 'Tools & Testing',
    description: 'Version control, containers, API testing, and automated test workflows.',
    icon: Layers,
    color: 'border-neon/20 hover:border-neon',
    accentColor: 'text-neon',
    glowColor: 'from-neon/10 to-transparent',
    skills: [
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'Docker' },
      { name: 'Postman' },
      { name: 'Pytest' },
      { name: 'Gemini AI' },
      { name: 'Hugging Face' },
      { name: 'Google Antigravity' },
      { name: 'LLM APIs' }
    ]
  },
  {
    title: 'Professional Skills',
    description: 'Collaboration and engineering habits for impactful team delivery.',
    icon: Users,
    color: 'border-neon/20 hover:border-neon',
    accentColor: 'text-neon',
    glowColor: 'from-neon/10 to-transparent',
    skills: [
      { name: 'Problem Solving' },
      { name: 'Analytical Thinking' },
      { name: 'Collaboration' },
      { name: 'Continuous Learning' }
    ]
  }
];

export default function Skills() {
  const [activeCardId, setActiveCardId] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="skills" className="w-full max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10 scroll-mt-24 sm:scroll-mt-28 overflow-hidden gpu-stable">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        style={{ 
          willChange: "transform, opacity", 
          transform: "translate3d(0,0,0)",
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
          perspective: "1000px",
          WebkitPerspective: "1000px"
        }}
        className="space-y-10 sm:space-y-12 w-full max-w-full"
      >
        {/* Section Header - Perfectly Left Aligned and fits any screen */}
        <div className="flex flex-col items-start text-left space-y-2.5 pt-2 sm:pt-4 pl-1 sm:pl-0 w-full max-w-full">
          <div className="flex items-center gap-2 text-[10px] sm:text-xs font-mono tracking-widest text-[#00FF51] uppercase">
            <Cpu size={13} className="animate-spin-slow text-neon" />
            <span>02 / TECHNICAL CAPABILITY</span>
          </div>
          
          <h2 className="text-lg sm:text-xl md:text-3xl font-sans font-extrabold tracking-tight text-soft-white leading-tight">
            Technical <span className="bg-linear-to-r from-neon to-deep-green bg-clip-text text-transparent">Skills</span>
          </h2>
          
          <p className="font-mono text-[10.5px] sm:text-xs md:text-[13px] text-soft-white/90 tracking-wide max-w-xl leading-relaxed">
            Technologies, frameworks, and tools I use to build scalable AI-powered backend applications.
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

        {/* Dynamic Category Skills Grid - Fully responsive grid that scales beautifully on desktop viewports */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8 w-full max-w-full">
          {categories.map((category, index) => {
            const Icon = category.icon;
            const isActive = activeCardId === category.title;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ delay: index * 0.08, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={() => setActiveCardId(category.title)}
                onMouseLeave={() => setActiveCardId(null)}
                onPointerEnter={() => setActiveCardId(category.title)}
                onPointerLeave={() => setActiveCardId(null)}
                onPointerMove={() => setActiveCardId(category.title)}
                onMouseMove={() => setActiveCardId(category.title)}
                onTouchStart={() => setActiveCardId(category.title)}
                onTouchEnd={() => setActiveCardId(null)}
                onTouchCancel={() => setActiveCardId(null)}
                className={`w-full max-w-full bg-[#0d0d0d]/90 backdrop-blur-md rounded-2xl p-4 sm:p-4 md:p-5 border ${category.color} relative overflow-hidden flex flex-col justify-between glow-card ${isActive ? 'is-active-glow border-neon/60 shadow-[0_0_25px_rgba(0,255,156,0.12)]' : ''}`}
                style={{ 
                  willChange: "transform, opacity, border-color, box-shadow, background-color", 
                  transform: isActive ? "scale(0.98) translate3d(0,0,0)" : "translate3d(0,0,0)",
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                  perspective: "1000px",
                  WebkitPerspective: "1000px"
                }}
              >
                {/* Subtle gradient backdrop highlight */}
                <div className={`absolute inset-0 bg-linear-to-b ${category.glowColor} opacity-glow ${isActive ? 'opacity-50' : ''}`} />

                <div>
                  {/* Header info of Category */}
                  <div className="flex items-start gap-3 sm:gap-4 mb-4 relative z-10 w-full min-w-0">
                    <div className={`p-2 rounded-xl bg-white/5 border border-white/5 group-hover:bg-neon/10 group-hover:border-neon/25 transition-all duration-300 shrink-0 ${category.accentColor}`}>
                      <Icon size={isMobile ? 18 : 20} className="group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-sans text-sm sm:text-base lg:text-lg xl:text-xl font-extrabold text-soft-white tracking-tight leading-snug wrap-break-word">
                        {category.title}
                      </h3>
                      <p className="text-[9px] sm:text-[10px] lg:text-xs text-[#00FF51] font-mono mt-0.5 font-semibold">
                        {category.skills.length} core assets
                      </p>
                    </div>
                  </div>

                  <p className="text-xs lg:text-sm xl:text-base text-platinum leading-relaxed mb-6 font-sans font-normal relative z-10 wrap-break-word">
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
                        className="inline-flex items-center gap-1.5 px-2 py-1 xl:px-3 xl:py-1.5 rounded-md sm:rounded-lg bg-white/5 border border-white/5 hover:border-neon/20 hover:bg-neon/5 transition-all duration-200 group/badge max-w-full min-w-0"
                      >
                        <SkillIcon size={12} className="text-neon/75 group-hover/badge:text-neon group-hover/badge:scale-110 transition-all duration-200 shrink-0" />
                        <span className="font-mono text-[9.5px] sm:text-[10.5px] lg:text-xs xl:text-sm text-soft-white font-medium tracking-wide group-hover/badge:text-neon transition-colors truncate">
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

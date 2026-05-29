import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Briefcase, 
  Calendar, 
  Award, 
  Cpu, 
  Zap, 
  Brain, 
  Terminal, 
  Layers, 
  CheckCircle2, 
  Sparkles, 
  Activity, 
  Code2, 
  Users 
} from 'lucide-react';

const experiences = [
  {
    type: 'hackathon',
    title: 'Full-Stack Developer',
    organization: 'Google PromptWar Hackathon (Virtual)',
    period: 'Apr 2026',
    accentColor: 'border-neon/30 text-neon',
    badgeText: 'Hackathon Competitor',
    badgeColor: 'bg-neon/10 text-neon border-neon/20',
    icon: Terminal,
    desc: 'Collaborated during the intense virtual Google hackathon to engineer state-of-the-art developer solutions utilizing generative AI pipelines.',
    points: [
      'Developed software applications using Google Antigravity with AI-assisted workflows and prompt engineering.',
      'Built FastAPI backend APIs and real-time application workflows for scalable feature integration.',
      'Collaborated in software development, debugging, and feature implementation during the Google PromptWar Hackathon.'
    ],
    tech: ['Google Antigravity', 'FastAPI', 'Python', 'Prompt Engineering'],
    indicator: {
      label: 'Real-time Backend',
      status: 'Live Response',
      color: 'bg-neon'
    }
  },
  {
    type: 'internship',
    title: 'AI/ML Data Analytics Intern',
    organization: 'Edunet Foundation (AICTE & Shell)',
    period: 'Jun 2025 – Jul 2025',
    accentColor: 'border-[#FF3B3B]/30 text-[#FF3B3B]',
    badgeText: 'Technical Internship',
    badgeColor: 'bg-[#FF3B3B]/10 text-[#FF3B3B] border-[#FF3B3B]/20',
    icon: Brain,
    desc: 'Underwent an intensive cloud and machine learning professional curriculum, building end-to-end classification deep neural nets.',
    points: [
      'Learned AI/ML concepts including machine learning, transfer learning, model fine-tuning, and optimization techniques.',
      'Developed a Garbage Classification application using deep learning models and FastAPI-based prediction APIs.',
      'Collaborated in an Agile development environment with focus on debugging and software quality.'
    ],
    tech: ['Deep Learning', 'FastAPI', 'AI/ML Analytics', 'Agile Scrum'],
    indicator: {
      label: 'Deep Learning Model',
      status: 'Dense CNN',
      color: 'bg-accent-red'
    }
  }
];



export default function Experience() {
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
    <section id="experience" className="w-full max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10 scroll-mt-24 sm:scroll-mt-28 gpu-stable">
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
        className="space-y-12"
      >
        {/* Section Header - Left-aligned for mobile and desktop */}
        <div className="flex flex-col items-start text-left space-y-2.5 pl-1 sm:pl-0 w-full max-w-full">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-accent-red uppercase">
            <Briefcase size={14} className="animate-pulse" />
            <span>03 / MILESTONES & ROADMAP</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-sans font-extrabold tracking-tight text-soft-white leading-tight">
            Experience & <span className="bg-linear-to-r from-accent-red to-neon bg-clip-text text-transparent">Achievements</span>
          </h2>
          
          <p className="font-mono text-[11px] sm:text-xs md:text-sm text-soft-white tracking-wide max-w-xl leading-relaxed">
            Hands-on experience building AI-powered applications, scalable backend systems, and modern software solutions.
          </p>
          
          <div className="h-0.5 w-20 bg-linear-to-r from-accent-red to-transparent mt-1" />
        </div>

        {/* Left / Main Column: Interactive Timeline */}
          <div className="w-full space-y-8 relative">
            {/* Elegant vertical connecting timeline track */}
            <div className="absolute left-2.5 sm:left-6 top-8 bottom-8 w-0.5 bg-zinc-800/80" />

            {experiences.map((exp, idx) => {
              const Icon = exp.icon;
              const isActive = activeCardId === exp.organization;
              return (
                <motion.div
                  key={exp.organization}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ delay: idx * 0.12, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  style={{ willChange: "transform, opacity" }}
                  className="relative pl-6 sm:pl-16 group"
                >
                  {/* Timeline Glow Indicator Bulb */}
                  <div className={`absolute left-0 sm:left-4 top-2 w-[18px] h-[18px] rounded-full bg-matte border-2 flex items-center justify-center transition-all duration-300 ${isActive ? 'scale-125' : ''} ${
                    exp.type === 'hackathon' 
                      ? `border-neon ${isActive ? 'shadow-[0_0_10px_#00ff9c]' : ''}` 
                      : `border-accent-red ${isActive ? 'shadow-[0_0_10px_#ff3b3b]' : ''}`
                  }`}>
                    <div className={`w-1.5 h-1.5 rounded-full ${
                      exp.type === 'hackathon' ? 'bg-neon' : 'bg-accent-red'
                    }`} />
                  </div>

                  {/* Experience Card Background - Dark Gray Solid Background for maximum contrast */}
                  <div 
                    onMouseEnter={() => setActiveCardId(exp.organization)}
                    onMouseLeave={() => setActiveCardId(null)}
                    onPointerEnter={() => setActiveCardId(exp.organization)}
                    onPointerLeave={() => setActiveCardId(null)}
                    onPointerMove={() => setActiveCardId(exp.organization)}
                    onMouseMove={() => setActiveCardId(exp.organization)}
                    onTouchStart={() => setActiveCardId(exp.organization)}
                    onTouchEnd={() => setActiveCardId(null)}
                    onTouchCancel={() => setActiveCardId(null)}
                    className={`bg-zinc-900/95 backdrop-blur-md rounded-2xl p-4 sm:p-6 md:p-8 border ${exp.accentColor} glow-card ${isActive ? `is-active-glow ${exp.type === 'internship' ? 'red' : ''}` : ''}`}
                  >
                    
                    {/* Header Row */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                      <div className="space-y-1">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-[10px] lg:text-xs font-mono uppercase tracking-wider font-semibold ${exp.badgeColor}`}>
                          <Award size={10} />
                          {exp.badgeText}
                        </span>
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-sans font-extrabold text-soft-white tracking-tight mt-1 group-hover:text-neon transition-colors duration-300">
                          {exp.title}
                        </h3>
                        <p className="font-mono text-xs lg:text-sm text-soft-white/80 font-medium">
                          {exp.organization}
                        </p>
                      </div>

                      {/* Period Badge */}
                      <div className="flex items-center gap-1.5 text-xs lg:text-sm font-mono text-soft-white bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl self-start sm:self-center">
                        <Calendar size={12} className="text-neon" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    {/* Sub description */}
                    <p className="text-xs sm:text-sm lg:text-base text-platinum font-sans font-light leading-relaxed mb-4 border-l-2 border-white/10 pl-3">
                      {exp.desc}
                    </p>

                    {/* Highly descriptive white text points */}
                    <ul className="space-y-3 pl-1 mb-6">
                      {exp.points.map((point, pIdx) => (
                        <li 
                          key={pIdx} 
                          className="flex items-start gap-2.5 text-xs sm:text-sm lg:text-[15px] text-platinum font-sans font-light leading-relaxed"
                        >
                          <CheckCircle2 size={14} className="text-neon mt-0.5 shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech stack & Indicator footer */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-white/5">
                      <div className="flex flex-wrap gap-1.5">
                        {exp.tech.map((t) => (
                          <span 
                            key={t}
                            className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-white/5 border border-white/10 text-soft-white hover:border-neon hover:text-neon transition-all"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Telemetry/Indicator status */}
                      <div className="flex items-center gap-2 px-2.5 py-1 rounded bg-white/2 border border-white/5">
                        <span className={`w-2 h-2 rounded-full ${exp.indicator.color} animate-pulse`} />
                        <span className="font-mono text-[9px] text-soft-white/60 uppercase tracking-widest">{exp.indicator.label}:</span>
                        <span className="font-mono text-[9px] text-soft-white font-semibold">{exp.indicator.status}</span>
                      </div>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>


      </motion.div>
    </section>
  );
}

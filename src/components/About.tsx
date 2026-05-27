import React from 'react';
import { motion } from 'motion/react';
import { User, GraduationCap, Cpu, Code2, Flame, Award } from 'lucide-react';

const highlights = [
  { text: '2026 Graduate', icon: GraduationCap, color: 'text-neon bg-neon/10 border-neon/20' },
  { text: 'AI & Full Stack Dev', icon: Cpu, color: 'text-deep-green bg-deep-green/10 border-deep-green/20' },
  { text: 'Real-world Projects', icon: Code2, color: 'text-white bg-white/5 border-white/15' },
  { text: 'Fast Learner', icon: Flame, color: 'text-accent-red bg-accent-red/10 border-accent-red/20' },
  { text: 'Problem Solver', icon: Award, color: 'text-neon bg-neon/10 border-neon/20' },
];

export default function About() {
  return (
    <section id="about" className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12 relative z-10 animate-fade-in scroll-mt-24 sm:scroll-mt-28 gpu-stable">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="space-y-8"
      >
        {/* Modern Section Header - Left-aligned for mobile and desktop */}
        <div className="flex flex-col items-start text-left space-y-2.5 pl-1 sm:pl-0 w-full max-w-full">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-neon uppercase">
            <User size={14} className="animate-pulse" />
            <span>01 / BACKGROUND CONTEXT</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-sans font-extrabold tracking-tight text-soft-white leading-tight">
            About <span className="bg-linear-to-r from-neon via-deep-green to-neon bg-size-[200%_auto] bg-clip-text text-transparent animate-[shimmer_5s_infinite_linear]">Me</span>
          </h2>
          
          <p className="font-mono text-[11px] sm:text-xs md:text-sm text-soft-white tracking-wide leading-relaxed">
            BSc Computer Science Graduate • Python Full Stack & AI Developer
          </p>
          
          <div className="h-0.5 w-20 bg-linear-to-r from-neon to-transparent mt-1" />
        </div>

        {/* Unified Premium Card for Entire Body Section Background */}
        <div className="bg-zinc-900/95 backdrop-blur-md p-4 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl relative overflow-hidden border border-white/10 hover:border-neon/30 transition-all duration-300 shadow-2xl">
          {/* Distinctive background gradients */}
          <div className="absolute top-0 left-0 w-1.5 h-full bg-linear-to-b from-neon via-deep-green to-transparent" />
          <div className="absolute top-0 right-0 w-24 h-24 bg-neon/5 blur-3xl rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent-red/5 blur-3xl rounded-full pointer-events-none" />
          
          {/* Narrative Content with High-contrast Platinum Text */}
          <div className="space-y-4 sm:space-y-6 text-platinum text-[13px] sm:text-sm md:text-base leading-relaxed sm:leading-relaxed md:leading-relaxed font-sans font-normal relative z-10 pl-1 md:pl-2">
            <p>
              I’m a BSc Computer Science graduate (2026) focused on building scalable AI-powered and full-stack web applications that combine modern frontend experiences with efficient backend systems. My interests lie in Python development, AI integrations, intelligent automation, and creating real-world software solutions with clean architecture and performance-focused design.
            </p>
            <p>
              I have hands-on experience developing projects using React, FastAPI, Flask, machine learning models, REST APIs, and modern deployment platforms. I enjoy transforming ideas into functional products while continuously exploring emerging technologies such as LLMs, RAG systems, and AI-driven applications.
            </p>
            <p>
              Passionate about problem-solving, system design, and user-focused development, I aim to contribute to innovative teams building impactful and reliable software solutions.
            </p>
          </div>

          {/* Highlights & Competencies Embedded Inside the Card Bottom */}
          <div className="mt-8 pt-8 border-t border-white/5 space-y-4 relative z-10 pl-2">
            <span className="font-mono text-[10px] text-soft-white tracking-widest uppercase block font-semibold">
              Key Competency Vectors
            </span>
            <div className="flex flex-wrap gap-2">
              {highlights.map((hlt) => {
                const Icon = hlt.icon;
                return (
                  <div 
                    key={hlt.text}
                    className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border text-xs font-mono transition-all duration-300 hover:scale-[1.03] select-none ${hlt.color}`}
                  >
                    <Icon size={13} />
                    <span>{hlt.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </motion.div>
    </section>
  );
}

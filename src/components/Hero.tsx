import React from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Mail, FileText, ChevronDown, ArrowRight, Brain, Code, Terminal, Sparkles, AlertCircle } from 'lucide-react';

export default function Hero() {
  const [imageIndex, setImageIndex] = React.useState(0);
  const [imageFailed, setImageFailed] = React.useState(false);
  const imageSources = [
    '/profile.jpg',
    '/profile.png',
    '/profile.jpeg',
    '/src/profile.jpg',
    '/src/profile.png',
    '/src/components/profile.jpg',
    '/src/components/profile.png',
  ];

  const handleImageError = () => {
    if (imageIndex < imageSources.length - 1) {
      setImageIndex(prev => prev + 1);
    } else {
      setImageFailed(true);
    }
  };

  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 sm:pt-28 pb-12 sm:pb-16 px-4 sm:px-6 md:px-12 z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
        
        {/* Left Column: Bio and CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-5 md:space-y-8"
        >
          {/* Greeting Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neon/10 border border-neon/20 text-[10px] sm:text-xs font-mono font-medium text-neon tracking-wider uppercase animate-pulse">
            <Sparkles size={11} />
            <span>Available for innovative projects</span>
          </div>

          {/* Name Display */}
          <div className="space-y-2">
            <span className="font-mono text-[10px] sm:text-xs md:text-sm text-platinum tracking-[0.2em] sm:tracking-[0.25em] uppercase block">
              Hello World, I am
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-sans font-bold text-soft-white tracking-tight leading-tight sm:leading-none">
              Shanmugaraj Rajkumar
            </h1>
          </div>

          {/* Animated Glowing Gradient text for Role */}
          <div className="relative">
            <h2 className="text-base sm:text-2xl md:text-4xl font-mono font-bold tracking-tight bg-linear-to-r from-neon via-deep-green to-neon bg-size-[200%_auto] bg-clip-text text-transparent animate-[shimmer_5s_infinite_linear] inline-block glow-neon-text leading-tight">
              Python Full Stack & AI Developer
            </h2>
          </div>

          {/* Tagline Description */}
          <p className="text-platinum text-xs sm:text-base md:text-lg max-w-xl font-sans font-light leading-relaxed">
            Building scalable AI-powered web applications with modern frontend experiences, robust backend architectures, and intelligent automation workflows.
          </p>

          {/* CTA & Actions Block */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <a 
              href="#projects" 
              onClick={(e) => handleScrollClick(e, '#projects')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white text-matte font-mono text-xs uppercase tracking-wider font-semibold border border-white hover:bg-transparent hover:text-white transition-all duration-300 group"
            >
              <span>View Projects</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a 
              href="#contact" 
              onClick={(e) => handleScrollClick(e, '#contact')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-transparent border border-white/10 text-soft-white font-mono text-xs uppercase tracking-wider font-semibold hover:border-neon hover:bg-neon/5 transition-all duration-300"
            >
              <span>Contact Me</span>
            </a>

            <a 
              href={import.meta.env.VITE_RESUME_LINK} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#0A66C2] hover:bg-[#0077B5] text-white font-mono text-xs uppercase tracking-wider font-semibold border border-transparent shadow-[0_4px_15px_rgba(10,102,194,0.3)] hover:shadow-[0_4px_22px_rgba(10,102,194,0.55)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <FileText size={14} />
              <span>Resume</span>
            </a>
          </div>

          {/* Social Links Panel */}
          <div className="flex items-center gap-4 pt-2 sm:pt-4">
            <a 
              href="https://github.com/Shanmuga-Raj27" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 border border-white/5 hover:border-neon/40 text-platinum hover:text-neon transition-all duration-300 shadow-md active:scale-95"
              aria-label="GitHub Profile"
            >
              <Github size={16} />
            </a>
            <a 
              href="https://www.linkedin.com/in/shanmugaraj27" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 border border-white/5 hover:border-neon/40 text-platinum hover:text-[#0077b5] transition-all duration-300 shadow-md active:scale-95"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={16} />
            </a>
          </div>
        </motion.div>

        {/* Right Column: Profile representation and interactive glass elements */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="lg:col-span-5 flex items-center justify-center relative py-8"
        >
          {/* Subtle Outer Neon Aura Ring */}
          <div className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full border border-neon/10 glow-neon-lg animate-pulse" />

          {/* Main Rounded Profile Box Container */}
          <div className="relative z-10 w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-neon/40 p-1 overflow-hidden bg-[#0d0d0d] group flex items-center justify-center shadow-2xl transition-all duration-500 hover:border-neon">
            {/* Ambient inner soft glowing backdrop */}
            <div className="absolute inset-0 bg-linear-to-tr from-deep-green/10 via-matte to-accent-red/5" />
            
            {!imageFailed ? (
              <img
                src={imageSources[imageIndex]}
                alt="Shanmugaraj Rajkumar - Python Full Stack & AI Developer"
                referrerPolicy="no-referrer"
                onError={handleImageError}
                className="w-full h-full object-cover rounded-full relative z-20 transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              /* Real elegant vector representation of artificial intelligence & core development */
              <div className="relative flex flex-col items-center justify-center text-center p-6 select-none z-20">
                <div className="w-16 h-16 rounded-xl bg-neon/15 border border-neon/20 flex items-center justify-center text-neon mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                  <Brain size={32} />
                </div>
                <span className="font-mono text-xs tracking-widest text-soft-white uppercase font-bold text-center">SHANMUGARAJ RAJKUMAR</span>
                <span className="font-mono text-[9px] tracking-wider text-muted-gray mt-1 block">AI & FULL STACK DEVELOPER</span>
                <span className="font-sans text-[10px] text-neon/70 mt-3 border border-neon/30 px-2 py-0.5 rounded-full bg-neon/5 uppercase tracking-wider font-semibold">active_node_</span>
              </div>
            )}

            {/* Glowing active layer */}
            <div className="absolute inset-0 bg-neon/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
          </div>

          {/* Floating Tech Stack Badges with staggered animations - Hidden on Mobile to prevent viewport boundaries overlap */}
          
          {/* Python floating badge */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="hidden sm:flex absolute top-[10%] left-[5%] md:left-[10%] z-20 items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0d0d0d]/80 backdrop-blur-md border border-white/5 hover:border-neon/30 shadow-lg cursor-default"
          >
            <div className="w-2 h-2 rounded-full bg-blue-500" />
            <span className="font-mono text-xs text-soft-white">Python</span>
          </motion.div>

          {/* FastAPI floating badge */}
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
            className="hidden sm:flex absolute bottom-[15%] left-[0%] md:left-[5%] z-20 items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0d0d0d]/80 backdrop-blur-md border border-white/5 hover:border-deep-green/30 shadow-lg cursor-default"
          >
            <div className="w-2 h-2 rounded-full bg-teal-400" />
            <span className="font-mono text-xs text-soft-white">FastAPI</span>
          </motion.div>

          {/* React floating badge */}
          <motion.div 
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 1 }}
            className="hidden sm:flex absolute top-[20%] right-[0%] md:right-[5%] z-20 items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0d0d0d]/80 backdrop-blur-md border border-white/5 hover:border-neon/30 shadow-lg cursor-default"
          >
            <div className="w-2 h-2 rounded-full bg-cyan-400" />
            <span className="font-mono text-xs text-soft-white font-medium">React</span>
          </motion.div>

          {/* LLMs floating badge */}
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 0.2 }}
            className="hidden sm:flex absolute bottom-[20%] right-[5%] md:right-[10%] z-20 items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0d0d0d]/80 backdrop-blur-md border border-white/5 hover:border-neon/30 shadow-lg cursor-default"
          >
            <div className="w-2 h-2 rounded-full bg-neon animate-pulse" />
            <span className="font-mono text-xs text-soft-white">LLMs / RAG</span>
          </motion.div>
        </motion.div>

      </div>

      {/* Smooth Scroll Indicator Bar */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-muted-gray hover:text-neon transition-colors duration-200">
        <a 
          href="#about" 
          onClick={(e) => handleScrollClick(e, '#about')}
          className="flex flex-col items-center gap-2 cursor-pointer font-mono text-[10px] tracking-[0.25em] uppercase"
        >
          <span>Scroll Down</span>
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <ChevronDown size={14} />
          </motion.div>
        </a>
      </div>
    </section>
  );
}

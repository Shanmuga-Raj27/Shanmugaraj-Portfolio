import React, { useState, useEffect } from 'react';
import { Cpu } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const navItems = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Track scroll position to adjust navbar background blur
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for Scroll Spy
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-30% 0px -50% 0px',
        threshold: 0,
      }
    );

    const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'contact'];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-[9999] h-[72px] flex items-center"
        style={{
          background: 'rgba(5, 5, 5, 0.82)',
          backdropFilter: 'blur(18px)',
          WebkitBackdropFilter: 'blur(18px)',
          borderBottom: '1px solid rgba(0, 255, 170, 0.08)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between w-full">
          {/* Brand Logo - Minimal Modern SaaS representation */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-2.5 group cursor-pointer relative z-[9999] min-w-0"
          >
            <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 border border-white/10 group-hover:border-neon/30 transition-all duration-300 shrink-0">
              <Cpu size={16} className="text-neon group-hover:rotate-45 transition-transform duration-500" />
              <div className="absolute inset-0 bg-neon/10 rounded-lg blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <span
              className="font-mono tracking-wider font-semibold group-hover:text-neon transition-colors duration-300 whitespace-nowrap overflow-hidden text-ellipsis"
              style={{ fontSize: 'clamp(14px, 3vw, 18px)' }}
            >
              SHANMUGARAJ<span className="text-neon">.</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`text-xs font-mono tracking-widest uppercase transition-colors duration-200 relative py-1.5 group ${
                    isActive ? 'text-neon font-semibold' : 'text-muted-gray hover:text-neon'
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-neon transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Mobile Toggle Button (44x44px touch area) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-11 h-11 flex flex-col items-center justify-center gap-1.5 text-platinum hover:text-neon focus:outline-none transition-all duration-200 border border-white/5 rounded-lg bg-black/60 hover:scale-95 active:scale-90 relative z-[9999]"
            aria-label="Toggle Menu"
          >
            <span
              className={`w-5 h-0.5 bg-current transition-all duration-300 rounded-full ${
                isOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`w-5 h-0.5 bg-current transition-all duration-300 rounded-full ${
                isOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`w-5 h-0.5 bg-current transition-all duration-300 rounded-full ${
                isOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </header>

      {/* TRUE MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Layer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: 'linear' }}
              onClick={() => setIsOpen(false)}
              className="md:hidden fixed inset-0 z-[9997] bg-black/65 backdrop-blur-[8px] pointer-events-auto cursor-pointer"
            />

            {/* Menu Container Layer */}
            <motion.div
              initial={{ opacity: 0, y: -24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="md:hidden fixed top-0 left-0 right-0 max-h-[85vh] bg-[#050505]/95 backdrop-blur-[24px] border-b border-white/5 rounded-b-[24px] z-[9998] pt-[96px] pb-8 px-6 flex flex-col justify-between overflow-y-auto shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)]"
            >
              <nav className="flex flex-col w-full max-w-sm mx-auto relative z-10 py-4 gap-6">
                {navItems.map((item, index) => {
                  const isActive = activeSection === item.href.substring(1);
                  return (
                    <motion.a
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.04, duration: 0.25, ease: 'easeOut' }}
                      key={item.name}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`flex items-center justify-between font-mono tracking-widest uppercase py-3 border-b border-white/5 transition-all duration-300 text-xs ${
                        isActive
                          ? 'text-neon font-bold border-neon/30'
                          : 'text-platinum/80 hover:text-neon'
                      }`}
                      style={
                        isActive
                          ? { textShadow: '0 0 8px rgba(0, 255, 156, 0.3)' }
                          : undefined
                      }
                    >
                      <span>{item.name}</span>
                      {isActive ? (
                        <span className="w-1.5 h-1.5 rounded-full bg-neon shadow-[0_0_8px_rgba(0, 255, 156, 0.6)] animate-pulse" />
                      ) : (
                        <span className="w-1.5 h-1.5 rounded-full bg-transparent" />
                      )}
                    </motion.a>
                  );
                })}
              </nav>

              {/* Subtle brand watermark */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ delay: 0.3 }}
                className="w-full text-center font-mono text-[9px] text-muted-gray uppercase tracking-[0.25em] pointer-events-none pt-6 relative z-10"
              >
                Shanmugaraj Portfolio • Port Active
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

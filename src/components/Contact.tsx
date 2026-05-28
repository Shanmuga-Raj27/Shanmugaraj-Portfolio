import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Mail, 
  Phone, 
  Github, 
  Linkedin, 
  Send, 
  Check, 
  Copy, 
  Sparkles, 
  Clock, 
  MessageSquare, 
  ShieldCheck, 
  User,
  ArrowRight,
  FileText,
  AlertCircle
} from 'lucide-react';

export default function Contact() {
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

  // Clipboard copying states
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Form states
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Copy helpers
  const handleCopyEmail = () => {
    navigator.clipboard.writeText('rshanmugaraj11@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('+919041648197');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  // Submission handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setErrorMessage(null);
    
    try {
      const formEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;
      if (!formEndpoint) {
        throw new Error("Form endpoint configuration is missing. Please contact directly via email.");
      }

      const response = await fetch(formEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _replyto: formData.email,
          _subject: `Portfolio Message from ${formData.name}`,
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
        // Reset form
        setFormData({ name: '', email: '', message: '' });
      } else {
        const errorData = await response.json().catch(() => ({}));
        setErrorMessage(
          errorData?.error || "Failed to transmit message securely. Please copy the email gateway address directly."
        );
      }
    } catch (error) {
      console.error("Secure transmission error:", error);
      setErrorMessage("A network connection boundary error occurred. Please verify your connection or copy the email directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="w-full max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10 py-16 md:py-24 scroll-mt-24 sm:scroll-mt-28 gpu-stable">
      <motion.div
        initial={{ opacity: 0, y: isMobile ? 0 : 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: isMobile ? "-10px" : "-20px" }}
        transition={{ duration: isMobile ? 0.45 : 0.7, ease: "easeOut" }}
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
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-neon uppercase">
            <MessageSquare size={14} className="animate-pulse" />
            <span>05 / COLLABORATION GATEWAY</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-sans font-extrabold tracking-tight text-soft-white leading-tight">
            Contact <span className="bg-linear-to-r from-neon to-[#00b36c] bg-clip-text text-transparent">Me</span>
          </h2>
          
          <p className="font-mono text-[11px] sm:text-xs md:text-sm text-soft-white tracking-wide max-w-xl leading-relaxed">
            Open to internships, freelance opportunities, collaborations, and full-time software engineering roles.
          </p>
          
          <div className="h-0.5 w-20 bg-linear-to-r from-neon to-transparent mt-1" />
        </div>

        {/* Two-Column Responsive Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Premium Contact Information Cards (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            
            <div className="space-y-4">
              {/* Dynamic Availability status badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neon/10 border border-neon/20 text-neon font-mono text-[10px] lg:text-xs uppercase tracking-wider font-semibold self-start mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-neon animate-ping" />
                <span>Available for new projects</span>
              </div>

              {/* Email Glassmorphism Card */}
              <div 
                onMouseEnter={() => setActiveCardId('email')}
                onMouseLeave={() => setActiveCardId(null)}
                onPointerEnter={() => setActiveCardId('email')}
                onPointerLeave={() => setActiveCardId(null)}
                onPointerMove={() => setActiveCardId('email')}
                onMouseMove={() => setActiveCardId('email')}
                onTouchStart={() => setActiveCardId('email')}
                onTouchEnd={() => setActiveCardId(null)}
                onTouchCancel={() => setActiveCardId(null)}
                className={`bg-zinc-900/95 backdrop-blur-md rounded-2xl p-4 sm:p-6 border flex items-center justify-between gap-4 glow-card ${activeCardId === 'email' ? 'is-active-glow border-neon/60 shadow-[0_0_25px_rgba(0,255,156,0.12)]' : 'border-white/5'}`}
              >
                <div className="flex items-center gap-4 min-w-0">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:bg-neon/10 group-hover:border-neon/30 transition-all text-neon shrink-0">
                    <Mail size={18} />
                  </div>
                  <div className="space-y-1 min-w-0">
                    <span className="font-mono text-[9px] lg:text-[11px] text-accent-red tracking-widest uppercase block font-semibold">EMAIL GATEWAY</span>
                    <a href="mailto:rshanmugaraj11@gmail.com" className="font-sans text-xs sm:text-sm lg:text-base text-soft-white font-medium hover:text-neon transition-colors block truncate">
                      rshanmugaraj11@gmail.com
                    </a>
                  </div>
                </div>

                <button 
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-white/5 hover:bg-neon/10 hover:text-neon text-soft-white/60 border border-white/10 hover:border-neon/20 transition-all shrink-0"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check size={14} className="text-neon" /> : <Copy size={14} />}
                </button>
              </div>

              {/* Phone Info Card */}
              <div 
                onMouseEnter={() => setActiveCardId('phone')}
                onMouseLeave={() => setActiveCardId(null)}
                onPointerEnter={() => setActiveCardId('phone')}
                onPointerLeave={() => setActiveCardId(null)}
                onPointerMove={() => setActiveCardId('phone')}
                onMouseMove={() => setActiveCardId('phone')}
                onTouchStart={() => setActiveCardId('phone')}
                onTouchEnd={() => setActiveCardId(null)}
                onTouchCancel={() => setActiveCardId(null)}
                className={`bg-zinc-900/95 backdrop-blur-md rounded-2xl p-4 sm:p-6 border flex items-center justify-between gap-4 glow-card ${activeCardId === 'phone' ? 'is-active-glow border-neon/60 shadow-[0_0_25px_rgba(0,255,156,0.12)]' : 'border-white/5'}`}
              >
                <div className="flex items-center gap-4 min-w-0">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:bg-neon/10 group-hover:border-neon/30 transition-all text-neon shrink-0">
                    <Phone size={18} />
                  </div>
                  <div className="space-y-1 min-w-0">
                    <span className="font-mono text-[9px] lg:text-[11px] text-accent-red tracking-widest uppercase block font-semibold">PHONE ENCRYPTED</span>
                    <a href="tel:+919041648197" className="font-sans text-xs sm:text-sm lg:text-base text-soft-white font-medium hover:text-neon transition-colors block truncate">
                      +91 9041648197
                    </a>
                  </div>
                </div>

                <button 
                  onClick={handleCopyPhone}
                  className="p-2 rounded-lg bg-white/5 hover:bg-neon/10 hover:text-neon text-soft-white/60 border border-white/10 hover:border-neon/20 transition-all shrink-0"
                  title="Copy number to clipboard"
                >
                  {copiedPhone ? <Check size={14} className="text-neon" /> : <Copy size={14} />}
                </button>
              </div>

              {/* Interactive Info footer panel with replies statistic */}
              <div className="p-4 rounded-xl bg-white/2 border border-white/5 flex items-start gap-3">
                <Clock size={16} className="text-neon/80 mt-0.5 animate-pulse shrink-0" />
                <div className="space-y-0.5">
                  <p className="font-sans text-xs lg:text-sm text-soft-white font-semibold">Responsive SLA</p>
                  <p className="font-sans text-[11px] lg:text-xs text-platinum leading-normal">
                    Usually replies within 24 hours. Directly accessible via Slack or official communication handles.
                  </p>
                </div>
              </div>

              {/* Professional LinkedIn-blue Resume Download Card */}
              <div 
                onMouseEnter={() => setActiveCardId('resume')}
                onMouseLeave={() => setActiveCardId(null)}
                onPointerEnter={() => setActiveCardId('resume')}
                onPointerLeave={() => setActiveCardId(null)}
                onPointerMove={() => setActiveCardId('resume')}
                onMouseMove={() => setActiveCardId('resume')}
                onTouchStart={() => setActiveCardId('resume')}
                onTouchEnd={() => setActiveCardId(null)}
                onTouchCancel={() => setActiveCardId(null)}
                className={`bg-[#0A66C2]/10 backdrop-blur-md rounded-2xl p-4 border flex items-center justify-between gap-4 glow-card ${activeCardId === 'resume' ? 'is-active-glow blue' : 'border-[#0A66C2]/35'}`}
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="p-3 rounded-xl bg-[#0A66C2]/20 border border-[#0A66C2]/30 text-white shrink-0 shadow-[0_0_10px_rgba(10,102,194,0.25)]">
                    <FileText size={18} />
                  </div>
                  <div className="min-w-0">
                    <span className="font-mono text-[9px] lg:text-[11px] text-white/70 tracking-widest uppercase block font-semibold">VERIFIED CV</span>
                    <span className="font-sans text-xs sm:text-sm lg:text-base text-soft-white font-semibold">Curriculum Vitae</span>
                  </div>
                </div>
                <a
                  href={import.meta.env.VITE_RESUME_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#0A66C2] hover:bg-[#0077b5] text-white font-mono text-[10.5px] uppercase tracking-wider font-bold shadow-[0_3px_10px_rgba(10,102,194,0.2)] hover:shadow-[0_4px_18px_rgba(10,102,194,0.4)] transition-all duration-300 hover:scale-[1.03] active:scale-95 shrink-0"
                  title="View Resume on Google Drive"
                >
                  <span>Resume</span>
                  <ArrowRight size={11} className="animate-pulse" />
                </a>
              </div>
            </div>

            {/* Social handles connector footer card */}
            <div className="bg-zinc-900/95 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-white/5 mt-4">
              <span className="font-mono text-[9px] text-platinum tracking-widest uppercase block mb-3.5 font-bold">
                EXTERNAL CHANNELS
              </span>
              <div className="flex gap-3">
                <a 
                  href="https://github.com/Shanmuga-Raj27" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 p-3 rounded-xl bg-white/5 hover:bg-neon/10 border border-white/10 hover:border-neon/30 text-soft-white hover:text-neon font-mono text-[10px] uppercase tracking-wider font-semibold transition-all duration-300 group"
                >
                  <Github size={14} className="group-hover:scale-110 transition-transform" />
                  <span>GitHub</span>
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/shanmugaraj27" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 p-3 rounded-xl bg-white/5 hover:bg-neon/10 border border-white/10 hover:border-neon/30 text-soft-white hover:text-neon font-mono text-[10px] uppercase tracking-wider font-semibold transition-all duration-300 group"
                >
                  <Linkedin size={14} className="group-hover:scale-110 transition-transform" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Send Message Card (lg:col-span-7) */}
          <div className="lg:col-span-7">
            
            <div className="bg-zinc-900/95 backdrop-blur-md rounded-2xl p-5 sm:p-8 md:p-10 border border-white/5 hover:border-neon/10 transition-all duration-500 relative overflow-hidden flex flex-col justify-center min-h-[400px]">
              
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles size={14} className="text-neon" />
                      <h4 className="font-mono text-xs tracking-widest text-accent-red uppercase font-bold">
                        SECURE TRANSMISSION ENVELOPE
                      </h4>
                    </div>

                    {/* Full Name Input Group */}
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="block font-mono text-[10.5px] text-platinum tracking-widest uppercase font-bold">
                        Full Name
                      </label>
                      <div className="relative">
                        <input
                          id="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your Name (e.g. John Doe)"
                          className="w-full bg-matte border border-white/15 focus:border-neon rounded-xl py-3 px-4 text-xs sm:text-sm text-soft-white placeholder:text-platinum/50 outline-none transition-all focus:shadow-[0_0_15px_rgba(0,255,156,0.12)]"
                        />
                      </div>
                    </div>

                    {/* Email Input Group */}
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="block font-mono text-[10.5px] text-platinum tracking-widest uppercase font-bold">
                        Email Address
                      </label>
                      <div className="relative">
                        <input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="your.email@example.com"
                          className="w-full bg-matte border border-white/15 focus:border-neon rounded-xl py-3 px-4 text-xs sm:text-sm text-soft-white placeholder:text-platinum/50 outline-none transition-all focus:shadow-[0_0_15px_rgba(0,255,156,0.12)]"
                        />
                      </div>
                    </div>

                    {/* Message Box Group */}
                    <div className="space-y-1.5">
                      <label htmlFor="message" className="block font-mono text-[10.5px] text-platinum tracking-widest uppercase font-bold">
                        Message Content
                      </label>
                      <div className="relative">
                        <textarea
                          id="message"
                          required
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Write your project details or recruitment inquiry here..."
                          className="w-full bg-matte border border-white/15 focus:border-neon rounded-xl py-3 px-4 text-xs sm:text-sm text-soft-white placeholder:text-platinum/50 outline-none resize-none transition-all focus:shadow-[0_0_15px_rgba(0,255,156,0.12)]"
                        />
                      </div>
                    </div>

                    {/* Error display */}
                    {errorMessage && (
                      <motion.div 
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-3.5 rounded-xl bg-red-950/20 border border-red-500/30 text-red-400 text-[11px] sm:text-xs font-sans leading-normal flex items-start gap-2.5"
                      >
                        <AlertCircle size={14} className="mt-0.5 shrink-0 text-red-400" />
                        <span>{errorMessage}</span>
                      </motion.div>
                    )}

                    {/* Action Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white text-zinc-950 hover:bg-neon hover:text-zinc-900 disabled:opacity-50 text-xs font-mono font-bold uppercase tracking-widest transition-all duration-300 select-none"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 rounded-full border-2 border-zinc-900 border-t-transparent animate-spin mr-1" />
                          <span>Routing Message...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Secure Message</span>
                          <Send size={12} className="ml-1" />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  /* Premium visual success response card */
                  <motion.div
                    key="success-card"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center text-center p-6 space-y-5"
                  >
                    <div className="w-14 h-14 rounded-full bg-neon/15 border border-neon/30 flex items-center justify-center text-neon animate-bounce">
                      <ShieldCheck size={28} />
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-sans text-lg sm:text-xl font-extrabold text-soft-white">
                        Transmission Successful!
                      </h4>
                      <p className="font-sans text-xs sm:text-sm text-platinum max-w-sm leading-relaxed">
                        Thank you! Your message has been encrypted and routed directly to Shanmugaraj Rajkumar's direct inbox.
                      </p>
                    </div>

                    <div className="p-3 rounded-lg bg-white/2 border border-white/5 font-mono text-[10px] text-platinum/95 uppercase tracking-wider">
                      Reference ID: #SMR-{Math.floor(100000 + Math.random() * 900000)}
                    </div>

                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-neon/10 border border-neon/20 hover:border-neon text-neon font-mono text-[10px] uppercase tracking-wider font-bold transition-all duration-300"
                    >
                      <span>Send another message</span>
                      <ArrowRight size={10} />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>

          </div>

        </div>

        {/* Minimal Footer Signature line inside container */}
        <div className="pt-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="font-mono text-[10.5px] text-platinum/90">
            &copy; {new Date().getFullYear()} Shanmugaraj Rajkumar. Crafted with high performance React & dynamic animation loops.
          </p>
          <div className="flex items-center gap-2 text-[11px] font-mono text-neon font-bold">
            <span className="w-2 h-2 rounded-full bg-neon animate-pulse" />
            <span>Secure Port Active</span>
          </div>
        </div>

      </motion.div>
    </section>
  );
}

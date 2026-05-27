import React from 'react';
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiFastapi,
  SiFlask,
  SiDjango,
  SiTensorflow,
  SiNumpy,
  SiPandas,
  SiPostgresql,
  SiFirebase,
  SiSupabase,
  SiGooglecloud,
  SiGit,
  SiGithub,
  SiDocker,
  SiVercel,
  SiNetlify,
  SiPython,
  SiCplusplus
} from "react-icons/si";

// Establish alias for Css3 under simple-icons
const SiCss3 = SiCss;

export interface TechItem {
  name: string;
  category: string;
  color: string; // Tailwind glow border color class
  glowColor: string; // Background gradient overlay
  icon: React.ReactNode;
}

// 1. High-fidelity Custom SVG definitions for specialized brands/integrations
export const GeminiIcon = (className = "w-6 h-6") => (
  <svg className={`${className} animate-pulse`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C12 7.5 16.5 12 22 12C16.5 12 12 16.5 12 22C12 16.5 7.5 12 2 12C7.5 12 12 7.5 12 2Z" fill="url(#gemini-sparkle-brand-grad)"/>
    <path d="M19.5 4.5C19.5 6 20.5 7 22 7C20.5 7 19.5 8 19.5 9.5C19.5 8 18.5 7 17 7C18.5 7 19.5 6 19.5 4.5Z" fill="#A5B4FC"/>
    <path d="M6 18C6 19 6.7 19.7 7.7 19.7C6.7 19.7 6 20.4 6 21.4C6 20.4 5.3 19.7 4.3 19.7C5.3 19.7 6 19 6 18Z" fill="#C7D2FE"/>
    <defs>
      <linearGradient id="gemini-sparkle-brand-grad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
        <stop stopColor="#93C5FD" />
        <stop offset="0.4" stopColor="#A78BFA" />
        <stop offset="0.7" stopColor="#EC4899" />
        <stop offset="1" stopColor="#F43F5E" />
      </linearGradient>
    </defs>
  </svg>
);

export const HuggingFaceIcon = (className = "w-6 h-6") => (
  <svg className={`${className} select-none`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Head base */}
    <circle cx="12" cy="12" r="9.5" fill="#FFD21E" />
    {/* Eyes */}
    <circle cx="8.5" cy="10" r="1.3" fill="#202020" />
    <circle cx="15.5" cy="10" r="1.3" fill="#202020" />
    {/* Smiling cheeks blush */}
    <ellipse cx="6" cy="12" rx="1.5" ry="1" fill="#FF8A65" opacity="0.65" />
    <ellipse cx="18" cy="12" rx="1.5" ry="1" fill="#FF8A65" opacity="0.65" />
    {/* Friendly smile */}
    <path d="M 9.5 13.5 Q 12 15.5 14.5 13.5" stroke="#202020" strokeWidth="1.8" strokeLinecap="round" fill="none" />
    {/* Hugging hands (left and right) */}
    <path d="M 2.5 15.5 C 5 13 6 17 4.5 19" stroke="#E6A100" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    <path d="M 21.5 15.5 C 19 13 18 17 19.5 19.5" stroke="#E6A100" strokeWidth="2.5" strokeLinecap="round" fill="none" />
  </svg>
);

export const RenderIcon = (className = "w-6 h-6") => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 17.5C4 16.5 4.5 15.5 6 14L10 10C11.5 8.5 12.5 8.5 14 10L18 14C19.5 15.5 20 16.5 20 17.5" stroke="url(#render-official-grad)" strokeWidth="3" strokeLinecap="round" fill="none"/>
    <path d="M8 14.5C8 13.5 8.5 12.5 10 11L14 7C15.5 5.5 16.5 5.5 18 7L20 9" stroke="url(#render-official-grad)" strokeWidth="3" strokeLinecap="round" fill="none"/>
    <defs>
      <linearGradient id="render-official-grad" x1="0" y1="0" x2="1" y2="1">
        <stop stopColor="#4361EE" />
        <stop offset="0.5" stopColor="#7209B7" />
        <stop offset="1" stopColor="#F72585" />
      </linearGradient>
    </defs>
  </svg>
);

export const WebSocketsIcon = (className = "w-6 h-6") => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17 12H3M3 12L7 8M3 12L7 16" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7 12h14m0 0l-4-4m4 4l-4 4" stroke="#00F0A8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="12" r="3" stroke="#10B981" strokeWidth="1.5" fill="#022C22"/>
  </svg>
);

export const RestApiIcon = (className = "w-6 h-6") => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="#F43F5E" strokeWidth="2"/>
    <rect x="14" y="3" width="7" height="7" rx="1.5" stroke="#38BDF8" strokeWidth="2"/>
    <rect x="8.5" y="14" width="7" height="7" rx="1.5" stroke="#FBBC05" strokeWidth="2"/>
    <path d="M10 6.5h4M12 10v4" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const GoogleAntigravityIcon = (className = "w-6 h-6") => (
  <svg className={`${className} animate-spin-slow`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="url(#g-anti-brand-grad)" strokeWidth="1" strokeDasharray="3 3"/>
    <ellipse rx="8" ry="3.2" transform="translate(12, 12) rotate(45)" stroke="url(#g-anti-brand-grad)" strokeWidth="1.8" fill="none"/>
    <ellipse rx="8" ry="3.2" transform="translate(12, 12) rotate(-45)" stroke="url(#g-anti-brand-grad)" strokeWidth="1" strokeDasharray="2 1" fill="none"/>
    <circle cx="12" cy="12" r="4.5" fill="url(#g-anti-brand-grad)" />
    <circle cx="6.5" cy="6.5" r="1.5" fill="#4285F4"/>
    <circle cx="17.5" cy="17.5" r="1.5" fill="#EA4335"/>
    <defs>
      <linearGradient id="g-anti-brand-grad" x1="0" y1="0" x2="24" y2="24">
        <stop stopColor="#4285F4"/>
        <stop offset="0.33" stopColor="#EA4335"/>
        <stop offset="0.66" stopColor="#FBBC05"/>
        <stop offset="1" stopColor="#34A853"/>
      </linearGradient>
    </defs>
  </svg>
);

// row1Techs - 12 highly premium, brand-accurate technologies (Frontend & Core backend / cloud)
export const row1Techs: TechItem[] = [
  {
    name: 'React',
    category: 'Frontend',
    color: 'hover:border-[#61DAFB]/40 hover:shadow-[0_0_15px_rgba(97,218,251,0.25)]',
    glowColor: 'rgba(97, 218, 251, 0.08)',
    icon: <span className="text-[#61DAFB] flex items-center justify-center"><SiReact size={24} /></span>
  },
  {
    name: 'JavaScript',
    category: 'Programming',
    color: 'hover:border-[#F7DF1E]/40 hover:shadow-[0_0_15px_rgba(247,223,30,0.25)]',
    glowColor: 'rgba(247, 223, 30, 0.08)',
    icon: <span className="text-[#F7DF1E] bg-[#000000] rounded-sm p-[1px] flex items-center justify-center"><SiJavascript size={22} /></span>
  },
  {
    name: 'HTML5',
    category: 'Frontend',
    color: 'hover:border-[#E34F26]/40 hover:shadow-[0_0_15px_rgba(227,79,38,0.25)]',
    glowColor: 'rgba(227, 79, 38, 0.08)',
    icon: <span className="text-[#E34F26] flex items-center justify-center"><SiHtml5 size={24} /></span>
  },
  {
    name: 'CSS3',
    category: 'Frontend',
    color: 'hover:border-[#1572B6]/40 hover:shadow-[0_0_15px_rgba(21,114,182,0.25)]',
    glowColor: 'rgba(21, 114, 182, 0.08)',
    icon: <span className="text-[#1572B6] flex items-center justify-center"><SiCss3 size={24} /></span>
  },
  {
    name: 'Tailwind CSS',
    category: 'Frontend',
    color: 'hover:border-[#06B6D4]/40 hover:shadow-[0_0_15px_rgba(6,182,212,0.25)]',
    glowColor: 'rgba(6, 182, 212, 0.08)',
    icon: <span className="text-[#06B6D4] flex items-center justify-center"><SiTailwindcss size={24} /></span>
  },
  {
    name: 'Python',
    category: 'Programming',
    color: 'hover:border-[#3776AB]/40 hover:shadow-[0_0_15px_rgba(55,118,171,0.25)]',
    glowColor: 'rgba(55, 118, 171, 0.08)',
    icon: <span className="text-[#3776AB] flex items-center justify-center"><SiPython size={24} /></span>
  },
  {
    name: 'FastAPI',
    category: 'Backend',
    color: 'hover:border-[#05998B]/40 hover:shadow-[0_0_15px_rgba(5,153,139,0.25)]',
    glowColor: 'rgba(5, 153, 139, 0.08)',
    icon: <span className="text-[#05998B] flex items-center justify-center"><SiFastapi size={24} /></span>
  },
  {
    name: 'Flask',
    category: 'Backend',
    color: 'hover:border-white/30 hover:shadow-[0_0_15px_rgba(255,255,255,0.15)]',
    glowColor: 'rgba(255, 255, 255, 0.05)',
    icon: <span className="text-white flex items-center justify-center"><SiFlask size={24} /></span>
  },
  {
    name: 'Django',
    category: 'Backend',
    color: 'hover:border-[#092E20]/50 hover:shadow-[0_0_15px_rgba(9,46,32,0.35)]',
    glowColor: 'rgba(9, 46, 32, 0.1)',
    icon: <span className="text-[#092E20] flex items-center justify-center"><SiDjango size={24} /></span>
  },
  {
    name: 'WebSockets',
    category: 'Backend',
    color: 'hover:border-[#10B981]/40 hover:shadow-[0_0_15px_rgba(16,185,129,0.25)]',
    glowColor: 'rgba(16, 185, 129, 0.08)',
    icon: WebSocketsIcon()
  },
  {
    name: 'REST API',
    category: 'Backend',
    color: 'hover:border-[#F43F5E]/40 hover:shadow-[0_0_15px_rgba(244,63,150,0.25)]',
    glowColor: 'rgba(244, 63, 150, 0.08)',
    icon: RestApiIcon()
  },
  {
    name: 'Google Cloud',
    category: 'Cloud',
    color: 'hover:border-[#4285F4]/40 hover:shadow-[0_0_15px_rgba(66,133,244,0.25)]',
    glowColor: 'rgba(66, 133, 244, 0.08)',
    icon: <span className="text-[#4285F4] flex items-center justify-center"><SiGooglecloud size={24} /></span>
  }
];

// row2Techs - 15 technologies (AI, Databases, Platforms, and Tools)
export const row2Techs: TechItem[] = [
  {
    name: 'Gemini API',
    category: 'AI/ML',
    color: 'hover:border-[#7A5AF8]/40 hover:shadow-[0_0_15px_rgba(122,90,248,0.30)]',
    glowColor: 'rgba(122, 90, 248, 0.08)',
    icon: GeminiIcon()
  },
  {
    name: 'Hugging Face',
    category: 'AI/ML',
    color: 'hover:border-[#FFD21E]/40 hover:shadow-[0_0_15px_rgba(255,210,30,0.25)]',
    glowColor: 'rgba(255, 210, 30, 0.08)',
    icon: HuggingFaceIcon()
  },
  {
    name: 'TensorFlow',
    category: 'AI/ML',
    color: 'hover:border-[#FF6F00]/40 hover:shadow-[0_0_15px_rgba(255,111,0,0.25)]',
    glowColor: 'rgba(255, 111, 0, 0.08)',
    icon: <span className="text-[#FF6F00] flex items-center justify-center"><SiTensorflow size={24} /></span>
  },
  {
    name: 'NumPy',
    category: 'AI/ML',
    color: 'hover:border-[#013243]/40 hover:shadow-[0_0_15px_rgba(1,50,67,0.25)]',
    glowColor: 'rgba(1, 50, 67, 0.08)',
    icon: <span className="text-[#013243] bg-white rounded-sm p-[1px] flex items-center justify-center"><SiNumpy size={22} /></span>
  },
  {
    name: 'Pandas',
    category: 'AI/ML',
    color: 'hover:border-[#150458]/40 hover:shadow-[0_0_15px_rgba(21,4,88,0.25)]',
    glowColor: 'rgba(21, 4, 88, 0.08)',
    icon: <span className="text-[#150458] bg-white rounded-sm p-[1px] flex items-center justify-center"><SiPandas size={22} /></span>
  },
  {
    name: 'PostgreSQL',
    category: 'Database',
    color: 'hover:border-[#336791]/40 hover:shadow-[0_0_15px_rgba(51,103,145,0.25)]',
    glowColor: 'rgba(51, 103, 145, 0.08)',
    icon: <span className="text-[#336791] flex items-center justify-center"><SiPostgresql size={24} /></span>
  },
  {
    name: 'Supabase',
    category: 'Database',
    color: 'hover:border-[#3ECF8E]/40 hover:shadow-[0_0_15px_rgba(62,207,142,0.25)]',
    glowColor: 'rgba(62, 207, 142, 0.08)',
    icon: <span className="text-[#3ECF8E] flex items-center justify-center"><SiSupabase size={24} /></span>
  },
  {
    name: 'Firebase',
    category: 'Database',
    color: 'hover:border-[#FFCA28]/40 hover:shadow-[0_0_15px_rgba(255,202,40,0.25)]',
    glowColor: 'rgba(255, 202, 40, 0.08)',
    icon: <span className="text-[#FFCA28] flex items-center justify-center"><SiFirebase size={24} /></span>
  },
  {
    name: 'Antigravity',
    category: 'AI/ML',
    color: 'hover:border-[#EA4335]/40 hover:shadow-[0_0_15px_rgba(234,67,53,0.25)]',
    glowColor: 'rgba(234, 67, 53, 0.08)',
    icon: GoogleAntigravityIcon()
  },
  {
    name: 'Git',
    category: 'Tools',
    color: 'hover:border-[#F05032]/40 hover:shadow-[0_0_15px_rgba(240,80,50,0.25)]',
    glowColor: 'rgba(240, 80, 50, 0.08)',
    icon: <span className="text-[#F05032] flex items-center justify-center"><SiGit size={24} /></span>
  },
  {
    name: 'GitHub',
    category: 'Tools',
    color: 'hover:border-white/30 hover:shadow-[0_0_15px_rgba(255,255,255,0.15)]',
    glowColor: 'rgba(255, 255, 255, 0.05)',
    icon: <span className="text-white flex items-center justify-center"><SiGithub size={24} /></span>
  },
  {
    name: 'Docker',
    category: 'Tools',
    color: 'hover:border-[#2496ED]/40 hover:shadow-[0_0_15px_rgba(36,150,237,0.25)]',
    glowColor: 'rgba(36, 150, 237, 0.08)',
    icon: <span className="text-[#2496ED] flex items-center justify-center"><SiDocker size={24} /></span>
  },
  {
    name: 'Vercel',
    category: 'Tools',
    color: 'hover:border-white/30 hover:shadow-[0_0_15px_rgba(255,255,255,0.15)]',
    glowColor: 'rgba(255, 255, 255, 0.05)',
    icon: <span className="text-white flex items-center justify-center"><SiVercel size={24} /></span>
  },
  {
    name: 'Netlify',
    category: 'Tools',
    color: 'hover:border-[#00C7B7]/40 hover:shadow-[0_0_15px_rgba(0,199,183,0.25)]',
    glowColor: 'rgba(0, 199, 183, 0.08)',
    icon: <span className="text-[#00C7B7] flex items-center justify-center"><SiNetlify size={24} /></span>
  },
  {
    name: 'Render',
    category: 'Tools',
    color: 'hover:border-[#C77DFF]/40 hover:shadow-[0_0_15px_rgba(199,125,255,0.25)]',
    glowColor: 'rgba(199, 125, 255, 0.08)',
    icon: RenderIcon()
  }
];

// Helper to retrieve brand logo element and color for specific skill names
export function getOfficialTechIcon(name: string): React.ReactNode {
  const norm = name.trim().toLowerCase();

  // Primary developer matchers
  if (norm === 'python') return <span className="text-[#3776AB] flex items-center justify-center"><SiPython size={16} /></span>;
  if (norm === 'javascript' || norm === 'js') return <span className="text-[#F7DF1E] bg-[#000000] rounded-sm p-[0.5px] flex items-center justify-center"><SiJavascript size={14} /></span>;
  if (norm === 'react' || norm === 'react js' || norm === 'react.js') return <span className="text-[#61DAFB] flex items-center justify-center"><SiReact size={16} /></span>;
  if (norm === 'html' || norm === 'html5') return <span className="text-[#E34F26] flex items-center justify-center"><SiHtml5 size={16} /></span>;
  if (norm === 'css' || norm === 'css3') return <span className="text-[#1572B6] flex items-center justify-center"><SiCss3 size={16} /></span>;
  if (norm === 'tailwind css' || norm === 'tailwindcss') return <span className="text-[#06B6D4] flex items-center justify-center"><SiTailwindcss size={16} /></span>;
  if (norm === 'fastapi') return <span className="text-[#05998B] flex items-center justify-center"><SiFastapi size={16} /></span>;
  if (norm === 'flask') return <span className="text-[#CCCCCC] flex items-center justify-center"><SiFlask size={16} /></span>;
  if (norm === 'django') return <span className="text-[#092E20] flex items-center justify-center"><SiDjango size={16} /></span>;
  if (norm === 'websockets' || norm === 'websocket') return WebSocketsIcon("w-4 h-4");
  if (norm === 'rest apis' || norm === 'rest api' || norm === 'apis') return RestApiIcon("w-4 h-4");
  
  if (norm === 'gcp' || norm === 'google cloud' || norm === 'google cloud platform') return <span className="text-[#4285F4] flex items-center justify-center"><SiGooglecloud size={16} /></span>;
  if (norm === 'firebase') return <span className="text-[#FFCA28] flex items-center justify-center"><SiFirebase size={16} /></span>;
  if (norm === 'supabase') return <span className="text-[#3ECF8E] flex items-center justify-center"><SiSupabase size={16} /></span>;
  if (norm === 'postgresql' || norm === 'postgres') return <span className="text-[#336791] flex items-center justify-center"><SiPostgresql size={16} /></span>;
  
  if (norm === 'numpy') return <span className="text-[#013243] bg-white rounded-sm p-[0.3px] flex items-center justify-center"><SiNumpy size={14} /></span>;
  if (norm === 'pandas') return <span className="text-[#150458] bg-white rounded-sm p-[0.3px] flex items-center justify-center"><SiPandas size={14} /></span>;
  if (norm === 'tensorflow') return <span className="text-[#FF6F00] flex items-center justify-center"><SiTensorflow size={16} /></span>;
  if (norm === 'hugging face') return HuggingFaceIcon("w-4 h-4");
  if (norm === 'gemini' || norm === 'gemini api') return GeminiIcon("w-4 h-4");
  
  if (norm === 'git') return <span className="text-[#F05032] flex items-center justify-center"><SiGit size={16} /></span>;
  if (norm === 'github') return <span className="text-[#F3F4F6] flex items-center justify-center"><SiGithub size={16} /></span>;
  if (norm === 'docker') return <span className="text-[#2496ED] flex items-center justify-center"><SiDocker size={16} /></span>;
  if (norm === 'vercel') return <span className="text-[#FFFFFF] flex items-center justify-center"><SiVercel size={16} /></span>;
  if (norm === 'netlify') return <span className="text-[#00C7B7] flex items-center justify-center"><SiNetlify size={16} /></span>;
  if (norm === 'render') return RenderIcon("w-4 h-4");
  if (norm === 'google antigravity' || norm === 'antigravity') return GoogleAntigravityIcon("w-4 h-4");
  
  if (norm === 'c/c++' || norm === 'c++') return <span className="text-[#00599C] flex items-center justify-center"><SiCplusplus size={16} /></span>;

  // Secondary/Generic Concept styling using unique custom SVGs (instead of Lucide)
  if (norm.includes('sql')) {
    return (
      <svg className="w-4 h-4 text-amber-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 3c-5.5 0-10 1.3-10 3v4c0 1.7 4.5 3 10 3s10-1.3 10-3V6c0-1.7-4.5-3-10-3zM2 10c0 1.7 4.5 3 10 3s10-1.3 10-3" />
        <path d="M2 14c0 1.7 4.5 3 10 3s10-1.3 10-3" />
        <path d="M2 18c0 1.7 4.5 3 10 3s10-1.3 10-3" />
      </svg>
    );
  }
  if (norm.includes('responsive')) {
    return (
      <svg className="w-4 h-4 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    );
  }
  if (norm.includes('machine learning') || norm.includes('ai') || norm.includes('neural')) {
    return (
      <svg className="w-4 h-4 text-violet-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8" />
        <circle cx="12" cy="12" r="4" fill="currentColor" />
      </svg>
    );
  }
  if (norm.includes('vector db') || norm.includes('vector database')) {
    return (
      <svg className="w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    );
  }
  if (norm.includes('llm') || norm.includes('rag') || norm.includes('prompt')) {
    return (
      <svg className="w-4 h-4 text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    );
  }

  // fallback to terminal syntax symbol
  return (
    <svg className="w-3 h-3 text-neon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M4 17l6-6-6-6M12 19h8" />
    </svg>
  );
}

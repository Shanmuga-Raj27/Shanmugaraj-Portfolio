import { useEffect, useRef, useState } from 'react';

interface SpaceStar {
  x: number;
  y: number;
  size: number;
  baseOpacity: number;
  opacity: number;
  twinkleFactor: number;
  twinkleSpeed: number;
  parallaxFactor: number;
  color: string;
}

interface CharacterStar {
  x: number; // 0 to 1 normalized inside bounding box
  y: number; // 0 to 1 normalized inside bounding box
  r: number;
  o: number;
  speed: number;
}

interface ShootingStar {
  startX: number;
  startY: number;
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  active: boolean;
  opacity: number;
}

export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const alienRef = useRef<HTMLDivElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Mouse coords wrapper for parallax with smooth LERP interpolate
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const starsRef = useRef<SpaceStar[]>([]);
  const bodyStarsRef = useRef<CharacterStar[]>([]);
  const shootingStarRef = useRef<ShootingStar>({
    startX: 0,
    startY: 0,
    x: 0,
    y: 0,
    length: 0,
    speed: 0,
    angle: 0,
    active: false,
    opacity: 0,
  });

  // Cosmic lightning intensity tracker
  const lightningIntensityRef = useRef(0);
  const lightningTimerRef = useRef(0);
  const animationFrameId = useRef<number | null>(null);

  useEffect(() => {
    // Determine screen status
    const checkMobileWidth = () => {
      const mobileStatus = window.innerWidth < 768;
      setIsMobile(mobileStatus);
      return mobileStatus;
    };
    
    const mobileValue = checkMobileWidth();

    // Canvas size initialization
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      const currentMobile = window.innerWidth < 768;
      setIsMobile(currentMobile);

      // Re-initialize stars dynamically based on screen real-estate for optimal memory footprint
      const numStars = currentMobile ? 45 : 140;
      const starColors = [
        'rgba(255, 255, 255, ',
        'rgba(220, 235, 255, ',
        'rgba(200, 255, 250, ',
        'rgba(235, 215, 255, ',
      ];

      starsRef.current = Array.from({ length: numStars }).map(() => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.6 + 0.4,
        baseOpacity: Math.random() * 0.55 + 0.15,
        opacity: 0,
        twinkleFactor: Math.random() * Math.PI,
        twinkleSpeed: Math.random() * 0.015 + 0.004,
        parallaxFactor: Math.random() * 1.5 + 0.2, // 3D depth multi-layer speed factor
        color: starColors[Math.floor(Math.random() * starColors.length)],
      }));

      // Internal galactic stars that light up Alien X's torso
      const numBodyStars = currentMobile ? 40 : 100;
      bodyStarsRef.current = Array.from({ length: numBodyStars }).map(() => ({
        x: Math.random(),
        y: Math.random(),
        r: Math.random() * 1.4 + 0.3,
        o: Math.random() * 0.7 + 0.2,
        speed: Math.random() * 1.5 + 0.5,
      }));
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Track mouse motions for subtle multi-layered parallax shifts
    const handleMouseMove = (e: MouseEvent) => {
      // Scale coordinates from -0.5 to 0.5
      mouseRef.current.targetX = (e.clientX / window.innerWidth) - 0.5;
      mouseRef.current.targetY = (e.clientY / window.innerHeight) - 0.5;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Main 60FPS high-fidelity rendering loop
    const render = () => {
      if (!canvas || !ctx) return;

      // Soft LERP equation for absolute butter-smooth motion interpolation
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.045;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.045;

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      // Draw matte base backdrop
      ctx.fillStyle = '#030304';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // --- 1. RENDER CELESTIAL BACKGROUND NEBULAE ---
      // Draw cosmic nebula clouds with smooth radial overlays (Alien X celestial workspace)
      const cxPurple = canvas.width * 0.3 + mx * -40;
      const cyPurple = canvas.height * 0.4 + my * -40;
      const purpleGrad = ctx.createRadialGradient(cxPurple, cyPurple, 50, cxPurple, cyPurple, canvas.width * 0.65);
      // Celestial violet, deep navy and cosmic teal accents
      purpleGrad.addColorStop(0, 'rgba(64, 18, 114, 0.07)'); 
      purpleGrad.addColorStop(0.5, 'rgba(12, 10, 48, 0.03)');
      purpleGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = purpleGrad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const cxBlue = canvas.width * 0.75 + mx * -65;
      const cyBlue = canvas.height * 0.6 + my * -65;
      const blueGrad = ctx.createRadialGradient(cxBlue, cyBlue, 80, cxBlue, cyBlue, canvas.width * 0.55);
      blueGrad.addColorStop(0, 'rgba(10, 52, 162, 0.04)');
      blueGrad.addColorStop(0.6, 'rgba(6, 12, 38, 0.02)');
      blueGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = blueGrad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // --- 2. RENDER COSMIC LIGHTNING/SURGE TRIGGER ---
      // Occasional random electrical energy surges illuminating the vacuum
      lightningTimerRef.current++;
      if (lightningTimerRef.current > 420) {
        if (Math.random() < 0.007) {
          lightningIntensityRef.current = Math.random() * 0.8 + 0.2; // Peak power
          lightningTimerRef.current = 0;
        }
      }

      if (lightningIntensityRef.current > 0.01) {
        // Draw ambient purple-white flash across entire sky
        ctx.fillStyle = `rgba(135, 75, 255, ${lightningIntensityRef.current * 0.05})`;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Decay lightning discharge smoothly
        lightningIntensityRef.current *= 0.93;
      }

      // --- 3. RENDER ALL TWINKLING CONSTELLATIONS & STARS ---
      const starsArr = starsRef.current;
      
      // Update star twinkle factor
      starsArr.forEach((star) => {
        star.twinkleFactor += star.twinkleSpeed;
        const sineWave = Math.sin(star.twinkleFactor);
        star.opacity = star.baseOpacity + sineWave * 0.25;
        if (star.opacity < 0.05) star.opacity = 0.05;
        if (star.opacity > 0.9) star.opacity = 0.95;

        // Render point
        ctx.fillStyle = `${star.color}${star.opacity})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Occasional star halo glow during surges
        if (star.size > 1.35 && lightningIntensityRef.current > 0.1) {
          ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity * 0.35})`;
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size * 2.5, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // Draw constellation-network matching nodes if on desktop (optimized memory footprint)
      if (!mobileValue && starsArr.length > 50) {
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
        ctx.lineWidth = 0.6;
        for (let i = 0; i < starsArr.length; i += 7) {
          const starA = starsArr[i];
          const ax = starA.x;
          const ay = starA.y;

          for (let j = i + 1; j < i + 15; j++) {
            if (j >= starsArr.length) break;
            const starB = starsArr[j];
            const bx = starB.x;
            const by = starB.y;

            const dx = ax - bx;
            const dy = ay - by;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 60) {
              const alphaRatio = (1 - dist / 60) * 0.05;
              ctx.strokeStyle = `rgba(0, 255, 156, ${alphaRatio})`;
              ctx.beginPath();
              ctx.moveTo(ax, ay);
              ctx.lineTo(bx, by);
              ctx.stroke();
            }
          }
        }
      }

      // --- 4. RENDER CELESTIAL SHOOTING STARS ---
      const ss = shootingStarRef.current;
      if (!ss.active) {
        // Star ignition frequency probability
        if (Math.random() < 0.0016) {
          ss.active = true;
          ss.startX = Math.random() * canvas.width * 0.6;
          ss.startY = Math.random() * canvas.height * 0.45;
          ss.x = ss.startX;
          ss.y = ss.startY;
          ss.length = Math.random() * 80 + 40;
          ss.speed = Math.random() * 6 + 4.5;
          ss.angle = Math.PI / 6 + Math.random() * (Math.PI / 12); // Slanted downward angle (30-45 deg)
          ss.opacity = 1.0;
        }
      } else {
        // Advance path coordinates
        const stepX = ss.speed * Math.cos(ss.angle);
        const stepY = ss.speed * Math.sin(ss.angle);
        ss.x += stepX;
        ss.y += stepY;
        
        // Decay visual tail
        const tailX = ss.x - ss.length * Math.cos(ss.angle);
        const tailY = ss.y - ss.length * Math.sin(ss.angle);

        const ssGrad = ctx.createLinearGradient(ss.x, ss.y, tailX, tailY);
        ssGrad.addColorStop(0, `rgba(255, 255, 255, ${ss.opacity * 0.8})`);
        ssGrad.addColorStop(0.2, `rgba(0, 255, 156, ${ss.opacity * 0.5})`);
        ssGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.strokeStyle = ssGrad;
        ctx.lineWidth = 1.35;
        ctx.beginPath();
        ctx.moveTo(ss.x, ss.y);
        ctx.lineTo(tailX, tailY);
        ctx.stroke();

        // Fade multiplier
        ss.opacity *= 0.985;
        if (ss.opacity < 0.03 || ss.x > canvas.width || ss.y > canvas.height) {
          ss.active = false;
        }
      }

      // --- 5. FIXED ALIEN X CENTER POSITION (Completely stable and non-interactive) ---
      if (alienRef.current) {
        alienRef.current.style.transform = 'translate3d(-50%, -50%, 0)';
      }

      animationFrameId.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [isMobile]);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none w-full h-full overflow-hidden">
      {/* Dynamic 60fps Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 block w-full h-full" />
      
      {/* Matte black vignette edge depth overlay to frame the cards beautifully */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/15 pointer-events-none" />
      
      {/* Premium subtle alignment grid matrix blended seamlessly */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.06] pointer-events-none" />

      {/* High-Fidelity Programmer Silhouetted Background Image Layer (Completely Stable Center Layout) */}
      <div 
        ref={alienRef} 
        className="absolute top-[58%] left-1/2 w-[280px] sm:w-[400px] md:w-[500px] lg:w-[640px] xl:w-[740px] h-auto pointer-events-none mix-blend-screen transition-opacity duration-1000 ease-in-out select-none"
        style={{
          opacity: isMobile ? 0.12 : 0.22,
          willChange: 'transform',
          transform: 'translate3d(-50%, -50%, 0)',
        }}
      >
        {/* Silhouette theme background */}
        <img 
          src="https://thumbs.dreamstime.com/b/black-white-illustration-depicting-silhouetted-figure-likely-programmer-software-developer-405368530.jpg?w=768" 
          alt="Programmer Software Developer Silhouette"
          referrerPolicy="no-referrer"
          className="relative z-10 w-full h-auto object-contain"
          style={{ contentVisibility: 'auto' }}
        />
      </div>
    </div>
  );
}

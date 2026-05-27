import { useEffect, useState } from 'react';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
}

export default function Background() {
  const [stars, setStars] = useState<Star[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile viewport for performance throttling
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Generate quiet, elegant stars once on mount
    // Dramatically reduce node count on mobile (15 vs 60) to avoid scroll lags
    const starCount = isMobile ? 15 : 60;
    const generatedStars = Array.from({ length: starCount }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 1.5 + 0.8,
      opacity: Math.random() * 0.4 + 0.1,
      duration: Math.random() * 6 + 4,
    }));
    setStars(generatedStars);
  }, [isMobile]);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none w-full h-full overflow-hidden transform-gpu">
      {/* Matte black deep space background */}
      <div className="absolute inset-0 bg-matte" />
      
      {/* Soft elegant grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-15" />
      
      {/* Ambient color blobs - Professional green and red accents */}
      {/* Reduced blur and disabled infinite pulsing loops on mobile to save layout repaints */}
      <div 
        className={`absolute top-[10%] left-[10%] w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-deep-green/5 blur-[80px] md:blur-[130px] rounded-full pointer-events-none transform-gpu ${
          isMobile ? '' : 'animate-pulse'
        }`} 
        style={isMobile ? undefined : { animationDuration: '8s' }} 
      />
      <div 
        className={`absolute bottom-[20%] right-[5%] w-[350px] h-[350px] md:w-[500px] md:h-[500px] bg-accent-red/3 blur-[90px] md:blur-[140px] rounded-full pointer-events-none transform-gpu ${
          isMobile ? '' : 'animate-pulse'
        }`} 
        style={isMobile ? undefined : { animationDuration: '12s' }} 
      />
      <div className="absolute top-[60%] left-[60%] w-[250px] h-[250px] md:w-[350px] md:h-[350px] bg-neon/3 blur-[70px] md:blur-[110px] rounded-full pointer-events-none transform-gpu" />

      {/* Star Particles */}
      {stars.map((star) => (
        <div
          key={star.id}
          className={`absolute bg-white rounded-full transform-gpu ${
            isMobile ? '' : 'animate-pulse'
          }`}
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animationDuration: isMobile ? undefined : `${star.duration}s`,
            animationTimingFunction: isMobile ? undefined : 'ease-in-out',
            animationIterationCount: isMobile ? undefined : 'infinite',
            animationDirection: isMobile ? undefined : 'alternate',
          }}
        />
      ))}
    </div>
  );
}

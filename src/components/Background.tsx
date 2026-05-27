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

  useEffect(() => {
    // Generate quiet, elegant stars once on mount to keep animation performance optimal
    const starCount = 60;
    const generatedStars = Array.from({ length: starCount }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 1.5 + 0.8,
      opacity: Math.random() * 0.4 + 0.1,
      duration: Math.random() * 6 + 4,
    }));
    setStars(generatedStars);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none w-full h-full overflow-hidden">
      {/* Matte black deep space background */}
      <div className="absolute inset-0 bg-[#050505]" />
      
      {/* Soft elegant grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-15" />
      
      {/* Ambient color blobs - Professional green and red accents */}
      <div className="absolute top-[10%] left-[10%] w-[450px] h-[450px] bg-deep-green/5 blur-[130px] rounded-full animate-pulse pointer-events-none" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-[20%] right-[5%] w-[500px] h-[500px] bg-accent-red/3 blur-[140px] rounded-full animate-pulse pointer-events-none" style={{ animationDuration: '12s' }} />
      <div className="absolute top-[60%] left-[60%] w-[350px] h-[350px] bg-neon/3 blur-[110px] rounded-full pointer-events-none" />

      {/* Star Particles */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute bg-white rounded-full animate-pulse"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animationDuration: `${star.duration}s`,
            animationTimingFunction: 'ease-in-out',
            animationIterationCount: 'infinite',
            animationDirection: 'alternate',
          }}
        />
      ))}
    </div>
  );
}

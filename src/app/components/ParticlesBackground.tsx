import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export function ParticlesBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Generate random particles
  const particles = Array.from({ length: 25 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1, // 1px to 4px
    duration: Math.random() * 20 + 10, // 10s to 30s
    delay: Math.random() * 5,
  }));

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-blue-400/30 blur-[1px]"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            boxShadow: `0 0 ${particle.size * 2}px ${particle.size}px rgba(59, 130, 246, 0.2)`
          }}
          animate={{
            y: [
              `${particle.y}%`, 
              `${particle.y - (Math.random() * 20 + 10)}%`, 
              `${particle.y}%`
            ],
            x: [
              `${particle.x}%`, 
              `${particle.x + (Math.random() * 10 - 5)}%`, 
              `${particle.x}%`
            ],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "linear",
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  );
}

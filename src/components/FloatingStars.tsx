import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

interface Star {
  id: number;
  size: number;
  x: number;
  y: number;
  delay: number;
  duration: number;
  moveRange: number;
  color: string;
}

const generateStars = (count: number): Star[] => {
  const colors = [
    'rgb(255, 215, 0)', // Gold
    'rgb(255, 223, 102)', // Light gold
    'rgb(255, 236, 179)', // Very light gold
    'rgb(218, 165, 32)', // Golden rod
  ];

  return Array.from({ length: count }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 3,
    duration: Math.random() * 4 + 2,
    moveRange: (Math.random() - 0.5) * 70,
    color: colors[Math.floor(Math.random() * colors.length)],
  }));
};

export const FloatingStars = () => {
  const { scrollYProgress } = useScroll();
  const stars = generateStars(150); // Increased number of stars

  return (
    <div className="fixed inset-0 pointer-events-none">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.8, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: star.duration,
            delay: star.delay,
            ease: "easeInOut",
          }}
        >
          <motion.div
            className="w-full h-full"
            style={{
              background: `radial-gradient(circle at center, ${star.color}, rgba(255, 215, 0, 0))`,
              boxShadow: `0 0 ${star.size * 3}px ${star.color}`,
              borderRadius: '50%',
              filter: 'blur(0.5px)',
              y: useSpring(useTransform(scrollYProgress, [0, 1], [0, star.moveRange]), {
                stiffness: 50,
                damping: 20,
              }),
            }}
          />
        </motion.div>
      ))}
      
      {/* Add cosmic dust particles */}
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={`dust-${i}`}
          className="absolute w-40 h-40 opacity-20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: 'radial-gradient(circle at center, rgba(255, 215, 0, 0.3), transparent)',
            filter: 'blur(12px)',
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: Math.random() * 7 + 5,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
};
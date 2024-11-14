import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

interface Orb {
  id: number;
  size: number;
  initialX: number;
  initialY: number;
  moveRangeX: number;
  moveRangeY: number;
  delay: number;
}

const generateOrbs = (count: number): Orb[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    size: Math.random() * 20 + 10,
    initialX: Math.random() * 100,
    initialY: Math.random() * 100,
    moveRangeX: (Math.random() - 0.5) * 200,
    moveRangeY: (Math.random() - 0.5) * 200,
    delay: Math.random() * 0.5,
  }));
};

export const FloatingOrbs = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const orbs = generateOrbs(15);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-10"
      style={{ perspective: '1000px' }}
    >
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className="absolute"
          style={{
            left: `${orb.initialX}%`,
            top: `${orb.initialY}%`,
            width: orb.size,
            height: orb.size,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.2, 1] }}
          transition={{
            opacity: {
              duration: 3,
              repeat: Infinity,
              delay: orb.delay,
            },
            scale: {
              duration: 4,
              repeat: Infinity,
              delay: orb.delay,
            },
          }}
        >
          <motion.div
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              background: 'radial-gradient(circle at 30% 30%, rgb(255, 215, 0), rgb(218, 165, 32))',
              filter: 'blur(1px)',
              boxShadow: '0 0 20px rgba(255, 215, 0, 0.5), inset 0 0 10px rgba(255, 215, 0, 0.3)',
              x: useSpring(useTransform(scrollYProgress, [0, 1], [0, orb.moveRangeX]), {
                stiffness: 100,
                damping: 30,
              }),
              y: useSpring(useTransform(scrollYProgress, [0, 1], [0, orb.moveRangeY]), {
                stiffness: 100,
                damping: 30,
              }),
              rotateX: useTransform(scrollYProgress, [0, 1], [0, Math.random() * 360]),
              rotateY: useTransform(scrollYProgress, [0, 1], [0, Math.random() * 360]),
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};
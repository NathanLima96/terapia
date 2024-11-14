import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Heart, Users, Star } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Domínio Mental',
    description: 'Aprenda técnicas poderosas para dominar seus pensamentos e emoções.'
  },
  {
    icon: Heart,
    title: 'Cura Interior',
    description: 'Cura emocional profunda através de métodos terapêuticos comprovados.'
  },
  {
    icon: Users,
    title: 'Suporte Comunitário',
    description: 'Junte-se a uma comunidade acolhedora de pessoas com objetivos semelhantes.'
  },
  {
    icon: Star,
    title: 'Crescimento Pessoal',
    description: 'Alcance resultados extraordinários em seu desenvolvimento pessoal.'
  }
];

export const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gradient-to-br from-bronze-900/50 to-black/80 p-8 rounded-2xl backdrop-blur-sm hover:scale-105 transition-transform duration-300 border border-gold-800/30 shadow-lg shadow-gold-900/20"
            >
              <feature.icon className="w-12 h-12 text-gold-400 mb-4" />
              <h3 className="text-xl font-bold mb-2 animate-gradient">{feature.title}</h3>
              <p className="text-gold-200/80">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
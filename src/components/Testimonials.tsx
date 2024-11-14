import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Life Coach",
    content: "RAIO de LIGHT transformou não apenas minha prática, mas toda minha abordagem de cura.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
  },
  {
    name: "Miguel Silva",
    role: "Praticante de Mindfulness",
    content: "O curso de terapia mais completo que já experimentei. Mudou minha vida!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
  },
  {
    name: "Ana Santos",
    role: "Especialista em Bem-estar",
    content: "Uma combinação perfeita de sabedoria tradicional e abordagens terapêuticas modernas.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
  }
];

export const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="bg-gradient-to-b from-black via-midnight-900/10 to-black py-24 relative">
      <div className="absolute inset-0 bg-radial-gold opacity-30" />
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold animate-gradient mb-4">Experiências Transformadoras</h2>
          <p className="text-gold-200 text-xl">Depoimentos de nossa comunidade</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gradient-to-br from-midnight-900/30 to-black backdrop-blur-sm rounded-2xl p-8 hover:scale-105 transition-transform duration-300 border border-gold-800/30 shadow-lg shadow-gold-900/20"
            >
              <Quote className="w-10 h-10 text-gold-400 mb-4" />
              <p className="text-gold-100 mb-6">{testimonial.content}</p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-gold-500"
                />
                <div>
                  <h4 className="text-gold-300 font-semibold">{testimonial.name}</h4>
                  <p className="text-gold-400/80">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
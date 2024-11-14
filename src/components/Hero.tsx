import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export const Hero = () => {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80"
          alt="Fundo Meditação"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
        <div className="absolute inset-0 bg-radial-gold" />
      </div>
      
      <div className="relative z-10 px-4 py-32 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 bg-cosmic-200/30 backdrop-blur-sm px-6 py-2 rounded-full mb-8 border border-gold-500/20"
          >
            <Sparkles className="w-5 h-5 text-gold-400" />
            <span className="text-gold-200">Transforme Sua Vida Hoje</span>
          </motion.div>
          
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-8 animate-gradient"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            RAIO de LUZ
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-gold-100 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Descubra o poder da transformação interior com nosso curso exclusivo de terapia holística.
          </motion.p>
          
          <motion.a
            href="https://pay.hotmart.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gradient-to-r from-gold-600 via-gold-500 to-gold-400 text-black px-8 py-4 rounded-lg text-xl font-semibold hover:from-gold-700 hover:via-gold-600 hover:to-gold-500 transition-all shadow-lg shadow-gold-500/20"
          >
            Inscreva-se Agora
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};
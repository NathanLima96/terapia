import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="relative py-16 overflow-hidden">
      <div className="absolute inset-0 bg-cosmic-gradient opacity-95" />
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="cosmic-card p-8 rounded-2xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold animate-gradient">Contato</h2>
              <div className="space-y-4">
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 text-gold-300"
                >
                  <MapPin className="w-5 h-5 text-gold-400" />
                  <span>RUA ANTÔNIO JARDINETTI, 499 - CENTRO,<br />SÃO TOMÉ - PR, 87220-000</span>
                </motion.div>
                
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 text-gold-300"
                >
                  <Phone className="w-5 h-5 text-gold-400" />
                  <span>CEL: (44) 99101-2987</span>
                </motion.div>
                
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 text-gold-300"
                >
                  <Mail className="w-5 h-5 text-gold-400" />
                  <span>@ANTONIADEMOURATERAPEUTA</span>
                </motion.div>
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gold-300">T.H ANTÔNIA DE MOURA LIMA</h3>
                <p className="text-gold-200">
                  TERAPEUTA HOLÍSTICA SHY - NÍVEL III<br />
                  MATRÍCULA SHYTER - PR: BR2024009
                </p>
                <motion.a
                  href="https://pay.hotmart.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block bg-gradient-to-r from-gold-600 via-gold-500 to-gold-400 text-black px-6 py-3 rounded-lg text-lg font-semibold hover:from-gold-700 hover:via-gold-600 hover:to-gold-500 transition-all shadow-lg shadow-gold-500/20"
                >
                  Garantir Minha Vaga
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
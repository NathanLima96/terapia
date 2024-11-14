import React from 'react';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { FloatingStars } from './components/FloatingStars';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="bg-gradient-to-b from-cosmic-300 via-cosmic-400 to-cosmic-500 min-h-screen relative">
      <div className="absolute inset-0 bg-cosmic-gradient opacity-95" />
      <FloatingStars />
      <div className="relative z-10">
        <Hero />
        <Features />
        <Testimonials />
        <Footer />
      </div>
    </div>
  );
}

export default App;
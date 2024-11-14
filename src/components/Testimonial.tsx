import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
}

export function Testimonial({ quote, author, role }: TestimonialProps) {
  return (
    <div className="bg-gradient-to-br from-gold-50 to-white p-6 md:p-8 rounded-2xl relative shadow-lg hover:shadow-xl transition-all duration-300 h-full">
      <Quote className="text-gold-400 w-6 md:w-8 h-6 md:h-8 mb-4 md:mb-6 opacity-50" />
      <p className="text-base md:text-lg text-gray-800 mb-6">{quote}</p>
      <div className="font-semibold text-gray-900">{author}</div>
      <div className="text-sm text-gold-600">{role}</div>
    </div>
  );
}
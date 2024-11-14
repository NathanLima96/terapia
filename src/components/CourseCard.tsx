import React from 'react';
import { Check } from 'lucide-react';

interface CourseCardProps {
  title: string;
  description: string;
  features: string[];
}

export function CourseCard({ title, description, features }: CourseCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-transparent hover:border-gold-300 transition-all duration-300 group">
      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gold-600 transition-colors duration-300">{title}</h3>
      <p className="text-gray-600 mb-8">{description}</p>
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-700">
            <span className="bg-gold-100 p-1 rounded-full mr-3">
              <Check className="w-4 h-4 text-gold-600" />
            </span>
            {feature}
          </li>
        ))}
      </ul>
      <button className="w-full bg-black hover:bg-gold-600 text-white hover:text-black py-4 px-6 rounded-xl font-semibold transition-all duration-300 group-hover:shadow-lg">
        Iniciar Jornada
      </button>
    </div>
  );
}
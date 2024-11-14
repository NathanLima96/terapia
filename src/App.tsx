import React from 'react';
import {
  Heart,
  Sparkles,
  Flower,
  MapPin,
  Phone,
  Mail,
} from 'lucide-react';
import { CourseCard } from './components/CourseCard';
import { Testimonial } from './components/Testimonial';
import { AnimateOnScroll } from './components/AnimateOnScroll';
import { Logo } from './components/Logo';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gold-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-black min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover opacity-40"
            src="https://res.cloudinary.com/dph6lpkbj/image/upload/v1731624763/aa7ox72yw7xgpgsfd9oh.jpg"
            alt="Espaço terapêutico sereno"
          />
        </div>
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-32">
          <AnimateOnScroll className="transition-all duration-1000 delay-300">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 mb-8">
              <Logo size="lg" />
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white text-center md:text-left">
                Raio de Luz
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gold-200 max-w-3xl mb-8 md:mb-12 text-center md:text-left">
              Transforme sua jornada interior através da terapia holística e
              descubra um novo caminho de luz e autoconhecimento.
            </p>
            <div className="flex justify-center md:justify-start">
              <button className="bg-gold-500 hover:bg-gold-600 text-black px-8 md:px-12 py-4 md:py-5 rounded-full font-semibold text-base md:text-lg transition-all duration-300 hover:shadow-xl hover:scale-105 w-full md:w-auto">
                Comece Sua Jornada
              </button>
            </div>
          </AnimateOnScroll>
        </div>
      </div>

      {/* Features */}
      <div className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Nossa Abordagem
              </h2>
              <p className="text-lg md:text-xl text-gray-600">
                Combinamos sabedoria ancestral com técnicas modernas
              </p>
            </div>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-3 gap-8 md:gap-16">
            <AnimateOnScroll className="delay-[200ms]">
              <div className="text-center group">
                <div className="bg-gold-100 w-16 h-16 md:w-20 md:h-20 rounded-3xl rotate-45 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300">
                  <Heart className="h-8 w-8 md:h-10 md:w-10 text-gold-600 -rotate-45" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-3">
                  Acolhimento Integral
                </h3>
                <p className="text-gray-600">
                  Cuidado personalizado para seu crescimento emocional e
                  espiritual
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll className="delay-[400ms]">
              <div className="text-center group">
                <div className="bg-gold-100 w-16 h-16 md:w-20 md:h-20 rounded-3xl rotate-45 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300">
                  <Sparkles className="h-8 w-8 md:h-10 md:w-10 text-gold-600 -rotate-45" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-3">
                  Transformação Profunda
                </h3>
                <p className="text-gray-600">
                  Metodologias comprovadas para mudanças duradouras
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll className="delay-[600ms]">
              <div className="text-center group">
                <div className="bg-gold-100 w-16 h-16 md:w-20 md:h-20 rounded-3xl rotate-45 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300">
                  <Flower className="h-8 w-8 md:h-10 md:w-10 text-gold-600 -rotate-45" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-3">
                  Harmonia Interior
                </h3>
                <p className="text-gray-600">
                  Reconexão com sua essência e propósito de vida
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>

      {/* Courses */}
      <div className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Jornadas Terapêuticas
              </h2>
              <p className="text-lg md:text-xl text-gray-600">
                Escolha o caminho que ressoa com seu coração
              </p>
            </div>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimateOnScroll className="delay-[200ms]">
              <CourseCard
                title="Despertar da Consciência"
                description="Uma jornada de autodescoberta e conexão com seu verdadeiro ser"
                features={[
                  '8 encontros transformadores',
                  'Meditações guiadas',
                  'Material de apoio exclusivo',
                  'Suporte individual',
                ]}
              />
            </AnimateOnScroll>
            <AnimateOnScroll className="delay-[400ms]">
              <CourseCard
                title="Cura Emocional Profunda"
                description="Liberte-se de padrões limitantes e cure suas feridas emocionais"
                features={[
                  '12 sessões terapêuticas',
                  'Práticas integrativas',
                  'Exercícios de autocura',
                  'Acompanhamento personalizado',
                ]}
              />
            </AnimateOnScroll>
            <AnimateOnScroll className="delay-[600ms]">
              <CourseCard
                title="Harmonia e Equilíbrio"
                description="Encontre paz interior e equilíbrio em todas as áreas da vida"
                features={[
                  '10 encontros holísticos',
                  'Técnicas de harmonização',
                  'Rituais de autocuidado',
                  'Mentoria em grupo',
                ]}
              />
            </AnimateOnScroll>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Histórias de Transformação
              </h2>
              <p className="text-lg md:text-xl text-gray-600">
                Pessoas que encontraram seu caminho de luz
              </p>
            </div>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimateOnScroll className="delay-[200ms]">
              <Testimonial
                quote="O Raio de Luz mudou completamente minha perspectiva de vida. Encontrei paz e propósito através das sessões."
                author="Maria Helena"
                role="Professora"
              />
            </AnimateOnScroll>
            <AnimateOnScroll className="delay-[400ms]">
              <Testimonial
                quote="As técnicas e o acolhimento me ajudaram a superar traumas antigos que me impediam de avançar."
                author="João Paulo"
                role="Empresário"
              />
            </AnimateOnScroll>
            <AnimateOnScroll className="delay-[600ms]">
              <Testimonial
                quote="Uma experiência transformadora que me reconectou com minha essência e trouxe mais leveza para minha vida."
                author="Ana Beatriz"
                role="Artista"
              />
            </AnimateOnScroll>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Logo size="md" />
                  <span className="text-xl md:text-2xl font-bold">Raio de Luz</span>
                </div>
                <p className="text-gray-400 max-w-md mb-8">
                  Iluminando caminhos e transformando vidas através da terapia
                  holística e do autoconhecimento.
                </p>
                <div className="space-y-4">
                  <h3 className="text-lg md:text-xl font-bold text-gold-400 mb-4">
                    T.H ANTONIA DE MOURA LIMA
                  </h3>
                  <p className="text-gold-200">
                    TERAPEUTA HOLÍSTICA SNT - NÍVEL III
                  </p>
                  <p className="text-gold-200">
                    MATRÍCULA SINTER - PR: BR2024009
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll className="delay-[200ms]">
              <div className="bg-black/30 p-6 md:p-8 rounded-xl border border-gold-900">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-gold-500/10 p-3 rounded-full shrink-0">
                      <MapPin className="h-6 w-6 text-gold-400" />
                    </div>
                    <div>
                      <p className="text-gold-200">
                        RUA ANTÔNIO JARDINETTI, 499 - CENTRO,
                      </p>
                      <p className="text-gold-200">SÃO TOMÉ - PR, 87220-000</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-gold-500/10 p-3 rounded-full shrink-0">
                      <Phone className="h-6 w-6 text-gold-400" />
                    </div>
                    <p className="text-gold-200">CEL: (44) 99101-2987</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-gold-500/10 p-3 rounded-full shrink-0">
                      <Mail className="h-6 w-6 text-gold-400" />
                    </div>
                    <p className="text-gold-200 break-all">@ANTONIADEMOURATERAPEUTA</p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Raio de Luz. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
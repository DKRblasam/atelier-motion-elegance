
import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center luxury-gradient overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-luxury-gold rounded-full animate-luxury-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 border border-luxury-gold rounded-full animate-luxury-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="font-playfair text-6xl md:text-8xl font-bold text-luxury-charcoal mb-6 animate-elegant-fade">
            <span className="block">Alta</span>
            <span className="block text-luxury-gold">Costura</span>
            <span className="block text-4xl md:text-5xl font-light mt-4">Exclusiva</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-luxury-charcoal/80 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Donde cada prenda es una obra de arte creada con pasión y atención al detalle
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <button className="group px-8 py-4 bg-luxury-charcoal text-white font-medium rounded-none hover-lift hover:bg-luxury-gold hover:text-luxury-charcoal transition-all duration-300">
              <span className="relative z-10">Explorar Colección</span>
            </button>
            <button className="px-8 py-4 border-2 border-luxury-gold text-luxury-gold font-medium rounded-none hover:bg-luxury-gold hover:text-luxury-charcoal transition-all duration-300 hover-lift">
              Consulta Personalizada
            </button>
          </div>

          {/* Elegant Separator */}
          <div className="mt-16 flex items-center justify-center animate-fade-in" style={{ animationDelay: '0.9s' }}>
            <div className="w-24 h-px bg-luxury-gold/50"></div>
            <div className="mx-4 w-2 h-2 bg-luxury-gold rounded-full"></div>
            <div className="w-24 h-px bg-luxury-gold/50"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-luxury-gold" size={32} />
      </div>
    </section>
  );
};

export default Hero;

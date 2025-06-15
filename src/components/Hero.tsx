
import React from 'react';
import { ChevronDown, Heart } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center warm-gradient overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 border border-accent-brown rounded-full animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-accent-brown rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-8 h-8 bg-accent-brown/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main Heading */}
          <div className="mb-8 animate-elegant-fade">
            <h1 className="font-dancing text-7xl md:text-9xl font-bold text-warm-brown mb-4">
              <span className="block">Alta</span>
              <span className="block text-accent-brown">Costura</span>
            </h1>
            <h2 className="font-dancing text-4xl md:text-6xl font-medium text-warm-brown/80 mb-6">
              Exclusiva
            </h2>
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-warm-brown/70 mb-12 max-w-3xl mx-auto leading-relaxed font-inter animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Donde cada prenda es una obra de arte creada con pasión y atención al detalle
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <button className="group px-10 py-4 bg-warm-brown text-white font-medium rounded-2xl hover-lift hover:bg-accent-brown transition-all duration-300 min-w-[200px]">
              <span className="relative z-10 flex items-center justify-center space-x-2">
                <span>Explorar Colección</span>
                <Heart className="w-4 h-4" />
              </span>
            </button>
            <button className="px-10 py-4 border-2 border-accent-brown text-accent-brown font-medium rounded-2xl hover:bg-accent-brown hover:text-white transition-all duration-300 hover-lift min-w-[200px]">
              Consulta Personalizada
            </button>
          </div>

          {/* Elegant Separator */}
          <div className="mt-20 flex items-center justify-center animate-fade-in" style={{ animationDelay: '0.9s' }}>
            <div className="w-16 h-px bg-accent-brown/30"></div>
            <div className="mx-6 w-3 h-3 bg-accent-brown rounded-full"></div>
            <div className="w-16 h-px bg-accent-brown/30"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-accent-brown" size={32} />
      </div>
    </section>
  );
};

export default Hero;

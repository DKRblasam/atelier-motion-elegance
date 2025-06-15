
import React from 'react';
import { Scissors, Sparkles, Calendar, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Sparkles,
      title: "Diseño de Alta Costura",
      description: "Colecciones personalizadas y prendas únicas creadas para clientes exigentes con los más finos materiales.",
      image: "photo-1649972904349-6e44c42644a7"
    },
    {
      icon: Users,
      title: "Consultoría de Moda",
      description: "Asesoramiento personalizado sobre tendencias, estilo y adaptación de looks a medida de cada cliente.",
      image: "photo-1581091226825-a6a2a5aee158"
    },
    {
      icon: Scissors,
      title: "Arreglos y Transformaciones",
      description: "Servicio especializado en la adaptación y modificación de prendas existentes con ajuste perfecto.",
      image: "photo-1486312338219-ce68d2c6f44d"
    },
    {
      icon: Calendar,
      title: "Eventos Exclusivos",
      description: "Participación en desfiles, presentaciones y eventos privados de moda para una experiencia única.",
      image: "photo-1486718448742-163732cd1544"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-playfair text-5xl font-bold text-luxury-charcoal mb-6">
            Nuestros <span className="text-luxury-gold">Servicios</span>
          </h2>
          <p className="text-xl text-luxury-charcoal/70 max-w-3xl mx-auto">
            Ofrecemos servicios exclusivos de alta costura, desde diseños personalizados hasta consultoría especializada
          </p>
          <div className="mt-8 flex items-center justify-center">
            <div className="w-24 h-px bg-luxury-gold/50"></div>
            <div className="mx-4 w-2 h-2 bg-luxury-gold rounded-full"></div>
            <div className="w-24 h-px bg-luxury-gold/50"></div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-luxury-pearl rounded-lg overflow-hidden hover-lift animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Service Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={`https://images.unsplash.com/${service.image}?auto=format&fit=crop&w=800&q=80`}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-luxury-charcoal/40 group-hover:bg-luxury-charcoal/20 transition-all duration-300"></div>
                
                {/* Icon Overlay */}
                <div className="absolute top-6 right-6 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-luxury-gold group-hover:text-white transition-all duration-300">
                  <service.icon size={24} />
                </div>
              </div>

              {/* Service Content */}
              <div className="p-6">
                <h3 className="font-playfair text-2xl font-semibold text-luxury-charcoal mb-3 group-hover:text-luxury-gold transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-luxury-charcoal/70 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Hover Effect Line */}
                <div className="mt-4 w-0 h-0.5 bg-luxury-gold transition-all duration-500 group-hover:w-full"></div>
              </div>

              {/* Shimmer Effect */}
              <div className="absolute inset-0 shimmer-effect animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <button className="px-10 py-4 bg-luxury-gold text-luxury-charcoal font-semibold rounded-none hover:bg-luxury-charcoal hover:text-white transition-all duration-300 hover-lift">
            Solicitar Consulta Gratuita
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;

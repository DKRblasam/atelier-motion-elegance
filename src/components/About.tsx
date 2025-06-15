
import React from 'react';
import { Award, Heart, Star, Users } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, number: "500+", label: "Clientes Satisfechos" },
    { icon: Award, number: "15+", label: "Años de Experiencia" },
    { icon: Star, number: "1000+", label: "Piezas Creadas" },
    { icon: Heart, number: "100%", label: "Pasión por el Arte" }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div className="animate-slide-in-left">
            <h2 className="font-playfair text-5xl font-bold text-luxury-charcoal mb-6">
              Sobre <span className="text-luxury-gold">BA Atelier</span>
            </h2>
            
            <div className="space-y-6 text-luxury-charcoal/80 leading-relaxed">
              <p className="text-lg">
                BA Atelier es un espacio exclusivo dedicado a la moda de alta costura, donde cada prenda 
                es una obra de arte creada con pasión y atención al detalle.
              </p>
              
              <p>
                Nuestro compromiso con la excelencia se refleja en cada hilo, cada corte y cada acabado. 
                Trabajamos únicamente con los materiales más finos y empleamos técnicas artesanales 
                tradicionales combinadas con innovación contemporánea.
              </p>
              
              <p>
                Cada cliente recibe un servicio personalizado y exclusivo, donde sus sueños de moda 
                se convierten en realidad a través de nuestras creaciones únicas.
              </p>
            </div>

            {/* Quote */}
            <div className="mt-8 p-6 border-l-4 border-luxury-gold bg-luxury-pearl">
              <p className="font-playfair text-xl italic text-luxury-charcoal mb-2">
                "La moda es arquitectura: es una cuestión de proporciones"
              </p>
              <p className="text-luxury-charcoal/70">- Coco Chanel</p>
            </div>

            <button className="mt-8 px-8 py-3 bg-luxury-charcoal text-white font-medium rounded-none hover:bg-luxury-gold hover:text-luxury-charcoal transition-all duration-300 hover-lift">
              Conoce Nuestro Proceso
            </button>
          </div>

          {/* Image Side */}
          <div className="animate-slide-in-right">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1486718448742-163732cd1544?auto=format&fit=crop&w=800&q=80"
                alt="BA Atelier Workshop"
                className="w-full h-96 object-cover rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-luxury-gold rounded-full flex items-center justify-center animate-luxury-float">
                <Heart className="text-white" size={32} />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center group animate-scale-in"
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-luxury-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="text-white" size={28} />
                </div>
                <div className="font-playfair text-3xl font-bold text-luxury-charcoal mb-2 group-hover:text-luxury-gold transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-luxury-charcoal/70 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

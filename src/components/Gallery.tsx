
import React from 'react';

const Gallery = () => {
  const galleryItems = [
    {
      id: 1,
      image: "photo-1460925895917-afdab827c52f",
      title: "Colección Primavera",
      category: "Alta Costura",
      gradient: "gallery-gradient-1"
    },
    {
      id: 2,
      image: "photo-1487058792275-0ad4aaf24ca7",
      title: "Vestidos de Noche",
      category: "Eventos",
      gradient: "gallery-gradient-2"
    },
    {
      id: 3,
      image: "photo-1488590528505-98d2b5aba04b",
      title: "Trajes Ejecutivos",
      category: "Formal",
      gradient: "gallery-gradient-3"
    },
    {
      id: 4,
      image: "photo-1649972904349-6e44c42644a7",
      title: "Accesorios Únicos",
      category: "Complementos",
      gradient: "gallery-gradient-4"
    },
    {
      id: 5,
      image: "photo-1581091226825-a6a2a5aee158",
      title: "Colección Verano",
      category: "Casual Elegante",
      gradient: "gallery-gradient-5"
    },
    {
      id: 6,
      image: "photo-1486312338219-ce68d2c6f44d",
      title: "Piezas Exclusivas",
      category: "Edición Limitada",
      gradient: "gallery-gradient-6"
    }
  ];

  return (
    <section id="gallery" className="py-24 warm-gradient">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="font-dancing text-6xl font-bold text-warm-brown mb-6">
            Nuestra <span className="text-accent-brown">Galería</span>
          </h2>
          <p className="text-xl text-warm-brown/70 max-w-3xl mx-auto font-inter">
            Descubre algunas de nuestras creaciones más exclusivas y trabajos personalizados
          </p>
          <div className="mt-10 flex items-center justify-center">
            <div className="w-16 h-px bg-accent-brown/30"></div>
            <div className="mx-6 w-3 h-3 bg-accent-brown rounded-full"></div>
            <div className="w-16 h-px bg-accent-brown/30"></div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-3xl card-minimal hover-lift animate-scale-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Colored Background */}
              <div className={`absolute inset-0 ${item.gradient} opacity-20`}></div>
              
              {/* Image Container */}
              <div className="relative h-80 overflow-hidden rounded-t-3xl">
                <img
                  src={`https://images.unsplash.com/${item.image}?auto=format&fit=crop&w=800&q=80`}
                  alt={item.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className={`absolute inset-0 ${item.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <div className="mb-3">
                    <span className="inline-block px-4 py-2 bg-white/90 text-warm-brown text-sm font-medium rounded-full backdrop-blur-sm">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="font-dancing text-3xl font-semibold mb-2 text-shadow">
                    {item.title}
                  </h3>
                  <p className="text-white/90 text-sm font-inter">
                    Pieza única diseñada con materiales de la más alta calidad
                  </p>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-4 border-2 border-white/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>

              {/* Bottom Section */}
              <div className="p-6 bg-white relative z-10">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-dancing text-2xl font-semibold text-warm-brown group-hover:text-accent-brown transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="text-warm-brown/60 text-sm font-inter">
                      {item.category}
                    </p>
                  </div>
                  <button className="w-12 h-12 bg-soft-gray group-hover:bg-accent-brown rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                    <span className="text-warm-brown group-hover:text-white text-lg">→</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-20 animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <button className="px-12 py-4 border-2 border-accent-brown text-accent-brown font-semibold rounded-2xl hover:bg-accent-brown hover:text-white transition-all duration-300 hover-lift font-inter">
            Ver Toda la Galería
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

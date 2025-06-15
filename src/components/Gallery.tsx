
import React from 'react';

const Gallery = () => {
  const galleryItems = [
    {
      id: 1,
      image: "photo-1460925895917-afdab827c52f",
      title: "Colección Primavera",
      category: "Alta Costura"
    },
    {
      id: 2,
      image: "photo-1487058792275-0ad4aaf24ca7",
      title: "Vestidos de Noche",
      category: "Eventos"
    },
    {
      id: 3,
      image: "photo-1488590528505-98d2b5aba04b",
      title: "Trajes Ejecutivos",
      category: "Formal"
    },
    {
      id: 4,
      image: "photo-1649972904349-6e44c42644a7",
      title: "Accesorios Únicos",
      category: "Complementos"
    },
    {
      id: 5,
      image: "photo-1581091226825-a6a2a5aee158",
      title: "Colección Verano",
      category: "Casual Elegante"
    },
    {
      id: 6,
      image: "photo-1486312338219-ce68d2c6f44d",
      title: "Piezas Exclusivas",
      category: "Edición Limitada"
    }
  ];

  return (
    <section id="gallery" className="py-20 luxury-gradient">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-playfair text-5xl font-bold text-luxury-charcoal mb-6">
            Nuestra <span className="text-luxury-gold">Galería</span>
          </h2>
          <p className="text-xl text-luxury-charcoal/70 max-w-3xl mx-auto">
            Descubre algunas de nuestras creaciones más exclusivas y trabajos personalizados
          </p>
          <div className="mt-8 flex items-center justify-center">
            <div className="w-24 h-px bg-luxury-gold/50"></div>
            <div className="mx-4 w-2 h-2 bg-luxury-gold rounded-full"></div>
            <div className="w-24 h-px bg-luxury-gold/50"></div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg bg-white shadow-lg hover-lift animate-scale-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Image Container */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={`https://images.unsplash.com/${item.image}?auto=format&fit=crop&w=800&q=80`}
                  alt={item.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 bg-luxury-gold text-luxury-charcoal text-sm font-medium rounded-full">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="font-playfair text-2xl font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/80 text-sm">
                    Pieza única diseñada con materiales de la más alta calidad
                  </p>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-4 border-2 border-luxury-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>

              {/* Bottom Section */}
              <div className="p-6 bg-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-playfair text-lg font-semibold text-luxury-charcoal group-hover:text-luxury-gold transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="text-luxury-charcoal/60 text-sm">
                      {item.category}
                    </p>
                  </div>
                  <button className="w-10 h-10 bg-luxury-pearl group-hover:bg-luxury-gold rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                    <span className="text-luxury-charcoal text-lg">→</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <button className="px-10 py-4 border-2 border-luxury-gold text-luxury-gold font-semibold rounded-none hover:bg-luxury-gold hover:text-luxury-charcoal transition-all duration-300 hover-lift">
            Ver Toda la Galería
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

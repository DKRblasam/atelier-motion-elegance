
import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-luxury-charcoal text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="animate-fade-in">
            <h3 className="font-playfair text-3xl font-bold mb-6">
              BA <span className="text-luxury-gold">Atelier</span>
            </h3>
            <p className="text-white/80 leading-relaxed mb-6">
              Creando arte en alta costura desde hace más de 15 años. 
              Cada prenda es una expresión única de elegancia y sofisticación.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-luxury-gold hover:text-luxury-charcoal transition-all duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-luxury-gold hover:text-luxury-charcoal transition-all duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-luxury-gold hover:text-luxury-charcoal transition-all duration-300">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Services Section */}
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h4 className="font-playfair text-xl font-semibold mb-6 text-luxury-gold">
              Servicios
            </h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/80 hover:text-luxury-gold transition-colors duration-300">Alta Costura</a></li>
              <li><a href="#" className="text-white/80 hover:text-luxury-gold transition-colors duration-300">Consultoría de Moda</a></li>
              <li><a href="#" className="text-white/80 hover:text-luxury-gold transition-colors duration-300">Arreglos y Transformaciones</a></li>
              <li><a href="#" className="text-white/80 hover:text-luxury-gold transition-colors duration-300">Eventos Exclusivos</a></li>
              <li><a href="#" className="text-white/80 hover:text-luxury-gold transition-colors duration-300">Piezas Personalizadas</a></li>
            </ul>
          </div>

          {/* Links Section */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h4 className="font-playfair text-xl font-semibold mb-6 text-luxury-gold">
              Enlaces
            </h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-white/80 hover:text-luxury-gold transition-colors duration-300">Inicio</a></li>
              <li><a href="#services" className="text-white/80 hover:text-luxury-gold transition-colors duration-300">Servicios</a></li>
              <li><a href="#gallery" className="text-white/80 hover:text-luxury-gold transition-colors duration-300">Galería</a></li>
              <li><a href="#about" className="text-white/80 hover:text-luxury-gold transition-colors duration-300">Sobre Nosotros</a></li>
              <li><a href="#contact" className="text-white/80 hover:text-luxury-gold transition-colors duration-300">Contacto</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h4 className="font-playfair text-xl font-semibold mb-6 text-luxury-gold">
              Contacto
            </h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="text-luxury-gold" size={18} />
                <span className="text-white/80">Palermo, Buenos Aires</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-luxury-gold" size={18} />
                <span className="text-white/80">+54 11 5555-0123</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-luxury-gold" size={18} />
                <span className="text-white/80">info@baatelier.com</span>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-white/60 text-sm mb-2">Horarios de Atención:</p>
              <p className="text-white/80 text-sm">Lunes a Viernes: 10:00 - 19:00</p>
              <p className="text-white/80 text-sm">Sábados: 10:00 - 16:00</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © 2024 BA Atelier. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/terminos" className="text-white/60 hover:text-luxury-gold text-sm transition-colors duration-300">
              Términos y Condiciones
            </Link>
            <Link to="/privacidad" className="text-white/60 hover:text-luxury-gold text-sm transition-colors duration-300">
              Política de Privacidad
            </Link>
            <Link to="/cookies" className="text-white/60 hover:text-luxury-gold text-sm transition-colors duration-300">
              Política de Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

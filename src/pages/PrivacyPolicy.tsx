
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-16 warm-gradient">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="font-dancing text-5xl font-bold text-warm-brown mb-8 text-center">
            Política de Privacidad
          </h1>
          
          <div className="bg-white rounded-2xl shadow-sm border border-neutral-100 p-8 space-y-8">
            <section>
              <h2 className="font-dancing text-3xl font-semibold text-accent-brown mb-4">
                1. Información que Recopilamos
              </h2>
              <p className="text-warm-brown/80 leading-relaxed mb-4">
                En BA Atelier, nos comprometemos a proteger su privacidad. Recopilamos información personal 
                únicamente cuando usted nos la proporciona voluntariamente a través de:
              </p>
              <ul className="list-disc list-inside text-warm-brown/80 space-y-2 ml-4">
                <li>Formularios de contacto en nuestro sitio web</li>
                <li>Consultas por correo electrónico o teléfono</li>
                <li>Citas programadas en nuestro atelier</li>
                <li>Suscripciones a nuestro newsletter</li>
              </ul>
            </section>

            <section>
              <h2 className="font-dancing text-3xl font-semibold text-accent-brown mb-4">
                2. Uso de la Información
              </h2>
              <p className="text-warm-brown/80 leading-relaxed mb-4">
                Utilizamos su información personal para:
              </p>
              <ul className="list-disc list-inside text-warm-brown/80 space-y-2 ml-4">
                <li>Responder a sus consultas y brindar nuestros servicios</li>
                <li>Programar citas y consultas personalizadas</li>
                <li>Enviar información sobre nuestras colecciones y servicios</li>
                <li>Mejorar la experiencia del usuario en nuestro sitio web</li>
                <li>Cumplir con obligaciones legales y contractuales</li>
              </ul>
            </section>

            <section>
              <h2 className="font-dancing text-3xl font-semibold text-accent-brown mb-4">
                3. Protección de Datos
              </h2>
              <p className="text-warm-brown/80 leading-relaxed">
                Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger 
                su información personal contra el acceso no autorizado, alteración, divulgación o 
                destrucción. Sus datos se almacenan de forma segura y solo el personal autorizado 
                tiene acceso a ellos.
              </p>
            </section>

            <section>
              <h2 className="font-dancing text-3xl font-semibold text-accent-brown mb-4">
                4. Compartir Información
              </h2>
              <p className="text-warm-brown/80 leading-relaxed">
                No vendemos, alquilamos ni compartimos su información personal con terceros, 
                excepto cuando sea necesario para brindar nuestros servicios o cuando lo 
                requiera la ley. Cualquier proveedor de servicios con quien trabajemos está 
                obligado a mantener la confidencialidad de su información.
              </p>
            </section>

            <section>
              <h2 className="font-dancing text-3xl font-semibold text-accent-brown mb-4">
                5. Sus Derechos
              </h2>
              <p className="text-warm-brown/80 leading-relaxed mb-4">
                Usted tiene derecho a:
              </p>
              <ul className="list-disc list-inside text-warm-brown/80 space-y-2 ml-4">
                <li>Acceder a su información personal</li>
                <li>Solicitar la corrección de datos inexactos</li>
                <li>Solicitar la eliminación de su información</li>
                <li>Oponerse al procesamiento de sus datos</li>
                <li>Retirar su consentimiento en cualquier momento</li>
              </ul>
            </section>

            <section>
              <h2 className="font-dancing text-3xl font-semibold text-accent-brown mb-4">
                6. Contacto
              </h2>
              <p className="text-warm-brown/80 leading-relaxed">
                Si tiene preguntas sobre esta Política de Privacidad o desea ejercer sus derechos, 
                contáctenos en: <strong>info@baatelier.com</strong> o al teléfono <strong>+54 11 5555-0123</strong>.
              </p>
            </section>

            <section>
              <p className="text-warm-brown/60 text-sm text-center border-t border-neutral-200 pt-6">
                Última actualización: 22 de junio de 2024
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;

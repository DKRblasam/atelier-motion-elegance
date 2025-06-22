
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TermsConditions = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-16 warm-gradient">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="font-dancing text-5xl font-bold text-warm-brown mb-8 text-center">
            Términos y Condiciones
          </h1>
          
          <div className="bg-white rounded-2xl shadow-sm border border-neutral-100 p-8 space-y-8">
            <section>
              <h2 className="font-dancing text-3xl font-semibold text-accent-brown mb-4">
                1. Aceptación de los Términos
              </h2>
              <p className="text-warm-brown/80 leading-relaxed">
                Al acceder y utilizar los servicios de BA Atelier, usted acepta cumplir con estos 
                términos y condiciones. Si no está de acuerdo con alguno de estos términos, 
                le rogamos que no utilice nuestros servicios.
              </p>
            </section>

            <section>
              <h2 className="font-dancing text-3xl font-semibold text-accent-brown mb-4">
                2. Servicios Ofrecidos
              </h2>
              <p className="text-warm-brown/80 leading-relaxed mb-4">
                BA Atelier ofrece servicios de alta costura que incluyen:
              </p>
              <ul className="list-disc list-inside text-warm-brown/80 space-y-2 ml-4">
                <li>Diseño y confección de prendas exclusivas</li>
                <li>Consultoría de moda personalizada</li>
                <li>Arreglos y transformaciones de prendas</li>
                <li>Servicios para eventos especiales</li>
                <li>Asesoramiento en imagen y estilo</li>
              </ul>
            </section>

            <section>
              <h2 className="font-dancing text-3xl font-semibold text-accent-brown mb-4">
                3. Proceso de Pedidos y Pagos
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-warm-brown mb-2">3.1 Consulta Inicial</h3>
                  <p className="text-warm-brown/80 leading-relaxed">
                    Todos los servicios comienzan con una consulta personalizada para evaluar 
                    sus necesidades y establecer el alcance del proyecto.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-warm-brown mb-2">3.2 Presupuesto y Plazos</h3>
                  <p className="text-warm-brown/80 leading-relaxed">
                    Proporcionaremos un presupuesto detallado y cronograma después de la consulta. 
                    Los precios pueden variar según la complejidad del diseño y materiales seleccionados.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-warm-brown mb-2">3.3 Condiciones de Pago</h3>
                  <p className="text-warm-brown/80 leading-relaxed">
                    Se requiere un depósito del 50% para comenzar el trabajo. El saldo restante 
                    debe abonarse antes de la entrega final de la prenda.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-dancing text-3xl font-semibold text-accent-brown mb-4">
                4. Política de Cancelación
              </h2>
              <p className="text-warm-brown/80 leading-relaxed">
                Las cancelaciones realizadas más de 48 horas antes de una cita programada no 
                tendrán cargo. Para proyectos en curso, las cancelaciones estarán sujetas a 
                evaluación según el progreso del trabajo realizado.
              </p>
            </section>

            <section>
              <h2 className="font-dancing text-3xl font-semibold text-accent-brown mb-4">
                5. Propiedad Intelectual
              </h2>
              <p className="text-warm-brown/80 leading-relaxed">
                Todos los diseños, patrones y creaciones originales de BA Atelier están protegidos 
                por derechos de autor. El cliente recibe la prenda física, pero los derechos de 
                diseño permanecen con BA Atelier.
              </p>
            </section>

            <section>
              <h2 className="font-dancing text-3xl font-semibold text-accent-brown mb-4">
                6. Limitación de Responsabilidad
              </h2>
              <p className="text-warm-brown/80 leading-relaxed">
                BA Atelier se compromete a brindar servicios de la más alta calidad. Sin embargo, 
                nuestra responsabilidad se limita al valor del servicio contratado. No seremos 
                responsables por daños indirectos o consecuenciales.
              </p>
            </section>

            <section>
              <h2 className="font-dancing text-3xl font-semibold text-accent-brown mb-4">
                7. Modificaciones
              </h2>
              <p className="text-warm-brown/80 leading-relaxed">
                Nos reservamos el derecho de modificar estos términos y condiciones en cualquier 
                momento. Las modificaciones entrarán en vigor inmediatamente después de su 
                publicación en nuestro sitio web.
              </p>
            </section>

            <section>
              <h2 className="font-dancing text-3xl font-semibold text-accent-brown mb-4">
                8. Contacto
              </h2>
              <p className="text-warm-brown/80 leading-relaxed">
                Para consultas sobre estos términos y condiciones, contáctenos en: 
                <strong> info@baatelier.com</strong> o al teléfono <strong>+54 11 5555-0123</strong>.
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

export default TermsConditions;

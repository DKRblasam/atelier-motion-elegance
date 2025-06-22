
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-16 warm-gradient">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="font-dancing text-5xl font-bold text-warm-brown mb-8 text-center">
            Política de Cookies
          </h1>
          
          <div className="bg-white rounded-2xl shadow-sm border border-neutral-100 p-8 space-y-8">
            <section>
              <h2 className="font-dancing text-3xl font-semibold text-accent-brown mb-4">
                ¿Qué son las Cookies?
              </h2>
              <p className="text-warm-brown/80 leading-relaxed">
                Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando 
                visita nuestro sitio web. Nos ayudan a mejorar su experiencia de navegación y a 
                entender cómo utiliza nuestro sitio.
              </p>
            </section>

            <section>
              <h2 className="font-dancing text-3xl font-semibold text-accent-brown mb-4">
                Tipos de Cookies que Utilizamos
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-warm-brown mb-3">1. Cookies Esenciales</h3>
                  <p className="text-warm-brown/80 leading-relaxed">
                    Estas cookies son necesarias para el funcionamiento básico del sitio web. 
                    Incluyen cookies de sesión que le permiten navegar por el sitio y utilizar 
                    sus funciones básicas.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-warm-brown mb-3">2. Cookies de Rendimiento</h3>
                  <p className="text-warm-brown/80 leading-relaxed">
                    Estas cookies recopilan información sobre cómo los visitantes utilizan nuestro 
                    sitio web, como qué páginas visitan con más frecuencia. Esta información nos 
                    ayuda a mejorar el rendimiento del sitio.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-warm-brown mb-3">3. Cookies de Funcionalidad</h3>
                  <p className="text-warm-brown/80 leading-relaxed">
                    Estas cookies permiten que el sitio web recuerde las opciones que usted hace 
                    (como su idioma preferido) y proporcionan funciones mejoradas y más personales.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-warm-brown mb-3">4. Cookies de Marketing</h3>
                  <p className="text-warm-brown/80 leading-relaxed">
                    Estas cookies se utilizan para entregar anuncios más relevantes para usted y 
                    sus intereses. También se utilizan para limitar el número de veces que ve un 
                    anuncio y medir la efectividad de las campañas publicitarias.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-dancing text-3xl font-semibold text-accent-brown mb-4">
                Cookies de Terceros
              </h2>
              <p className="text-warm-brown/80 leading-relaxed mb-4">
                Nuestro sitio web puede incluir cookies de terceros para los siguientes servicios:
              </p>
              <ul className="list-disc list-inside text-warm-brown/80 space-y-2 ml-4">
                <li><strong>Google Analytics:</strong> Para analizar el tráfico del sitio web</li>
                <li><strong>Redes Sociales:</strong> Para integrar contenido de redes sociales</li>
                <li><strong>Servicios de Chat:</strong> Para proporcionar soporte al cliente</li>
              </ul>
            </section>

            <section>
              <h2 className="font-dancing text-3xl font-semibold text-accent-brown mb-4">
                Gestión de Cookies
              </h2>
              <p className="text-warm-brown/80 leading-relaxed mb-4">
                Usted puede controlar y gestionar las cookies de varias maneras:
              </p>
              <ul className="list-disc list-inside text-warm-brown/80 space-y-2 ml-4">
                <li>Configurar su navegador para rechazar todas las cookies</li>
                <li>Configurar su navegador para que le avise cuando se envía una cookie</li>
                <li>Eliminar las cookies de su navegador</li>
                <li>Utilizar el modo de navegación privada/incógnito</li>
              </ul>
              <p className="text-warm-brown/80 leading-relaxed mt-4">
                Tenga en cuenta que deshabilitar las cookies puede afectar la funcionalidad 
                de nuestro sitio web.
              </p>
            </section>

            <section>
              <h2 className="font-dancing text-3xl font-semibold text-accent-brown mb-4">
                Consentimiento
              </h2>
              <p className="text-warm-brown/80 leading-relaxed">
                Al continuar utilizando nuestro sitio web, usted consiente el uso de cookies 
                de acuerdo con esta política. Si no está de acuerdo con el uso de cookies, 
                puede configurar su navegador para rechazarlas o dejar de utilizar nuestro sitio.
              </p>
            </section>

            <section>
              <h2 className="font-dancing text-3xl font-semibold text-accent-brown mb-4">
                Cambios en la Política
              </h2>
              <p className="text-warm-brown/80 leading-relaxed">
                Podemos actualizar esta Política de Cookies periódicamente para reflejar cambios 
                en nuestras prácticas o por otras razones operativas, legales o reglamentarias.
              </p>
            </section>

            <section>
              <h2 className="font-dancing text-3xl font-semibold text-accent-brown mb-4">
                Contacto
              </h2>
              <p className="text-warm-brown/80 leading-relaxed">
                Si tiene preguntas sobre esta Política de Cookies, contáctenos en: 
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

export default CookiePolicy;

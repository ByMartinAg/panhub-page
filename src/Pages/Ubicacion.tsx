import React from 'react';
import Navbar from '../Components/Navbar';
import { MapPin, Clock, MessageCircle, Navigation } from 'lucide-react';

const Ubicacion: React.FC = () => {
  const whatsappLink = "https://wa.me/52XXXXXXXXXX?text=Hola%20vengo%20desde%20la%20página,%20quiero%20más%20información";

  const schedule = [
    { day: 'Lunes', hours: '14:00 - 18:00' },
    { day: 'Martes', hours: '14:00 - 19:00' },
    { day: 'Miércoles', hours: '14:00 - 19:00' },
    { day: 'Jueves', hours: '14:00 - 18:00' },
    { day: 'Viernes', hours: '14:00 - 19:00' },
    { day: 'Sábado', hours: 'Cerrado' },
    { day: 'Domingo', hours: 'Cerrado' }
  ];

  return (
    <div className="min-h-screen bg-amber-50">
      <Navbar />

      {/* Header */}
      <section className="bg-gradient-to-br from-amber-600 to-orange-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Navigation className="mx-auto mb-4 text-white" size={64} />
          <h2 className="text-4xl font-bold text-white mb-4">Encuéntranos en la universidad</h2>
          <p className="text-xl text-white">Visítanos y prueba nuestro pan fresco</p>
        </div>
      </section>

      {/* Main Location Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Address & Details */}
            <div>
              <div className="bg-amber-50 rounded-lg p-8 shadow-lg mb-8">
                <div className="flex items-start mb-6">
                  <MapPin className="text-amber-600 mr-4 flex-shrink-0" size={32} />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Nuestra ubicación</h3>
                    <p className="text-lg text-gray-700">
                      Estamos ubicados en el <span className="font-semibold">Edificio Principal de Sistemas</span>, 
                      cerca de la <span className="font-semibold">Velaria a un lado de la Papeleria</span>.
                    </p>
                    <p className="text-gray-600 mt-2">
                      Búscanos en el salon N-04.
                    </p>
                  </div>
                </div>
              </div>

              {/* Schedule */}
              <div className="bg-white rounded-lg shadow-lg border-2 border-amber-200 overflow-hidden">
                <div className="bg-amber-600 text-white p-4 flex items-center">
                  <Clock className="mr-3" size={28} />
                  <h3 className="text-2xl font-bold">Horario de atención</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-3">
                    {schedule.map((item, index) => (
                      <div 
                        key={index} 
                        className={`flex justify-between items-center p-3 rounded-lg ${
                          item.hours === 'Cerrado' 
                            ? 'bg-gray-100 text-gray-500' 
                            : 'bg-amber-50'
                        }`}
                      >
                        <span className="font-semibold text-lg">{item.day}</span>
                        <span className={`font-medium ${
                          item.hours === 'Cerrado' 
                            ? 'text-gray-500' 
                            : 'text-amber-600'
                        }`}>
                          {item.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Map Image */}
            <div>
  <div className="bg-gray-200 rounded-lg shadow-lg overflow-hidden h-full min-h-96">

    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d621.1910066682035!2d-99.8010339363195!3d19.67558515401067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1ses-419!2smx!4v1764316024753!5m2!1ses-419!2smx"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
      className="w-full h-full"
    ></iframe>

  </div>

  <p className="text-center text-gray-600 mt-4 text-sm">
    Mapa del campus — Ubicación de PanHub marcada
  </p>
</div>
          </div>
        </div>
      </section>

      {/* How to Get There */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">¿Cómo llegar?</h3>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-amber-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  1
                </div>
                <p className="text-gray-700 text-lg">
                  Entra por la puerta principal del campus
                </p>
              </div>
              <div className="flex items-start">
                <div className="bg-amber-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  2
                </div>
                <p className="text-gray-700 text-lg">
                  Dirígete al Edificio Principal de sistemas (Edificio N,a un lado de la Papeleria)
                </p>
              </div>
              <div className="flex items-start">
                <div className="bg-amber-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  3
                </div>
                <p className="text-gray-700 text-lg">
                  Planta baja busca el salón N-04
                </p>
              </div>
              <div className="flex items-start">
                <div className="bg-amber-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  4
                </div>
                <p className="text-gray-700 text-lg">
                  ¡Nos encontrarás en el aula durante los horarios establecidos!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-amber-600 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            ¿Tienes dudas sobre cómo llegar?
          </h3>
          <p className="text-xl text-white mb-8">
            Contáctanos por WhatsApp y te ayudaremos a encontrarnos
          </p>
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-white text-amber-600 font-bold rounded-lg hover:bg-gray-100 transition text-lg shadow-lg"
          >
            <MessageCircle className="mr-3" size={24} />
            Enviar mensaje por WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">© 2024 PanHub. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Ubicacion;
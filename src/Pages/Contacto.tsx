import React from 'react';
import Navbar from '../Components/Navbar';
import { MessageCircle, Mail, Instagram, Clock, CreditCard } from 'lucide-react';

const Contacto: React.FC = () => {
  const whatsappLink = "https://wa.me/52XXXXXXXXXX?text=Hola%20vengo%20desde%20la%20página,%20quiero%20más%20información";
  const instagramLink = "https://instagram.com/panhub";
  // const tiktokLink = "https://tiktok.com/@panhub";

  const contactMethods = [
    {
      icon: <MessageCircle size={48} />,
      title: 'WhatsApp',
      description: 'La forma más rápida de contactarnos',
      detail: '+52 XXX XXX XXXX',
      link: whatsappLink,
      buttonText: 'Enviar mensaje',
      color: 'bg-green-600 hover:bg-green-700'
    },
    {
      icon: <Mail size={48} />,
      title: 'Correo electrónico',
      description: 'Para consultas y pedidos especiales',
      detail: 'contacto@panhub.mx',
      link: 'mailto:contacto@panhub.mx',
      buttonText: 'Enviar correo',
      color: 'bg-blue-600 hover:bg-blue-700'
    }
  ];

  const socialMedia = [
    {
      icon: <Instagram size={40} />,
      name: 'Instagram',
      handle: '@panhub',
      description: 'Síguenos para ver nuestros productos diarios',
      link: instagramLink,
      color: 'bg-gradient-to-br from-purple-600 to-pink-600'
    },
    {
      icon: <MessageCircle size={40} />,
      name: 'WahtsApp',
      handle: '@panhub',
      description: 'Contacto directo y rápido vía WhatsApp',
      link: whatsappLink,
      color: 'bg-black'
    }
  ];

  const paymentMethods = [
    'Efectivo',
    'Transferencia bancaria'
  ];

  return (
    <div className="min-h-screen bg-amber-50">
      <Navbar />

      {/* Header */}
      <section className="bg-gradient-to-br from-amber-600 to-orange-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MessageCircle className="mx-auto mb-4 text-white" size={64} />
          <h2 className="text-4xl font-bold text-white mb-4">Contacto y redes</h2>
          <p className="text-xl text-white">Estamos aquí para atenderte</p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Formas de contacto</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg shadow-lg p-8 hover:shadow-xl transition">
                <div className="text-amber-600 mb-4">
                  {method.icon}
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">{method.title}</h4>
                <p className="text-gray-600 mb-4">{method.description}</p>
                <p className="text-lg font-semibold text-gray-800 mb-6">{method.detail}</p>
                <a
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center w-full px-6 py-3 ${method.color} text-white font-semibold rounded-lg transition`}
                >
                  {method.buttonText}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-4 text-center">Síguenos en redes sociales</h3>
          <p className="text-center text-gray-600 mb-12">
            Mantente al día con nuestros productos, promociones y novedades
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {socialMedia.map((social, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
                <div className={`${social.color} text-white p-6 flex items-center justify-center`}>
                  {social.icon}
                  <h4 className="text-2xl font-bold ml-4">{social.name}</h4>
                </div>
                <div className="p-6">
                  <p className="text-xl font-semibold text-gray-800 mb-2">{social.handle}</p>
                  <p className="text-gray-600 mb-6">{social.description}</p>
                  <a
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition"
                  >
                    Seguir
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Información importante</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Response Hours */}
            <div className="bg-amber-50 rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <Clock className="text-amber-600 mr-3" size={32} />
                <h4 className="text-xl font-bold text-gray-900">Horario de respuesta</h4>
              </div>
              <p className="text-gray-700 mb-2">
                <span className="font-semibold">WhatsApp:</span> Respondemos de lunes a viernes de 9:00 a 18:00
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Correo:</span> Respondemos en un plazo de 24-48 horas
              </p>
            </div>

            {/* Payment Methods */}
            <div className="bg-amber-50 rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <CreditCard className="text-amber-600 mr-3" size={32} />
                <h4 className="text-xl font-bold text-gray-900">Métodos de pago</h4>
              </div>
              <ul className="space-y-2">
                {paymentMethods.map((method, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                    {method}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-amber-600 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            ¿Listo para hacer tu pedido?
          </h3>
          <p className="text-xl text-white mb-8">
            Contáctanos ahora y disfruta de nuestro pan fresco
          </p>
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-white text-amber-600 font-bold rounded-lg hover:bg-gray-100 transition text-lg shadow-lg"
          >
            <MessageCircle className="mr-3" size={24} />
            Contactar por WhatsApp
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

export default Contacto;
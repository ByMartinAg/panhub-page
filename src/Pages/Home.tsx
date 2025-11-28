import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import { ShoppingBag, MessageCircle } from 'lucide-react';

const Home: React.FC = () => {
  const whatsappLink = "https://wa.me/52XXXXXXXXXX?text=Hola%20vengo%20desde%20la%20página,%20quiero%20más%20información";

  const featuredProducts = [
    { name: 'Pan de nata relleno', price: '$30', image: '/src/images/pan-de-nata-relleno.png' },
    { name: 'Pan de Nata', price: '$20', image: '/src/images/pan-de-nata.png' },
    { name: 'Mini panques', price: '$20', image: '/src/images/mini-panques.png' }
  ];

  const bakeries = [
    { name: 'Panadería La Esquina', specialty: 'Pan en formato mini', image: '/src/images/bakery1.jpg' },
    { name: 'Panadería Espiga de Oro', specialty: 'Mini panques y galletas', image: '/src/images/bakery2.jpg' },
    { name: 'Panadería Chimal Reyes', specialty: 'Pan de nata', image: '/src/images/bakery3.jpg' }
  ];

  return (
    <div className="min-h-screen bg-amber-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-100 to-orange-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
              Pan artesanal y práctico para tu día a día
            </h2>
            <h2 className='text-5xl font-extrabold text-gray-900 mb-4'>
                Formato mini, sabor maxi.
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Conectamos panaderías locales para llevar el mejor pan fresco directamente a ti
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/productos" 
                className="inline-flex items-center px-8 py-3 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition"
              >
                <ShoppingBag className="mr-2" size={20} />
                Ver productos
              </Link>
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition"
              >
                <MessageCircle className="mr-2" size={20} />
                Contacto directo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">¿Quiénes somos?</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Somos una microempresa que distribuye piezas de panadería fresca dentro del campus. 
              Trabajamos con panaderías locales y ofrecemos productos accesibles, prácticos y listos 
              para llevar.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Productos destacados</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
                <div className="h-64 bg-gray-200 flex items-center justify-center">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h4>
                  <p className="text-2xl font-bold text-amber-600 mb-4">{product.price}</p>
                  <a 
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full text-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                  >
                    Pedir por WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Bakeries */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Panaderías aliadas</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bakeries.map((bakery, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gray-200 overflow-hidden">
                  <img src={bakery.image} alt={bakery.name} className="w-full h-full object-cover" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{bakery.name}</h4>
                <p className="text-gray-600">{bakery.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-br from-amber-600 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            ¿Listo para probar nuestro pan?
          </h3>
          <p className="text-xl text-white mb-8">
            Contáctanos para pedidos, informes y apartados
          </p>
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-white text-amber-600 font-bold rounded-lg hover:bg-gray-100 transition text-lg"
          >
            <MessageCircle className="mr-2" size={24} />
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

export default Home;
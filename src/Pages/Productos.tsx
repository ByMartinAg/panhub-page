import React from 'react';
import Navbar from '../Components/Navbar';
import { MessageCircle, Package } from 'lucide-react';

const Productos: React.FC = () => {
  const whatsappLink = "https://wa.me/52XXXXXXXXXX?text=Hola%20vengo%20desde%20la%20página,%20quiero%20más%20información";

  const products = [
    {
      name: 'Pan de Nata',
      price: '$20',
      description: 'Pan tradicional suave y mantequilloso, hecho de manera artesanal y perfecto para un antojo rápido dentro del campus.',
      image: '/src/images/pan-de-nata.png'
    },
    {
      name: 'Pan de Nata Relleno',
      price: '$15',
      description: 'Pan de nata artesanal con relleno dulce —nutella— pensado para quienes buscan algo más indulgente pero práctico.',
      image: '/src/images/pan-de-nata-relleno.png'
    },
    {
      name: 'Mini Panques',
      price: '$12',
      description: 'Panqués individuales en sabor chocolate, esponjosos y listos para llevar como snack o desayuno rápido.',
      image: '/src/images/mini-panques.png'
    },
    {
      name: 'Muffins',
      price: '$13',
      description: 'Muffins artesanales de textura suave, disponibles en variedades como blueberry y chocolate, ideales como snack energético.',
      image: '/src/images/muffin.png'
    },
    {
      name: 'Galletas',
      price: '$14',
      description: 'Galletas artesanales crujientes, hechas con ingredientes frescos y pensadas para acompañar el ritmo de vida universitario.',
      image: '/src/images/galletas.png'
    },
    {
      name: 'Mini Cuernitos',
      price: '$18',
      description: 'Cuernitos pequeños de mantequilla, suaves y ligeramente dorados, perfectos para acompañar un café o para un break rápido',
      image: '/src/images/cuernitos.png'
    }

  ];

  const combos = [
    {
      name: 'Combo 1',
      price: '$??',
      includes: 'Proximamente disponible...',
      image: '/src/images/combo-estudiante.jpg'
    },
    {
      name: 'Combo 2',
      price: '$??',
      includes: 'Proximamente disponible...',
      image: '/src/images/combo-recreo.jpg'
    },
    {
      name: 'Combo 3',
      price: '$??',
      includes: 'Proximamente disponible...',
      image: '/src/images/combo-grupo.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-amber-50">
      <Navbar />

      {/* Header */}
      <section className="bg-gradient-to-br from-amber-600 to-orange-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Nuestro catálogo</h2>
          <p className="text-xl text-white">Piezas frescas, accesibles y listas para llevar</p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
                <div className="h-56 bg-gray-200 flex items-center justify-center">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-amber-600">{product.price}</span>
                    <a 
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                    >
                      <MessageCircle className="mr-2" size={18} />
                      Pedir
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Combos Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Package className="mx-auto mb-4 text-amber-600" size={48} />
            <h3 className="text-3xl font-bold text-gray-900 mb-2">Combos especiales</h3>
            <p className="text-gray-600">Ahorra más con nuestros paquetes</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {combos.map((combo, index) => (
              <div key={index} className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <img src={combo.image} alt={combo.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">{combo.name}</h4>
                  <p className="text-gray-700 mb-4">{combo.includes}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-amber-600">{combo.price}</span>
                    <a 
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                    >
                      <MessageCircle className="mr-2" size={18} />
                      Ordenar
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="py-8 bg-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <p className="text-gray-700">
              <span className="font-semibold">Nota importante:</span> Disponibilidad sujeta a existencias. 
              Pregunta por disponibilidad en WhatsApp antes de tu visita.
            </p>
          </div>
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

export default Productos;
import React from 'react';
import Navbar from '../Components/Navbar';
import { Heart, Users, TrendingUp, Award } from 'lucide-react';

const Experiencia: React.FC = () => {
  const gallery = [
    { image: '/src/images/galeria1.png', alt: 'Pan fresco' },
    { image: '/src/images/galeria2.png', alt: 'Empaques' },
    { image: '/src/images/galeria3.png', alt: 'Especiales' },
    //{ image: '/src/images/gallery4.jpg', alt: 'Equipo de trabajo' },
    //{ image: '/src/images/gallery5.jpg', alt: 'Productos variados' },
    //{ image: '/src/images/gallery6.jpg', alt: 'Clientes satisfechos' }
  ];

  const distinctions = [
    {
      icon: <Heart size={40} />,
      title: 'Frescura diaria',
      description: 'Nuestro pan llega fresco cada día directamente de las panaderías locales'
    },
    {
      icon: <Users size={40} />,
      title: 'Trabajo con panaderías locales',
      description: 'Colaboramos con los mejores panaderos de la región para traerte calidad auténtica'
    },
    {
      icon: <TrendingUp size={40} />,
      title: 'Precios accesibles',
      description: 'Productos de calidad al alcance de todos los estudiantes'
    }
  ];

  return (
    <div className="min-h-screen bg-amber-50">
      <Navbar />

      {/* Header */}
      <section className="bg-gradient-to-br from-amber-600 to-orange-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Award className="mx-auto mb-4 text-white" size={64} />
          <h2 className="text-4xl font-bold text-white mb-4">Nuestra experiencia</h2>
          <p className="text-xl text-white">Más que pan, una historia de pasión y comunidad</p>
        </div>
      </section>

      {/* Historia */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">Nuestra historia</h3>
          <div className="bg-amber-50 rounded-lg p-8 shadow-lg">
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              Nacimos como un proyecto universitario para acercar pan fresco y práctico a la comunidad 
              del campus. Lo que comenzó como una idea simple se ha convertido en un puente entre las 
              mejores panaderías locales y los estudiantes que buscan calidad y comodidad en su día a día.
            </p>
          </div>
        </div>
      </section>

      {/* Misión */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">Nuestra misión</h3>
          <div className="bg-white rounded-lg p-8 shadow-lg border-l-8 border-amber-600">
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              Brindar productos accesibles, ricos y frescos a estudiantes y personal del campus, 
              fortaleciendo la comunidad universitaria y apoyando a los productores locales.
            </p>
          </div>
        </div>
      </section>

      {/* Distinctions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">¿Qué nos distingue?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {distinctions.map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg p-8 text-center shadow-lg hover:shadow-xl transition">
                <div className="text-amber-600 mb-4 flex justify-center">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h4>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Galería</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((item, index) => (
              <div key={index} className="aspect-square bg-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
                <img 
                  src={item.image} 
                  alt={item.alt} 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-br from-amber-600 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="text-white">
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-xl">Clientes satisfechos</div>
            </div>
            <div className="text-white">
              <div className="text-5xl font-bold mb-2">15+</div>
              <div className="text-xl">Productos diferentes</div>
            </div>
            <div className="text-white">
              <div className="text-5xl font-bold mb-2">3</div>
              <div className="text-xl">Panaderías aliadas</div>
            </div>
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

export default Experiencia;
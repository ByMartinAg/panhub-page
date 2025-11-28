import React from 'react';
import Navbar from '../Components/Navbar';
import { Users, Briefcase, TrendingUp, Heart, MessageCircle, CheckCircle } from 'lucide-react';

const Unete: React.FC = () => {
  const whatsappLink = "https://wa.me/52XXXXXXXXXX?text=Hola,%20quiero%20unirme%20al%20equipo%20de%20PanHub";

  const requirements = [
    'Ser estudiante del campus',
    'Disponibilidad en recreo / descansos',
    'Buen trato al cliente',
    'Responsabilidad en manejo de productos',
    'Actitud positiva y proactiva'
  ];

  const benefits = [
    {
      icon: <TrendingUp size={40} />,
      title: 'Comisión por venta',
      description: 'Gana dinero extra por cada producto vendido'
    },
    {
      icon: <Heart size={40} />,
      title: 'Snacks gratis',
      description: 'Disfruta de nuestros productos mientras trabajas'
    },
    {
      icon: <Briefcase size={40} />,
      title: 'Horarios flexibles',
      description: 'Trabaja en los horarios que mejor se ajusten a tu vida estudiantil'
    },
    {
      icon: <Users size={40} />,
      title: 'Experiencia laboral',
      description: 'Desarrolla habilidades valiosas para tu CV'
    }
  ];

  const positions = [
    {
      title: 'Vendedor en punto de venta',
      description: 'Atiende a clientes en nuestro stand dentro del campus',
      tasks: ['Atención al cliente', 'Manejo de caja', 'Control de inventario']
    },
    {
      title: 'Repartidor ocasional',
      description: 'Entrega pedidos especiales en diferentes puntos del campus',
      tasks: ['Reparto de pedidos', 'Coordinación de entregas', 'Atención personalizada']
    },
    {
      title: 'Apoyo en inventario',
      description: 'Ayuda en el control y organización de productos',
      tasks: ['Control de existencias', 'Organización de productos', 'Reportes básicos']
    }
  ];

  return (
    <div className="min-h-screen bg-amber-50">
      <Navbar />

      {/* Header */}
      <section className="bg-gradient-to-br from-amber-600 to-orange-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Users className="mx-auto mb-4 text-white" size={80} />
          <h2 className="text-5xl font-extrabold text-white mb-4">Únete a PanHub</h2>
          <p className="text-2xl text-white mb-2">Forma parte del equipo y ayúdanos a crecer</p>
          <p className="text-xl text-white opacity-90">
            Estamos buscando estudiantes motivados que quieran ganar dinero extra
          </p>
        </div>
      </section>

      {/* What We're Looking For */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-4 text-center">¿Qué buscamos?</h3>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto text-lg">
            Buscamos estudiantes entusiastas que quieran formar parte de nuestro equipo. 
            No necesitas experiencia previa, solo ganas de aprender y trabajar.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {positions.map((position, index) => (
              <div key={index} className="bg-amber-50 rounded-lg shadow-lg p-6 hover:shadow-xl transition">
                <h4 className="text-xl font-bold text-gray-900 mb-3">{position.title}</h4>
                <p className="text-gray-700 mb-4">{position.description}</p>
                <div className="space-y-2">
                  <p className="font-semibold text-amber-600 text-sm">Tareas principales:</p>
                  {position.tasks.map((task, idx) => (
                    <div key={idx} className="flex items-start">
                      <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-1" size={16} />
                      <span className="text-gray-600 text-sm">{task}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Requisitos</h3>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {requirements.map((requirement, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="text-amber-600 mr-3 flex-shrink-0 mt-1" size={24} />
                  <span className="text-gray-700 text-lg">{requirement}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-gray-600 text-center">
                Si cumples con estos requisitos, ¡queremos conocerte!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-4 text-center">Beneficios</h3>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto text-lg">
            Trabajar con nosotros tiene sus ventajas. Aquí te contamos qué puedes esperar:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition">
                <div className="text-amber-600 mb-4 flex justify-center">
                  {benefit.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h4>
                <p className="text-gray-700">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Lo que dicen nuestros colaboradores
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-amber-200 rounded-full flex items-center justify-center text-amber-700 font-bold text-xl mr-4">
                  MA
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">María Acosta</h4>
                  <p className="text-gray-600 text-sm">Vendedora desde hace 6 meses</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Trabajar en PanHub me ha permitido ganar dinero sin descuidar mis estudios. 
                Los horarios son súper flexibles y el ambiente es genial."
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-amber-200 rounded-full flex items-center justify-center text-amber-700 font-bold text-xl mr-4">
                  JL
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Juan López</h4>
                  <p className="text-gray-600 text-sm">Repartidor desde hace 4 meses</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Me encanta la flexibilidad y que puedo trabajar entre clases. 
                Además, ¡el pan gratis es un plus increíble!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-amber-600 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-4xl font-bold text-white mb-4">
            ¿Listo para unirte?
          </h3>
          <p className="text-xl text-white mb-8">
            Envíanos un mensaje por WhatsApp con tu nombre, carrera y disponibilidad. 
            Te responderemos lo antes posible para coordinar una breve entrevista.
          </p>
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-10 py-5 bg-white text-amber-600 font-bold rounded-lg hover:bg-gray-100 transition text-xl shadow-2xl"
          >
            <MessageCircle className="mr-3" size={28} />
            Enviar solicitud por WhatsApp
          </a>
          <p className="text-white mt-6 text-sm opacity-90">
            También puedes enviarnos tu CV si lo tienes disponible
          </p>
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

export default Unete;
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/">
              <h1 className="text-2xl font-bold text-amber-700">PanHub</h1>
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className={`transition ${
                isActive('/') 
                  ? 'text-amber-600 font-semibold' 
                  : 'text-gray-700 hover:text-amber-600'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/productos" 
              className={`transition ${
                isActive('/productos') 
                  ? 'text-amber-600 font-semibold' 
                  : 'text-gray-700 hover:text-amber-600'
              }`}
            >
              Productos
            </Link>
            <Link 
              to="/experiencia" 
              className={`transition ${
                isActive('/experiencia') 
                  ? 'text-amber-600 font-semibold' 
                  : 'text-gray-700 hover:text-amber-600'
              }`}
            >
              Experiencia
            </Link>
            <Link 
              to="/ubicacion" 
              className={`transition ${
                isActive('/ubicacion') 
                  ? 'text-amber-600 font-semibold' 
                  : 'text-gray-700 hover:text-amber-600'
              }`}
            >
              Ubicación
            </Link>
            <Link 
              to="/contacto" 
              className={`transition ${
                isActive('/contacto') 
                  ? 'text-amber-600 font-semibold' 
                  : 'text-gray-700 hover:text-amber-600'
              }`}
            >
              Contacto
            </Link>
            <Link 
              to="/unete" 
              className={`transition ${
                isActive('/unete') 
                  ? 'text-amber-600 font-semibold' 
                  : 'text-gray-700 hover:text-amber-600'
              }`}
            >
              Únete
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
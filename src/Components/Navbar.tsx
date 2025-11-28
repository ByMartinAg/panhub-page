import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/">
            <h1 className="text-2xl font-bold text-amber-700">PanHub</h1>
          </Link>

          {/* Botón Hamburguesa (solo móvil) */}
          <button
            className="md:hidden text-amber-700"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Menú Desktop */}
          <div className="hidden md:flex space-x-8">
            {[
              { to: "/", label: "Home" },
              { to: "/productos", label: "Productos" },
              { to: "/experiencia", label: "Experiencia" },
              { to: "/ubicacion", label: "Ubicación" },
              { to: "/contacto", label: "Contacto" },
              { to: "/unete", label: "Únete" },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`transition ${
                  isActive(item.to)
                    ? "text-amber-600 font-semibold"
                    : "text-gray-700 hover:text-amber-600"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* MENÚ MÓVIL */}
      {open && (
        <div className="md:hidden bg-white border-t px-4 pb-4 space-y-3">
          {[
            { to: "/", label: "Home" },
            { to: "/productos", label: "Productos" },
            { to: "/experiencia", label: "Experiencia" },
            { to: "/ubicacion", label: "Ubicación" },
            { to: "/contacto", label: "Contacto" },
            { to: "/unete", label: "Únete" },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)} // cierre automático
              className={`block transition ${
                isActive(item.to)
                  ? "text-amber-600 font-semibold"
                  : "text-gray-700 hover:text-amber-600"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

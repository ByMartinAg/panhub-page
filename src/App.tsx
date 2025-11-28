import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Productos from './Pages/Productos'
import Experiencia from './Pages/Experiencia'
import Ubicacion from './Pages/Ubicacion'
import Contacto from './Pages/Contacto'
import Unete from './Pages/Unete'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/productos" element={<Productos />} />
      <Route path="/experiencia" element={<Experiencia />} />
      <Route path="/ubicacion" element={<Ubicacion />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/unete" element={<Unete />} />
    </Routes>
  )
}

export default App

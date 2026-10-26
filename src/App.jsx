import { Routes, Route } from 'react-router-dom'
import RutaProtegida from './components/RutaProtegida'
import MainLayout from './layouts/MainLayout'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Herramientas from './pages/Herramientas'
import Prestamos from './pages/Prestamos'
import Devoluciones from './pages/Devoluciones'
import Reportes from './pages/Reportes'

function App() {
  return (
    <Routes>
      {/* Login: sin encabezado ni menú */}
      <Route path="/" element={<Login />} />

      {/* Solo entra quien haya iniciado sesión */}
      <Route element={<RutaProtegida />}>
        {/* Todas estas comparten el mismo Layout */}
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/herramientas" element={<Herramientas />} />
          <Route path="/prestamos" element={<Prestamos />} />
          <Route path="/devoluciones" element={<Devoluciones />} />
          <Route path="/reportes" element={<Reportes />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App;
import { Navigate, Outlet } from 'react-router-dom'

function RutaProtegida() {
  const haySesion = sessionStorage.getItem('sesion') === 'activa'
  return haySesion ? <Outlet /> : <Navigate to="/" replace />
}

export default RutaProtegida;
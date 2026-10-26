import { NavLink, useNavigate } from 'react-router-dom'

const opciones = [
  { ruta: '/dashboard', texto: 'Tablero principal' },
  { ruta: '/herramientas', texto: 'Herramientas' },
  { ruta: '/prestamos', texto: 'Préstamos' },
  { ruta: '/devoluciones', texto: 'Devoluciones' },
  { ruta: '/reportes', texto: 'Reportes' },
]

function Sidebar() {
  const navigate = useNavigate()

  const cerrarSesion = () => {
    sessionStorage.removeItem('sesion')
    navigate('/')
  }

  return (
    <aside className="menu-lateral">
      <h2>OPCIONES</h2>
      <nav>
        {opciones.map((op) => (
          <NavLink key={op.ruta} to={op.ruta}>
            {op.texto}
          </NavLink>
        ))}
        <button className="btn-cerrar" onClick={cerrarSesion}>
          Cerrar sesión
        </button>
      </nav>
    </aside>
  )
}

export default Sidebar;
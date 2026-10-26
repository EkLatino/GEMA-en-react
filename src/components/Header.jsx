import logo from '../assets/logo-gema.jpg'

function Header() {
  return (
    <header className="encabezado">
      <img src={logo} alt="Logo GEMA" className="encabezado-logo" />
      <div className="encabezado-texto">
        <strong>GEMA</strong>
        <span>Gestión de Equipos, Materiales y Almacén</span>
      </div>
    </header>
  )
}

export default Header;
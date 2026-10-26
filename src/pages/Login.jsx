import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'
import logo from '../assets/logo-gema.jpg'

const USUARIO_PRUEBA = 'admin@gema.com'
const CLAVE_PRUEBA = 'Gema2026*'

function Login() {
    const navigate = useNavigate()
    const [usuario, setUsuario] = useState('')
    const [clave, setClave] = useState('') // usuario y clave guardan lo que se escribe.
    const [error, setError] = useState('') // error guarda el mensaje cuando los datos no coinciden.

    const handleSubmit = (e) => {
        e.preventDefault()
      
        if (usuario === USUARIO_PRUEBA && clave === CLAVE_PRUEBA) { // Si coinciden, entra al tablero.
          sessionStorage.setItem('sesion', 'activa') //sessionStorage guarda marca sesión iniciada.Se borra sola al cerrar la pestaña.
          navigate('/dashboard')
        } else {
          setError('Usuario o contraseña incorrectos.') // Si no, muestra el error y se queda en el login.
        }
      }

  return (
    <main className="login-pagina">
      <section className="login-hero">
        <div className="login-logo">
          <img src={logo} alt="GEMA - Gestión de Equipos, Materiales y Almacén" />
        </div>

        <h1 className="login-titulo">Soluciones efectivas para tus proyectos</h1>
        <p className="login-subtitulo">
          Gestiona herramientas, equipos y solicitudes desde un solo lugar.
        </p>

        <form className="login-form" onSubmit={handleSubmit}>
          {error && <div className="login-alerta" role="alert">{error}</div>}

          <div className="campo">
            <label htmlFor="usuario">Usuario</label>
            <input id="usuario" 
            type="email" 
            placeholder="correo@empresa.com" 
            value={usuario}
            onChange={(e) => { setUsuario(e.target.value); setError('') }}
            />
          </div>

          <div className="campo">
            <label htmlFor="clave">Contraseña</label>
            <input id="clave" 
            type="password" 
            placeholder="contraseña" 
            value={clave}
            onChange={(e) => { setClave(e.target.value); setError('') }}
            />
          </div>

          <div className="login-acciones">
            <button type="submit" className="btn btn-blanco">Iniciar sesión</button>
            <button type="button" className="btn btn-borde">Solicitar acceso</button>
          </div>
        </form>

        <div className="login-contacto">
          <p className="contacto-titulo">¿Necesitas ayuda?</p>
          <ul className="contacto-lista">
            <li>
              <span>Correo:</span>
              <a href="mailto:soporte@gema.com">soporte@gema.com</a>
            </li>
            <li>
              <span>Teléfono:</span>
              <a href="tel:+576041234567">(604) 123 4567</a>
            </li>
            <li>
              <span>Horario:</span>
              Lunes a viernes, 8:00 a.m. - 5:00 p.m.
            </li>
          </ul>
        </div>
      </section>
    </main>
  )
}

export default Login;
import { useState } from "react"; 

function Prestamos() {
  const [solicitante, setSolicitante] = useState("")
  const [herramienta, setHerramienta] = useState('')
  const [cantidad, setCantidad] = useState('')
  const [fechaPrestamo, setFechaPrestamo] = useState('')
  const [fechaDevolucion, setFechaDevolucion] = useState('')
  const [error, setError] = useState('')
  const hoy = new Date().toISOString().split('T')[0]

    return (
      <>
        <h1 className="pagina-titulo">Solicitud de Préstamos</h1>
        <p className="pagina-descripcion">Registra la información completa en los campos del formulario.
        </p>

        <div className="tarjeta form-grid">

          <div className="campo">
            <label htmlFor="solicitante">Nombre del solicitante</label>
            <input 
            id="solicitante"
            type="text" 
            placeholder="nombres y apellidos" 
            value={solicitante}
            onChange={(e) => { setSolicitante(e.target.value); setError('') }} 
            />
          </div>

          <div className="campo">
            <label htmlFor="herramienta">Herramienta</label>
            <select
            id="herramienta"
            value={herramienta}
            onChange={(e) =>  setHerramienta(e.target.value)}
            >
              <option value="">Selecciona una herramienta</option>
              <option value="miraTopografica">Mira Topográfica</option>
              <option value="nivelOptico">Nivel Óptico</option>
              <option value="teodolito">Teodolito</option>
              <option value="prismaTopográfica">Prisma Topográfica</option>
              <option value="bastonTopográfico">Bastón Topográfico</option>
              <option value="escanerLaser3d">Escaner Láser 3D</option>
              <option value="distanciometroLaser">Distanciometro Láser</option>
              <option value="gnss">GNSS RTK</option>
              <option value="plomada">Plomada</option>
              <option value="dronTopografico">Dron Topográfico</option>
              <option value="estacionTotal">Estación Total</option>
              <option value="plomadaOptica">Plomada Óptica</option>
            </select>
          </div>

          <div className="campo">
            <label htmlFor="cantidad">Cantidad</label>
            <input 
            id="cantidad"
            type="number" 
            min="1"
            value={cantidad}
            onChange={(e) => { setCantidad(e.target.value); setError('') }} 
            />
          </div>

          <div className="campo">
            <label htmlFor="fechaPrestamo">Fecha de préstamo</label>
            <input 
            id="fechaPrestamo"
            type="date" 
            min={hoy}
            value={fechaPrestamo}
            onChange={(e) => { setFechaPrestamo(e.target.value); setError('') }}
            onClick={(e) => e.target.showPicker()} 
            />
          </div>

          <div className="campo">
            <label htmlFor="fechaDevolucion">Fecha de devolución</label>
            <input 
            id="fechaDevolucion"
            type="date"
            min={hoy} 
            value={fechaDevolucion}
            onChange={(e) => { setFechaDevolucion(e.target.value); setError('') }} 
            onClick={(e) => e.target.showPicker()}
            />
          </div>

        </div>
      </>
    )
  }
  
  export default Prestamos;
import { useState } from "react"; 

function Solicitudes() {
  const [solicitanteMateriales, setSolicitanteMateriales] = useState("")
  const [tipoSolicitud, setTipoSolicitud] = useState('')
  const [nombreArticulo, setNombreArticulo] = useState('')
  const [unidadMedida, setUnidadMedida] = useState('')
  const [fechaSolicitud, setFechaSolicitud] = useState('')
  const hoy = new Date().toISOString().split('T')[0]
  const [error, setError] = useState('')

    return (
      <>
        <h1 className="pagina-titulo">Solicitudes equipos o materiales</h1>
        <p className="pagina-descripcion">Registra la información completa en los campos del formulario.
        </p>

        <div className="tarjeta form-grid">

          <div className="campo">
            <label htmlFor="solicitanteMateriales">Nombre del solicitante</label>
            <input 
            id="solicitanteMateriales"
            type="text" 
            placeholder="nombres y apellidos" 
            value={solicitanteMateriales}
            onChange={(e) => { setSolicitanteMateriales(e.target.value); setError('') }} 
            />
          </div>

          <div className="campo">
            <label htmlFor="tipoSolicitud">Tipo de solicitud</label>
            <select
            id="tipoSolicitud"
            value={tipoSolicitud}
            onChange={(e) =>  setTipoSolicitud(e.target.value)}
            >
              <option value="">Selecciona una herramienta</option>
              <option value="equipo">Equipo o herramienta</option>
              <option value="material">Material</option>
            </select>
          </div>

          <div className="campo">
            <label htmlFor="nombreArticulo">Nombre del artículo</label>
            <input 
            id="nombreArticulo"
            type="text" 
            placeholder="Ej: Pintura, clavos y/o equipo o herramienta" 
            value={nombreArticulo}
            onChange={(e) => { setNombreArticulo(e.target.value); setError('') }} 
            />
          </div>

          <div className="campo">
            <label htmlFor="unidadMedida">Cantidad</label>
            <input 
            id="unidadMedida"
            type="text" 
            placeholder="Ingrese cantidad o unidad de medida" 
            value={unidadMedida}
            onChange={(e) => { setUnidadMedida(e.target.value); setError('') }} 
            />
          </div>

          <div className="campo">
            <label htmlFor="fechaSolicitud">Fecha en que se necesita</label>
            <input 
            id="fechaSolicitud"
            type="date" 
            min={hoy}
            value={fechaSolicitud}
            onChange={(e) => { setFechaSolicitud(e.target.value); setError('') }}
            onClick={(e) => e.target.showPicker()} 
            />
          </div>
 
        </div>
      </>
    )
  }
  
  export default Solicitudes;
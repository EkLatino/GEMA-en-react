function HerramientaCard({ herramienta }) {
  return (
    <article className="card">
      <div className="card-imagen">
        <img
          src={`/herramientasImg/${herramienta.imagen}`}
          alt={herramienta.nombre}
        />
      </div>

      <div className="card-info">
        <h3 className="card-nombre">{herramienta.nombre}</h3>
        <span className="card-stock">Disponibles: {herramienta.stock}</span>
      </div>

      <button
        type="button"
        className="btn btn-blanco"
        disabled={herramienta.stock === 0}
      >
        <strong>Solicitar préstamo</strong>
      </button>
    </article>
  )
}

export default HerramientaCard
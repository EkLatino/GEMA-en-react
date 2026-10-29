const resumen = [
    { numero: 12, etiqueta: 'Herramientas registradas' },
    { numero: 7, etiqueta: 'Préstamos activos' },
    { numero: 5, etiqueta: 'Devoluciones pendientes' },
    { numero: 3, etiqueta: 'Alertas de stock' },
  ]
  
  function Dashboard() {
    return (
      <>
        <h1 className="pagina-titulo">Tablero principal</h1>
        <p className="pagina-descripcion">Resumen general de GEMA.</p>
  
        <div className="tarjetas-grid">
          {resumen.map((item) => (
            <div className="tarjeta" key={item.etiqueta}>
              <p className="tarjeta-numero">{item.numero}</p>
              <p className="tarjeta-etiqueta">{item.etiqueta}</p>
            </div>
          ))}
        </div>
      </>
    )
  }
  
  export default Dashboard;
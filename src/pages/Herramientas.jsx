import './Herramientas.css'
import HerramientaCard from '../components/HerramientaCard'

const HERRAMIENTAS = [
  { id: 1, nombre: 'Mira Topográfica', stock: 65, imagen: 'miraTopo.jpg' },
  { id: 2, nombre: 'Teodolito', stock: 32, imagen: 'teodolito.png' },
  { id: 3, nombre: 'Prisma Topográfica', stock: 30, imagen: 'prismaTopo.png' },
  { id: 4, nombre: 'Estación Total', stock: 45, imagen: 'estacionTotal.png' },
  { id: 5, nombre: 'Nivel Óptico', stock: 60, imagen: 'nivelOptico.png' },
  { id: 6, nombre: 'Dron Topográfico', stock: 26, imagen: 'dronTopo.jpg' },
  { id: 7, nombre: 'Distanciometro Láser', stock: 52, imagen: 'distanciometroLaser.png' },
  { id: 8, nombre: 'Bastones Topográficos', stock: 100, imagen: 'bastonesTopo.jpeg' },
  { id: 9, nombre: 'Plomada', stock: 89, imagen: 'plomada.png' },
  { id: 10, nombre: 'Escaner Láser', stock: 58, imagen: 'escanerLaser3D.png' },
  { id: 11, nombre: 'GNSS RTK', stock: 67, imagen: 'gnssRtk.png' },
  { id: 12, nombre: 'Plomada Óptica', stock: 50, imagen: 'plomadaOptica.jpg' },
]

function Herramientas() {
  return (
    <>
      <h1 className="pagina-titulo">Herramientas</h1>
      <p className="pagina-descripcion">Equipos e instrumentos disponibles</p>

      <div className="cards-grid">
        {HERRAMIENTAS.map((h) => (
          <HerramientaCard key={h.id} herramienta={h} />
        ))}
      </div>
    </>
  )
}

export default Herramientas;
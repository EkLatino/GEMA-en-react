import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import './MainLayout.css'

function MainLayout() {
  return (
    <div className="layout">
      <Header />
      <div className="layout-cuerpo">
        <Sidebar />
        <main className="contenido">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default MainLayout;
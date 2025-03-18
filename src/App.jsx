import { Route, Routes, useLocation } from 'react-router-dom'
import HomePage from './pages/HomePage'
import PlataformaPage from './pages/PlataformaPage'
import { routes } from './utils/routes'
import Navbar from './components/Navbar'
import SandaliasPage from './pages/SandaliasPage'
import TaconesPage from './pages/TaconesPage'
import ZapatosPage from './pages/ZapatosPage'
import ContactoPage from './pages/ContactoPage'

function App() {
  const location = useLocation()

  const movil = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )

  return (
    <>
      {location.pathname !== '/webpruebas' && <Navbar />}
      <Routes>
        <Route
          path={routes.frontend.home + '/*'}
          element={<HomePage isMobile={movil} />}
        />
        <Route
          path={routes.frontend.plataformas + '/*'}
          element={<PlataformaPage isMobile={movil} />}
        />
        <Route path={routes.frontend.sandalias + '/*'} element={<SandaliasPage />} />
        <Route path={routes.frontend.tacones + '/*'} element={<TaconesPage />} />
        <Route path={routes.frontend.zapatos + '/*'} element={<ZapatosPage />} />
        <Route path={routes.frontend.contacto + '/*'} element={<ContactoPage />} />
      </Routes>
    </>
  )
}

export default App

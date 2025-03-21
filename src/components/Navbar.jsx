import { useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logoBlack from '../assets/img/logo.jpg'
import { routes } from '../utils/routes'

const Navbar = () => {
  const location = useLocation()
  const navbarCollapseRef = useRef(null)

  // Para cerrar el menú en la vista de móvil
  const handleNavClick = () => {
    if (navbarCollapseRef.current) {
      navbarCollapseRef.current.classList.remove('show')
    }
  }

  return (
    <nav className='navbar sticky-top navbar-expand-lg bg-body-tertiary'>
      <div className='container-fluid'>
        <Link to={routes.frontend.home} className='navbar-brand'>
          <img
            src={logoBlack}
            alt='Logo'
            width='30'
            height='30'
            className='d-inline-block align-text-top'
          />
          <span style={{ marginLeft: '8px' }} title='Inicio'>
            Jahleel's Store
          </span>
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav' ref={navbarCollapseRef}>
          <ul className='navbar-nav'>
            {/* <li className='nav-item'>
              <Link to={routes.frontend.home} className='nav-link' aria-current='page'>
                Inicio
              </Link>
            </li> */}
            <li className='nav-item'>
              <Link
                to={routes.frontend.plataformas}
                className={`nav-link ${
                  location.pathname === routes.frontend.plataformas ? 'active-link' : ''
                }`}
                onClick={handleNavClick}
              >
                Plataformas
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to={routes.frontend.sandalias}
                className={`nav-link ${
                  location.pathname === routes.frontend.sandalias ? 'active-link' : ''
                }`}
                onClick={handleNavClick}
              >
                Sandalias
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to={routes.frontend.tacones}
                className={`nav-link ${
                  location.pathname === routes.frontend.tacones ? 'active-link' : ''
                }`}
                onClick={handleNavClick}
              >
                Tacones
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to={routes.frontend.zapatillas}
                className={`nav-link ${
                  location.pathname === routes.frontend.zapatillas ? 'active-link' : ''
                }`}
                onClick={handleNavClick}
              >
                Zapatillas
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to={routes.frontend.zapatos}
                className={`nav-link ${
                  location.pathname === routes.frontend.zapatos ? 'active-link' : ''
                }`}
                onClick={handleNavClick}
              >
                Zapatos
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to={routes.frontend.contacto}
                className={`nav-link ${
                  location.pathname === routes.frontend.contacto ? 'active-link' : ''
                }`}
                onClick={handleNavClick}
              >
                Contáctanos
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

import { Link, useLocation } from 'react-router-dom'
import Logo from './Logo'

const navLinks = [
  { label: 'Services', to: '/services' },
  { label: 'Products', to: '/products' },
  { label: 'Company', to: '/company' },
  { label: 'Contact', to: '/contact' },
]

function Navbar() {
  const location = useLocation()

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <Link to="/" className="navbar__brand">
          <Logo />
          <span>ESafe Tech</span>
        </Link>

        <nav className="navbar__nav" aria-label="Main navigation">
          {navLinks.map((link) => {
            const path = link.to.startsWith('/#') ? '/' : link.to
            const isActive = location.pathname === path

            return (
              <Link
                key={link.label}
                to={link.to}
                className={`navbar__link${isActive ? ' navbar__link--active' : ''}`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <div className="navbar__actions">
          <Link to="/contact" className="btn btn--primary navbar__cta">
            Get in touch
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Navbar

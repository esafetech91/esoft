import { Link, useLocation } from 'react-router-dom'

const footerLinks = [
  { label: 'Services', to: '/services' },
  { label: 'Products', to: '/products' },
  { label: 'Company', to: '/company' },
  { label: 'Contact', to: '/contact' },
]

function GlobeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.25" />
      <path d="M1.5 8h13M8 1.5c1.8 1.8 3 3.8 3 6.5s-1.2 4.7-3 6.5M8 1.5C6.2 3.3 5 5.3 5 8s1.2 4.7 3 6.5" stroke="currentColor" strokeWidth="1.25" />
    </svg>
  )
}

function Footer() {
  const location = useLocation()
  const showWebsite =
    location.pathname === '/contact' ||
    location.pathname === '/company' ||
    location.pathname === '/services' ||
    location.pathname === '/products'

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__copy">
          &copy; 2026 ESafe Tech Inc.
        </p>

        <nav className="footer__nav" aria-label="Footer navigation">
          {footerLinks.map((link) => (
            <Link key={link.label} to={link.to} className="footer__link">
              {link.label}
            </Link>
          ))}
        </nav>

        {showWebsite ? (
          <a
            href="https://www.esafetech.us"
            className="footer__website"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GlobeIcon />
            www.esafetech.us
          </a>
        ) : (
          <a href="mailto:contact@esafetech.us" className="footer__privacy">
            contact@esafetech.us
          </a>
        )}
      </div>
    </footer>
  )
}

export default Footer

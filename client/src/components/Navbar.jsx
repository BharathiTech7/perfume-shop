import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Collections', to: '/collections' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setMenuOpen(false), [location]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.4s ease',
        background: scrolled ? 'rgba(8,8,8,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(201,168,76,0.15)' : '1px solid transparent',
      }}
    >
      <nav
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '1.25rem 2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Link to="/" style={{ textDecoration: 'none' }}>
          <span
            className="gradient-text"
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.8rem',
              fontWeight: 600,
              letterSpacing: '0.15em',
            }}
          >
            ESSENZA
          </span>
        </Link>

        <ul
          style={{
            display: 'flex',
            listStyle: 'none',
            gap: '2.5rem',
            alignItems: 'center',
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                style={({ isActive }) => ({
                  textDecoration: 'none',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: isActive ? 'var(--color-gold)' : 'rgba(255,255,255,0.75)',
                  borderBottom: isActive ? '1px solid var(--color-gold)' : '1px solid transparent',
                  paddingBottom: '2px',
                  transition: 'color 0.3s, border-color 0.3s',
                })}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0.5rem',
            flexDirection: 'column',
            gap: '5px',
          }}
          className="hamburger-btn"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: 'block',
                width: '24px',
                height: '1.5px',
                background: 'var(--color-gold)',
                transition: 'all 0.3s ease',
                transform:
                  menuOpen
                    ? i === 0
                      ? 'translateY(6.5px) rotate(45deg)'
                      : i === 2
                      ? 'translateY(-6.5px) rotate(-45deg)'
                      : 'scaleX(0)'
                    : 'none',
              }}
            />
          ))}
        </button>
      </nav>

      <div
        style={{
          overflow: 'hidden',
          maxHeight: menuOpen ? '300px' : '0',
          transition: 'max-height 0.4s ease',
          background: 'rgba(8,8,8,0.97)',
          borderTop: menuOpen ? '1px solid rgba(201,168,76,0.15)' : 'none',
        }}
      >
        <ul style={{ listStyle: 'none', padding: '1rem 2rem 1.5rem' }}>
          {navLinks.map((link) => (
            <li key={link.to} style={{ borderBottom: '1px solid #1a1a1a', padding: '0.85rem 0' }}>
              <NavLink
                to={link.to}
                style={({ isActive }) => ({
                  textDecoration: 'none',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.8rem',
                  fontWeight: 500,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: isActive ? 'var(--color-gold)' : 'rgba(255,255,255,0.8)',
                })}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
}


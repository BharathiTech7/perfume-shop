import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Mail, MapPin, Phone } from 'lucide-react';

const socialLinks = [
  { label: 'Instagram', href: '#', icon: <Instagram size={18} /> },
  { label: 'Twitter',   href: '#', icon: <Twitter size={18} /> },
  { label: 'Facebook',  href: '#', icon: <Facebook size={18} /> },
];

const quickLinks = [
  { label: 'Collections', to: '/collections' },
  { label: 'Our Story', to: '/about' },
  { label: 'Contact Us', to: '/contact' },
  { label: 'Privacy Policy', to: '#' },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: '#000000',
        borderTop: '2px solid rgba(201,168,76,0.25)',
        padding: '6rem 2rem 3rem',
        boxShadow: '0 -10px 40px rgba(0,0,0,0.8)'
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '4rem',
        }}
      >
        <div style={{ flex: 1.5 }}>
          <h2
            className="gradient-text"
            style={{ fontFamily: 'var(--font-serif)', fontSize: '2.2rem', letterSpacing: '0.15em', marginBottom: '1.5rem' }}
          >
            ESSENZA
          </h2>
          <p style={{ color: 'var(--color-gray)', fontSize: '0.95rem', lineHeight: 1.8, maxWidth: '320px', marginBottom: '2rem' }}>
            The pinnacle of Indian luxury perfumery. We craft olfactory masterpieces that celebrate the rich heritage and natural wonders of the subcontinent.
          </p>
          <div style={{ display: 'flex', gap: '1.25rem' }}>
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                style={{
                  width: '42px', height: '42px',
                  border: '1px solid rgba(201,168,76,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--color-gold)',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  borderRadius: '50%'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-gold)';
                  e.currentTarget.style.background = 'rgba(201,168,76,0.1)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(201,168,76,0.2)';
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="section-subtitle" style={{ marginBottom: '2rem', color: 'var(--color-white)' }}>Exploration</h4>
          <ul style={{ listStyle: 'none' }}>
            {quickLinks.map((l) => (
              <li key={l.label} style={{ marginBottom: '1rem' }}>
                <Link
                  to={l.to}
                  style={{ color: 'var(--color-gray)', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.3s', display: 'block' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-gold)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-gray)')}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="section-subtitle" style={{ marginBottom: '2rem', color: 'var(--color-white)' }}>Get in Touch</h4>
          <ul style={{ listStyle: 'none', color: 'var(--color-gray)', fontSize: '0.9rem', lineHeight: 2.2 }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
              <MapPin size={16} color="var(--color-gold)" /> Heritage Block, Mumbai, India
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
              <Phone size={16} color="var(--color-gold)" /> +91 22 4567 8900
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Mail size={16} color="var(--color-gold)" /> concierge@essenza.in
            </li>
          </ul>
        </div>
      </div>

      <div
        style={{
          maxWidth: '1280px',
          margin: '5rem auto 0',
          paddingTop: '2rem',
          borderTop: '1px solid rgba(255,255,255,0.05)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
        }}
      >
        <p style={{ color: '#555', fontSize: '0.8rem', letterSpacing: '0.05em' }}>
          © {new Date().getFullYear()} Essenza Luxury. All rights reserved.
        </p>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <span style={{ color: '#333', fontSize: '0.7rem', letterSpacing: '0.2em' }}>ROYAL</span>
          <span style={{ color: '#333', fontSize: '0.7rem', letterSpacing: '0.2em' }}>HERITAGE</span>
          <span style={{ color: '#333', fontSize: '0.7rem', letterSpacing: '0.2em' }}>PURE</span>
        </div>
      </div>
    </footer>
  );
}



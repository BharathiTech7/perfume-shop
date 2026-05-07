import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldCheck, History, Sparkles, Globe, ArrowRight } from 'lucide-react';
import api from '../api/axios';
import ProductCard from '../components/ProductCard';
import LoadingSpinner from '../components/LoadingSpinner';

function HeroBanner() {
  return (
    <section style={{ position: 'relative', height: '100vh', minHeight: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(https://images.unsplash.com/photo-1594035910387-fea47794261f?w=1600&q=80)', backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(0.4)' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.8) 100%)' }} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '0 1.5rem', maxWidth: '900px' }}
      >
        <p className="section-subtitle" style={{ marginBottom: '1.5rem', color: 'var(--color-gold-light)' }}>The Sovereign of Scents</p>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(3.5rem,10vw,7rem)', fontWeight: 300, lineHeight: 0.95, letterSpacing: '-0.02em', color: 'var(--color-white)', marginBottom: '2rem' }}>
          Royal Indian <br />
          <em className="gradient-text" style={{ fontStyle: 'italic' }}>Opulence</em>
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.15rem', lineHeight: 1.8, margin: '0 auto 3rem', fontFamily: 'var(--font-sans)', maxWidth: '600px' }}>
          Embark on an olfactory journey through the heritage of India. From Mysore sandalwood to Kannauj roses, discover the soul of luxury.
        </p>
        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/collections" className="btn-gold" id="hero-shop-btn" style={{ padding: '1rem 3rem' }}>Explore Collections <ArrowRight size={18} /></Link>
          <Link to="/about" className="btn-ghost" id="hero-story-btn" style={{ padding: '1rem 3rem' }}>Our Heritage</Link>
        </div>
      </motion.div>
    </section>
  );
}

function BrandStrip() {
  const items = [
    { icon: <ShieldCheck size={32} strokeWidth={1.2} />, label: 'Royal Purity', desc: '100% Authentic Ingredients' },
    { icon: <History size={32} strokeWidth={1.2} />, label: 'Ancient Heritage', desc: 'Inspired by Vedic Traditions' },
    { icon: <Sparkles size={32} strokeWidth={1.2} />, label: 'Hand-Poured', desc: 'Crafted in Small Batches' },
    { icon: <Globe size={32} strokeWidth={1.2} />, label: 'Global Luxury', desc: 'India\'s Finest to the World' },
  ];
  return (
    <section style={{ padding: '5rem 2rem', background: 'var(--color-surface)', borderTop: '1px solid rgba(201,168,76,0.1)', borderBottom: '1px solid rgba(201,168,76,0.1)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))', gap: '3rem', textAlign: 'center' }}>
        {items.map((item, idx) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <div style={{ color: 'var(--color-gold)', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>{item.icon}</div>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', fontWeight: 400, color: 'var(--color-white)', marginBottom: '0.5rem' }}>{item.label}</h3>
            <p style={{ color: 'var(--color-gray)', fontSize: '0.9rem', maxWidth: '200px', margin: '0 auto' }}>{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function OurStory() {
  return (
    <section style={{ padding: '8rem 2rem', background: '#050505' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src="https://images.unsplash.com/photo-1590736704728-f4730bb30770?w=800&q=80"
            alt="Indian Heritage"
            style={{ width: '100%', height: '600px', objectFit: 'cover', border: '1px solid rgba(201,168,76,0.2)' }}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="section-subtitle" style={{ marginBottom: '1rem' }}>Our Heritage</p>
          <h2 className="section-title" style={{ marginBottom: '2rem' }}>The Soul of <br /><em className="gradient-text">Bharat's Aromas</em></h2>
          <p style={{ color: 'var(--color-gray)', lineHeight: 2, fontSize: '1.1rem', marginBottom: '2.5rem' }}>
            For centuries, the Indian subcontinent has been the cradle of fine perfumery. From the sacred sandalwood forests of Mysore to the legendary rose fields of Kannauj, we source only the most exquisite ingredients to create fragrances that are both timeless and modern.
          </p>
          <p style={{ color: 'var(--color-gray)', lineHeight: 2, fontSize: '1.1rem', marginBottom: '3rem' }}>
            Essenza is a tribute to this rich legacy. Each bottle is a masterpiece, hand-poured and infused with the spirit of Indian craftsmanship, designed for the discerning individual who seeks true luxury.
          </p>
          <Link to="/about" className="btn-gold">Discover Our Craft</Link>
        </motion.div>
      </div>
      <style>{`
        @media (max-width: 992px) {
          section[style*="padding: 8rem 2rem"] > div { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  );
}

function FeaturedProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    api.get('/products').then(res => setProducts(res.data.data.slice(0, 6))).catch(() => setError('Failed to load products')).finally(() => setLoading(false));
  }, []);

  return (
    <section style={{ padding: '8rem 2rem', maxWidth: '1280px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
        <p className="section-subtitle">Exquisite Selection</p>
        <div className="section-divider" />
        <h2 className="section-title" style={{ marginTop: '1rem' }}>Signature <em className="gradient-text" style={{ fontStyle: 'italic' }}>Masterpieces</em></h2>
      </div>
      {loading ? <LoadingSpinner message="Curating fragrances…" /> : error ? (
        <p style={{ textAlign: 'center', color: '#c0392b' }}>{error}</p>
      ) : (
        <>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))', gap: '2.5rem' }}>
            {products.map((p, idx) => (
              <motion.div
                key={p._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <ProductCard product={p} />
              </motion.div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '5rem' }}>
            <Link to="/collections" className="btn-ghost" id="view-all-btn">View Full Collection <ArrowRight size={16} /></Link>
          </div>
        </>
      )}
    </section>
  );
}

export default function HomePage() {
  return (
    <main>
      <HeroBanner />
      <BrandStrip />
      <OurStory />
      <FeaturedProducts />
    </main>
  );
}



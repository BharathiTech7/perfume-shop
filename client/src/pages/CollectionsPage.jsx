import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import api from '../api/axios';
import ProductCard from '../components/ProductCard';
import LoadingSpinner from '../components/LoadingSpinner';

const CATEGORIES = ['All', 'Oriental', 'Floral', 'Woody', 'Fresh'];

export default function CollectionsPage() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const gridRef = useRef(null);

  useEffect(() => {
    api.get('/products')
      .then(res => { setProducts(res.data.data); setFiltered(res.data.data); })
      .catch(() => setError('Failed to load products'))
      .finally(() => setLoading(false));
  }, []);

  const filterByCategory = (cat) => {
    setActiveCategory(cat);
    setFiltered(cat === 'All' ? products : products.filter(p => p.category === cat));
    
    if (gridRef.current) {
      const yOffset = -150;
      const y = gridRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <main style={{ paddingTop: '0', minHeight: '100vh', background: '#080808' }}>
      <div style={{ position: 'relative', height: '60vh', minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(https://www.skinn.in/on/demandware.static/-/Sites-Skinn-Library/default/dw94d765c4/images/homepage/giftImg.png)', backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(0.5)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 0%, #080808 100%)' }} />
        
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '0 2rem' }}>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-subtitle"
            style={{ color: 'var(--color-gold-light)' }}
          >
            Curated Heritage
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="section-title"
            style={{ marginTop: '1.5rem', fontSize: 'clamp(3.5rem, 8vw, 6rem)', color: 'white' }}
          >
            The <em className="gradient-text">Royal Collections</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            style={{ color: 'rgba(255,255,255,0.7)', marginTop: '2rem', fontSize: '1.1rem', maxWidth: '600px', margin: '2rem auto 0', lineHeight: 1.8 }}
          >
            Discover a sensory archive where ancient Indian traditions meet modern luxury. Each collection is a tribute to the subcontinent's natural wonders.
          </motion.p>
        </div>
      </div>

      <div style={{ padding: '3rem 2rem', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem', position: 'sticky', top: '70px', zIndex: 10, background: 'rgba(8,8,8,0.8)', backdropFilter: 'blur(10px)' }}>
        {CATEGORIES.map((cat, idx) => (
          <motion.button
            key={cat}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.05 }}
            onClick={() => filterByCategory(cat)}
            style={{
              padding: '0.75rem 2rem',
              border: activeCategory === cat ? '1px solid var(--color-gold)' : '1px solid rgba(255,255,255,0.1)',
              background: activeCategory === cat ? 'rgba(201,168,76,0.1)' : 'transparent',
              color: activeCategory === cat ? 'var(--color-gold)' : 'var(--color-gray)',
              fontSize: '0.75rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'all 0.3s',
              fontWeight: 500
            }}
            whileHover={{ scale: 1.05, borderColor: 'var(--color-gold)' }}
            whileTap={{ scale: 0.95 }}
          >
            {cat}
          </motion.button>
        ))}
      </div>

      <div ref={gridRef} style={{ padding: '6rem 2rem', maxWidth: '1400px', margin: '0 auto' }}>
        {loading ? (
          <LoadingSpinner message="Unveiling the archive…" />
        ) : error ? (
          <p style={{ textAlign: 'center', color: '#c0392b' }}>{error}</p>
        ) : (
          <>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{ color: 'var(--color-gray)', fontSize: '0.8rem', letterSpacing: '0.2em', marginBottom: '3rem', textTransform: 'uppercase' }}
            >
              Found {filtered.length} Masterpiece{filtered.length !== 1 ? 's' : ''}
            </motion.p>
            <motion.div
              layout
              style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(320px,1fr))', gap: '3rem' }}
            >
              <AnimatePresence>
                {filtered.map(p => (
                  <motion.div
                    key={p._id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                  >
                    <ProductCard product={p} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
            {filtered.length === 0 && (
              <p style={{ textAlign: 'center', color: 'var(--color-gray)', padding: '8rem 0', fontSize: '1.2rem', fontStyle: 'italic' }}>No fragrances found in this collection.</p>
            )}
          </>
        )}
      </div>
    </main>
  );
}



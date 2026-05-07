import { Link } from 'react-router-dom';
import { Leaf, Sparkles, Gem, ScrollText } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <main style={{ paddingTop: '80px', minHeight: '100vh', background: '#080808' }}>
      <div style={{ position: 'relative', height: '60vh', minHeight: '450px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=1400&q=80)', backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(0.3)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(8,8,8,0.3), #080808)' }} />
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '0 2rem' }}>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="section-subtitle">Since 1947 · India</motion.p>
          <div className="section-divider" />
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="section-title" style={{ marginTop: '1.5rem', fontSize: 'clamp(3rem, 6vw, 5rem)' }}>
            The <em className="gradient-text">Essenza Legacy</em>
          </motion.h1>
        </div>
      </div>

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '6rem 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center', marginBottom: '8rem' }}>
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="section-subtitle" style={{ marginBottom: '1.25rem' }}>Our Heritage</p>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', fontWeight: 300, lineHeight: 1.2, marginBottom: '2rem' }}>
              From the Rose Fields of Kannauj to Global Opulence
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 2, fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              Essenza was born from a singular vision: to preserve the ancient art of Indian perfumery while redefining it for the modern world. Our story began in the legendary town of Kannauj, the perfume capital of India, where our founders mastered the secrets of traditional steam distillation.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 2, fontSize: '1.1rem' }}>
              Today, we blend those centuries-old techniques with contemporary artistry, sourcing the rarest botanicals from across the subcontinent to create fragrances that are not just scents, but timeless masterpieces of liquid gold.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} style={{ aspectRatio: '4/5', overflow: 'hidden', border: '1px solid rgba(201,168,76,0.1)', background: 'var(--color-surface)' }}>
            <img src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=700&q=80" alt="Traditional Indian Perfumery" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} />
          </motion.div>
        </div>

        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p className="section-subtitle">The Pillars of Essenza</p>
          <div className="section-divider" />
          <h2 className="section-title" style={{ marginTop: '1.5rem' }}>Our Royal Values</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginBottom: '6rem' }}>
          {[
            { title: 'Pure Botanicals', desc: 'We use only 100% natural extracts, rejecting synthetic shortcuts for true olfactory depth.', icon: <Leaf size={32} /> },
            { title: 'Master Craft', desc: 'Every bottle is hand-poured in small batches, ensuring the highest standards of luxury.', icon: <Sparkles size={32} /> },
            { title: 'Rare Sourcing', desc: 'We hunt for the most elusive ingredients, from Himalayan musk to Malabar pepper.', icon: <Gem size={32} /> },
            { title: 'Eternal Legacy', desc: 'Our scents are designed to linger in memory, much like the timeless tales of royalty.', icon: <ScrollText size={32} /> },
          ].map((v, idx) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              style={{ padding: '3rem 2rem', border: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.02)', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            >
              <div style={{ color: 'var(--color-gold)', marginBottom: '1.5rem' }}>{v.icon}</div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', fontWeight: 400, color: 'var(--color-white)', marginBottom: '1rem' }}>{v.title}</h3>
              <p style={{ color: 'var(--color-gray)', fontSize: '0.9rem', lineHeight: 1.8 }}>{v.desc}</p>
            </motion.div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link to="/collections" className="btn-gold" style={{ padding: '1.25rem 3rem' }}>Experience the Essence</Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 1200px) {
          div[style*="grid-template-columns: repeat(4, 1fr)"] { grid-template-columns: repeat(2, 1fr) !important; gap: 2rem !important; }
        }
        @media (max-width: 768px) {
          div[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; gap: 3rem !important; }
          div[style*="grid-template-columns: repeat(4, 1fr)"], div[style*="grid-template-columns: repeat(2, 1fr)"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}



import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import StarRating from './StarRating';

export default function ProductCard({ product }) {
  const { _id, name, shortDescription, price, rating, category } = product;

  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <Link
        to={`/product/${_id}`}
        style={{ textDecoration: 'none', display: 'block' }}
        id={`product-card-${_id}`}
      >
        <article
          className="card"
          style={{
            overflow: 'hidden',
            cursor: 'pointer',
            height: '100%',
            background: 'var(--color-surface)',
            border: '1px solid rgba(255,255,255,0.05)',
            position: 'relative'
          }}
        >
          <div
            style={{
              position: 'relative',
              aspectRatio: '1 / 1',
              overflow: 'hidden',
              background: 'var(--color-surface-2)',
            }}
          >
            <span
              style={{
                position: 'absolute',
                top: '1rem',
                left: '1rem',
                zIndex: 2,
                padding: '0.35rem 0.85rem',
                background: 'rgba(0,0,0,0.85)',
                border: '1px solid var(--color-gold)',
                color: 'var(--color-gold)',
                fontSize: '0.6rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                fontWeight: 600,
              }}
            >
              {category}
            </span>

            <img
              src={product.images[0]}
              alt={name}
              className="img-zoom"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              loading="lazy"
            />

            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              style={{
                position: 'absolute',
                inset: 0,
                background: 'rgba(0,0,0,0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'opacity 0.3s'
              }}
            >
              <span className="btn-gold" style={{ padding: '0.6rem 1.2rem', fontSize: '0.7rem' }}>View Essence</span>
            </motion.div>
          </div>

          <div style={{ padding: '1.5rem', textAlign: 'center' }}>
            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.4rem',
                fontWeight: 400,
                letterSpacing: '0.02em',
                color: 'var(--color-white)',
                marginBottom: '0.5rem',
              }}
            >
              {name}
            </h3>
            <p
              style={{
                color: 'var(--color-gray)',
                fontSize: '0.85rem',
                lineHeight: 1.6,
                marginBottom: '1.25rem',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                height: '2.8rem'
              }}
            >
              {shortDescription}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
              <StarRating rating={rating} size="sm" />
              <span
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.5rem',
                  color: 'var(--color-gold)',
                  letterSpacing: '0.02em',
                }}
              >
                ₹{price.toLocaleString('en-IN')}
              </span>
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}



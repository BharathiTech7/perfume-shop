import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Share2, ArrowLeft, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';
import api from '../api/axios';
import StarRating from '../components/StarRating';
import LoadingSpinner from '../components/LoadingSpinner';
import Toast from '../components/Toast';

function ReviewForm({ productId, onSubmit }) {
  const [form, setForm] = useState({ author: '', rating: 5, comment: '' });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await api.post(`/products/${productId}/reviews`, form);
      onSubmit();
      setForm({ author: '', rating: 5, comment: '' });
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
        <div>
          <label style={{ display: 'block', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '0.75rem' }}>
            Your Name
          </label>
          <input id="review-author" className="input-luxury" value={form.author} onChange={e => setForm({ ...form, author: e.target.value })} placeholder="e.g. Vikram Malhotra" required />
        </div>
        <div>
          <label style={{ display: 'block', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '0.75rem' }}>
            Rating
          </label>
          <select
            id="review-rating"
            className="input-luxury"
            value={form.rating}
            onChange={e => setForm({ ...form, rating: Number(e.target.value) })}
            style={{ cursor: 'pointer', color: 'var(--color-black)', background: 'var(--color-gold)' }}
          >
            {[5, 4, 3, 2, 1].map(r => <option key={r} value={r} style={{ background: 'var(--color-white)', color: 'var(--color-black)' }}>{r} Star{r > 1 ? 's' : ''}</option>)}
          </select>
        </div>
      </div>
      <div>
        <label style={{ display: 'block', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '0.75rem' }}>
          Your Review
        </label>
        <textarea id="review-comment" className="input-luxury" value={form.comment} onChange={e => setForm({ ...form, comment: e.target.value })} placeholder="Describe your experience with this royal essence…" rows={4} required style={{ resize: 'vertical' }} />
      </div>
      <button id="submit-review-btn" type="submit" className="btn-gold" disabled={submitting} style={{ alignSelf: 'flex-start' }}>
        {submitting ? 'Submitting…' : 'Share Review'}
      </button>
    </form>
  );
}

export default function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeImg, setActiveImg] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [toast, setToast] = useState(null);

  const fetchProduct = async () => {
    try {
      const [pRes, rRes] = await Promise.all([
        api.get(`/products/${id}`),
        api.get(`/products/${id}/reviews`),
      ]);
      setProduct(pRes.data.data);
      setReviews(rRes.data.data);
      setSelectedSize(pRes.data.data.sizes?.[1] || pRes.data.data.sizes?.[0]);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchProduct(); window.scrollTo(0, 0); }, [id]);

  const handleReviewSubmit = () => {
    fetchProduct();
    setToast({ message: 'Your review has been added to our legacy.', type: 'success' });
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title: product.name, text: product.shortDescription, url: window.location.href });
      } catch { }
    } else {
      navigator.clipboard.writeText(window.location.href);
      setToast({ message: 'Legacy link copied to clipboard!', type: 'success' });
    }
  };

  if (loading) return <div style={{ paddingTop: '120px' }}><LoadingSpinner message="Unveiling the essence…" /></div>;
  if (!product) return <div style={{ paddingTop: '120px', textAlign: 'center', padding: '8rem 2rem' }}><h2>Fragrance not found</h2><Link to="/collections" className="btn-ghost" style={{ marginTop: '2rem', display: 'inline-flex' }}>Return to Collections</Link></div>;

  return (
    <main style={{ paddingTop: '100px', minHeight: '100vh', background: '#080808' }}>
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '4rem 2rem' }}>
        <div style={{ marginBottom: '3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link to="/collections" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-gray)', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.3s' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--color-gold)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--color-gray)'}>
            <ArrowLeft size={18} /> Back to Collections
          </Link>
          <button onClick={handleShare} style={{ background: 'none', border: 'none', color: 'var(--color-gold)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
            <Share2 size={18} /> Share
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'start' }}>
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <div style={{ aspectRatio: '1/1', overflow: 'hidden', background: 'var(--color-surface)', marginBottom: '1.5rem', border: '1px solid rgba(255,255,255,0.05)' }}>
              <img
                src={product.images[activeImg]}
                alt={product.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  style={{
                    flex: 1,
                    aspectRatio: '1',
                    overflow: 'hidden',
                    border: i === activeImg ? '2px solid var(--color-gold)' : '1px solid rgba(255,255,255,0.1)',
                    background: 'var(--color-surface)',
                    cursor: 'pointer',
                    padding: 0,
                    transition: 'all 0.3s'
                  }}
                >
                  <img src={img} alt={`View ${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: i === activeImg ? 1 : 0.5 }} />
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <p className="section-subtitle" style={{ marginBottom: '1rem' }}>{product.category}</p>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem,5vw,4rem)', fontWeight: 300, letterSpacing: '0.02em', marginBottom: '1.5rem', lineHeight: 1.1 }}>{product.name}</h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
              <StarRating rating={product.rating} size="md" />
              <span style={{ color: 'var(--color-gray)', fontSize: '0.9rem' }}>{reviews.length} Verified Reviews</span>
            </div>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: '3rem', color: 'var(--color-gold)', marginBottom: '2rem', letterSpacing: '0.01em' }}>₹{product.price.toLocaleString('en-IN')}</p>
            <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 2, fontSize: '1.1rem', marginBottom: '2.5rem', borderLeft: '3px solid var(--color-gold)', paddingLeft: '1.5rem' }}>{product.description}</p>

            <div style={{ marginBottom: '2.5rem' }}>
              <p style={{ fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '1rem' }}>Select Presentation</p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                {product.sizes.map(size => (
                  <button key={size} onClick={() => setSelectedSize(size)} style={{ padding: '0.75rem 2rem', border: selectedSize === size ? '1px solid var(--color-gold)' : '1px solid rgba(255,255,255,0.1)', background: selectedSize === size ? 'rgba(201,168,76,0.1)' : 'transparent', color: selectedSize === size ? 'var(--color-gold)' : 'var(--color-gray)', fontSize: '0.85rem', letterSpacing: '0.1em', cursor: 'pointer', transition: 'all 0.3s' }}>
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
              <button id="add-to-cart-btn" className="btn-gold" onClick={() => setToast({ message: `${product.name} (${selectedSize}) added to your collection.`, type: 'success' })} style={{ flex: 1, padding: '1.25rem' }}>
                <ShoppingBag size={18} /> Add to Collection
              </button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '2rem' }}>
              <div>
                <p style={{ color: 'var(--color-white)', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.5rem', letterSpacing: '0.1em' }}>LONGEVITY</p>
                <p style={{ color: 'var(--color-gray)', fontSize: '0.85rem' }}>12+ Hours of Essence</p>
              </div>
              <div>
                <p style={{ color: 'var(--color-white)', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.5rem', letterSpacing: '0.1em' }}>SILLAGE</p>
                <p style={{ color: 'var(--color-gray)', fontSize: '0.85rem' }}>Majestic & Commanding</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div style={{ marginTop: '8rem', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '6rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem' }}>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', fontWeight: 300, marginBottom: '3rem' }}>
                Client <em className="gradient-text">Reflections</em>
              </h2>
              {reviews.length === 0 ? (
                <p style={{ color: 'var(--color-gray)', fontStyle: 'italic' }}>Be the first to share your experience with this royal essence.</p>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                  {reviews.map(r => (
                    <div key={r._id} style={{ padding: '2rem', border: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.02)' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                        <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', color: 'var(--color-white)' }}>{r.author}</span>
                        <span style={{ color: 'var(--color-gray)', fontSize: '0.8rem' }}>{new Date(r.createdAt).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                      </div>
                      <StarRating rating={r.rating} size="sm" />
                      <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1rem', lineHeight: 1.8, marginTop: '1.25rem' }}>{r.comment}</p>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', fontWeight: 300, marginBottom: '3rem' }}>Add to the Legacy</h2>
              <ReviewForm productId={id} onSubmit={handleReviewSubmit} />
            </motion.div>
          </div>
        </div>

        <style>{`
          @media (max-width: 992px) {
            div[style*="grid-template-columns: 1fr 1fr"] {
              grid-template-columns: 1fr !important;
              gap: 4rem !important;
            }
          }
        `}</style>
      </div>
    </main>
  );
}



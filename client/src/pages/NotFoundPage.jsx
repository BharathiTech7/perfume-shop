import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <main style={{ paddingTop:'80px', minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center', textAlign:'center', padding:'2rem' }}>
      <div>
        <p className="shimmer-text" style={{ fontFamily:'var(--font-serif)', fontSize:'8rem', fontWeight:300, lineHeight:1, marginBottom:'1rem' }}>404</p>
        <h1 style={{ fontFamily:'var(--font-serif)', fontSize:'2rem', fontWeight:300, marginBottom:'1rem', color:'var(--color-white)' }}>
          The Scent Has Faded
        </h1>
        <p style={{ color:'var(--color-gray)', fontSize:'0.9rem', maxWidth:'360px', margin:'0 auto 2.5rem', lineHeight:1.8 }}>
          The page you're looking for seems to have drifted away like a trail of perfume on the wind.
        </p>
        <Link to="/" className="btn-gold" id="go-home-btn">Return Home <span>→</span></Link>
      </div>
    </main>
  );
}

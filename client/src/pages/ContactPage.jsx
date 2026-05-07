import { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import Toast from '../components/Toast';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [toast, setToast] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise(r => setTimeout(r, 1000));
    setToast({ message: 'Your message has been added to our records. We\'ll be in touch shortly.', type: 'success' });
    setForm({ name: '', email: '', subject: '', message: '' });
    setSubmitting(false);
  };

  return (
    <main style={{ paddingTop: '80px', minHeight: '100vh', background: '#080808' }}>
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}

      <div style={{ padding: '8rem 2rem 5rem', textAlign: 'center', background: 'radial-gradient(circle at top, #111 0%, #080808 100%)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <p className="section-subtitle">Get In Touch</p>
        <div className="section-divider" />
        <h1 className="section-title" style={{ marginTop: '1.5rem' }}>
          Contact <em className="gradient-text">Our Concierge</em>
        </h1>
        <p style={{ color: 'var(--color-gray)', marginTop: '1.5rem', fontSize: '1rem', maxWidth: '500px', margin: '1.5rem auto 0', lineHeight: 1.8 }}>
          Whether you seek a bespoke fragrance consultation or have a question about our heritage collections — our team is here to assist.
        </p>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '6rem 2rem', display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '6rem', alignItems: 'start' }}>
        <div>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', fontWeight: 300, marginBottom: '2.5rem' }}>Our Flagship Boutique</h2>

          <div style={{ marginBottom: '3rem', paddingBottom: '3rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--color-gold)', marginBottom: '1.25rem' }}>Mumbai Heritage Block</h3>
            <ul style={{ listStyle: 'none', color: 'var(--color-gray)', fontSize: '1rem', lineHeight: 2.2 }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '0.75rem' }}>
                <MapPin size={18} color="var(--color-gold)" /> Heritage Block, Marine Drive, Mumbai, India
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '0.75rem' }}>
                <Phone size={18} color="var(--color-gold)" /> +91 22 4567 8900
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                <Mail size={18} color="var(--color-gold)" /> concierge@essenza.in
              </li>
            </ul>
          </div>

          <div>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', color: 'var(--color-white)', marginBottom: '1.25rem', letterSpacing: '0.05em' }}>Opening Hours</h3>
            <p style={{ color: 'var(--color-gray)', fontSize: '1rem', lineHeight: 2 }}>
              Monday – Saturday: 10:00 AM – 8:00 PM<br />
              Sunday: 11:00 AM – 6:00 PM
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', background: 'rgba(255,255,255,0.02)', padding: '3rem', border: '1px solid rgba(255,255,255,0.05)' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', fontWeight: 300, marginBottom: '1rem' }}>Send a Message</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '0.75rem' }}>Full Name</label>
              <input id="contact-name" className="input-luxury" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="e.g. Rahul Sharma" required />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '0.75rem' }}>Email</label>
              <input id="contact-email" className="input-luxury" type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="you@email.com" required />
            </div>
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '0.75rem' }}>Subject</label>
            <input id="contact-subject" className="input-luxury" value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })} placeholder="e.g. Private Consultation" required />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '0.75rem' }}>Message</label>
            <textarea id="contact-message" className="input-luxury" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Tell us how we can assist you…" rows={6} required style={{ resize: 'vertical' }} />
          </div>
          <button id="contact-submit-btn" type="submit" className="btn-gold" disabled={submitting} style={{ alignSelf: 'flex-start', padding: '1rem 3rem' }}>
            {submitting ? 'Sending…' : 'Send Message'} {!submitting && <Send size={16} />}
          </button>
        </form>
      </div>

      <style>{`
        @media (max-width: 992px) {
          div[style*="grid-template-columns: 1fr 1.5fr"] { grid-template-columns: 1fr !important; gap: 4rem !important; }
          form { padding: 2rem !important; }
          form > div[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}



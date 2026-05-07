/**
 * StarRating — renders filled/empty stars
 * @param {number} rating  - 0 to 5
 * @param {string} size    - 'sm' | 'md' | 'lg'
 */
export default function StarRating({ rating = 0, size = 'md' }) {
  const sizes = { sm: '0.75rem', md: '1rem', lg: '1.25rem' };
  const fontSize = sizes[size] || sizes.md;

  return (
    <div style={{ display: 'flex', gap: '2px', alignItems: 'center' }}>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={star <= Math.round(rating) ? 'star-filled' : 'star-empty'}
          style={{ fontSize }}
          aria-hidden="true"
        >
          ★
        </span>
      ))}
      {rating > 0 && (
        <span
          style={{
            color: 'var(--color-gray)',
            fontSize: '0.7rem',
            marginLeft: '4px',
            fontFamily: 'var(--font-sans)',
          }}
        >
          ({Number(rating).toFixed(1)})
        </span>
      )}
    </div>
  );
}

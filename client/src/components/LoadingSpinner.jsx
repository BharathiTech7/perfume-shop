/**
 * LoadingSpinner — full screen luxury centered spinner
 */
export default function LoadingSpinner({ message = 'Loading...' }) {
  return (
    <div
      style={{
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1.5rem',
      }}
    >
      {/* Animated ring */}
      <div style={{ position: 'relative', width: '60px', height: '60px' }}>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            border: '1px solid rgba(201,168,76,0.15)',
            borderRadius: '50%',
          }}
        />
        <div
          className="spinner"
          style={{ position: 'absolute', inset: '8px', borderWidth: '2px' }}
        />
      </div>
      <p
        style={{
          color: 'var(--color-gray)',
          fontSize: '0.75rem',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          fontFamily: 'var(--font-sans)',
        }}
      >
        {message}
      </p>
    </div>
  );
}

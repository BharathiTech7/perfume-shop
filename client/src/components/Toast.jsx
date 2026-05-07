import { useEffect, useState } from 'react';

/**
 * Toast — shows a brief notification message
 * @param {string}   message    - Text to display
 * @param {'success'|'error'} type - Controls border colour
 * @param {function} onClose    - Called when toast hides
 */
export default function Toast({ message, type = 'success', onClose }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => {
      setVisible(false);
      onClose?.();
    }, 3000);
    return () => clearTimeout(t);
  }, [onClose]);

  if (!visible) return null;

  const borderColor = type === 'error' ? '#c0392b' : 'var(--color-gold)';

  return (
    <div
      className="toast"
      role="alert"
      style={{ borderLeftColor: borderColor }}
    >
      <span style={{ marginRight: '0.5rem' }}>
        {type === 'error' ? '✗' : '✓'}
      </span>
      {message}
    </div>
  );
}

import { useState, useEffect } from 'react';
import './VariationNav.css';

const variations = [
  { id: 'v0', label: 'V0 · Original', hash: '#v0' },
  { id: 'v4', label: 'V4 · Split Decision', hash: '#v4' },
  { id: 'v5', label: 'V5 · Minimal', hash: '#v5' },
  { id: 'v6', label: 'V6 · Progress', hash: '#v6' },
  { id: 'v7', label: 'V7 · Widget', hash: '#v7' },
];

export default function VariationNav() {
  const [active, setActive] = useState(() => {
    const hash = window.location.hash.replace('#', '') || 'v4';
    return variations.find((v) => v.id === hash) ? hash : 'v4';
  });

  useEffect(() => {
    const handler = () => {
      const hash = window.location.hash.replace('#', '') || 'v4';
      if (variations.find((v) => v.id === hash)) setActive(hash);
    };
    window.addEventListener('hashchange', handler);
    return () => window.removeEventListener('hashchange', handler);
  }, []);

  const switchTo = (id: string) => {
    window.location.hash = id;
    setActive(id);
  };

  return (
    <nav className="var-nav">
      <span className="var-nav-label">Hero Variations</span>
      <div className="var-nav-pills">
        {variations.map((v) => (
          <button
            key={v.id}
            className={`var-nav-pill ${active === v.id ? 'active' : ''}`}
            onClick={() => switchTo(v.id)}
          >
            {v.label}
          </button>
        ))}
      </div>
    </nav>
  );
}

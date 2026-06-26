import './HeroV11.css';

export default function HeroV11() {
  return (
    <section className="action-center">
      <div className="priorities">

        <div className="priorities-header">
          <h2 className="priorities-title">Today's Priorities</h2>
          <span className="priorities-count">2 items</span>
        </div>

        {/* ── Item 1 ──────────────────────────────────────── */}
        <div className="priority-item">
          <div className="priority-icon priority-icon--urgent">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M9 2L3 5.5V9.5C3 13.6 5.9 17.4 9 18.5C12.1 17.4 15 13.6 15 9.5V5.5L9 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="priority-body">
            <div className="priority-top">
              <h3 className="priority-title">Checking Short</h3>
              <span className="priority-amount priority-amount--negative">$542</span>
            </div>
            <p className="priority-desc">
              Your checking balance won't cover the next 3 bills due within 5 days.
            </p>
            <div className="priority-actions">
              <button className="btn btn-primary priority-cta">Transfer Funds</button>
              <button className="priority-link">Review all upcoming bills</button>
            </div>
          </div>
        </div>

        <div className="priority-divider" />

        {/* ── Item 2 ──────────────────────────────────────── */}
        <div className="priority-item">
          <div className="priority-icon priority-icon--growth">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M3 13L7 8.5L10.1 11.2L15 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 5H15V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="priority-body">
            <div className="priority-top">
              <h3 className="priority-title">Idle Cash</h3>
              <span className="priority-amount priority-amount--positive">$18,420</span>
            </div>
            <p className="priority-desc">
              Available to invest in a diversified portfolio with an estimated +$1,245 annual growth.
            </p>
            <div className="priority-actions">
              <button className="btn btn-primary priority-cta">Invest Now</button>
              <button className="priority-link">How was this calculated?</button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

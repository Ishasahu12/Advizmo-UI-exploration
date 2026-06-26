import './ActionCenter.css';

export default function ActionCenter() {
  return (
    <section className="action-center">
      <div className="ac-split">
        {/* ── Primary: Checking Short ──────────────────────── */}
        <article className="ac-panel ac-panel--primary">
          <div className="ac-panel-head">
            <div className="ac-panel-head-left">
              <span className="ac-badge ac-badge--urgent">Action Required</span>
            </div>
            <span className="ac-panel-confidence">5 days until due</span>
          </div>

          <h2 className="ac-panel-title">Checking Short</h2>
          <p className="ac-panel-amount ac-panel-amount--negative">$542 Short</p>
          <p className="ac-panel-desc">
            You may not have enough funds to cover bills due within the next 5 days.
          </p>

          {/* ── Visual Rows ─────────────────────────────── */}
          <div className="ac-rows">
            <div className="ac-row">
              <span className="ac-row-label">Bills Due</span>
              <span className="ac-row-value">$1,820</span>
            </div>
            <div className="ac-row">
              <span className="ac-row-label">Current Checking</span>
              <span className="ac-row-value">$1,278</span>
            </div>
            <div className="ac-row">
              <span className="ac-row-label">Amount Required</span>
              <span className="ac-row-value">$1,820</span>
            </div>
            <div className="ac-row ac-row--highlight">
              <span className="ac-row-label">Missing Amount</span>
              <span className="ac-row-value ac-row-value--negative">$542</span>
            </div>
          </div>

          <div className="ac-panel-footer">
            <button className="btn btn-primary ac-cta">Cover Shortfall</button>
            <button className="ac-link">Why am I seeing this?</button>
          </div>
        </article>

        {/* ── Secondary: Idle Cash ────────────────────────── */}
        <article className="ac-panel ac-panel--secondary">
          <div className="ac-panel-head">
            <span className="ac-badge ac-badge--opportunity">Opportunity</span>
          </div>

          <h2 className="ac-panel-title">Idle Cash Available</h2>
          <p className="ac-panel-amount ac-panel-amount--positive">$18,420</p>
          <p className="ac-panel-growth">
            Estimated Annual Growth <strong>+$1,245</strong>
          </p>

          {/* ── Flow Illustration ─────────────────────────── */}
          <div className="ac-flow">
            <div className="ac-flow-step">
              <div className="ac-flow-icon ac-flow-icon--checking">
                <WalletIcon />
              </div>
              <span className="ac-flow-label">Checking</span>
            </div>
            <div className="ac-flow-arrow">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="ac-flow-step">
              <div className="ac-flow-icon ac-flow-icon--invest">
                <TrendUpIcon />
              </div>
              <span className="ac-flow-label">Advizmo Investment</span>
            </div>
            <div className="ac-flow-arrow">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="ac-flow-step">
              <div className="ac-flow-icon ac-flow-icon--growth">
                <TargetIcon />
              </div>
              <span className="ac-flow-label">Projected Growth</span>
            </div>
          </div>

          <div className="ac-panel-footer">
            <button className="btn btn-primary ac-cta">Move to Investment</button>
            <button className="ac-link">View Calculation</button>
          </div>
        </article>
      </div>
    </section>
  );
}

/* ── Icons ──────────────────────────────────────────────── */

function WalletIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M14 6.5V5C14 3.9 13.1 3 12 3H6C4.9 3 4 3.9 4 5V13C4 14.1 4.9 15 6 15H12C13.1 15 14 14.1 14 13V11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 6.5H15.5C16.1 6.5 16.5 6.9 16.5 7.5V11.5C16.5 12.1 16.1 12.5 15.5 12.5H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="9" cy="9" r="1.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function TrendUpIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M3 13L7 8.5L10 11L15 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 5H15V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TargetIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="9" cy="9" r="3" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="9" cy="9" r="1" fill="currentColor" />
    </svg>
  );
}

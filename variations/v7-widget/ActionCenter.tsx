import './ActionCenter.css';

export default function ActionCenter() {
  return (
    <section className="action-center">
      <div className="ac-split">
        {/* ── Primary: Checking Short ──────────────────────── */}
        <article className="ac-panel ac-panel--primary">
          <div className="ac-panel-top">
            <div className="ac-panel-head">
              <span className="ac-badge ac-badge--urgent">Action Required</span>
              <span className="ac-panel-sub">5 days until due</span>
            </div>

            <div className="ac-hero-row">
              <div>
                <h2 className="ac-panel-title">Checking Short</h2>
                <p className="ac-panel-amount ac-panel-amount--negative">$542 Short</p>
              </div>
              <div className="ac-mini-chart">
                <svg viewBox="0 0 60 32" className="ac-sparkline ac-sparkline--danger">
                  <path d="M0 16 L8 14 L16 18 L24 12 L32 20 L40 16 L48 22 L56 24 L60 28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>

          <p className="ac-panel-desc">
            You may not have enough funds to cover bills due within the next 5 days.
          </p>

          <div className="ac-panel-footer">
            <button className="btn btn-primary ac-cta">Cover Shortfall</button>
            <button className="ac-link">Why am I seeing this?</button>
          </div>
        </article>

        {/* ── Secondary: Idle Cash ────────────────────────── */}
        <article className="ac-panel ac-panel--secondary">
          <div className="ac-panel-top">
            <div className="ac-panel-head">
              <span className="ac-badge ac-badge--opportunity">Opportunity</span>
            </div>

            <div className="ac-hero-row">
              <div>
                <h2 className="ac-panel-title">Idle Cash Available</h2>
                <p className="ac-panel-amount ac-panel-amount--positive">$18,420</p>
              </div>
              <div className="ac-mini-chart">
                <svg viewBox="0 0 60 32" className="ac-sparkline ac-sparkline--growth">
                  <path d="M0 28 L8 24 L16 22 L24 18 L32 14 L40 10 L48 8 L56 4 L60 2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>

          <p className="ac-panel-growth">
            +$1,245 estimated annual growth
          </p>
          <p className="ac-panel-desc">
            Move idle cash to a diversified portfolio to beat inflation.
          </p>

          <div className="ac-panel-footer">
            <button className="btn btn-primary ac-cta">Move to Investment</button>
            <button className="ac-link">View Calculation</button>
          </div>
        </article>
      </div>
    </section>
  );
}

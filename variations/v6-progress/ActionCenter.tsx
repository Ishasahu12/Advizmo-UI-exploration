import './ActionCenter.css';

export default function ActionCenter() {
  return (
    <section className="action-center">
      <div className="ac-split">
        {/* ── Primary: Checking Short ──────────────────────── */}
        <article className="ac-panel ac-panel--primary">
          <div className="ac-panel-head">
            <span className="ac-badge ac-badge--urgent">Action Required</span>
          </div>

          <h2 className="ac-panel-title">Checking Short</h2>
          <p className="ac-panel-amount ac-panel-amount--negative">$542 Short</p>

          <div className="ac-meter">
            <div className="ac-meter-header">
              <span className="ac-meter-label">Balance vs. Bills Due</span>
              <span className="ac-meter-ratio">$1,278 / $1,820</span>
            </div>
            <div className="ac-meter-bar">
              <div className="ac-meter-fill ac-meter-fill--partial" style={{ width: '70%' }} />
              <div className="ac-meter-fill ac-meter-fill--gap" style={{ left: '70%', width: '30%' }} />
            </div>
            <div className="ac-meter-legend">
              <span className="ac-meter-legend-item"><span className="ac-dot ac-dot--blue" /> Current Balance</span>
              <span className="ac-meter-legend-item"><span className="ac-dot ac-dot--red" /> Shortfall</span>
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
          <div className="ac-panel-head">
            <span className="ac-badge ac-badge--opportunity">Opportunity</span>
          </div>

          <h2 className="ac-panel-title">Idle Cash Available</h2>
          <p className="ac-panel-amount ac-panel-amount--positive">$18,420</p>

          <div className="ac-meter">
            <div className="ac-meter-header">
              <span className="ac-meter-label">Allocation Potential</span>
              <span className="ac-meter-ratio">+$1,245/yr</span>
            </div>
            <div className="ac-meter-bar">
              <div className="ac-meter-fill ac-meter-fill--green" style={{ width: '65%' }} />
            </div>
          </div>

          <div className="ac-breakdown">
            <div className="ac-breakdown-row">
              <span>Checking</span>
              <span>$24,850</span>
            </div>
            <div className="ac-breakdown-row ac-breakdown-row--muted">
              <span>Suggested Investment</span>
              <span>$18,420</span>
            </div>
            <div className="ac-breakdown-row">
              <span>Retained Balance</span>
              <span>$6,430</span>
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

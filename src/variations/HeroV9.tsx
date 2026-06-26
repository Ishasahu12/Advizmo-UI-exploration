import './HeroV9.css';

export default function HeroV9() {
  return (
    <section className="action-center">
      <div className="cc-stack">

        {/* ── Top Card: Checking Short (70%) ─────────────── */}
        <article className="cc-card cc-card--protect">
          <div className="cc-card-header">
            <div className="cc-header-left">
              <span className="cc-badge cc-badge--urgent">Protection</span>
              <h2 className="cc-card-title">Checking Short</h2>
            </div>
            <div className="cc-header-stats">
              <div className="cc-stat">
                <span className="cc-stat-value">3</span>
                <span className="cc-stat-label">Bills Affected</span>
              </div>
              <div className="cc-stat">
                <span className="cc-stat-value">5</span>
                <span className="cc-stat-label">Days Remaining</span>
              </div>
            </div>
          </div>

          <div className="cc-card-body">
            <div className="cc-body-left">
              <p className="cc-amount cc-amount--negative">$542 Short</p>
              <div className="cc-bar">
                <div className="cc-bar-track">
                  <div className="cc-bar-fill" style={{ width: '70%' }} />
                  <div className="cc-bar-gap" style={{ left: '70%', width: '30%' }} />
                </div>
                <div className="cc-bar-labels">
                  <span>Have $1,278</span>
                  <span>Need $1,820</span>
                </div>
              </div>
            </div>
            <div className="cc-body-right">
              <span className="cc-body-label">Funding Recommendation</span>
              <div className="cc-funding-card">
                <span className="cc-funding-source">From Emergency Reserve</span>
                <span className="cc-funding-amount">$542</span>
                <span className="cc-funding-note">Leaves $5,888 buffer</span>
              </div>
            </div>
          </div>

          <div className="cc-card-footer">
            <button className="btn btn-primary cc-cta">Transfer Funds</button>
            <button className="cc-link">Review Bills</button>
          </div>
        </article>

        {/* ── Bottom Card: Idle Cash (30%) ─────────────── */}
        <article className="cc-card cc-card--grow">
          <div className="cc-card-header">
            <div className="cc-header-left">
              <span className="cc-badge cc-badge--growth">Growth</span>
              <h2 className="cc-card-title">Idle Cash</h2>
            </div>
          </div>

          <div className="cc-card-body cc-body-metrics">
            <div className="cc-metric">
              <span className="cc-metric-label">Idle Cash</span>
              <span className="cc-metric-value">$18,420</span>
            </div>
            <div className="cc-metric-sep" />
            <div className="cc-metric">
              <span className="cc-metric-label">Potential Annual Earnings</span>
              <span className="cc-metric-value cc-metric-value--positive">+$1,245</span>
            </div>
            <div className="cc-metric-sep" />
            <div className="cc-metric">
              <span className="cc-metric-label">Suggested Investment</span>
              <span className="cc-metric-value">$12,800</span>
            </div>
            <div className="cc-metric-sep" />
            <div className="cc-metric">
              <span className="cc-metric-label">Projected Return</span>
              <span className="cc-metric-value cc-metric-value--positive">+9.7%</span>
            </div>
          </div>

          <div className="cc-card-footer">
            <button className="btn btn-primary cc-cta">Invest Now</button>
          </div>
        </article>

      </div>
    </section>
  );
}

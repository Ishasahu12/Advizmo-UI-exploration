import './HeroV9.css';

export default function HeroV9() {
  return (
    <section className="action-center">
      <div className="command-center">

        {/* ── Top Card: Checking Short (70%) ─────────────── */}
        <article className="cc-card cc-card--primary">
          <div className="cc-card-head">
            <span className="cc-badge cc-badge--urgent">Protection</span>
            <span className="cc-sub">3 bills affected · 5 days remaining</span>
          </div>

          <div className="cc-card-body">
            <div className="cc-card-left">
              <h2 className="cc-card-title">Checking Short</h2>
              <p className="cc-amount cc-amount--negative">$542 Short</p>
              <p className="cc-desc">
                Your checking balance is below the amount needed to cover upcoming bills.
              </p>

              <div className="cc-visual">
                <div className="cc-visual-bar">
                  <div className="cc-visual-fill cc-visual-fill--have" style={{ width: '70%' }} />
                  <div className="cc-visual-fill cc-visual-fill--gap" style={{ left: '70%', width: '30%' }} />
                </div>
                <div className="cc-visual-labels">
                  <span>Have: $1,278</span>
                  <span className="cc-visual-labels-gap">Need: $1,820</span>
                </div>
              </div>
            </div>

            <div className="cc-card-right">
              <div className="cc-funding">
                <span className="cc-funding-label">Funding Recommendation</span>
                <div className="cc-funding-options">
                  <div className="cc-funding-option">
                    <span className="cc-funding-source">From Emergency Reserve</span>
                    <span className="cc-funding-amount">$542</span>
                    <span className="cc-funding-note">Leaves $5,888 buffer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="cc-card-footer">
            <button className="btn btn-primary cc-cta">Transfer Funds</button>
            <button className="cc-link">Review Bills</button>
          </div>
        </article>

        {/* ── Bottom Card: Idle Cash (30%) ─────────────── */}
        <article className="cc-card cc-card--secondary">
          <div className="cc-card-head">
            <span className="cc-badge cc-badge--growth">Growth</span>
          </div>

          <div className="cc-card-body cc-card-body--compact">
            <div className="cc-metrics">
              <div className="cc-metric">
                <span className="cc-metric-label">Idle Cash</span>
                <span className="cc-metric-value cc-metric-value--positive">$18,420</span>
              </div>
              <div className="cc-metric-divider" />
              <div className="cc-metric">
                <span className="cc-metric-label">Potential Annual Earnings</span>
                <span className="cc-metric-value cc-metric-value--positive">+$1,245</span>
              </div>
              <div className="cc-metric-divider" />
              <div className="cc-metric">
                <span className="cc-metric-label">Suggested Investment</span>
                <span className="cc-metric-value">$12,800</span>
              </div>
              <div className="cc-metric-divider" />
              <div className="cc-metric">
                <span className="cc-metric-label">Projected Return</span>
                <span className="cc-metric-value cc-metric-value--positive">+9.7%</span>
              </div>
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

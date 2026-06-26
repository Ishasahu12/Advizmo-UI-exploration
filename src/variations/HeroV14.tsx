import './HeroV14.css';

export default function HeroV14() {
  return (
    <section className="action-center">
      <div className="dc">

        {/* ── Priority Action 1: Checking Short ──────────── */}
        <article className="dc-card dc-card--protect">
          <div className="dc-card-head">
            <span className="dc-priority">Priority Action</span>
            <span className="dc-purpose dc-purpose--protect">Protect</span>
          </div>

          <div className="dc-card-body">
            <div className="dc-main">
              <h2 className="dc-title">Checking Short</h2>
              <p className="dc-amount dc-amount--negative">$542 short</p>
              <p className="dc-explain">
                Your checking account won't cover bills due <strong>June 28</strong>.
                Three payments totaling $1,820 will exceed your current balance of $1,278.
              </p>
            </div>

            <div className="dc-details">
              <div className="dc-detail">
                <span className="dc-detail-label">Affected Account</span>
                <span className="dc-detail-value">Checking ···4832</span>
              </div>
              <div className="dc-detail">
                <span className="dc-detail-label">Date of Shortfall</span>
                <span className="dc-detail-value">June 28, 2026</span>
              </div>
              <div className="dc-detail">
                <span className="dc-detail-label">Upcoming Bills</span>
                <span className="dc-detail-value">3 bills · $1,820</span>
              </div>
              <div className="dc-detail">
                <span className="dc-detail-label">Suggested Transfer</span>
                <span className="dc-detail-value dc-detail-value--negative">$542 from Emergency Reserve</span>
              </div>
            </div>
          </div>

          <div className="dc-card-footer">
            <button className="btn btn-primary dc-cta">Cover Shortfall</button>
            <button className="dc-link">View Details</button>
          </div>
        </article>

        {/* ── Priority Action 2: Idle Cash ───────────────── */}
        <article className="dc-card dc-card--grow">
          <div className="dc-card-head">
            <span className="dc-priority">Priority Action</span>
            <span className="dc-purpose dc-purpose--grow">Grow</span>
          </div>

          <div className="dc-card-body">
            <div className="dc-main">
              <h2 className="dc-title">Idle Cash</h2>
              <p className="dc-amount dc-amount--positive">$18,420 safe to invest</p>
              <p className="dc-explain">
                After reserving for bills and emergencies, this amount can be moved to a diversified portfolio
                to earn an estimated <strong>+$1,245 per year</strong>.
              </p>
            </div>

            <div className="dc-details">
              <div className="dc-detail">
                <span className="dc-detail-label">Current Account</span>
                <span className="dc-detail-value">Checking ···4832</span>
              </div>
              <div className="dc-detail">
                <span className="dc-detail-label">Estimated Annual Growth</span>
                <span className="dc-detail-value dc-detail-value--positive">+$1,245</span>
              </div>
              <div className="dc-detail">
                <span className="dc-detail-label">Recommended Investment</span>
                <span className="dc-detail-value">Vanguard VTI · Moderate Risk</span>
              </div>
              <div className="dc-detail">
                <span className="dc-detail-label">Projected Return</span>
                <span className="dc-detail-value dc-detail-value--positive">+6.7% annually</span>
              </div>
            </div>
          </div>

          <div className="dc-card-footer">
            <button className="btn btn-primary dc-cta">Move Funds</button>
            <button className="dc-link">How is this calculated?</button>
          </div>
        </article>

      </div>
    </section>
  );
}

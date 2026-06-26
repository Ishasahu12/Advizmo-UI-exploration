import './ActionCenter.css';

export default function ActionCenter() {
  return (
    <section className="action-center">
      <div className="ac-single">
        <div className="ac-single-left">
          <div className="ac-single-badge">
            <span className="ac-single-dot" />
            Priority Action
          </div>
          <h2 className="ac-single-title">Invest Idle Cash</h2>
          <p className="ac-single-desc">
            $24,850 sitting in checking could earn +$1,742/year if invested in a diversified portfolio.
          </p>
          <div className="ac-single-actions">
            <button className="btn btn-primary ac-single-cta">Move Money</button>
            <button className="ac-single-link">Why this recommendation?</button>
          </div>
        </div>
        <div className="ac-single-right">
          <div className="ac-single-stat">
            <span className="ac-single-stat-label">Available</span>
            <span className="ac-single-stat-value">$24,850</span>
          </div>
          <div className="ac-single-stat">
            <span className="ac-single-stat-label">Annual Growth</span>
            <span className="ac-single-stat-value positive">+$1,742</span>
          </div>
          <div className="ac-single-stat">
            <span className="ac-single-stat-label">Confidence</span>
            <span className="ac-single-stat-value">87%</span>
          </div>
          <div className="ac-single-trust">
            <span className="ac-single-dest">Vanguard VTI · Moderate Risk</span>
          </div>
        </div>
      </div>
    </section>
  );
}

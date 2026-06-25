import './ActionCenter.css';

export default function ActionCenter() {
  return (
    <section className="action-center">
      <div className="ac-container">
        <div className="ac-recommendation">
          <div className="ac-rec-header">
            <span className="ac-badge">
              <span className="ac-badge-dot" />
              PRIORITY ACTION
            </span>
          </div>

          <div className="ac-rec-body">
            <div className="ac-rec-text">
              <h2 className="ac-title">Invest Idle Cash</h2>
              <p className="ac-explanation">
                $24,850 is currently available to invest safely.
              </p>
            </div>

            <div className="ac-rec-amounts">
              <div className="ac-amount-primary">
                <span className="ac-amount-value">$24,850</span>
                <span className="ac-amount-label">Available to invest</span>
              </div>
              <div className="ac-amount-divider" />
              <div className="ac-amount-growth">
                <span className="ac-growth-value">+$1,742</span>
                <span className="ac-growth-label">Estimated annual growth</span>
              </div>
            </div>
          </div>

          <div className="ac-rec-actions">
            <button className="btn btn-primary ac-btn-primary">
              <ArrowRightIcon />
              Move Money
            </button>
            <button className="btn btn-ghost ac-btn-secondary">
              How was this calculated?
            </button>
          </div>

          <div className="ac-rec-trust">
            <div className="ac-trust-score">
              <div className="ac-trust-ring">
                <span className="ac-trust-number">87</span>
              </div>
              <span className="ac-trust-label">Confidence</span>
            </div>
            <div className="ac-trust-divider" />
            <div className="ac-trust-info">
              <span className="ac-trust-destination">Vanguard Total Market ETF (VTI)</span>
              <span className="ac-trust-meta">Moderate risk · Diversified portfolio</span>
            </div>
          </div>
        </div>

        <div className="ac-evidence">
          <div className="ac-flow-section">
            <h3 className="ac-section-label">Where this came from</h3>
            <div className="ac-flow">
              <div className="ac-flow-step">
                <span className="ac-flow-name">Checking</span>
                <span className="ac-flow-amount">$12,400</span>
              </div>
              <FlowArrowIcon />
              <div className="ac-flow-step">
                <span className="ac-flow-name">Savings</span>
                <span className="ac-flow-amount">$8,200</span>
              </div>
              <FlowArrowIcon />
              <div className="ac-flow-step reserved">
                <span className="ac-flow-name">Emergency</span>
                <span className="ac-flow-amount">$15,000</span>
              </div>
              <FlowArrowIcon />
              <div className="ac-flow-step bills">
                <span className="ac-flow-name">Bills</span>
                <span className="ac-flow-amount">-$2,750</span>
              </div>
              <FlowArrowIcon />
              <div className="ac-flow-step safe">
                <span className="ac-flow-name">Safe to Invest</span>
                <span className="ac-flow-amount">$24,850</span>
              </div>
            </div>
          </div>

          <div className="ac-why-section">
            <h3 className="ac-section-label">Why this matters</h3>
            <div className="ac-benefits">
              <div className="ac-benefit positive">
                <span className="ac-benefit-value">+7.2%</span>
                <span className="ac-benefit-label">Projected Return</span>
              </div>
              <div className="ac-benefit negative">
                <span className="ac-benefit-value">-$1,489</span>
                <span className="ac-benefit-label">Cash Drag / year</span>
              </div>
              <div className="ac-benefit negative">
                <span className="ac-benefit-value">-$892</span>
                <span className="ac-benefit-label">Inflation Loss / year</span>
              </div>
              <div className="ac-benefit warning">
                <span className="ac-benefit-value">High</span>
                <span className="ac-benefit-label">Opportunity Cost</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ArrowRightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function FlowArrowIcon() {
  return (
    <svg className="ac-flow-arrow" width="16" height="12" viewBox="0 0 16 12" fill="none">
      <path d="M0 6H14M14 6L10 2M14 6L10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

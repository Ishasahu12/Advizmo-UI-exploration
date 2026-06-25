import './ActionCenter.css';

export default function ActionCenter() {
  return (
    <section className="action-center">
      <div className="bento-grid">
        <div className="bento-card bento-main">
          <div className="bento-main-header">
            <span className="bento-tag">Priority Action</span>
          </div>
          <div className="bento-main-content">
            <p className="idle-cash-label">You currently have</p>
            <h2 className="idle-cash-amount">$24,850</h2>
            <p className="idle-cash-text">sitting idle in your accounts</p>
            <div className="potential-earnings">
              <span className="earnings-label">This money could earn approximately</span>
              <span className="earnings-amount">$1,742</span>
              <span className="earnings-period">per year if invested</span>
            </div>
          </div>
          <div className="bento-main-actions">
            <button className="btn btn-primary">Move Money</button>
            <button className="btn btn-ghost">Why am I seeing this?</button>
          </div>
        </div>

        <div className="bento-card bento-source">
          <div className="bento-card-header">
            <h3>Where this came from</h3>
          </div>
          <div className="source-breakdown">
            <div className="source-item">
              <div className="source-info">
                <span className="source-name">Checking Account</span>
                <span className="source-amount">$12,400</span>
              </div>
              <div className="source-bar">
                <div className="source-bar-fill" style={{ width: '50%' }} />
              </div>
            </div>
            <div className="source-item">
              <div className="source-info">
                <span className="source-name">Savings Account</span>
                <span className="source-amount">$8,200</span>
              </div>
              <div className="source-bar">
                <div className="source-bar-fill" style={{ width: '33%' }} />
              </div>
            </div>
            <div className="source-item">
              <div className="source-info">
                <span className="source-name">Emergency Reserve</span>
                <span className="source-amount">$15,000</span>
              </div>
              <div className="source-bar">
                <div className="source-bar-fill safe" style={{ width: '60%' }} />
              </div>
              <span className="source-note">Reserved for emergencies</span>
            </div>
            <div className="source-item">
              <div className="source-info">
                <span className="source-name">Upcoming Bills</span>
                <span className="source-amount">-$2,750</span>
              </div>
              <div className="source-bar">
                <div className="source-bar-fill reserved" style={{ width: '11%' }} />
              </div>
              <span className="source-note">Due in next 30 days</span>
            </div>
          </div>
          <div className="source-total">
            <span>Safe to Invest</span>
            <span className="total-amount">$24,850</span>
          </div>
        </div>

        <div className="bento-card bento-why">
          <div className="bento-card-header">
            <h3>Why this recommendation</h3>
          </div>
          <div className="why-items">
            <div className="why-item">
              <div className="why-icon green">
                <TrendingUpIcon />
              </div>
              <div className="why-content">
                <span className="why-label">Projected Annual Return</span>
                <span className="why-value green">+7.2%</span>
              </div>
            </div>
            <div className="why-item">
              <div className="why-icon yellow">
                <WarningIcon />
              </div>
              <div className="why-content">
                <span className="why-label">Cash Drag Impact</span>
                <span className="why-value">-$1,489/yr</span>
              </div>
              <span className="why-note">Lost earning potential</span>
            </div>
            <div className="why-item">
              <div className="why-icon red">
                <InflationIcon />
              </div>
              <div className="why-content">
                <span className="why-label">Inflation Impact</span>
                <span className="why-value">-$892/yr</span>
              </div>
              <span className="why-note">Purchasing power loss</span>
            </div>
            <div className="why-item">
              <div className="why-icon purple">
                <OpportunityIcon />
              </div>
              <div className="why-content">
                <span className="why-label">Opportunity Cost</span>
                <span className="why-value">-$2,631/yr</span>
              </div>
              <span className="why-note">vs. average portfolio</span>
            </div>
          </div>
        </div>

        <div className="bento-card bento-risk">
          <div className="bento-card-header">
            <h3>Investment Details</h3>
          </div>
          <div className="risk-details">
            <div className="risk-level">
              <span className="risk-label">Risk Level</span>
              <div className="risk-badge moderate">Moderate</div>
            </div>
            <p className="risk-description">
              Diversified portfolio of ETFs across domestic and international markets with a mix of stocks and bonds.
            </p>
            <div className="confidence-score">
              <div className="confidence-header">
                <span>Confidence Score</span>
                <span className="confidence-value">87%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill green" style={{ width: '87%' }} />
              </div>
            </div>
            <div className="destination">
              <span className="destination-label">Investment Destination</span>
              <span className="destination-value">Vanguard Total Market ETF (VTI)</span>
            </div>
            <div className="expected-outcome">
              <span className="outcome-label">Expected Outcome (1yr)</span>
              <span className="outcome-value">+$1,742</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrendingUpIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M2 11L6 7L9 9L14 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11 4H14V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function WarningIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M8 5V8.5M8 11H8.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M7.1 2.5L1.5 12C1.2 12.6 1.6 13.3 2.2 13.3H13.8C14.4 13.3 14.8 12.6 14.5 12L8.9 2.5C8.6 1.9 7.4 1.9 7.1 2.5Z" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );
}

function InflationIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M8 4V8L11 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M5 5L4 4M11 11L12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function OpportunityIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M8 2L10 6L14 6.5L11 9.5L12 14L8 11.5L4 14L5 9.5L2 6.5L6 6L8 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>
  );
}
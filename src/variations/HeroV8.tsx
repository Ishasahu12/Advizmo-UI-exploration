import './HeroV8.css';

export default function HeroV8() {
  return (
    <section className="action-center">
      <div className="timeline">

        {/* ── Step 1: Current Situation ──────────────────── */}
        <div className="timeline-step">
          <div className="timeline-step-header">
            <span className="timeline-step-num">1</span>
            <span className="timeline-step-label">Current Situation</span>
          </div>

          <div className="timeline-card">
            <h3 className="timeline-card-title">Checking Account</h3>

            <div className="timeline-rows">
              <div className="timeline-row">
                <span className="timeline-row-icon timeline-row-icon--balance">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.2" /><path d="M7 4V10M5 6H9M5 8H9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" /></svg>
                </span>
                <div className="timeline-row-content">
                  <span className="timeline-row-label">Current Balance</span>
                  <span className="timeline-row-value">$1,278</span>
                </div>
              </div>

              <div className="timeline-row">
                <span className="timeline-row-icon timeline-row-icon--bills">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1.5L2.5 3.5V7C2.5 10 4.5 12.2 7 13C9.5 12.2 11.5 10 11.5 7V3.5L7 1.5Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" /></svg>
                </span>
                <div className="timeline-row-content">
                  <span className="timeline-row-label">Upcoming Bills</span>
                  <span className="timeline-row-value timeline-row-value--warning">−$1,820</span>
                </div>
              </div>

              <div className="timeline-row">
                <span className="timeline-row-icon timeline-row-icon--idle">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 10L5 7L7.5 9L12 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </span>
                <div className="timeline-row-content">
                  <span className="timeline-row-label">Idle Cash</span>
                  <span className="timeline-row-value timeline-row-value--positive">$18,420</span>
                </div>
              </div>

              <div className="timeline-row">
                <span className="timeline-row-icon timeline-row-icon--emergency">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="2" y="6" width="10" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.2" /><path d="M4 6V4C4 2.3 5.3 1 7 1C8.7 1 10 2.3 10 4V6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" /></svg>
                </span>
                <div className="timeline-row-content">
                  <span className="timeline-row-label">Emergency Reserve</span>
                  <span className="timeline-row-value">$6,430</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Connector ──────────────────────────────────── */}
        <div className="timeline-connector">
          <div className="timeline-line" />
          <div className="timeline-arrow">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7 10H13M10 7L13 10L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* ── Step 2: AI Analysis ────────────────────────── */}
        <div className="timeline-step">
          <div className="timeline-step-header">
            <span className="timeline-step-num">2</span>
            <span className="timeline-step-label">AI Analysis</span>
          </div>

          <div className="timeline-card timeline-card--analysis">
            <p className="timeline-analysis-text">
              "You can safely invest <strong>$12,800</strong> while keeping enough cash for upcoming obligations."
            </p>
            <div className="timeline-analysis-tags">
              <span className="timeline-tag">Upcoming bills</span>
              <span className="timeline-tag">Cash reserve</span>
              <span className="timeline-tag">Income schedule</span>
              <span className="timeline-tag">Risk profile</span>
            </div>
          </div>
        </div>

        {/* ── Connector ──────────────────────────────────── */}
        <div className="timeline-connector">
          <div className="timeline-line" />
          <div className="timeline-arrow">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7 10H13M10 7L13 10L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* ── Step 3: Priority Actions ───────────────────── */}
        <div className="timeline-step">
          <div className="timeline-step-header">
            <span className="timeline-step-num">3</span>
            <span className="timeline-step-label">Priority Actions</span>
          </div>

          <div className="timeline-actions">
            <div className="timeline-action-card">
              <div className="timeline-action-left">
                <span className="timeline-action-badge timeline-action-badge--urgent">Resolve</span>
                <span className="timeline-action-title">Checking Short</span>
                <span className="timeline-action-amount">$542</span>
              </div>
              <button className="btn btn-primary timeline-action-btn">Cover Shortfall</button>
            </div>

            <div className="timeline-action-card">
              <div className="timeline-action-left">
                <span className="timeline-action-badge timeline-action-badge--invest">Invest</span>
                <span className="timeline-action-title">Move Idle Cash</span>
                <span className="timeline-action-amount timeline-action-amount--positive">$12,800</span>
              </div>
              <button className="btn btn-primary timeline-action-btn">Move to Investment</button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

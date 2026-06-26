import './HeroV8.css';

export default function HeroV8() {
  return (
    <section className="action-center">
      <div className="story">

        {/* ── Main Story ──────────────────────────────────── */}
        <div className="story-main">
          <div className="story-header">
            <span className="story-tag">How we got here</span>
            <h2 className="story-title">Your Investment Summary</h2>
          </div>

          <div className="story-sequence">
            <div className="story-step">
              <div className="story-node story-node--start">
                <span className="story-node-icon">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" /><path d="M8 5V11M6 7H10M6 9H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
                </span>
                <div className="story-node-text">
                  <span className="story-node-label">Checking Balance</span>
                  <span className="story-node-value">$24,850</span>
                </div>
              </div>
              <div className="story-connector">
                <div className="story-line" />
                <span className="story-subtract">−$1,820</span>
              </div>
            </div>

            <div className="story-step">
              <div className="story-node story-node--reserved">
                <span className="story-node-icon">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1.5L3 3.5V7.5C3 11 5.5 13.5 8 14.5C10.5 13.5 13 11 13 7.5V3.5L8 1.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /></svg>
                </span>
                <div className="story-node-text">
                  <span className="story-node-label">Upcoming Bills Reserved</span>
                  <span className="story-node-value">-$1,820</span>
                </div>
              </div>
              <div className="story-connector">
                <div className="story-line" />
                <span className="story-subtract">−$4,610</span>
              </div>
            </div>

            <div className="story-step">
              <div className="story-node story-node--reserved">
                <span className="story-node-icon">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="2.5" y="6" width="11" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" /><path d="M5 6V4.5C5 2.8 6.3 1.5 8 1.5C9.7 1.5 11 2.8 11 4.5V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
                </span>
                <div className="story-node-text">
                  <span className="story-node-label">Emergency Savings Reserved</span>
                  <span className="story-node-value">-$4,610</span>
                </div>
              </div>
              <div className="story-connector">
                <div className="story-line story-line--safe" />
              </div>
            </div>

            <div className="story-step">
              <div className="story-node story-node--safe">
                <span className="story-node-icon story-node-icon--safe">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 9L6.5 12.5L13 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </span>
                <div className="story-node-text">
                  <span className="story-node-label story-node-label--safe">Safe to Invest</span>
                  <span className="story-node-value story-node-value--safe">$18,420</span>
                </div>
              </div>
            </div>
          </div>

          <div className="story-cta-row">
            <button className="btn btn-primary story-cta">Move Funds</button>
            <button className="story-link">View detailed breakdown</button>
          </div>
        </div>

        {/* ── Side: Secondary Recommendation ──────────────── */}
        <div className="story-side">
          <div className="story-side-card">
            <div className="story-side-header">
              <span className="story-side-badge">Action Required</span>
              <span className="story-side-sub">5 days</span>
            </div>
            <h3 className="story-side-title">Checking Short</h3>
            <p className="story-side-amount">$542</p>
            <p className="story-side-desc">
              3 upcoming bills exceed your current checking balance.
            </p>
            <div className="story-side-bar">
              <div className="story-side-bar-fill" style={{ width: '70%' }} />
            </div>
            <button className="btn btn-primary story-side-btn">Resolve</button>
          </div>
        </div>

      </div>
    </section>
  );
}

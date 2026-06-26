import './HeroV13.css';

export default function HeroV13() {
  return (
    <section className="action-center">
      <div className="queue">
        <div className="queue-header">
          <h2 className="queue-title">Pending Approvals</h2>
          <span className="queue-count">2 actions</span>
        </div>

        {/* ── Approval 1: Idle Cash Investment ────────────── */}
        <article className="approval approval--invest">
          <div className="approval-sidebar">
            <div className="approval-status-dot approval-status-dot--pending" />
            <div className="approval-sidebar-line" />
          </div>
          <div className="approval-body">
            <div className="approval-top">
              <div className="approval-info">
                <span className="approval-badge approval-badge--pending">Investment</span>
                <h3 className="approval-title">Idle Cash Investment</h3>
              </div>
              <div className="approval-actions">
                <button className="btn btn-primary approval-btn">Approve</button>
                <button className="approval-btn-reject">Reject</button>
              </div>
            </div>

            <div className="approval-meta">
              <div className="approval-field">
                <span className="approval-field-label">Source</span>
                <span className="approval-field-value">
                  <span className="approval-icon">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="4.5" stroke="currentColor" strokeWidth="1.2" /><path d="M6 3.5V8.5M4.5 5.5H7.5M4.5 7H7.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" /></svg>
                  </span>
                  Checking ···4832
                </span>
              </div>
              <div className="approval-arrow">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M10 5L13 8L10 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>
              <div className="approval-field">
                <span className="approval-field-label">Destination</span>
                <span className="approval-field-value">
                  <span className="approval-icon approval-icon--invest">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 9L5 6L7 7.5L10 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </span>
                  Advizmo Portfolio
                </span>
              </div>
              <div className="approval-amount approval-amount--positive">+$18,420</div>
            </div>

            <div className="approval-details">
              <div className="approval-detail">
                <span className="approval-detail-label">Reason</span>
                <p className="approval-detail-text">Idle cash not earning returns. Moving to diversified portfolio for inflation protection.</p>
              </div>
              <div className="approval-detail">
                <span className="approval-detail-label">Impact</span>
                <p className="approval-detail-text">Estimated <strong>+$1,245</strong> annual growth at 6.7% projected return</p>
              </div>
            </div>
          </div>
        </article>

        {/* ── Approval 2: Checking Short Transfer ─────────── */}
        <article className="approval approval--urgent">
          <div className="approval-sidebar">
            <div className="approval-status-dot approval-status-dot--urgent" />
            <div className="approval-sidebar-line" />
          </div>
          <div className="approval-body">
            <div className="approval-top">
              <div className="approval-info">
                <span className="approval-badge approval-badge--urgent">Transfer</span>
                <h3 className="approval-title">Checking Short Transfer</h3>
              </div>
              <div className="approval-actions">
                <button className="btn btn-primary approval-btn">Approve</button>
                <button className="approval-btn-reject">Reject</button>
              </div>
            </div>

            <div className="approval-meta">
              <div className="approval-field">
                <span className="approval-field-label">Source</span>
                <span className="approval-field-value">
                  <span className="approval-icon approval-icon--emergency">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><rect x="1.5" y="4" width="9" height="6" rx="1" stroke="currentColor" strokeWidth="1.2" /><path d="M3.5 4V3C3.5 1.9 4.6 1 6 1C7.4 1 8.5 1.9 8.5 3V4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" /></svg>
                  </span>
                  Emergency Reserve
                </span>
              </div>
              <div className="approval-arrow">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M10 5L13 8L10 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>
              <div className="approval-field">
                <span className="approval-field-label">Destination</span>
                <span className="approval-field-value">
                  <span className="approval-icon">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="4.5" stroke="currentColor" strokeWidth="1.2" /><path d="M6 3.5V8.5M4.5 5.5H7.5M4.5 7H7.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" /></svg>
                  </span>
                  Checking ···4832
                </span>
              </div>
              <div className="approval-amount approval-amount--negative">−$542</div>
            </div>

            <div className="approval-details">
              <div className="approval-detail">
                <span className="approval-detail-label">Reason</span>
                <p className="approval-detail-text">Checking balance insufficient for 3 upcoming bills due within 5 days.</p>
              </div>
              <div className="approval-detail">
                <span className="approval-detail-label">Impact</span>
                <p className="approval-detail-text">Emergency reserve drops from <strong>$6,430</strong> to <strong>$5,888</strong> — still within safe range</p>
              </div>
            </div>
          </div>
        </article>

      </div>
    </section>
  );
}

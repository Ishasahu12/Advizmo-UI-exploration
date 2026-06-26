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
        <article className="approval">
          <div className="approval-status">
            <div className="approval-status-dot approval-status-dot--pending" />
          </div>
          <div className="approval-body">
            <div className="approval-top">
              <div className="approval-info">
                <span className="approval-label">Action</span>
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
                <span className="approval-field-value">Checking ···4832</span>
              </div>
              <div className="approval-field">
                <span className="approval-field-label">Destination</span>
                <span className="approval-field-value">Advizmo Portfolio</span>
              </div>
              <div className="approval-field">
                <span className="approval-field-label">Amount</span>
                <span className="approval-field-value approval-field-value--positive">$18,420</span>
              </div>
            </div>

            <div className="approval-details">
              <div className="approval-reason">
                <span className="approval-reason-label">Reason</span>
                <p className="approval-reason-text">Idle cash not earning returns. Moving to diversified portfolio for inflation protection.</p>
              </div>
              <div className="approval-impact">
                <span className="approval-impact-label">Impact</span>
                <p className="approval-impact-text">Estimated +$1,245 annual growth at 6.7% projected return</p>
              </div>
            </div>
          </div>
        </article>

        {/* ── Approval 2: Checking Short Transfer ─────────── */}
        <article className="approval">
          <div className="approval-status">
            <div className="approval-status-dot approval-status-dot--urgent" />
          </div>
          <div className="approval-body">
            <div className="approval-top">
              <div className="approval-info">
                <span className="approval-label">Action</span>
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
                <span className="approval-field-value">Emergency Reserve</span>
              </div>
              <div className="approval-field">
                <span className="approval-field-label">Destination</span>
                <span className="approval-field-value">Checking ···4832</span>
              </div>
              <div className="approval-field">
                <span className="approval-field-label">Amount</span>
                <span className="approval-field-value approval-field-value--negative">$542</span>
              </div>
            </div>

            <div className="approval-details">
              <div className="approval-reason">
                <span className="approval-reason-label">Reason</span>
                <p className="approval-reason-text">Checking balance insufficient for 3 upcoming bills due within 5 days.</p>
              </div>
              <div className="approval-impact">
                <span className="approval-impact-label">Impact</span>
                <p className="approval-impact-text">Emergency reserve drops from $6,430 to $5,888 — still within safe range</p>
              </div>
            </div>
          </div>
        </article>

      </div>
    </section>
  );
}

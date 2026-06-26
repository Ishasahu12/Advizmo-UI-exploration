import { useState } from 'react';
import './HeroV10.css';

export default function HeroV10() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section className="action-center">
      <div className="workspace">

        {/* ── Left Panel: Recommendation ──────────────────── */}
        <div className="ws-left">
          <span className="ws-tag">Financial Recommendation</span>
          <h1 className="ws-headline">
            You can safely invest <strong>$18,420</strong> today.
          </h1>
          <p className="ws-explain">
            After reserving funds for upcoming bills and maintaining your emergency buffer,
            this amount is available for growth.
          </p>

          <div className="ws-flow">
            <div className="ws-flow-step">
              <div className="ws-flow-node ws-flow-node--base">Checking</div>
              <span className="ws-flow-val">$24,850</span>
            </div>
            <div className="ws-flow-arrow">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 3V11M4 8L7 11L10 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="ws-flow-step">
              <div className="ws-flow-node ws-flow-node--reserved">Bills Reserved</div>
              <span className="ws-flow-val">−$1,820</span>
            </div>
            <div className="ws-flow-arrow">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 3V11M4 8L7 11L10 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="ws-flow-step">
              <div className="ws-flow-node ws-flow-node--reserved">Emergency Fund Reserved</div>
              <span className="ws-flow-val">−$4,610</span>
            </div>
            <div className="ws-flow-arrow">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 3V11M4 8L7 11L10 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="ws-flow-step">
              <div className="ws-flow-node ws-flow-node--safe">Safe to Invest</div>
              <span className="ws-flow-val ws-flow-val--positive">$18,420</span>
            </div>
          </div>

          <button className="btn btn-primary ws-cta">Move Funds</button>
        </div>

        {/* ── Right Panel: Actions ────────────────────────── */}
        <div className="ws-right">
          <span className="ws-right-label">Priority Actions</span>

          <div
            className={`ws-action ${expanded === 'short' ? 'ws-action--expanded' : ''}`}
            onMouseEnter={() => setExpanded('short')}
            onMouseLeave={() => setExpanded(null)}
          >
            <div className="ws-action-top">
              <div className="ws-action-info">
                <span className="ws-action-badge ws-action-badge--urgent">Resolve</span>
                <span className="ws-action-title">Checking Short</span>
              </div>
              <span className="ws-action-amount">$542</span>
            </div>
            <div className="ws-action-details">
              <span className="ws-action-meta">5 days remaining · 3 bills affected</span>
              <div className="ws-action-bar">
                <div className="ws-action-bar-fill" style={{ width: '70%' }} />
              </div>
              <button className="btn btn-primary ws-action-btn">Resolve</button>
            </div>
          </div>

          <div
            className={`ws-action ${expanded === 'idle' ? 'ws-action--expanded' : ''}`}
            onMouseEnter={() => setExpanded('idle')}
            onMouseLeave={() => setExpanded(null)}
          >
            <div className="ws-action-top">
              <div className="ws-action-info">
                <span className="ws-action-badge ws-action-badge--invest">Invest</span>
                <span className="ws-action-title">Idle Cash</span>
              </div>
              <span className="ws-action-amount ws-action-amount--positive">$18,420</span>
            </div>
            <div className="ws-action-details">
              <span className="ws-action-meta">Potential growth +$1,245/yr</span>
              <button className="btn btn-primary ws-action-btn">Invest</button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

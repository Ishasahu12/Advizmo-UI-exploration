import './ActionCenter.css';

export default function ActionCenter() {
  return (
    <section className="action-center">
      <div className="ac-split">
        <div className="ac-split-main">
          <div className="ac-split-main-top">
            <span className="ac-split-badge">
              <span className="ac-split-dot" />
              Priority
            </span>
            <span className="ac-split-conf">87% confidence</span>
          </div>
          <h2 className="ac-split-title">Invest Idle Cash</h2>
          <p className="ac-split-desc">
            $24,850 is available to invest safely. Estimated annual growth of +$1,742.
          </p>
          <div className="ac-split-main-bottom">
            <button className="btn btn-primary ac-split-cta">Move Money</button>
            <button className="ac-split-link">How was this calculated?</button>
          </div>
        </div>

        <div className="ac-split-side">
          <div className="ac-split-side-card">
            <div className="ac-split-side-icon bills"><ShieldIcon /></div>
            <div className="ac-split-side-content">
              <span className="ac-split-side-title">Cover Upcoming Bills</span>
              <span className="ac-split-side-amount">$2,750 due in 30 days</span>
            </div>
            <button className="btn btn-ghost ac-split-side-cta">Review</button>
          </div>
          <div className="ac-split-side-card">
            <div className="ac-split-side-icon savings"><PiggyBankIcon /></div>
            <div className="ac-split-side-content">
              <span className="ac-split-side-title">Optimize Savings</span>
              <span className="ac-split-side-amount">+$328/yr potential gain</span>
            </div>
            <button className="btn btn-ghost ac-split-side-cta">Explore</button>
          </div>
        </div>
      </div>
    </section>
  );
}

function ShieldIcon() {
  return <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1.5L3 4V7.5C3 11 5.5 13.5 8 14.5C10.5 13.5 13 11 13 7.5V4L8 1.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /><path d="M6 8L7.5 9.5L10.5 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function PiggyBankIcon() {
  return <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M12 5.5C12 3.5 10.2 2 8.5 2H7.5C5.8 2 4 3.5 4 5.5V7C3 8 2 8.8 2 9.5V11H14V9.5C14 8.8 13 8 12 7V5.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /><circle cx="8" cy="11" r="1.5" stroke="currentColor" strokeWidth="1.2" /></svg>;
}

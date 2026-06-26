import './HeroV12.css';

export default function HeroV12() {
  return (
    <section className="action-center">
      <div className="brief">
        <h1 className="brief-greeting">Good Morning Sarah</h1>
        <h2 className="brief-title">Today's Financial Brief</h2>

        <div className="brief-body">
          <p className="brief-line brief-line--check">
            You have enough money to cover every upcoming bill.
          </p>
          <p className="brief-line brief-line--amount">
            <strong>$18,420</strong> is currently sitting idle.
          </p>
          <p className="brief-line">
            Moving it today could earn approximately <strong>$1,245</strong> per year.
          </p>
        </div>

        <div className="brief-recommendation">
          <span className="brief-rec-label">Recommendation</span>
          <button className="btn btn-primary brief-cta">Move Funds</button>
        </div>

        <div className="brief-secondary">
          <span className="brief-secondary-text">
            Checking account ending 4832 will be <strong>$542 short</strong> on June 28.
          </span>
          <button className="brief-resolve">Resolve →</button>
        </div>
      </div>
    </section>
  );
}

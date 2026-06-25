import './VisualAnalytics.css';

export default function VisualAnalytics() {
  return (
    <section className="visual-analytics">
      <div className="section-header">
        <h2 className="section-title">Visual Analytics</h2>
      </div>
      <div className="charts-grid">
        <div className="chart-card card">
          <div className="chart-header">
            <h3>Cash Flow Trend</h3>
            <span className="chart-period">Last 6 months</span>
          </div>
          <div className="chart-area">
            <svg viewBox="0 0 400 120" className="area-chart">
              <defs>
                <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="var(--brand-cyan)" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="var(--brand-cyan)" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0 100 L67 80 L134 85 L201 60 L268 55 L335 40 L400 30 L400 120 L0 120 Z"
                fill="url(#areaGradient)"
              />
              <path
                d="M0 100 L67 80 L134 85 L201 60 L268 55 L335 40 L400 30"
                fill="none"
                stroke="var(--brand-cyan)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="400" cy="30" r="4" fill="var(--brand-cyan)" />
            </svg>
            <div className="chart-labels">
              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
              <span>May</span>
              <span>Jun</span>
            </div>
          </div>
        </div>

        <div className="chart-card card">
          <div className="chart-header">
            <h3>Income vs Expenses</h3>
            <span className="chart-period">This Month</span>
          </div>
          <div className="bar-chart">
            <div className="bar-group">
              <div className="bar-container">
                <div className="bar income" style={{ height: '85%' }} />
                <div className="bar expense" style={{ height: '62%' }} />
              </div>
              <span className="bar-label">Week 1</span>
            </div>
            <div className="bar-group">
              <div className="bar-container">
                <div className="bar income" style={{ height: '92%' }} />
                <div className="bar expense" style={{ height: '58%' }} />
              </div>
              <span className="bar-label">Week 2</span>
            </div>
            <div className="bar-group">
              <div className="bar-container">
                <div className="bar income" style={{ height: '78%' }} />
                <div className="bar expense" style={{ height: '70%' }} />
              </div>
              <span className="bar-label">Week 3</span>
            </div>
            <div className="bar-group">
              <div className="bar-container">
                <div className="bar income" style={{ height: '100%' }} />
                <div className="bar expense" style={{ height: '65%' }} />
              </div>
              <span className="bar-label">Week 4</span>
            </div>
          </div>
          <div className="chart-legend">
            <div className="legend-item">
              <span className="legend-dot income" />
              <span>Income: $5,840</span>
            </div>
            <div className="legend-item">
              <span className="legend-dot expense" />
              <span>Expenses: $4,280</span>
            </div>
          </div>
        </div>

        <div className="chart-card card">
          <div className="chart-header">
            <h3>Asset Allocation</h3>
            <span className="chart-period">Current</span>
          </div>
          <div className="allocation-chart">
            <div className="allocation-ring">
              <svg viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" fill="none" stroke="var(--bg-tertiary)" strokeWidth="12" />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="var(--brand-cyan)"
                  strokeWidth="12"
                  strokeDasharray="150.8 100.5"
                  strokeDashoffset="0"
                  transform="rotate(-90 50 50)"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="var(--brand-purple)"
                  strokeWidth="12"
                  strokeDasharray="62.8 188.5"
                  strokeDashoffset="-150.8"
                  transform="rotate(-90 50 50)"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="var(--accent-green)"
                  strokeWidth="12"
                  strokeDasharray="37.7 213.6"
                  strokeDashoffset="-213.6"
                  transform="rotate(-90 50 50)"
                />
              </svg>
            </div>
            <div className="allocation-legend">
              <div className="allocation-item">
                <span className="allocation-dot cyan" />
                <span className="allocation-name">Stocks</span>
                <span className="allocation-value">60%</span>
              </div>
              <div className="allocation-item">
                <span className="allocation-dot purple" />
                <span className="allocation-name">Bonds</span>
                <span className="allocation-value">25%</span>
              </div>
              <div className="allocation-item">
                <span className="allocation-dot green" />
                <span className="allocation-name">Cash</span>
                <span className="allocation-value">15%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="chart-card card">
          <div className="chart-header">
            <h3>Monthly Spending</h3>
            <span className="chart-period">Last 30 days</span>
          </div>
          <div className="spending-breakdown">
            <div className="spending-category">
              <div className="spending-info">
                <span className="spending-dot housing" />
                <span className="spending-name">Housing</span>
              </div>
              <div className="spending-bar-container">
                <div className="spending-bar" style={{ width: '85%', background: 'var(--brand-purple)' }} />
              </div>
              <span className="spending-amount">$2,100</span>
            </div>
            <div className="spending-category">
              <div className="spending-info">
                <span className="spending-dot food" />
                <span className="spending-name">Food & Dining</span>
              </div>
              <div className="spending-bar-container">
                <div className="spending-bar" style={{ width: '45%', background: 'var(--brand-cyan)' }} />
              </div>
              <span className="spending-amount">$680</span>
            </div>
            <div className="spending-category">
              <div className="spending-info">
                <span className="spending-dot transport" />
                <span className="spending-name">Transportation</span>
              </div>
              <div className="spending-bar-container">
                <div className="spending-bar" style={{ width: '28%', background: 'var(--accent-green)' }} />
              </div>
              <span className="spending-amount">$420</span>
            </div>
            <div className="spending-category">
              <div className="spending-info">
                <span className="spending-dot utilities" />
                <span className="spending-name">Utilities</span>
              </div>
              <div className="spending-bar-container">
                <div className="spending-bar" style={{ width: '18%', background: 'var(--accent-blue)' }} />
              </div>
              <span className="spending-amount">$280</span>
            </div>
            <div className="spending-category">
              <div className="spending-info">
                <span className="spending-dot subscriptions" />
                <span className="spending-name">Subscriptions</span>
              </div>
              <div className="spending-bar-container">
                <div className="spending-bar" style={{ width: '15%', background: 'var(--accent-yellow)' }} />
              </div>
              <span className="spending-amount">$240</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
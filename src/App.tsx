import './index.css';

function App() {
  return (
    <div className="app-container">
      {/* Header */}
      <header className="header">
        <div className="header-left">
          <div className="logo">
            <svg className="logo-icon" viewBox="0 0 32 32" fill="none">
              <rect width="32" height="32" rx="8" fill="#5438A9"/>
              <path d="M16 6L20 12H26L21 16L23 22L16 18L9 22L11 16L6 12H12L16 6Z" fill="#18F0B8"/>
            </svg>
            <span>Advizmo</span>
          </div>
          <div className="greeting">
            Good morning, <strong>Sarah</strong>
          </div>
        </div>

        <div className="header-center">
          <div className="search-container">
            <span className="search-icon">⌕</span>
            <input type="text" className="search-input" placeholder="Search transactions, accounts..." />
          </div>
        </div>

        <div className="header-right">
          <button className="header-btn">
            <span>💬</span>
          </button>
          <button className="header-btn">
            <span>🔔</span>
            <span style={{
              position: 'absolute',
              top: '6px',
              right: '6px',
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#DC2626',
              border: '2px solid white'
            }} />
          </button>
          <div className="avatar">SK</div>
        </div>
      </header>

      {/* Main Layout */}
      <div className="main-layout">
        {/* Main Content */}
        <div className="main-content">
          {/* Action Center */}
          <section className="action-center">
            <h2 className="section-title">Today's Actions</h2>

            <div className="action-cards">
              {/* Action 1 - Bills (if urgent) */}
              <div className="action-card urgent">
                <div className="action-number">1</div>
                <div className="action-content">
                  <div className="action-header">
                    <span className="action-status urgent">
                      <span>⚠</span> Needs Funding
                    </span>
                  </div>
                  <h3 className="action-title">Short for bills this month</h3>
                  <p className="action-description">
                    Your upcoming bills exceed your available cash by $2,480
                  </p>
                  <div className="action-amount">
                    <strong>$2,480</strong> needed
                  </div>
                </div>
                <div className="action-cta">
                  <button className="action-btn primary">Add Funds</button>
                  <button className="action-btn secondary">View Bills</button>
                </div>
              </div>

              {/* Action 2 - Recurring */}
              <div className="action-card warning">
                <div className="action-number">2</div>
                <div className="action-content">
                  <div className="action-header">
                    <span className="action-status warning">
                      <span>⚙</span> Needs Setup
                    </span>
                  </div>
                  <h3 className="action-title">Set up recurring transactions</h3>
                  <p className="action-description">
                    Automate your savings and investments to build wealth consistently
                  </p>
                  <div className="action-metrics">
                    <div className="action-metric">
                      <span className="action-metric-label">Potential Impact</span>
                      <span className="action-metric-value positive">+$4,200/yr</span>
                    </div>
                  </div>
                </div>
                <div className="action-cta">
                  <button className="action-btn primary">Set Up</button>
                  <button className="action-btn secondary">Learn More</button>
                </div>
              </div>

              {/* Action 3 - Invest Idle Cash (Highlighted) */}
              <div className="action-card opportunity highlight">
                <div className="action-number">3</div>
                <div className="action-content">
                  <div className="action-header">
                    <span className="action-status opportunity">
                      <span>✨</span> Highest Opportunity
                    </span>
                  </div>
                  <h3 className="action-title">Invest idle cash</h3>
                  <p className="action-description">
                    You currently have <strong>$12,480</strong> sitting idle earning almost nothing.
                    Investing this amount could potentially generate approximately <strong>$760 annually</strong>.
                  </p>
                  <div className="action-metrics">
                    <div className="action-metric">
                      <span className="action-metric-label">Projected Annual Return</span>
                      <span className="action-metric-value positive">+$760</span>
                    </div>
                    <div className="action-metric">
                      <span className="action-metric-label">Current Yield</span>
                      <span className="action-metric-value">0.1%</span>
                    </div>
                    <div className="action-metric">
                      <span className="action-metric-label">Potential Yield</span>
                      <span className="action-metric-value positive">6.1%</span>
                    </div>
                  </div>
                </div>
                <div className="action-cta">
                  <button className="action-btn primary">Invest Now</button>
                  <button className="action-btn secondary">Why this?</button>
                </div>
              </div>
            </div>

            {/* Review CTA */}
            <div className="review-cta">
              <div className="review-cta-content">
                <h3>Review & Approve All</h3>
                <p>3 actions require your attention today</p>
              </div>
              <a className="review-link">How was this calculated?</a>
            </div>
          </section>

          {/* Financial Snapshot */}
          <section className="financial-snapshot">
            <h2 className="section-title">Financial Snapshot</h2>
            <div className="snapshot-grid">
              <div className="snapshot-card">
                <div className="snapshot-label">Net Worth</div>
                <div className="snapshot-value">$342,580</div>
                <div className="snapshot-trend up">
                  <span>↑</span> +2.4% this month
                </div>
                <div className="sparkline">
                  <div className="sparkline-bar" style={{height: '40%'}} />
                  <div className="sparkline-bar" style={{height: '50%'}} />
                  <div className="sparkline-bar" style={{height: '45%'}} />
                  <div className="sparkline-bar" style={{height: '60%'}} />
                  <div className="sparkline-bar" style={{height: '55%'}} />
                  <div className="sparkline-bar" style={{height: '70%'}} />
                  <div className="sparkline-bar" style={{height: '100%'}} />
                </div>
              </div>

              <div className="snapshot-card">
                <div className="snapshot-label">Cash Available</div>
                <div className="snapshot-value">$24,850</div>
                <div className="snapshot-trend down">
                  <span>↓</span> -1.2% this month
                </div>
                <div className="sparkline">
                  <div className="sparkline-bar" style={{height: '80%'}} />
                  <div className="sparkline-bar" style={{height: '75%'}} />
                  <div className="sparkline-bar" style={{height: '70%'}} />
                  <div className="sparkline-bar" style={{height: '65%'}} />
                  <div className="sparkline-bar" style={{height: '60%'}} />
                  <div className="sparkline-bar" style={{height: '55%'}} />
                  <div className="sparkline-bar" style={{height: '50%'}} />
                </div>
              </div>

              <div className="snapshot-card">
                <div className="snapshot-label">Invested</div>
                <div className="snapshot-value">$289,450</div>
                <div className="snapshot-trend up">
                  <span>↑</span> +3.1% this month
                </div>
                <div className="sparkline">
                  <div className="sparkline-bar" style={{height: '30%'}} />
                  <div className="sparkline-bar" style={{height: '35%'}} />
                  <div className="sparkline-bar" style={{height: '40%'}} />
                  <div className="sparkline-bar" style={{height: '50%'}} />
                  <div className="sparkline-bar" style={{height: '60%'}} />
                  <div className="sparkline-bar" style={{height: '75%'}} />
                  <div className="sparkline-bar" style={{height: '100%'}} />
                </div>
              </div>

              <div className="snapshot-card">
                <div className="snapshot-label">Monthly Income</div>
                <div className="snapshot-value">$5,840</div>
                <div className="snapshot-trend up">
                  <span>↑</span> +8% vs last month
                </div>
                <div className="sparkline">
                  <div className="sparkline-bar" style={{height: '60%'}} />
                  <div className="sparkline-bar" style={{height: '65%'}} />
                  <div className="sparkline-bar" style={{height: '70%'}} />
                  <div className="sparkline-bar" style={{height: '75%'}} />
                  <div className="sparkline-bar" style={{height: '80%'}} />
                  <div className="sparkline-bar" style={{height: '85%'}} />
                  <div className="sparkline-bar" style={{height: '100%'}} />
                </div>
              </div>
            </div>
          </section>

          {/* Financial Health */}
          <section className="financial-health">
            <h2 className="section-title">Financial Health</h2>
            <div className="health-card">
              <div className="health-header">
                <div className="health-score">
                  <div className="health-score-ring">
                    <svg width="56" height="56" viewBox="0 0 56 56">
                      <circle className="bg" cx="28" cy="28" r="24" />
                      <circle 
                        className="progress" 
                        cx="28" 
                        cy="28" 
                        r="24"
                        strokeDasharray="150.8"
                        strokeDashoffset="30"
                      />
                    </svg>
                    <div className="health-score-value">80</div>
                  </div>
                  <div className="health-score-label">
                    <h3>Good Financial Health</h3>
                    <p>Focus on improving diversification</p>
                  </div>
                </div>
                <p className="health-summary">
                  Your finances are well-managed. Addressing a few areas could improve your overall financial wellness.
                </p>
              </div>

              <div className="health-metrics">
                <div className="health-metric">
                  <div className="health-metric-header">
                    <span className="health-metric-name">Savings Rate</span>
                    <span className="health-metric-value">78%</span>
                  </div>
                  <div className="health-progress">
                    <div className="health-progress-bar yellow" style={{width: '78%'}} />
                  </div>
                </div>
                <div className="health-metric">
                  <div className="health-metric-header">
                    <span className="health-metric-name">Emergency Fund</span>
                    <span className="health-metric-value">100%</span>
                  </div>
                  <div className="health-progress">
                    <div className="health-progress-bar green" style={{width: '100%'}} />
                  </div>
                </div>
                <div className="health-metric">
                  <div className="health-metric-header">
                    <span className="health-metric-name">Debt Health</span>
                    <span className="health-metric-value">95%</span>
                  </div>
                  <div className="health-progress">
                    <div className="health-progress-bar green" style={{width: '95%'}} />
                  </div>
                </div>
                <div className="health-metric">
                  <div className="health-metric-header">
                    <span className="health-metric-name">Investment Readiness</span>
                    <span className="health-metric-value">65%</span>
                  </div>
                  <div className="health-progress">
                    <div className="health-progress-bar yellow" style={{width: '65%'}} />
                  </div>
                </div>
                <div className="health-metric">
                  <div className="health-metric-header">
                    <span className="health-metric-name">Diversification</span>
                    <span className="health-metric-value">48%</span>
                  </div>
                  <div className="health-progress">
                    <div className="health-progress-bar red" style={{width: '48%'}} />
                  </div>
                </div>
                <div className="health-metric">
                  <div className="health-metric-header">
                    <span className="health-metric-name">Tax Efficiency</span>
                    <span className="health-metric-value">72%</span>
                  </div>
                  <div className="health-progress">
                    <div className="health-progress-bar yellow" style={{width: '72%'}} />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Insights */}
          <section className="insights">
            <h2 className="section-title">Insights</h2>
            <div className="insights-grid">
              <div className="insight-card">
                <div className="insight-header">
                  <div className="insight-icon positive">✓</div>
                  <span className="insight-type">Positive</span>
                </div>
                <h3 className="insight-title">You spent 14% less than last month</h3>
                <p className="insight-description">
                  Your controlled spending habits are helping you save more. Keep it up!
                </p>
                <div className="insight-cta">View spending breakdown →</div>
              </div>

              <div className="insight-card">
                <div className="insight-header">
                  <div className="insight-icon positive">✓</div>
                  <span className="insight-type">Milestone</span>
                </div>
                <h3 className="insight-title">Emergency fund reached target</h3>
                <p className="insight-description">
                  Congratulations! You now have 6 months of expenses saved. This is a major financial milestone.
                </p>
                <div className="insight-cta">View goal details →</div>
              </div>

              <div className="insight-card">
                <div className="insight-header">
                  <div className="insight-icon neutral">💡</div>
                  <span className="insight-type">Opportunity</span>
                </div>
                <h3 className="insight-title">You have idle cash working harder</h3>
                <p className="insight-description">
                  Consider deploying your excess cash into your investment portfolio for better returns.
                </p>
                <div className="insight-cta">Learn more →</div>
              </div>

              <div className="insight-card">
                <div className="insight-header">
                  <div className="insight-icon positive">✓</div>
                  <span className="insight-type">Trend</span>
                </div>
                <h3 className="insight-title">Positive cash flow for 4 months</h3>
                <p className="insight-description">
                  You've consistently earned more than you've spent. Your savings rate is improving.
                </p>
                <div className="insight-cta">View cash flow →</div>
              </div>
            </div>
          </section>

          {/* Analytics */}
          <section className="analytics">
            <h2 className="section-title">Analytics</h2>
            <div className="analytics-grid">
              <div className="analytics-card">
                <div className="analytics-header">
                  <span className="analytics-title">Cash Flow</span>
                  <span className="analytics-period">Last 6 months</span>
                </div>
                <div className="chart-area">
                  <div className="chart-bar" style={{height: '60%'}} />
                  <div className="chart-bar" style={{height: '75%'}} />
                  <div className="chart-bar" style={{height: '65%'}} />
                  <div className="chart-bar" style={{height: '80%'}} />
                  <div className="chart-bar" style={{height: '70%'}} />
                  <div className="chart-bar" style={{height: '90%'}} />
                </div>
              </div>

              <div className="analytics-card">
                <div className="analytics-header">
                  <span className="analytics-title">Income vs Expenses</span>
                  <span className="analytics-period">This month</span>
                </div>
                <div className="chart-area">
                  <div className="chart-bar" style={{height: '85%'}} />
                  <div className="chart-bar" style={{height: '92%'}} />
                  <div className="chart-bar" style={{height: '78%'}} />
                  <div className="chart-bar" style={{height: '88%'}} />
                </div>
              </div>
            </div>
          </section>

          {/* Recent Activity */}
          <section className="recent-activity">
            <h2 className="section-title">Recent Activity</h2>
            <div className="activity-list">
              <div className="activity-item">
                <div className="activity-icon investment">📈</div>
                <div className="activity-details">
                  <div className="activity-title">Vanguard ETF Purchase</div>
                  <div className="activity-subtitle">Retirement Portfolio • Automated</div>
                </div>
                <div>
                  <div className="activity-amount negative">-$500.00</div>
                  <div className="activity-date">2 hours ago</div>
                </div>
              </div>

              <div className="activity-item">
                <div className="activity-icon transfer">💸</div>
                <div className="activity-details">
                  <div className="activity-title">Transfer to Savings</div>
                  <div className="activity-subtitle">Chase Savings • Automated</div>
                </div>
                <div>
                  <div className="activity-amount negative">-$200.00</div>
                  <div className="activity-date">Yesterday</div>
                </div>
              </div>

              <div className="activity-item">
                <div className="activity-icon transaction">🛒</div>
                <div className="activity-details">
                  <div className="activity-title">Whole Foods Market</div>
                  <div className="activity-subtitle">Grocery</div>
                </div>
                <div>
                  <div className="activity-amount negative">-$87.34</div>
                  <div className="activity-date">Yesterday</div>
                </div>
              </div>

              <div className="activity-item">
                <div className="activity-icon transaction">💰</div>
                <div className="activity-details">
                  <div className="activity-title">Direct Deposit</div>
                  <div className="activity-subtitle">Employer Payroll</div>
                </div>
                <div>
                  <div className="activity-amount positive">+$2,920.00</div>
                  <div className="activity-date">Jun 20</div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Side Panel */}
        <aside className="side-panel">
          {/* Key Dates */}
          <section className="key-dates">
            <h2 className="section-title">Upcoming Key Dates</h2>
            <div className="key-dates-card">
              <div className="key-date-item">
                <div className="key-date-icon bill">📄</div>
                <div className="key-date-content">
                  <div className="key-date-title">Electric Bill</div>
                  <div className="key-date-amount">-$124.50</div>
                </div>
                <div className="key-date-date">Tomorrow</div>
              </div>

              <div className="key-date-item">
                <div className="key-date-icon tax">📋</div>
                <div className="key-date-content">
                  <div className="key-date-title">Q2 Tax Estimate</div>
                  <div className="key-date-amount">-$3,200.00</div>
                </div>
                <div className="key-date-date">In 5 days</div>
              </div>

              <div className="key-date-item">
                <div className="key-date-icon dividend">💵</div>
                <div className="key-date-content">
                  <div className="key-date-title">Vanguard Dividend</div>
                  <div className="key-date-amount">+$48.20</div>
                </div>
                <div className="key-date-date">Jun 30</div>
              </div>

              <div className="key-date-item">
                <div className="key-date-icon transfer">🔄</div>
                <div className="key-date-content">
                  <div className="key-date-title">Paycheck Deposit</div>
                  <div className="key-date-amount">+$2,920.00</div>
                </div>
                <div className="key-date-date">Jun 28</div>
              </div>

              <div className="key-date-item">
                <div className="key-date-icon bill">🏠</div>
                <div className="key-date-content">
                  <div className="key-date-title">Rent Payment</div>
                  <div className="key-date-amount">-$1,800.00</div>
                </div>
                <div className="key-date-date">Jul 1</div>
              </div>
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
}

export default App;

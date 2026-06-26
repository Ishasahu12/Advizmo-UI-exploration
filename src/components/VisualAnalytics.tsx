import { useState } from 'react';
import './VisualAnalytics.css';

const filters = [
  { id: '1d', label: 'Yesterday' },
  { id: 'today', label: 'Today' },
  { id: '1m', label: 'This Month' },
  { id: '6m', label: '6 Months' },
  { id: '1y', label: 'Year' },
];

const insights = [
  {
    id: 'cashflow',
    title: 'Cash Flow',
    desc: 'Money in vs money out over time',
    metric: '+$1,360',
    trend: '+12%',
    trendDir: 'up' as const,
    insight: 'Income exceeded spending in every month this quarter.',
    cta: 'View Cash Flow Details',
  },
  {
    id: 'income-expenses',
    title: 'Income vs Expenses',
    desc: 'How much you keep from what you earn',
    metric: '22%',
    trend: 'Savings Rate',
    trendDir: 'neutral' as const,
    insight: 'You saved an average of 22% of your income during the selected period.',
    cta: 'View Breakdown',
  },
  {
    id: 'investment-perf',
    title: 'Investment Performance',
    desc: 'Portfolio growth and contributions',
    metric: '$289,450',
    trend: '+18.4%',
    trendDir: 'up' as const,
    insight: 'Your portfolio outperformed inflation. Contributions account for 42% of growth.',
    cta: 'View Portfolio',
  },
  {
    id: 'asset-alloc',
    title: 'Asset Allocation',
    desc: 'How your investments are distributed',
    metric: '$342,580',
    trend: 'Total Value',
    trendDir: 'neutral' as const,
    insight: 'US Equities lead at 48%. International exposure decreased 1% this month.',
    cta: 'Rebalance Portfolio',
  },
  {
    id: 'account-dist',
    title: 'Account Distribution',
    desc: 'Where your money is located',
    metric: '5',
    trend: 'Linked Accounts',
    trendDir: 'neutral' as const,
    insight: 'Most assets are in your brokerage account. Checking holds 7% of total.',
    cta: 'Manage Accounts',
  },
  {
    id: 'investment-insights',
    title: 'Investment Insights',
    desc: 'AI-generated observations',
    metric: '4',
    trend: 'New Insights',
    trendDir: 'neutral' as const,
    insight: 'Portfolio is heavily weighted toward US equities. Consider rebalancing.',
    cta: 'Review Recommendations',
  },
];

const allocation = [
  { name: 'US Equities', pct: 48, value: '$164,400', change: '+3%', color: 'var(--brand-primary)' },
  { name: 'International', pct: 25, value: '$85,600', change: '-1%', color: 'var(--chart-6)' },
  { name: 'Bonds', pct: 15, value: '$51,400', change: '+0.5%', color: 'var(--chart-1)' },
  { name: 'Cash', pct: 12, value: '$41,180', change: '-2%', color: 'var(--accent-warning)' },
];

const accounts = [
  { name: 'Brokerage', value: '$189,450', pct: 55, color: 'var(--brand-primary)' },
  { name: 'Retirement', value: '$82,300', pct: 24, color: 'var(--chart-6)' },
  { name: 'Checking', value: '$24,850', pct: 7, color: 'var(--chart-1)' },
  { name: 'Savings', value: '$34,200', pct: 10, color: 'var(--accent-warning)' },
  { name: 'Cash', value: '$11,780', pct: 4, color: 'var(--text-tertiary)' },
];

const investmentInsights = [
  { text: 'Portfolio is heavily weighted toward US equities at 48%.', action: 'Consider diversifying' },
  { text: 'Cash allocation is above your target of 10%.', action: 'Deploy idle cash' },
  { text: 'International exposure decreased 1% this month.', action: 'Review allocation' },
  { text: 'Dividend income increased by 8% compared to last quarter.', action: null },
];

export default function VisualAnalytics() {
  const [activeFilter, setActiveFilter] = useState('1m');

  return (
    <section className="visual-analytics">
      <div className="va-header">
        <div>
          <h2 className="section-title">Analytics</h2>
          <p className="section-subtitle">
            Understand how your finances are changing over time.
          </p>
        </div>
        <div className="va-filters">
          {filters.map((f) => (
            <button
              key={f.id}
              className={`filter-pill ${activeFilter === f.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <div className="va-grid">
        {/* Cash Flow */}
        <div className="va-card">
          <div className="va-card-header">
            <div>
              <h3 className="va-card-title">{insights[0].title}</h3>
              <p className="va-card-desc">{insights[0].desc}</p>
            </div>
            <div className="va-card-metric">
              <span className="va-metric-value">{insights[0].metric}</span>
              <span className="va-metric-trend trend-up">
                <TrendUpIcon /> {insights[0].trend}
              </span>
            </div>
          </div>
          <div className="va-chart">
            <svg viewBox="0 0 400 100" className="va-area-chart">
              <defs>
                <linearGradient id="cfGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="var(--accent-positive)" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="var(--accent-positive)" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M0 80 L67 65 L134 70 L201 50 L268 45 L335 35 L400 25 L400 100 L0 100Z" fill="url(#cfGrad)" />
              <path d="M0 80 L67 65 L134 70 L201 50 L268 45 L335 35 L400 25" fill="none" stroke="var(--accent-positive)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="400" cy="25" r="3" fill="var(--accent-positive)" />
            </svg>
            <div className="va-chart-labels">
              <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
            </div>
          </div>
          <div className="va-insight">
            <LightbulbIcon />
            <span>{insights[0].insight}</span>
          </div>
        </div>

        {/* Income vs Expenses */}
        <div className="va-card">
          <div className="va-card-header">
            <div>
              <h3 className="va-card-title">{insights[1].title}</h3>
              <p className="va-card-desc">{insights[1].desc}</p>
            </div>
            <div className="va-card-metric">
              <span className="va-metric-value">{insights[1].metric}</span>
              <span className="va-metric-trend trend-neutral">{insights[1].trend}</span>
            </div>
          </div>
          <div className="va-bar-chart">
            {[
              { label: 'W1', inc: 85, exp: 62 },
              { label: 'W2', inc: 92, exp: 58 },
              { label: 'W3', inc: 78, exp: 70 },
              { label: 'W4', inc: 100, exp: 65 },
            ].map((w) => (
              <div key={w.label} className="va-bar-group">
                <div className="va-bar-container">
                  <div className="va-bar income" style={{ height: `${w.inc}%` }} />
                  <div className="va-bar expense" style={{ height: `${w.exp}%` }} />
                </div>
                <span className="va-bar-label">{w.label}</span>
              </div>
            ))}
          </div>
          <div className="va-bar-legend">
            <span className="va-legend-item"><span className="va-dot income" />Income $5,840</span>
            <span className="va-legend-item"><span className="va-dot expense" />Expenses $4,480</span>
            <span className="va-legend-item"><span className="va-dot savings" />Saved $1,360</span>
          </div>
          <div className="va-insight">
            <LightbulbIcon />
            <span>{insights[1].insight}</span>
          </div>
        </div>

        {/* Investment Performance */}
        <div className="va-card">
          <div className="va-card-header">
            <div>
              <h3 className="va-card-title">{insights[2].title}</h3>
              <p className="va-card-desc">{insights[2].desc}</p>
            </div>
            <div className="va-card-metric">
              <span className="va-metric-value">{insights[2].metric}</span>
              <span className="va-metric-trend trend-up">
                <TrendUpIcon /> {insights[2].trend}
              </span>
            </div>
          </div>
          <div className="va-metrics-row">
            <div className="va-mini-stat">
              <span className="va-mini-label">Contributions</span>
              <span className="va-mini-value">$121,600</span>
            </div>
            <div className="va-mini-stat">
              <span className="va-mini-label">Investment Gains</span>
              <span className="va-mini-value positive">$167,850</span>
            </div>
          </div>
          <div className="va-chart">
            <svg viewBox="0 0 400 80" className="va-area-chart">
              <defs>
                <linearGradient id="ipGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="var(--brand-primary)" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="var(--brand-primary)" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M0 65 L67 58 L134 52 L201 45 L268 38 L335 30 L400 20 L400 80 L0 80Z" fill="url(#ipGrad)" />
              <path d="M0 65 L67 58 L134 52 L201 45 L268 38 L335 30 L400 20" fill="none" stroke="var(--brand-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="400" cy="20" r="3" fill="var(--brand-primary)" />
            </svg>
          </div>
          <div className="va-insight">
            <LightbulbIcon />
            <span>{insights[2].insight}</span>
          </div>
        </div>

        {/* Asset Allocation */}
        <div className="va-card">
          <div className="va-card-header">
            <div>
              <h3 className="va-card-title">{insights[3].title}</h3>
              <p className="va-card-desc">{insights[3].desc}</p>
            </div>
            <div className="va-card-metric">
              <span className="va-metric-value">{insights[3].metric}</span>
              <span className="va-metric-trend trend-neutral">{insights[3].trend}</span>
            </div>
          </div>
          <div className="va-allocation">
            <div className="va-donut-wrap">
              <svg viewBox="0 0 100 100" className="va-donut">
                <circle cx="50" cy="50" r="38" fill="none" stroke="var(--bg-tertiary)" strokeWidth="10" />
                {(() => {
                  let offset = 0;
                  const circumference = 2 * Math.PI * 38;
                  return allocation.map((a) => {
                    const dash = (a.pct / 100) * circumference;
                    const el = (
                      <circle
                        key={a.name}
                        cx="50" cy="50" r="38"
                        fill="none"
                        stroke={a.color}
                        strokeWidth="10"
                        strokeDasharray={`${dash} ${circumference - dash}`}
                        strokeDashoffset={`${-offset}`}
                        transform="rotate(-90 50 50)"
                      />
                    );
                    offset += dash;
                    return el;
                  });
                })()}
              </svg>
            </div>
            <div className="va-alloc-list">
              {allocation.map((a) => (
                <div key={a.name} className="va-alloc-item">
                  <span className="va-alloc-dot" style={{ background: a.color }} />
                  <span className="va-alloc-name">{a.name}</span>
                  <span className="va-alloc-pct">{a.pct}%</span>
                  <span className="va-alloc-value">{a.value}</span>
                  <span className={`va-alloc-change ${a.change.startsWith('+') ? 'positive' : 'negative'}`}>{a.change}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="va-insight">
            <LightbulbIcon />
            <span>{insights[3].insight}</span>
          </div>
        </div>

        {/* Account Distribution */}
        <div className="va-card">
          <div className="va-card-header">
            <div>
              <h3 className="va-card-title">{insights[4].title}</h3>
              <p className="va-card-desc">{insights[4].desc}</p>
            </div>
            <div className="va-card-metric">
              <span className="va-metric-value">{insights[4].metric}</span>
              <span className="va-metric-trend trend-neutral">{insights[4].trend}</span>
            </div>
          </div>
          <div className="va-account-list">
            {accounts.map((a) => (
              <div key={a.name} className="va-account-row">
                <div className="va-account-info">
                  <span className="va-account-dot" style={{ background: a.color }} />
                  <span className="va-account-name">{a.name}</span>
                </div>
                <span className="va-account-value">{a.value}</span>
                <div className="va-account-bar-wrap">
                  <div className="va-account-bar" style={{ width: `${a.pct}%`, background: a.color }} />
                </div>
                <span className="va-account-pct">{a.pct}%</span>
              </div>
            ))}
          </div>
          <div className="va-insight">
            <LightbulbIcon />
            <span>{insights[4].insight}</span>
          </div>
        </div>

        {/* Investment Insights */}
        <div className="va-card va-insights-card">
          <div className="va-card-header">
            <div>
              <h3 className="va-card-title">{insights[5].title}</h3>
              <p className="va-card-desc">{insights[5].desc}</p>
            </div>
            <div className="va-card-metric">
              <span className="va-metric-value">{insights[5].metric}</span>
              <span className="va-metric-trend trend-neutral">{insights[5].trend}</span>
            </div>
          </div>
          <div className="va-ai-insights">
            {investmentInsights.map((item, i) => (
              <div key={i} className="va-ai-row">
                <SparkleIcon />
                <span className="va-ai-text">{item.text}</span>
                {item.action && <button className="va-ai-action">{item.action}</button>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TrendUpIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M2 9L5 5.5L7.5 7.5L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LightbulbIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="va-insight-icon">
      <path d="M7 1C4.8 1 3 2.8 3 5C3 6.4 3.7 7.6 4.8 8.3V10C4.8 10.3 5 10.5 5.3 10.5H8.7C9 10.5 9.2 10.3 9.2 10V8.3C10.3 7.6 11 6.4 11 5C11 2.8 9.2 1 7 1Z" stroke="currentColor" strokeWidth="1.2" />
      <path d="M5.3 11.5H8.7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function SparkleIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="va-sparkle-icon">
      <path d="M7 1L8.2 5L12 5.8L8.2 6.6L7 10.6L5.8 6.6L2 5.8L5.8 5L7 1Z" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" />
    </svg>
  );
}

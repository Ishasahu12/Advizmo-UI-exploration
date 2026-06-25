import './FinancialSnapshot.css';

interface MetricData {
  label: string;
  value: string;
  change: number;
  trend: 'up' | 'down' | 'neutral';
  sparkline: number[];
}

const metrics: MetricData[] = [
  {
    label: 'Total Net Worth',
    value: '$342,580',
    change: 2.4,
    trend: 'up',
    sparkline: [30, 35, 32, 40, 38, 45, 48, 52],
  },
  {
    label: 'Cash Available',
    value: '$24,850',
    change: -1.2,
    trend: 'down',
    sparkline: [45, 42, 40, 38, 35, 32, 30, 28],
  },
  {
    label: 'Invested Assets',
    value: '$289,450',
    change: 3.1,
    trend: 'up',
    sparkline: [20, 25, 28, 32, 38, 42, 48, 55],
  },
  {
    label: 'Monthly Cash Flow',
    value: '+$4,280',
    change: 18,
    trend: 'up',
    sparkline: [10, 12, 15, 14, 18, 20, 22, 25],
  },
  {
    label: 'Emergency Fund',
    value: 'Fully Funded',
    change: 0,
    trend: 'neutral',
    sparkline: [100, 100, 100, 100, 100, 100, 100, 100],
  },
  {
    label: 'Portfolio Growth',
    value: '+12.4%',
    change: 2.1,
    trend: 'up',
    sparkline: [15, 16, 18, 17, 20, 22, 24, 26],
  },
];

export default function FinancialSnapshot() {
  return (
    <section className="financial-snapshot">
      <div className="section-header">
        <h2 className="section-title">Financial Snapshot</h2>
      </div>
      <div className="snapshot-grid">
        {metrics.map((metric) => (
          <div key={metric.label} className="snapshot-card card">
            <div className="snapshot-content">
              <span className="metric-label">{metric.label}</span>
              <span className="metric-value">{metric.value}</span>
              <div className="metric-change">
                {metric.trend === 'up' && <TrendingUpIcon />}
                {metric.trend === 'down' && <TrendingDownIcon />}
                {metric.trend === 'neutral' && <MinusIcon />}
                <span className={`change-value ${metric.trend === 'up' ? 'trend-up' : metric.trend === 'down' ? 'trend-down' : 'trend-neutral'}`}>
                  {metric.change > 0 ? '+' : ''}{metric.change}%
                </span>
                <span className="change-period">vs last month</span>
              </div>
            </div>
            <div className="sparkline">
              {metric.sparkline.map((value, i) => (
                <div
                  key={i}
                  className="sparkline-bar"
                  style={{ height: `${(value / 60) * 100}%` }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function TrendingUpIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M2 10L5.5 6.5L8.5 8.5L12 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function TrendingDownIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M2 4L5.5 7.5L8.5 5.5L12 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function MinusIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M3 7H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}
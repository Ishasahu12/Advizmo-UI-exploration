import { useState } from 'react';
import './FinancialSnapshot.css';

interface MetricData {
  label: string;
  value: string;
  change: Record<string, number>;
  sparkline: number[];
}

const metrics: MetricData[] = [
  {
    label: 'Net Worth',
    value: '$342,580',
    change: { '1d': 0.1, 'today': 0.1, '1m': 2.4, '6m': 8.2, '1y': 14.6 },
    sparkline: [30, 35, 32, 40, 38, 45, 48, 52],
  },
  {
    label: 'Cash Available',
    value: '$24,850',
    change: { '1d': -0.3, 'today': -0.3, '1m': -1.2, '6m': 4.5, '1y': -2.8 },
    sparkline: [45, 42, 40, 38, 35, 32, 30, 28],
  },
  {
    label: 'Invested Assets',
    value: '$289,450',
    change: { '1d': 0.4, 'today': 0.4, '1m': 3.1, '6m': 10.2, '1y': 18.4 },
    sparkline: [20, 25, 28, 32, 38, 42, 48, 55],
  },
  {
    label: 'Cash Flow',
    value: '+$4,280',
    change: { '1d': 0, 'today': 0, '1m': 18, '6m': 12, '1y': 8 },
    sparkline: [10, 12, 15, 14, 18, 20, 22, 25],
  },
  {
    label: 'Emergency Fund',
    value: '$15,000',
    change: { '1d': 0, 'today': 0, '1m': 0, '6m': 0, '1y': 0 },
    sparkline: [100, 100, 100, 100, 100, 100, 100, 100],
  },
  {
    label: 'Portfolio Growth',
    value: '+12.4%',
    change: { '1d': 0.2, 'today': 0.2, '1m': 2.1, '6m': 6.8, '1y': 12.4 },
    sparkline: [15, 16, 18, 17, 20, 22, 24, 26],
  },
];

const filters = [
  { id: '1d', label: 'Yesterday' },
  { id: 'today', label: 'Today' },
  { id: '1m', label: 'This Month' },
  { id: '6m', label: '6 Months' },
  { id: '1y', label: 'Year' },
];

const filterLabels: Record<string, string> = {
  '1d': 'vs Yesterday',
  'today': 'vs Today',
  '1m': 'vs Last Month',
  '6m': 'vs 6 Months Ago',
  '1y': 'vs Last Year',
};

export default function FinancialSnapshot() {
  const [activeFilter, setActiveFilter] = useState('1m');

  return (
    <section className="snapshot-section">
      <div className="snapshot-header">
        <div>
          <h2 className="section-title">Financial Snapshot</h2>
          <p className="section-subtitle">Your financial position at a glance</p>
        </div>
        <div className="snapshot-filters">
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

      <div className="snapshot-grid">
        {metrics.map((m) => {
          const changeVal = m.change[activeFilter];
          const trend =
            changeVal > 0 ? 'up' : changeVal < 0 ? 'down' : 'neutral';

          return (
            <div key={m.label} className="snapshot-card">
              <span className="snapshot-label">{m.label}</span>
              <span className="snapshot-value">{m.value}</span>
              <div className="snapshot-change">
                {trend === 'up' && <TrendUpIcon />}
                {trend === 'down' && <TrendDownIcon />}
                {trend === 'neutral' && <TrendNeutralIcon />}
                <span className={`change-val trend-${trend}`}>
                  {changeVal > 0 ? '+' : ''}
                  {changeVal}%
                </span>
                <span className="change-period">{filterLabels[activeFilter]}</span>
              </div>
              <div className="snapshot-sparkline">
                {m.sparkline.map((v, i) => (
                  <div
                    key={i}
                    className={`sparkline-bar ${trend}`}
                    style={{ height: `${(v / 60) * 100}%` }}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function TrendUpIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M2 9L5 5.5L7.5 7.5L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function TrendDownIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M2 3L5 6.5L7.5 4.5L10 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function TrendNeutralIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M2 6H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

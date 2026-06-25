import React from 'react';
import './FinancialSnapshot.css';

interface Metric {
  label: string;
  value: string;
  change?: string;
  trend?: 'up' | 'down' | 'neutral';
}

const metrics: Metric[] = [
  { label: 'Net Worth', value: '$342,580', change: '+2.4%', trend: 'up' },
  { label: 'Cash Available', value: '$24,850', change: '-1.2%', trend: 'down' },
  { label: 'Invested', value: '$289,450', change: '+3.1%', trend: 'up' },
  { label: 'Monthly Income', value: '$5,840', change: '+8%', trend: 'up' },
  { label: 'Monthly Expenses', value: '$4,280', change: '+2%', trend: 'down' },
  { label: 'Emergency Fund', value: '4 of 6 mo', trend: 'neutral' },
];

const FinancialSnapshot: React.FC = () => {
  return (
    <section className="financial-snapshot">
      <h2 className="section-title">Financial Position</h2>
      <div className="metrics-grid">
        {metrics.map((metric) => (
          <div key={metric.label} className="metric-card">
            <span className="metric-label">{metric.label}</span>
            <span className="metric-value">{metric.value}</span>
            {metric.change && (
              <span className={`metric-change ${metric.trend}`}>
                {metric.trend === 'up' && '↑'}
                {metric.trend === 'down' && '↓'}
                {metric.trend === 'neutral' && '→'}
                {metric.change}
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FinancialSnapshot;

import React from 'react';
import './FinancialSnapshot.css';

interface KPIData {
  label: string;
  value: string;
  change: string;
  changeType: 'positive' | 'negative' | 'neutral';
  icon: string;
}

const FinancialSnapshot: React.FC = () => {
  const kpis: KPIData[] = [
    {
      label: 'Total Net Worth',
      value: '$847,290',
      change: '+12.4%',
      changeType: 'positive',
      icon: '💎',
    },
    {
      label: 'Cash Available',
      value: '$24,850',
      change: '+4.2%',
      changeType: 'positive',
      icon: '💵',
    },
    {
      label: 'Invested Assets',
      value: '$522,440',
      change: '+8.7%',
      changeType: 'positive',
      icon: '📈',
    },
    {
      label: 'Monthly Cash Flow',
      value: '+$4,820',
      change: '+15.3%',
      changeType: 'positive',
      icon: '💰',
    },
    {
      label: 'Emergency Fund',
      value: '8.2 months',
      change: 'Fully funded',
      changeType: 'neutral',
      icon: '🛡️',
    },
    {
      label: 'Portfolio Growth',
      value: '+23.4%',
      change: 'vs last year',
      changeType: 'positive',
      icon: '🚀',
    },
  ];

  return (
    <div className="financial-snapshot">
      <h2 className="section-title">Financial Snapshot</h2>
      <div className="kpi-grid">
        {kpis.map((kpi) => (
          <div key={kpi.label} className="kpi-card">
            <div className="kpi-header">
              <span className="kpi-icon">{kpi.icon}</span>
              <span className={`kpi-change ${kpi.changeType}`}>{kpi.change}</span>
            </div>
            <div className="kpi-body">
              <span className="kpi-value">{kpi.value}</span>
              <span className="kpi-label">{kpi.label}</span>
            </div>
            <div className="kpi-sparkline">
              <svg viewBox="0 0 100 30" preserveAspectRatio="none">
                <path
                  d="M0 25 Q 25 20, 50 15 T 100 5"
                  fill="none"
                  stroke="var(--brand-cyan)"
                  strokeWidth="2"
                  opacity="0.6"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FinancialSnapshot;

import React from 'react';
import './FinancialHealth.css';

interface HealthMetric {
  label: string;
  value: number;
  status: 'excellent' | 'good' | 'fair' | 'poor';
}

const FinancialHealth: React.FC = () => {
  const healthScore = 92;
  const circumference = 2 * Math.PI * 54;
  const offset = circumference - (healthScore / 100) * circumference;

  const metrics: HealthMetric[] = [
    { label: 'Cash Efficiency', value: 94, status: 'excellent' },
    { label: 'Savings Rate', value: 78, status: 'good' },
    { label: 'Debt Health', value: 88, status: 'excellent' },
    { label: 'Investment Readiness', value: 85, status: 'good' },
    { label: 'Diversification', value: 72, status: 'fair' },
    { label: 'Tax Efficiency', value: 81, status: 'good' },
  ];

  const getStatusColor = (status: HealthMetric['status']) => {
    switch (status) {
      case 'excellent':
        return 'var(--accent-green)';
      case 'good':
        return 'var(--brand-cyan)';
      case 'fair':
        return 'var(--accent-yellow)';
      case 'poor':
        return 'var(--accent-red)';
    }
  };

  const getStatusLabel = (status: HealthMetric['status']) => {
    return status.charAt(0).toUpperCase() + status.slice(1);
  };

  return (
    <div className="financial-health">
      <h2 className="section-title">Financial Health</h2>
      <div className="health-container">
        <div className="health-score-ring">
          <svg viewBox="0 0 120 120" className="ring-svg">
            <circle
              cx="60"
              cy="60"
              r="54"
              fill="none"
              stroke="var(--bg-tertiary)"
              strokeWidth="8"
            />
            <circle
              cx="60"
              cy="60"
              r="54"
              fill="none"
              stroke="url(#healthGradient)"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              transform="rotate(-90 60 60)"
              className="ring-progress"
            />
            <defs>
              <linearGradient id="healthGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="var(--brand-purple)" />
                <stop offset="100%" stopColor="var(--brand-cyan)" />
              </linearGradient>
            </defs>
          </svg>
          <div className="ring-content">
            <span className="score-value">{healthScore}</span>
            <span className="score-label">Health Score</span>
          </div>
        </div>

        <div className="health-metrics">
          {metrics.map((metric) => (
            <div key={metric.label} className="metric-card">
              <div className="metric-header">
                <span className="metric-label">{metric.label}</span>
                <span
                  className="metric-status"
                  style={{ color: getStatusColor(metric.status) }}
                >
                  {getStatusLabel(metric.status)}
                </span>
              </div>
              <div className="metric-bar-container">
                <div className="metric-bar">
                  <div
                    className="metric-fill"
                    style={{
                      width: `${metric.value}%`,
                      backgroundColor: getStatusColor(metric.status),
                    }}
                  />
                </div>
                <span className="metric-value">{metric.value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FinancialHealth;

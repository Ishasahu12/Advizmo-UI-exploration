import React from 'react';
import './FinancialHealth.css';

interface HealthMetric {
  id: string;
  label: string;
  score: number;
  status: 'excellent' | 'good' | 'fair' | 'needs-work';
  insight: string;
}

const healthMetrics: HealthMetric[] = [
  { id: 'cash', label: 'Cash Efficiency', score: 92, status: 'excellent', insight: 'Your cash is working efficiently' },
  { id: 'savings', label: 'Savings Rate', score: 78, status: 'good', insight: '18% savings rate is above average' },
  { id: 'debt', label: 'Debt Health', score: 95, status: 'excellent', insight: 'No high-interest debt' },
  { id: 'invest', label: 'Investment Readiness', score: 65, status: 'fair', insight: 'Consider increasing emergency fund' },
  { id: 'diversification', label: 'Diversification', score: 48, status: 'needs-work', insight: 'Portfolio is heavily weighted in tech' },
  { id: 'tax', label: 'Tax Efficiency', score: 72, status: 'good', insight: 'Tax-loss harvesting opportunities available' },
];

const statusLabels = {
  excellent: 'Excellent',
  good: 'Good',
  fair: 'Fair',
  'needs-work': 'Needs Work',
};

const overallScore = Math.round(
  healthMetrics.reduce((acc, m) => acc + m.score, 0) / healthMetrics.length
);

const FinancialHealth: React.FC = () => {
  return (
    <section className="financial-health">
      <h2 className="section-title">Financial Health</h2>
      
      <div className="health-container">
        <div className="health-score-section">
          <div className="health-score">
            <span className="score-value">{overallScore}</span>
            <span className="score-label">Overall Score</span>
          </div>
          <p className="health-summary">
            Your financial health is strong. Focus on improving diversification and emergency fund coverage.
          </p>
        </div>

        <div className="health-metrics">
          {healthMetrics.map((metric) => (
            <div key={metric.id} className={`health-metric ${metric.status}`}>
              <div className="metric-header">
                <span className="metric-label">{metric.label}</span>
                <span className={`status-badge ${metric.status}`}>
                  {statusLabels[metric.status]}
                </span>
              </div>
              <div className="metric-progress">
                <div className="progress-bar">
                  <div 
                    className={`progress-fill ${metric.status === 'excellent' || metric.status === 'good' ? 'green' : metric.status === 'fair' ? 'yellow' : 'red'}`}
                    style={{ width: `${metric.score}%` }}
                  />
                </div>
                <span className="progress-value">{metric.score}</span>
              </div>
              <p className="metric-insight">{metric.insight}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FinancialHealth;

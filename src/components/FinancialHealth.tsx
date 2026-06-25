import './FinancialHealth.css';

interface HealthMetric {
  name: string;
  score: number;
  status: 'excellent' | 'good' | 'fair' | 'needs-attention';
  description: string;
  recommendation: string;
}

const healthMetrics: HealthMetric[] = [
  {
    name: 'Cash Efficiency',
    score: 92,
    status: 'excellent',
    description: 'Your cash is working efficiently with minimal idle funds',
    recommendation: 'Consider deploying 40% of idle cash into investments',
  },
  {
    name: 'Savings Rate',
    score: 78,
    status: 'good',
    description: 'You are saving 18% of your monthly income',
    recommendation: 'Increase to 20% to reach your goals faster',
  },
  {
    name: 'Debt Health',
    score: 95,
    status: 'excellent',
    description: 'No high-interest debt. All payments on schedule',
    recommendation: 'Maintain current debt management strategy',
  },
  {
    name: 'Investment Readiness',
    score: 65,
    status: 'fair',
    description: 'Emergency fund is funded but allocation could improve',
    recommendation: 'Top up emergency fund to 6 months expenses',
  },
  {
    name: 'Diversification',
    score: 48,
    status: 'needs-attention',
    description: 'Portfolio is heavily weighted in tech sector',
    recommendation: 'Rebalance to reduce concentration risk',
  },
  {
    name: 'Tax Efficiency',
    score: 72,
    status: 'good',
    description: 'Tax-loss harvesting opportunities identified',
    recommendation: 'Harvest $2,400 in losses before year end',
  },
];

export default function FinancialHealth() {
  const overallScore = Math.round(
    healthMetrics.reduce((acc, m) => acc + m.score, 0) / healthMetrics.length
  );

  return (
    <section className="financial-health">
      <div className="section-header">
        <h2 className="section-title">Financial Health Overview</h2>
      </div>
      <div className="health-card card">
        <div className="health-header">
          <div className="overall-score">
            <div className="score-circle">
              <svg viewBox="0 0 100 100" className="score-ring">
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  fill="none"
                  stroke="var(--bg-tertiary)"
                  strokeWidth="8"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  fill="none"
                  stroke="url(#scoreGradient)"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray={`${overallScore * 2.64} 264`}
                  transform="rotate(-90 50 50)"
                />
                <defs>
                  <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="var(--brand-cyan)" />
                    <stop offset="100%" stopColor="var(--brand-purple)" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="score-value">{overallScore}</div>
            </div>
            <div className="score-label">
              <span className="score-title">Overall Score</span>
              <span className="score-status">Good Financial Health</span>
            </div>
          </div>
          <div className="health-summary">
            <p>Your financial health is in good standing. Focus on improving diversification and investment readiness to optimize your portfolio.</p>
          </div>
        </div>

        <div className="health-metrics">
          {healthMetrics.map((metric) => (
            <div key={metric.name} className={`health-metric ${metric.status}`}>
              <div className="metric-header">
                <span className="metric-name">{metric.name}</span>
                <span className={`metric-badge badge-${metric.status}`}>
                  {metric.status === 'excellent' && 'Excellent'}
                  {metric.status === 'good' && 'Good'}
                  {metric.status === 'fair' && 'Fair'}
                  {metric.status === 'needs-attention' && 'Attention'}
                </span>
              </div>
              <div className="metric-progress">
                <div className="progress-bar">
                  <div
                    className={`progress-fill ${
                      metric.score >= 80 ? 'green' : metric.score >= 60 ? 'yellow' : 'red'
                    }`}
                    style={{ width: `${metric.score}%` }}
                  />
                </div>
                <span className="progress-value">{metric.score}%</span>
              </div>
              <p className="metric-description">{metric.description}</p>
              <div className="metric-recommendation">
                <span className="recommendation-label">Recommendation</span>
                <span className="recommendation-text">{metric.recommendation}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
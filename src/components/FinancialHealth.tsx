import { useInView } from '../hooks/useInView';
import './FinancialHealth.css';

interface HealthMetric {
  icon: React.ReactNode;
  name: string;
  score: number;
  status: 'excellent' | 'good' | 'fair' | 'needs-attention';
  description: string;
  suggestion: string;
}

const healthMetrics: HealthMetric[] = [
  {
    icon: <CashIcon />,
    name: 'Cash Efficiency',
    score: 92,
    status: 'excellent',
    description: 'Your cash is working efficiently with minimal idle funds.',
    suggestion: 'Consider deploying 40% of idle cash into investments.',
  },
  {
    icon: <SavingsIcon />,
    name: 'Savings Rate',
    score: 78,
    status: 'good',
    description: 'You are saving 18% of your monthly income.',
    suggestion: 'Increase to 20% to reach your goals faster.',
  },
  {
    icon: <DebtIcon />,
    name: 'Debt Health',
    score: 95,
    status: 'excellent',
    description: 'No high-interest debt. All payments on schedule.',
    suggestion: 'Maintain current debt management strategy.',
  },
  {
    icon: <InvestIcon />,
    name: 'Investment Readiness',
    score: 48,
    status: 'needs-attention',
    description: 'You have enough cash to begin investing.',
    suggestion: 'Move idle cash into investments.',
  },
  {
    icon: <EmergencyIcon />,
    name: 'Emergency Fund',
    score: 65,
    status: 'fair',
    description: 'Emergency fund is funded but could be stronger.',
    suggestion: 'Top up to 6 months of expenses.',
  },
  {
    icon: <DiversifyIcon />,
    name: 'Diversification',
    score: 72,
    status: 'good',
    description: 'Portfolio is well-diversified across sectors.',
    suggestion: 'Review international allocation.',
  },
];

const overallScore = Math.round(
  healthMetrics.reduce((acc, m) => acc + m.score, 0) / healthMetrics.length,
);

const statusLabel =
  overallScore >= 80
    ? 'Very Good'
    : overallScore >= 60
      ? 'Good'
      : overallScore >= 40
        ? 'Fair'
        : 'Needs Attention';

export default function FinancialHealth() {
  const { ref, inView } = useInView(0.1);

  return (
    <section className="health-section" ref={ref}>
      <div className="health-header">
        <h2 className="section-title">Financial Health</h2>
        <p className="section-subtitle">How your finances are performing overall</p>
      </div>

      <div className="health-overview">
        <div className="health-score-area">
          <div className="health-ring">
            <svg viewBox="0 0 100 100" className="ring-svg">
              <circle cx="50" cy="50" r="42" fill="none" stroke="var(--bg-tertiary)" strokeWidth="7" />
              <circle
                cx="50"
                cy="50"
                r="42"
                fill="none"
                stroke="url(#healthGrad)"
                strokeWidth="7"
                strokeLinecap="round"
                strokeDasharray={`${inView ? overallScore * 2.64 : 0} 264`}
                className="ring-fill-animated"
              />
              <defs>
                <linearGradient id="healthGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="var(--brand-primary)" />
                  <stop offset="100%" stopColor="var(--chart-6)" />
                </linearGradient>
              </defs>
            </svg>
            <div className="ring-value">{inView ? overallScore : 0}</div>
          </div>
          <div className="health-score-text">
            <span className="health-status">{statusLabel}</span>
            <span className="health-trend">+6 points this month</span>
          </div>
        </div>

        <div className="health-top-rec">
          <span className="rec-label">Focus Area</span>
          <span className="rec-text">Increase emergency savings and begin investing idle cash.</span>
        </div>
      </div>

      <div className="health-metrics-grid">
        {healthMetrics.map((m, idx) => (
          <div
            key={m.name}
            className={`health-metric-card status-border-${m.status}`}
            style={{ animationDelay: `${idx * 80}ms` }}
          >
            <div className="metric-top">
              <div className="metric-icon">{m.icon}</div>
              <span className={`metric-badge badge-${m.status}`}>
                {m.status === 'excellent' && 'Excellent'}
                {m.status === 'good' && 'Good'}
                {m.status === 'fair' && 'Fair'}
                {m.status === 'needs-attention' && 'Needs Attention'}
              </span>
            </div>
            <span className="metric-name">{m.name}</span>
            <div className="metric-bar-row">
              <div className="metric-bar">
                <div
                  className={`metric-bar-fill bar-${m.status}`}
                  style={{ width: inView ? `${m.score}%` : '0%' }}
                />
              </div>
              <span className="metric-score">{m.score}%</span>
            </div>
            <p className="metric-desc">{m.description}</p>
            <div className="metric-suggestion">
              <LightbulbIcon />
              <span>{m.suggestion}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CashIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <rect x="2" y="4" width="12" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="8" cy="8" r="2" stroke="currentColor" strokeWidth="1.2"/>
    </svg>
  );
}

function SavingsIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M2 12V10L4 9V6C4 3.8 5.8 2 8 2C10.2 2 12 3.8 12 6V9L14 10V12H2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M6 12V13C6 13.6 6.4 14 7 14H9C9.6 14 10 13.6 10 13V12" stroke="currentColor" strokeWidth="1.2"/>
    </svg>
  );
}

function DebtIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <rect x="2" y="4" width="12" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M5 8H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M5 10.5H8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  );
}

function InvestIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M2 14L6 9L9 11L14 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11 4H14V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function EmergencyIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M8 2L3 5.5V9.5C3 13 5.5 15.5 8 16C10.5 15.5 13 13 13 9.5V5.5L8 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M8 6V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="8" cy="11.5" r="0.75" fill="currentColor"/>
    </svg>
  );
}

function DiversifyIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M8 2C8 2 12 5 12 8C12 11 8 14 8 14" stroke="currentColor" strokeWidth="1.2"/>
      <path d="M8 2C8 2 4 5 4 8C4 11 8 14 8 14" stroke="currentColor" strokeWidth="1.2"/>
      <path d="M2.5 6H13.5" stroke="currentColor" strokeWidth="1"/>
      <path d="M2.5 10H13.5" stroke="currentColor" strokeWidth="1"/>
    </svg>
  );
}

function LightbulbIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="suggestion-icon">
      <path d="M6 1C4.1 1 2.5 2.6 2.5 4.5C2.5 5.7 3.1 6.7 4 7.3V9C4 9.3 4.2 9.5 4.5 9.5H7.5C7.8 9.5 8 9.3 8 9V7.3C8.9 6.7 9.5 5.7 9.5 4.5C9.5 2.6 7.9 1 6 1Z" stroke="currentColor" strokeWidth="1.2"/>
      <path d="M4.5 10.5H7.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  );
}

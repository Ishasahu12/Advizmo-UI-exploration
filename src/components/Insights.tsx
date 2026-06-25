import './Insights.css';

interface Insight {
  id: string;
  type: 'positive' | 'negative' | 'neutral' | 'action';
  title: string;
  description: string;
  action?: string;
  metric?: string;
}

const insights: Insight[] = [
  {
    id: '1',
    type: 'positive',
    title: 'You saved 18% more than last month',
    description: 'Your savings rate improved significantly due to increased income and reduced discretionary spending.',
    metric: '+$680',
  },
  {
    id: '2',
    type: 'positive',
    title: 'Investment contributions increased',
    description: 'You are on track to reach your annual investment goal. Contributions are 23% ahead of schedule.',
    metric: '$2,340 invested',
  },
  {
    id: '3',
    type: 'positive',
    title: 'Emergency fund reached target',
    description: 'Congratulations! Your emergency fund now covers 6 months of expenses.',
    action: 'View Goal',
  },
  {
    id: '4',
    type: 'negative',
    title: 'Subscription costs increased',
    description: 'Your subscription expenses increased by $47 this month. Consider reviewing unused services.',
    metric: '+$47',
    action: 'Review Subscriptions',
  },
  {
    id: '5',
    type: 'neutral',
    title: 'Spending remained below income',
    description: 'You spent $4,280 and earned $5,840 this month. Net savings: $1,560.',
  },
  {
    id: '6',
    type: 'action',
    title: 'Quarterly tax payment due',
    description: 'Your Q2 estimated tax payment of $3,200 is due in 5 days.',
    action: 'Make Payment',
  },
];

export default function Insights() {
  return (
    <section className="insights">
      <div className="section-header">
        <h2 className="section-title">Insights</h2>
        <span className="insights-count">6 new</span>
      </div>
      <div className="insights-grid">
        {insights.map((insight) => (
          <div key={insight.id} className={`insight-card card ${insight.type}`}>
            <div className="insight-header">
              <div className={`insight-icon ${insight.type}`}>
                {insight.type === 'positive' && <CheckIcon />}
                {insight.type === 'negative' && <AlertIcon />}
                {insight.type === 'neutral' && <InfoIcon />}
                {insight.type === 'action' && <ClockIcon />}
              </div>
              {insight.metric && (
                <span className={`insight-metric ${insight.type === 'negative' ? 'negative' : 'positive'}`}>
                  {insight.metric}
                </span>
              )}
            </div>
            <h3 className="insight-title">{insight.title}</h3>
            <p className="insight-description">{insight.description}</p>
            {insight.action && (
              <button className="insight-action">{insight.action}</button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M3 8L6.5 11.5L13 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function AlertIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M8 5V8.5M8 11H8.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M7.1 2.5L1.5 12C1.2 12.6 1.6 13.3 2.2 13.3H13.8C14.4 13.3 14.8 12.6 14.5 12L8.9 2.5C8.6 1.9 7.4 1.9 7.1 2.5Z" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M8 7V11M8 5H8.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M8 4V8L10.5 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}
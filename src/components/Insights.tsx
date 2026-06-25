import React from 'react';
import './Insights.css';

interface Insight {
  id: string;
  type: 'positive' | 'negative' | 'action' | 'info';
  title: string;
  description: string;
  metric?: string;
  action?: string;
}

const insights: Insight[] = [
  {
    id: '1',
    type: 'positive',
    title: 'Emergency fund reached 4 months',
    description: 'You\'ve built sufficient emergency savings. Consider reaching 6 months for complete security.',
    metric: '+$2,400 saved',
  },
  {
    id: '2',
    type: 'positive',
    title: 'Spending remained below income',
    description: 'You spent $4,280 against $5,840 income. Net savings: $1,560.',
    metric: '+$1,560',
  },
  {
    id: '3',
    type: 'negative',
    title: 'Subscription costs increased',
    description: 'Three subscriptions increased this month. Review unused services.',
    metric: '+$47',
    action: 'Review',
  },
  {
    id: '4',
    type: 'action',
    title: 'Quarterly tax payment due',
    description: 'Your Q2 estimated tax payment of $3,200 is due in 5 days.',
    action: 'Pay Now',
  },
];

const Insights: React.FC = () => {
  return (
    <section className="insights">
      <h2 className="section-title">Insights</h2>
      
      <div className="insights-grid">
        {insights.map((insight) => (
          <div key={insight.id} className={`insight-card ${insight.type}`}>
            <div className="insight-header">
              <span className={`insight-icon ${insight.type}`}>
                {insight.type === 'positive' && '✓'}
                {insight.type === 'negative' && '!'}
                {insight.type === 'action' && '→'}
                {insight.type === 'info' && 'i'}
              </span>
              {insight.metric && (
                <span className={`insight-metric ${insight.type === 'positive' ? 'positive' : insight.type === 'negative' ? 'negative' : ''}`}>
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
};

export default Insights;

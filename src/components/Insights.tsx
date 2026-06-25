import React from 'react';
import './Insights.css';

type InsightType = 'positive' | 'negative' | 'neutral' | 'action';

interface Insight {
  id: number;
  type: InsightType;
  title: string;
  description: string;
  metric?: string;
  actionLabel?: string;
}

const Insights: React.FC = () => {
  const insights: Insight[] = [
    {
      id: 1,
      type: 'positive',
      title: 'Emergency Fund Complete',
      description: 'You now have 8.2 months of expenses saved, exceeding your 6-month target.',
      metric: '8.2 months',
    },
    {
      id: 2,
      type: 'positive',
      title: 'Portfolio Outperforming',
      description: 'Your portfolio is up 23.4% YTD, beating the S&P 500 by 4.2 percentage points.',
      metric: '+23.4%',
    },
    {
      id: 3,
      type: 'negative',
      title: 'Subscription Creep',
      description: 'You have 23 active subscriptions totaling $847/month. Consider reviewing.',
      metric: '$847/mo',
    },
    {
      id: 4,
      type: 'action',
      title: 'Tax Loss Harvesting',
      description: 'Your AMD position has a $3,200 unrealized loss. Consider harvesting for tax benefits.',
      metric: '$3,200',
      actionLabel: 'Review Position',
    },
    {
      id: 5,
      type: 'neutral',
      title: 'Monthly Review Complete',
      description: 'All accounts reconciled. No anomalies detected in your financial activity.',
    },
    {
      id: 6,
      type: 'action',
      title: 'Roth IRA Contribution',
      description: 'You have $4,500 remaining in your 2024 Roth IRA contribution limit.',
      metric: '$4,500 left',
      actionLabel: 'Contribute Now',
    },
  ];

  const getTypeIcon = (type: InsightType) => {
    switch (type) {
      case 'positive':
        return '✓';
      case 'negative':
        return '△';
      case 'neutral':
        return '○';
      case 'action':
        return '→';
    }
  };

  const getTypeClass = (type: InsightType) => type;

  return (
    <div className="insights">
      <h2 className="section-title">AI Insights</h2>
      <div className="insights-grid">
        {insights.map((insight) => (
          <div key={insight.id} className={`insight-card ${getTypeClass(insight.type)}`}>
            <div className="insight-header">
              <span className={`insight-icon ${insight.type}`}>{getTypeIcon(insight.type)}</span>
              <span className="insight-type">{insight.type}</span>
            </div>
            <h3 className="insight-title">{insight.title}</h3>
            <p className="insight-description">{insight.description}</p>
            <div className="insight-footer">
              {insight.metric && <span className="insight-metric">{insight.metric}</span>}
              {insight.actionLabel && (
                <button className="insight-action">{insight.actionLabel}</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Insights;

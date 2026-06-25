import React from 'react';
import './ActionCenter.css';

interface ActionCard {
  title: string;
  subtitle: string;
  value: string;
  change?: string;
  changeType?: 'positive' | 'negative' | 'neutral';
}

const ActionCenter: React.FC = () => {
  const mainAction: ActionCard = {
    title: 'Idle Cash Alert',
    subtitle: 'You have uninvested cash',
    value: '$24,850',
    change: '+$2,400 this week',
    changeType: 'positive',
  };

  const sourceBreakdown = [
    { source: 'Checking Account', amount: '$12,400' },
    { source: 'Savings Account', amount: '$8,200' },
    { source: 'Money Market', amount: '$4,250' },
  ];

  const whyRecommendation = {
    title: 'Why invest now?',
    points: [
      'Market is up 2.3% this month',
      'Your risk tolerance supports it',
      'Better returns than savings account',
    ],
  };

  return (
    <div className="action-center">
      <h2 className="section-title">Action Center</h2>
      <div className="action-grid">
        <div className="action-card main-action">
          <div className="card-header">
            <span className="card-icon">💰</span>
            <span className="card-badge">Opportunity</span>
          </div>
          <div className="card-body">
            <h3 className="card-title">{mainAction.title}</h3>
            <p className="card-subtitle">{mainAction.subtitle}</p>
            <div className="card-value">{mainAction.value}</div>
            {mainAction.change && (
              <div className={`card-change ${mainAction.changeType}`}>
                {mainAction.change}
              </div>
            )}
          </div>
          <div className="card-actions">
            <button className="btn-primary">Move Money</button>
            <button className="btn-secondary">Learn More</button>
          </div>
        </div>

        <div className="action-card source-card">
          <div className="card-header">
            <span className="card-icon">🏦</span>
            <span className="card-label">Source Breakdown</span>
          </div>
          <div className="card-body">
            <ul className="source-list">
              {sourceBreakdown.map((item) => (
                <li key={item.source} className="source-item">
                  <span className="source-name">{item.source}</span>
                  <span className="source-amount">{item.amount}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="card-footer">
            <span className="total-label">Total</span>
            <span className="total-amount">$24,850</span>
          </div>
        </div>

        <div className="action-card recommendation-card">
          <div className="card-header">
            <span className="card-icon">💡</span>
            <span className="card-label">Why This Makes Sense</span>
          </div>
          <div className="card-body">
            <ul className="reason-list">
              {whyRecommendation.points.map((point, index) => (
                <li key={index} className="reason-item">
                  <span className="reason-check">✓</span>
                  <span className="reason-text">{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="card-footer insight-footer">
            <span className="ai-badge">AI Analysis</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActionCenter;

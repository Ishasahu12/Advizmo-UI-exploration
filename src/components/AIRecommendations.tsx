import React from 'react';
import './AIRecommendations.css';

interface Recommendation {
  id: number;
  title: string;
  description: string;
  confidence: number;
  impact: 'high' | 'medium' | 'low';
  difficulty: 'easy' | 'moderate' | 'challenging';
  benefit: string;
  category: string;
  actionLabel?: string;
}

const AIRecommendations: React.FC = () => {
  const recommendations: Recommendation[] = [
    {
      id: 1,
      title: 'Rebalance Portfolio',
      description: 'Your tech allocation is 8% overweight. Rebalancing would reduce risk and capture gains from winners.',
      confidence: 94,
      impact: 'high',
      difficulty: 'easy',
      benefit: 'Reduced risk, better diversification',
      category: 'Investing',
      actionLabel: 'Rebalance Now',
    },
    {
      id: 2,
      title: 'Maximize Roth IRA',
      description: 'You have $4,500 remaining in your 2024 Roth IRA contribution limit. Tax-free growth opportunity.',
      confidence: 98,
      impact: 'high',
      difficulty: 'easy',
      benefit: '$4,500 tax-advantaged growth',
      category: 'Tax',
      actionLabel: 'Contribute',
    },
    {
      id: 3,
      title: 'Emergency Fund Boost',
      description: 'Consider increasing your emergency fund to 9 months given your recent job change.',
      confidence: 87,
      impact: 'medium',
      difficulty: 'moderate',
      benefit: 'Greater financial security',
      category: 'Savings',
    },
    {
      id: 4,
      title: 'Tax Loss Harvesting',
      description: 'AMD position has $3,200 unrealized loss. Harvesting would offset gains and reduce tax liability.',
      confidence: 91,
      impact: 'high',
      difficulty: 'moderate',
      benefit: '~$960 tax savings',
      category: 'Tax',
      actionLabel: 'Review',
    },
    {
      id: 5,
      title: 'Refinance Mortgage',
      description: 'Current rate 6.5% is 1.2% above market. Refinancing could save $14,400 over loan term.',
      confidence: 82,
      impact: 'medium',
      difficulty: 'challenging',
      benefit: '$14,400 interest savings',
      category: 'Debt',
    },
    {
      id: 6,
      title: 'Subscription Audit',
      description: '23 active subscriptions costing $847/month. 4 appear unused and could save $124/month.',
      confidence: 89,
      impact: 'low',
      difficulty: 'easy',
      benefit: '$1,488 annual savings',
      category: 'Savings',
      actionLabel: 'Review',
    },
  ];

  const getImpactColor = (impact: Recommendation['impact']) => {
    switch (impact) {
      case 'high':
        return 'var(--accent-green)';
      case 'medium':
        return 'var(--accent-yellow)';
      case 'low':
        return 'var(--text-tertiary)';
    }
  };

  const getDifficultyColor = (difficulty: Recommendation['difficulty']) => {
    switch (difficulty) {
      case 'easy':
        return 'var(--accent-green)';
      case 'moderate':
        return 'var(--accent-yellow)';
      case 'challenging':
        return 'var(--accent-red)';
    }
  };

  return (
    <div className="ai-recommendations">
      <div className="section-header">
        <h2 className="section-title">AI Recommendations</h2>
        <div className="header-badge">6 Insights</div>
      </div>
      <div className="recommendations-grid">
        {recommendations.map((rec) => (
          <div key={rec.id} className="recommendation-card">
            <div className="card-header">
              <span className="category-badge">{rec.category}</span>
              <div className="confidence-meter">
                <span className="confidence-label">Confidence</span>
                <span className="confidence-value">{rec.confidence}%</span>
              </div>
            </div>
            <h3 className="card-title">{rec.title}</h3>
            <p className="card-description">{rec.description}</p>
            <div className="card-metrics">
              <div className="metric">
                <span className="metric-label">Impact</span>
                <span className="metric-value" style={{ color: getImpactColor(rec.impact) }}>
                  {rec.impact.charAt(0).toUpperCase() + rec.impact.slice(1)}
                </span>
              </div>
              <div className="metric">
                <span className="metric-label">Difficulty</span>
                <span className="metric-value" style={{ color: getDifficultyColor(rec.difficulty) }}>
                  {rec.difficulty.charAt(0).toUpperCase() + rec.difficulty.slice(1)}
                </span>
              </div>
            </div>
            <div className="card-benefit">
              <span className="benefit-icon">✨</span>
              <span className="benefit-text">{rec.benefit}</span>
            </div>
            {rec.actionLabel && (
              <button className="action-btn">{rec.actionLabel}</button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AIRecommendations;

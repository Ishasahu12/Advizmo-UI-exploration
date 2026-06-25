import React from 'react';
import './AIRecommendations.css';

interface AIRecommendation {
  id: string;
  category: 'invest' | 'save' | 'reduce' | 'plan';
  title: string;
  description: string;
  potential: string;
  effort: 'low' | 'medium' | 'high';
  action: string;
}

const recommendations: AIRecommendation[] = [
  {
    id: '1',
    category: 'invest',
    title: 'Roth IRA Conversion',
    description: 'Convert $15k of traditional IRA to Roth while in lower tax bracket this year.',
    potential: '+$28,400 in tax-free growth',
    effort: 'medium',
    action: 'Start Conversion',
  },
  {
    id: '2',
    category: 'save',
    title: 'High-Yield Savings',
    description: 'Move emergency fund to 4.5% APY account for $960 annual yield.',
    potential: '+$960/year',
    effort: 'low',
    action: 'Compare Accounts',
  },
  {
    id: '3',
    category: 'reduce',
    title: 'Subscription Audit',
    description: 'You have 3 underutilized subscriptions worth $127/month.',
    potential: '+$1,524/year',
    effort: 'low',
    action: 'Review Now',
  },
  {
    id: '4',
    category: 'plan',
    title: 'Tax-Loss Harvesting',
    description: 'Realize $3,200 in losses to offset gains and reduce tax bill.',
    potential: '~$640 tax savings',
    effort: 'medium',
    action: 'View Opportunities',
  },
];

const categoryLabels: Record<AIRecommendation['category'], string> = {
  invest: 'Investing',
  save: 'Saving',
  reduce: 'Reducing',
  plan: 'Planning',
};

const effortLabels: Record<AIRecommendation['effort'], string> = {
  low: 'Easy',
  medium: 'Moderate',
  high: 'Effort',
};

const AIRecommendations: React.FC = () => {
  return (
    <section className="ai-recommendations">
      <div className="section-header">
        <h2 className="section-title">AI Recommendations</h2>
        <span className="ai-badge">Powered by AI</span>
      </div>
      
      <div className="recommendations-grid">
        {recommendations.map((rec) => (
          <div key={rec.id} className={`recommendation-card ${rec.category}`}>
            <div className="rec-header">
              <span className={`category-badge ${rec.category}`}>
                {categoryLabels[rec.category]}
              </span>
              <span className={`effort-badge ${rec.effort}`}>
                {effortLabels[rec.effort]}
              </span>
            </div>
            <h3 className="rec-title">{rec.title}</h3>
            <p className="rec-description">{rec.description}</p>
            <div className="rec-potential">
              <span className="potential-label">Potential</span>
              <span className="potential-value">{rec.potential}</span>
            </div>
            <button className="rec-action">{rec.action}</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AIRecommendations;

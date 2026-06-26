import { useInView } from '../hooks/useInView';
import './AIRecommendations.css';

interface Recommendation {
  id: string;
  title: string;
  description: string;
  confidence: number;
  impact: 'high' | 'medium' | 'low';
  difficulty: 'easy' | 'moderate' | 'effort';
  benefit: string;
  category: string;
}

const recommendations: Recommendation[] = [
  {
    id: '1',
    title: 'Move idle cash to high-yield savings',
    description: 'You have $24,850 sitting in your checking account earning 0.1% APY. Moving to a high-yield savings account could earn you 4.5% APY.',
    confidence: 94,
    impact: 'high',
    difficulty: 'easy',
    benefit: '+$1,092/yr',
    category: 'Savings',
  },
  {
    id: '2',
    title: 'Increase emergency fund to 6 months',
    description: 'Your emergency fund covers 4 months of expenses. Increasing to 6 months provides a stronger safety net.',
    confidence: 88,
    impact: 'medium',
    difficulty: 'moderate',
    benefit: 'Peace of mind',
    category: 'Safety',
  },
  {
    id: '3',
    title: 'Reduce subscription services',
    description: 'You have 8 active subscriptions totaling $240/month. Reviewing unused services could save $80/month.',
    confidence: 82,
    impact: 'medium',
    difficulty: 'easy',
    benefit: '+$960/yr',
    category: 'Spending',
  },
  {
    id: '4',
    title: 'Rebalance portfolio allocation',
    description: 'Your tech allocation is 45% vs. recommended 25%. Rebalancing reduces concentration risk.',
    confidence: 76,
    impact: 'high',
    difficulty: 'effort',
    benefit: 'Risk reduction',
    category: 'Investing',
  },
  {
    id: '5',
    title: 'Harvest tax losses',
    description: 'You have $2,400 in unrealized losses in VXUS. Harvesting these could offset gains elsewhere.',
    confidence: 91,
    impact: 'medium',
    difficulty: 'moderate',
    benefit: '-$360 tax saved',
    category: 'Tax',
  },
  {
    id: '6',
    title: 'Set up automatic investments',
    description: 'Automating weekly contributions of $100 to your portfolio removes emotion and builds discipline.',
    confidence: 89,
    impact: 'medium',
    difficulty: 'easy',
    benefit: '+$5,200/yr invested',
    category: 'Investing',
  },
];

export default function AIRecommendations() {
  const { ref, inView } = useInView(0.1);

  return (
    <section className="ai-recommendations" ref={ref}>
      <div className="section-header">
        <h2 className="section-title">AI Recommendations</h2>
        <div className="ai-badge">
          <AIIcon />
          <span>Powered by Advizmo AI</span>
        </div>
      </div>
      <div className="recommendations-grid">
        {recommendations.map((rec, idx) => (
          <div
            key={rec.id}
            className="recommendation-card card"
            style={{ animationDelay: inView ? `${idx * 60}ms` : '0ms' }}
          >
            <div className="rec-header">
              <span className={`rec-category ${rec.category.toLowerCase()}`}>{rec.category}</span>
              <div className="rec-confidence">
                <span className="confidence-label">Confidence</span>
                <span className="confidence-value">{rec.confidence}%</span>
              </div>
            </div>
            <h3 className="rec-title">{rec.title}</h3>
            <p className="rec-description">{rec.description}</p>
            <div className="rec-footer">
              <div className="rec-meta">
                <div className={`rec-impact impact-${rec.impact}`}>
                  <ImpactIcon />
                  <span>{rec.impact} impact</span>
                </div>
                <div className={`rec-difficulty diff-${rec.difficulty}`}>
                  <DifficultyIcon />
                  <span>{rec.difficulty}</span>
                </div>
              </div>
              <div className="rec-benefit">
                <span className="benefit-label">Est. Benefit</span>
                <span className="benefit-value">{rec.benefit}</span>
              </div>
            </div>
            <button className="rec-action btn btn-primary">Take Action</button>
          </div>
        ))}
      </div>
    </section>
  );
}

function AIIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M7 1L8.5 5L13 5.5L9.5 8.5L10.5 13L7 10.5L3.5 13L4.5 8.5L1 5.5L5.5 5L7 1Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>
  );
}

function ImpactIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M2 8L5 5L7 6.5L10 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function DifficultyIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <circle cx="6" cy="6" r="4" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M6 4V6L7.5 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}
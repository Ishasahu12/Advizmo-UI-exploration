import React from 'react';
import './ActionCenter.css';

interface Action {
  id: string;
  type: 'invest' | 'transfer' | 'save' | 'optimize';
  priority: 'high' | 'medium' | 'low';
  title: string;
  description: string;
  context: {
    what: string;
    why: string;
    result: string;
  };
  amount?: string;
  benefit?: string;
  cta: string;
}

const actions: Action[] = [
  {
    id: '1',
    type: 'invest',
    priority: 'high',
    title: 'Invest Idle Cash',
    description: 'You have uninvested cash that could be working harder for you.',
    context: {
      what: '$24,850 sitting in your checking account',
      why: 'Money in checking earns 0.1% APY while investments historically return 7-10% annually',
      result: 'Potential $1,742 in annual returns',
    },
    amount: '$24,850',
    benefit: '+$1,742/year',
    cta: 'Invest Now',
  },
  {
    id: '2',
    type: 'transfer',
    priority: 'high',
    title: 'Bills Due Soon',
    description: 'Several bills are approaching their due dates.',
    context: {
      what: '$3,420 in bills due within 5 days',
      why: 'Avoid late fees and maintain good credit standing',
      result: 'Auto-transfer to cover upcoming expenses',
    },
    amount: '$3,420',
    cta: 'Review Bills',
  },
  {
    id: '3',
    type: 'save',
    priority: 'medium',
    title: 'Build Emergency Fund',
    description: 'Your emergency fund covers 4 months. Target is 6 months.',
    context: {
      what: 'Add $4,200 to reach your safety goal',
      why: 'A 6-month emergency fund provides stronger financial security',
      result: 'Peace of mind with adequate protection',
    },
    amount: '$4,200',
    benefit: '6 mo coverage',
    cta: 'Add to Savings',
  },
];

const priorityLabels = {
  high: 'Priority Action',
  medium: 'Recommended',
  low: 'Consider',
};

const ActionCenter: React.FC = () => {
  return (
    <section className="action-center">
      <h2 className="section-title">What needs your attention</h2>
      
      <div className="actions-container">
        {actions.map((action) => (
          <div key={action.id} className={`action-card priority-${action.priority}`}>
            <div className="action-header">
              <span className={`priority-badge ${action.priority}`}>
                {priorityLabels[action.priority]}
              </span>
              {action.benefit && (
                <span className="benefit-tag">{action.benefit}</span>
              )}
            </div>

            <div className="action-content">
              <h3 className="action-title">{action.title}</h3>
              <p className="action-description">{action.description}</p>

              <div className="action-context">
                <div className="context-item">
                  <span className="context-label">What</span>
                  <span className="context-value">{action.context.what}</span>
                </div>
                <div className="context-item">
                  <span className="context-label">Why</span>
                  <span className="context-value">{action.context.why}</span>
                </div>
                <div className="context-item highlight">
                  <span className="context-label">Result</span>
                  <span className="context-value">{action.context.result}</span>
                </div>
              </div>
            </div>

            <div className="action-footer">
              <div className="action-amount">
                {action.amount}
              </div>
              <button className="action-cta">
                {action.cta}
                <span className="cta-arrow">→</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ActionCenter;

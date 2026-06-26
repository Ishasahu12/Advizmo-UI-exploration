import './ActionCenter.css';

interface ActionItem {
  id: string;
  icon: React.ReactNode;
  priority: 'high' | 'medium' | 'low';
  title: string;
  description: string;
  impact: string;
  impactLabel: string;
  impactPositive: boolean;
  cta: string;
  secondaryLink: string;
}

const actions: ActionItem[] = [
  {
    id: 'invest',
    icon: <TrendingUpIcon />,
    priority: 'high',
    title: 'Invest Idle Cash',
    description:
      '$24,850 sitting in checking could grow instead of losing value to inflation.',
    impact: '+$1,742',
    impactLabel: 'Potential annual growth',
    impactPositive: true,
    cta: 'Move Money',
    secondaryLink: 'Why this recommendation?',
  },
  {
    id: 'bills',
    icon: <ShieldIcon />,
    priority: 'medium',
    title: 'Cover Upcoming Bills',
    description:
      '$2,750 in bills due within 30 days. Ensure sufficient balance to avoid overdraft.',
    impact: '$2,750',
    impactLabel: 'Due in next 30 days',
    impactPositive: false,
    cta: 'Review Bills',
    secondaryLink: 'View all upcoming',
  },
  {
    id: 'savings',
    icon: <PiggyBankIcon />,
    priority: 'medium',
    title: 'Optimize Savings',
    description:
      '$8,200 in low-yield savings could earn 4.5% APY in a high-yield account.',
    impact: '+$328',
    impactLabel: 'Additional yearly earnings',
    impactPositive: true,
    cta: 'Explore Options',
    secondaryLink: 'How was this calculated?',
  },
];

export default function ActionCenter() {
  return (
    <section className="action-center">
      <div className="ac-grid">
        {actions.map((action) => (
          <article key={action.id} className="ac-card">
            <div className="ac-card-top">
              <div className="ac-card-icon">{action.icon}</div>
              <span className={`ac-priority ac-priority-${action.priority}`}>
                {action.priority}
              </span>
            </div>

            <h3 className="ac-card-title">{action.title}</h3>
            <p className="ac-card-desc">{action.description}</p>

            <div className="ac-card-impact">
              <span
                className={`ac-impact-value ${
                  action.impactPositive ? 'positive' : 'neutral'
                }`}
              >
                {action.impact}
              </span>
              <span className="ac-impact-label">{action.impactLabel}</span>
            </div>

            <div className="ac-card-footer">
              <button className="btn btn-primary ac-cta">{action.cta}</button>
              <button className="ac-secondary-link">
                {action.secondaryLink}
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function TrendingUpIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M3 14L7.5 9.5L10.5 12L17 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 5H17V9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M10 2L3 5.5V9.5C3 13.6 5.9 17.4 10 18.5C14.1 17.4 17 13.6 17 9.5V5.5L10 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 10L9.5 12L13 8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PiggyBankIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M15.5 7C15.5 4.5 13 3 10.5 3H9.5C7 3 4.5 4.5 4.5 7V9C4.5 10.5 3.5 11.5 2 12V13.5H18V12C16.5 11.5 15.5 10.5 15.5 9V7Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 15H2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle
        cx="10"
        cy="15"
        r="2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

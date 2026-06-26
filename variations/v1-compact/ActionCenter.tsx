import './ActionCenter.css';

interface ActionItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  amount: string;
  amountLabel: string;
  cta: string;
}

const actions: ActionItem[] = [
  {
    id: 'invest',
    icon: <TrendUpIcon />,
    title: 'Invest Idle Cash',
    amount: '$24,850',
    amountLabel: 'available',
    cta: 'Move Money',
  },
  {
    id: 'bills',
    icon: <ShieldIcon />,
    title: 'Cover Upcoming Bills',
    amount: '$2,750',
    amountLabel: 'due soon',
    cta: 'Review',
  },
  {
    id: 'savings',
    icon: <PiggyBankIcon />,
    title: 'Optimize Savings',
    amount: '+$328/yr',
    amountLabel: 'potential gain',
    cta: 'Explore',
  },
];

export default function ActionCenter() {
  return (
    <section className="action-center">
      <div className="ac-strip">
        {actions.map((a) => (
          <div key={a.id} className="ac-strip-card">
            <div className="ac-strip-icon">{a.icon}</div>
            <div className="ac-strip-content">
              <span className="ac-strip-title">{a.title}</span>
              <div className="ac-strip-amount-row">
                <span className="ac-strip-amount">{a.amount}</span>
                <span className="ac-strip-label">{a.amountLabel}</span>
              </div>
            </div>
            <button className="btn btn-primary ac-strip-cta">{a.cta}</button>
          </div>
        ))}
      </div>
    </section>
  );
}

function TrendUpIcon() {
  return <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 12L5.5 8L8.5 10L14 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M11 4H14V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function ShieldIcon() {
  return <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1.5L3 4V7.5C3 11 5.5 13.5 8 14.5C10.5 13.5 13 11 13 7.5V4L8 1.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /></svg>;
}

function PiggyBankIcon() {
  return <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M12 5.5C12 3.5 10.2 2 8.5 2H7.5C5.8 2 4 3.5 4 5.5V7C3 8 2 8.8 2 9.5V11H14V9.5C14 8.8 13 8 12 7V5.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /><circle cx="8" cy="11" r="1.5" stroke="currentColor" strokeWidth="1.2" /></svg>;
}

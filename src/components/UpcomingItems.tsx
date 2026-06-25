import './UpcomingItems.css';

interface UpcomingItem {
  id: string;
  type: 'bill' | 'deposit' | 'tax' | 'opportunity';
  title: string;
  subtitle: string;
  amount?: string;
  date: string;
  urgent?: boolean;
}

const upcomingItems: UpcomingItem[] = [
  {
    id: '1',
    type: 'bill',
    title: 'Internet Bill',
    subtitle: 'Comcast',
    amount: '-$89.00',
    date: 'Tomorrow',
    urgent: true,
  },
  {
    id: '2',
    type: 'tax',
    title: 'Q2 Estimated Tax',
    subtitle: 'IRS',
    amount: '-$3,200.00',
    date: 'In 5 days',
    urgent: true,
  },
  {
    id: '3',
    type: 'deposit',
    title: 'Paycheck Deposit',
    subtitle: 'Employer',
    amount: '+$2,920.00',
    date: 'Jun 28',
  },
  {
    id: '4',
    type: 'opportunity',
    title: 'Vanguard Dividend',
    subtitle: 'Quarterly distribution',
    amount: '+$48.20',
    date: 'Jun 30',
  },
  {
    id: '5',
    type: 'bill',
    title: 'Car Insurance',
    subtitle: 'Geico',
    amount: '-$156.00',
    date: 'Jul 1',
  },
  {
    id: '6',
    type: 'opportunity',
    title: 'Rebalance Portfolio',
    subtitle: 'Annual review recommended',
    date: 'Jul 15',
  },
];

export default function UpcomingItems() {
  return (
    <section className="upcoming-items">
      <div className="section-header">
        <h2 className="section-title">Upcoming</h2>
      </div>
      <div className="upcoming-grid">
        {upcomingItems.map((item) => (
          <div key={item.id} className={`upcoming-card card ${item.urgent ? 'urgent' : ''}`}>
            <div className={`upcoming-icon ${item.type}`}>
              {item.type === 'bill' && <BillIcon />}
              {item.type === 'deposit' && <DepositIcon />}
              {item.type === 'tax' && <TaxIcon />}
              {item.type === 'opportunity' && <OpportunityIcon />}
            </div>
            <div className="upcoming-content">
              <span className="upcoming-title">{item.title}</span>
              <span className="upcoming-subtitle">{item.subtitle}</span>
            </div>
            <div className="upcoming-meta">
              {item.amount && (
                <span className={`upcoming-amount ${item.amount.startsWith('+') ? 'positive' : ''}`}>
                  {item.amount}
                </span>
              )}
              <span className={`upcoming-date ${item.urgent ? 'urgent' : ''}`}>{item.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function BillIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M3 2H12L15 5V14C15 14.5 14.5 15 14 15H3C2.5 15 2 14.5 2 14V3C2 2.5 2.5 2 3 2Z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M12 2V5H15" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M4 8H12M4 11H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function DepositIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M8 2V11M8 11L5 8M8 11L11 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 14H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function TaxIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M3 14V4L8 2L13 4V14H10V10H6V14H3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M6 6H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function OpportunityIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M8 2L10 6L14 6.5L11 9.5L12 14L8 11.5L4 14L5 9.5L2 6.5L6 6L8 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>
  );
}
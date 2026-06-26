import { useInView } from '../hooks/useInView';
import './UpcomingItems.css';

interface Bill {
  id: string;
  icon: React.ReactNode;
  name: string;
  category: string;
  dueDate: string;
  daysRemaining: number;
  amount: string;
  status: 'due-tomorrow' | 'due-soon' | 'upcoming' | 'auto-pay' | 'paid';
}

const bills: Bill[] = [
  {
    id: '1',
    icon: <WifiIcon />,
    name: 'Comcast Internet',
    category: 'Utilities',
    dueDate: 'Jun 27',
    daysRemaining: 1,
    amount: '$89.00',
    status: 'due-tomorrow',
  },
  {
    id: '2',
    icon: <TaxIcon />,
    name: 'Q2 Estimated Tax',
    category: 'Tax',
    dueDate: 'Jul 1',
    daysRemaining: 5,
    amount: '$3,200.00',
    status: 'due-soon',
  },
  {
    id: '3',
    icon: <CarIcon />,
    name: 'Geico Car Insurance',
    category: 'Insurance',
    dueDate: 'Jul 1',
    daysRemaining: 5,
    amount: '$156.00',
    status: 'auto-pay',
  },
  {
    id: '4',
    icon: <MusicIcon />,
    name: 'Spotify Premium',
    category: 'Subscription',
    dueDate: 'Jul 3',
    daysRemaining: 7,
    amount: '$10.99',
    status: 'auto-pay',
  },
  {
    id: '5',
    icon: <PhoneIcon />,
    name: 'Verizon Wireless',
    category: 'Utilities',
    dueDate: 'Jul 8',
    daysRemaining: 12,
    amount: '$85.00',
    status: 'upcoming',
  },
];

const totalDue = '$3,540.99';
const billsCount = bills.length;
const nextBill = 'Tomorrow';

export default function UpcomingItems() {
  const { ref, inView } = useInView(0.1);

  return (
    <section className="upcoming-section" ref={ref}>
      <div className="upcoming-header">
        <div>
          <h2 className="section-title">Upcoming Bills</h2>
          <p className="section-subtitle">Bills and payments due soon</p>
        </div>
        <button className="btn btn-ghost btn-sm upcoming-view-all">View All Bills</button>
      </div>

      <div className="upcoming-layout">
        <div className="upcoming-summary">
          <div className="summary-stat">
            <span className="summary-label">Total Due</span>
            <span className="summary-value">{totalDue}</span>
          </div>
          <div className="summary-divider" />
          <div className="summary-stat">
            <span className="summary-label">Bills</span>
            <span className="summary-value">{billsCount}</span>
          </div>
          <div className="summary-divider" />
          <div className="summary-stat">
            <span className="summary-label">Next Payment</span>
            <span className="summary-value summary-urgent">{nextBill}</span>
          </div>
        </div>

        <div className="upcoming-list">
          {bills.map((bill, idx) => (
            <div
              key={bill.id}
              className="bill-row"
              style={{ animationDelay: inView ? `${idx * 50}ms` : '0ms' }}
            >
              <div className="bill-icon">{bill.icon}</div>
              <div className="bill-info">
                <span className="bill-name">{bill.name}</span>
                <span className="bill-category">{bill.category}</span>
              </div>
              <div className="bill-due">
                <span className="bill-date">{bill.dueDate}</span>
                <span className="bill-days">{bill.daysRemaining}d</span>
              </div>
              <div className="bill-amount">{bill.amount}</div>
              <span className={`bill-status status-${bill.status}`}>
                {bill.status === 'due-tomorrow' && 'Due Tomorrow'}
                {bill.status === 'due-soon' && 'Due Soon'}
                {bill.status === 'upcoming' && 'Upcoming'}
                {bill.status === 'auto-pay' && 'Auto Pay'}
                {bill.status === 'paid' && 'Paid'}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WifiIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M8 12.5C8.7 12.5 9.2 12 9.2 11.3C9.2 10.6 8.7 10.1 8 10.1C7.3 10.1 6.8 10.6 6.8 11.3C6.8 12 7.3 12.5 8 12.5Z" fill="currentColor"/>
      <path d="M4.1 8.8C5.1 7.8 6.5 7.2 8 7.2C9.5 7.2 10.9 7.8 11.9 8.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M1.5 6.2C3.2 4.5 5.5 3.5 8 3.5C10.5 3.5 12.8 4.5 14.5 6.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
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

function CarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M2 10L3.5 5H12.5L14 10V12H2V10Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <circle cx="4.5" cy="12" r="1.5" stroke="currentColor" strokeWidth="1.2"/>
      <circle cx="11.5" cy="12" r="1.5" stroke="currentColor" strokeWidth="1.2"/>
    </svg>
  );
}

function MusicIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="5" cy="12" r="2" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="11" cy="10" r="2" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M7 12V4L13 2V10" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <rect x="4" y="1" width="8" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M7 12.5H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

import { useInView } from '../hooks/useInView';
import './RecentActivity.css';

interface Activity {
  id: string;
  type: 'transaction' | 'investment' | 'transfer' | 'bill';
  title: string;
  subtitle: string;
  amount: string;
  time: string;
  status: 'completed' | 'pending';
}

const activities: Activity[] = [
  {
    id: '1',
    type: 'investment',
    title: 'Vanguard ETF Purchase',
    subtitle: 'VTI • Retirement Portfolio',
    amount: '-$500.00',
    time: '2 hours ago',
    status: 'completed',
  },
  {
    id: '2',
    type: 'transfer',
    title: 'Transfer to Savings',
    subtitle: 'Chase Savings • Automatic',
    amount: '-$200.00',
    time: 'Yesterday',
    status: 'completed',
  },
  {
    id: '3',
    type: 'transaction',
    title: 'Whole Foods Market',
    subtitle: 'Grocery',
    amount: '-$87.34',
    time: 'Yesterday',
    status: 'completed',
  },
  {
    id: '4',
    type: 'transaction',
    title: 'Direct Deposit',
    subtitle: 'Employer Payroll',
    amount: '+$2,920.00',
    time: 'Jun 20',
    status: 'completed',
  },
  {
    id: '5',
    type: 'bill',
    title: 'Electric Bill',
    subtitle: 'PG&E',
    amount: '-$124.50',
    time: 'Jun 18',
    status: 'completed',
  },
  {
    id: '6',
    type: 'investment',
    title: 'Dividend Reinvestment',
    subtitle: 'VTI • Quarterly',
    amount: '+$42.18',
    time: 'Jun 15',
    status: 'completed',
  },
  {
    id: '7',
    type: 'transfer',
    title: 'Rent Payment',
    subtitle: 'Landlord • June',
    amount: '-$1,800.00',
    time: 'Jun 1',
    status: 'completed',
  },
];

export default function RecentActivity() {
  const { ref, inView } = useInView(0.1);

  return (
    <section className="recent-activity" ref={ref}>
      <div className="section-header">
        <h2 className="section-title">Recent Activity</h2>
        <button className="view-all-btn">View All</button>
      </div>
      <div className="activity-card card">
        <div className="timeline">
          {activities.map((activity, index) => (
            <div
              key={activity.id}
              className="timeline-item"
              style={{ animationDelay: inView ? `${index * 60}ms` : '0ms' }}
            >
              <div className="timeline-connector">
                <div className={`timeline-dot ${activity.status}`}>
                  {activity.type === 'investment' && <InvestmentIcon />}
                  {activity.type === 'transfer' && <TransferIcon />}
                  {activity.type === 'transaction' && <TransactionIcon />}
                  {activity.type === 'bill' && <BillIcon />}
                </div>
                {index < activities.length - 1 && <div className="timeline-line" />}
              </div>
              <div className="timeline-content">
                <div className="activity-info">
                  <span className="activity-title">{activity.title}</span>
                  <span className="activity-subtitle">{activity.subtitle}</span>
                </div>
                <div className="activity-meta">
                  <span className={`activity-amount ${activity.amount.startsWith('+') ? 'positive' : ''}`}>
                    {activity.amount}
                  </span>
                  <span className="activity-time">{activity.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function InvestmentIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M2 10L5 7L8 9L12 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function TransferIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M2 7H12M9 4L12 7L9 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function TransactionIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <rect x="2" y="3" width="10" height="8" rx="1" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M4 6H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function BillIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M3 2H10L13 5V12C13 12.5 12.5 13 12 13H3C2.5 13 2 12.5 2 12V3C2 2.5 2.5 2 3 2Z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M10 2V5H13" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M4 7H11M4 10H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}
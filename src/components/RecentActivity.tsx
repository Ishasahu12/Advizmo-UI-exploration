import React from 'react';
import './RecentActivity.css';

type ActivityType = 'transaction' | 'investment' | 'transfer' | 'bill';

interface Activity {
  id: number;
  type: ActivityType;
  title: string;
  subtitle: string;
  amount: string;
  amountType: 'positive' | 'negative' | 'neutral';
  time: string;
  icon: string;
}

const RecentActivity: React.FC = () => {
  const activities: Activity[] = [
    {
      id: 1,
      type: 'transaction',
      title: 'Whole Foods Market',
      subtitle: 'Grocery • San Francisco, CA',
      amount: '-$127.43',
      amountType: 'negative',
      time: '2 hours ago',
      icon: '🛒',
    },
    {
      id: 2,
      type: 'investment',
      title: 'VTSAX Purchase',
      subtitle: 'Vanguard Total Stock Market ETF',
      amount: '+$2,500.00',
      amountType: 'positive',
      time: '4 hours ago',
      icon: '📈',
    },
    {
      id: 3,
      type: 'transfer',
      title: 'Transfer to Savings',
      subtitle: 'Chase Savings • Account ending 4821',
      amount: '+$1,000.00',
      amountType: 'positive',
      time: 'Yesterday',
      icon: '↗',
    },
    {
      id: 4,
      type: 'bill',
      title: 'PG&E Utility Bill',
      subtitle: 'Monthly • Auto-paid',
      amount: '-$184.32',
      amountType: 'negative',
      time: 'Yesterday',
      icon: '⚡',
    },
    {
      id: 5,
      type: 'transaction',
      title: 'Netflix Subscription',
      subtitle: 'Monthly • Recurring',
      amount: '-$15.99',
      amountType: 'negative',
      time: '2 days ago',
      icon: '📺',
    },
    {
      id: 6,
      type: 'investment',
      title: 'Dividend Reinvested',
      subtitle: 'AAPL • Apple Inc.',
      amount: '+$84.20',
      amountType: 'positive',
      time: '3 days ago',
      icon: '💵',
    },
    {
      id: 7,
      type: 'transfer',
      title: 'ACH Transfer Received',
      subtitle: 'Employer • Direct Deposit',
      amount: '+$4,250.00',
      amountType: 'positive',
      time: '4 days ago',
      icon: '↓',
    },
    {
      id: 8,
      type: 'bill',
      title: 'Mortgage Payment',
      subtitle: 'Monthly • Auto-paid',
      amount: '-$2,847.00',
      amountType: 'negative',
      time: '5 days ago',
      icon: '🏠',
    },
  ];

  const getTypeColor = (type: ActivityType) => {
    switch (type) {
      case 'transaction':
        return 'var(--accent-blue)';
      case 'investment':
        return 'var(--accent-green)';
      case 'transfer':
        return 'var(--brand-cyan)';
      case 'bill':
        return 'var(--accent-yellow)';
    }
  };

  const getTypeLabel = (type: ActivityType) => {
    return type.charAt(0).toUpperCase() + type.slice(1);
  };

  return (
    <div className="recent-activity">
      <div className="section-header">
        <h2 className="section-title">Recent Activity</h2>
        <button className="view-all-btn">View All</button>
      </div>
      <div className="activity-timeline">
        {activities.map((activity) => (
          <div key={activity.id} className="activity-item">
            <div className="activity-connector">
              <div
                className="activity-dot"
                style={{ backgroundColor: getTypeColor(activity.type) }}
              />
              <div className="activity-line" />
            </div>
            <div className="activity-content">
              <div className="activity-icon" style={{ backgroundColor: `${getTypeColor(activity.type)}20` }}>
                {activity.icon}
              </div>
              <div className="activity-details">
                <span className="activity-title">{activity.title}</span>
                <span className="activity-subtitle">{activity.subtitle}</span>
              </div>
              <div className="activity-meta">
                <span className={`activity-amount ${activity.amountType}`}>{activity.amount}</span>
                <span className="activity-time">{activity.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;

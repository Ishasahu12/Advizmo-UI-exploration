import React from 'react';
import './UpcomingItems.css';

type ItemType = 'bill' | 'deposit' | 'tax' | 'opportunity';

interface UpcomingItem {
  id: number;
  type: ItemType;
  title: string;
  subtitle: string;
  amount: string;
  amountType: 'due' | 'income';
  date: string;
  icon: string;
  priority?: 'high' | 'medium' | 'low';
}

const UpcomingItems: React.FC = () => {
  const upcomingItems: UpcomingItem[] = [
    {
      id: 1,
      type: 'bill',
      title: 'Mortgage Payment',
      subtitle: 'Monthly auto-payment',
      amount: '$2,847',
      amountType: 'due',
      date: 'Jun 28',
      icon: '🏠',
      priority: 'high',
    },
    {
      id: 2,
      type: 'deposit',
      title: 'Paycheck Direct Deposit',
      subtitle: 'Bi-weekly salary',
      amount: '+$4,250',
      amountType: 'income',
      date: 'Jun 30',
      icon: '💰',
      priority: 'high',
    },
    {
      id: 3,
      type: 'tax',
      title: 'Q2 Estimated Tax Payment',
      subtitle: 'Federal + State',
      amount: '-$3,200',
      amountType: 'due',
      date: 'Jul 15',
      icon: '📋',
      priority: 'medium',
    },
    {
      id: 4,
      type: 'opportunity',
      title: 'Roth IRA Contribution',
      subtitle: '$4,500 remaining',
      amount: '$4,500',
      amountType: 'income',
      date: 'Jul 15',
      icon: '🚀',
    },
    {
      id: 5,
      type: 'bill',
      title: 'Car Insurance',
      subtitle: '6-month premium',
      amount: '-$480',
      amountType: 'due',
      date: 'Jul 1',
      icon: '🚗',
    },
    {
      id: 6,
      type: 'deposit',
      title: 'Quarterly Bonus',
      subtitle: 'Performance-based',
      amount: '+$8,500',
      amountType: 'income',
      date: 'Jul 15',
      icon: '🎉',
      priority: 'medium',
    },
    {
      id: 7,
      type: 'tax',
      title: 'Property Tax Due',
      subtitle: 'Annual payment',
      amount: '-$4,200',
      amountType: 'due',
      date: 'Aug 1',
      icon: '🏛️',
      priority: 'low',
    },
    {
      id: 8,
      type: 'opportunity',
      title: 'Apple Dividend',
      subtitle: 'Quarterly payout',
      amount: '+$84',
      amountType: 'income',
      date: 'Jul 12',
      icon: '🍎',
    },
  ];

  const getTypeColor = (type: ItemType) => {
    switch (type) {
      case 'bill':
        return 'var(--accent-red)';
      case 'deposit':
        return 'var(--accent-green)';
      case 'tax':
        return 'var(--accent-yellow)';
      case 'opportunity':
        return 'var(--brand-cyan)';
    }
  };

  const getTypeLabel = (type: ItemType) => {
    return type.charAt(0).toUpperCase() + type.slice(1);
  };

  const getPriorityClass = (priority?: string) => {
    return priority ? `priority-${priority}` : '';
  };

  return (
    <div className="upcoming-items">
      <h2 className="section-title">Upcoming</h2>
      <div className="items-grid">
        {upcomingItems.map((item) => (
          <div
            key={item.id}
            className={`item-card ${getPriorityClass(item.priority)}`}
          >
            <div className="item-header">
              <div
                className="item-icon"
                style={{ backgroundColor: `${getTypeColor(item.type)}20` }}
              >
                {item.icon}
              </div>
              <div className="item-type-badge" style={{ color: getTypeColor(item.type) }}>
                {getTypeLabel(item.type)}
              </div>
            </div>
            <div className="item-body">
              <h3 className="item-title">{item.title}</h3>
              <p className="item-subtitle">{item.subtitle}</p>
            </div>
            <div className="item-footer">
              <span className={`item-amount ${item.amountType}`}>{item.amount}</span>
              <span className="item-date">{item.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingItems;

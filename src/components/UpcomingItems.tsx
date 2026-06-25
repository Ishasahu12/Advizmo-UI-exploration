import React from 'react';
import './UpcomingItems.css';

interface UpcomingItem {
  id: string;
  type: 'bill' | 'goal' | 'reminder' | 'opportunity';
  title: string;
  description: string;
  amount?: string;
  dueDate: string;
  daysLeft: number;
}

const upcomingItems: UpcomingItem[] = [
  {
    id: '1',
    type: 'bill',
    title: 'Quarterly Tax Payment',
    description: 'Q2 estimated taxes',
    amount: '$3,200',
    dueDate: 'Jun 30',
    daysLeft: 5,
  },
  {
    id: '2',
    type: 'goal',
    title: 'Emergency Fund Goal',
    description: '6 months expenses',
    amount: '$25,680',
    dueDate: 'Aug 1',
    daysLeft: 37,
  },
  {
    id: '3',
    type: 'bill',
    title: 'Car Insurance',
    description: 'Semi-annual premium',
    amount: '$420',
    dueDate: 'Jul 15',
    daysLeft: 20,
  },
  {
    id: '4',
    type: 'reminder',
    title: 'Review Subscription',
    description: 'Annual subscription audit',
    dueDate: 'Jul 1',
    daysLeft: 6,
  },
  {
    id: '5',
    type: 'opportunity',
    title: 'I Bonds Purchase',
    description: 'Max out annual limit',
    amount: '$10,000',
    dueDate: 'Dec 31',
    daysLeft: 189,
  },
];

const typeIcons: Record<UpcomingItem['type'], string> = {
  bill: '$',
  goal: '◎',
  reminder: '⏰',
  opportunity: '★',
};

const UpcomingItems: React.FC = () => {
  return (
    <section className="upcoming-items">
      <h2 className="section-title">Upcoming</h2>
      
      <div className="items-list">
        {upcomingItems.map((item) => (
          <div key={item.id} className={`item-card ${item.type}`}>
            <div className={`item-icon ${item.type}`}>
              {typeIcons[item.type]}
            </div>
            <div className="item-content">
              <div className="item-header">
                <span className="item-title">{item.title}</span>
                {item.amount && (
                  <span className="item-amount">{item.amount}</span>
                )}
              </div>
              <span className="item-description">{item.description}</span>
            </div>
            <div className={`item-due ${item.daysLeft <= 7 ? 'urgent' : item.daysLeft <= 30 ? 'soon' : 'later'}`}>
              <span className="due-date">{item.dueDate}</span>
              <span className="days-left">
                {item.daysLeft === 0 ? 'Today' : item.daysLeft === 1 ? '1 day' : `${item.daysLeft} days`}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UpcomingItems;

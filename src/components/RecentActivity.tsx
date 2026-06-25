import React from 'react';
import './RecentActivity.css';

interface Activity {
  id: string;
  type: 'contribution' | 'withdrawal' | 'transfer' | 'payment' | 'alert';
  title: string;
  description: string;
  amount?: string;
  date: string;
  time: string;
}

const activities: Activity[] = [
  {
    id: '1',
    type: 'contribution',
    title: '401k Contribution',
    description: 'Monthly employer match',
    amount: '+$1,250',
    date: 'Jun 24',
    time: '9:00 AM',
  },
  {
    id: '2',
    type: 'transfer',
    title: 'Transfer to Brokerage',
    description: 'Monthly investment transfer',
    amount: '-$500',
    date: 'Jun 23',
    time: '4:30 PM',
  },
  {
    id: '3',
    type: 'payment',
    title: 'Rent Payment',
    description: 'Monthly rent',
    amount: '-$1,800',
    date: 'Jun 22',
    time: '10:00 AM',
  },
  {
    id: '4',
    type: 'contribution',
    title: 'Emergency Fund',
    description: 'Monthly savings',
    amount: '+$400',
    date: 'Jun 21',
    time: '11:15 AM',
  },
  {
    id: '5',
    type: 'alert',
    title: 'High Spending Alert',
    description: 'Dining out exceeded budget',
    amount: '+$127',
    date: 'Jun 20',
    time: '8:45 PM',
  },
];

const activityIcons: Record<Activity['type'], string> = {
  contribution: '+',
  withdrawal: '-',
  transfer: '↔',
  payment: '✓',
  alert: '!',
};

const RecentActivity: React.FC = () => {
  return (
    <section className="recent-activity">
      <h2 className="section-title">Recent Activity</h2>
      
      <div className="activity-list">
        {activities.map((activity) => (
          <div key={activity.id} className={`activity-item ${activity.type}`}>
            <div className={`activity-icon ${activity.type}`}>
              {activityIcons[activity.type]}
            </div>
            <div className="activity-content">
              <div className="activity-header">
                <span className="activity-title">{activity.title}</span>
                {activity.amount && (
                  <span className={`activity-amount ${activity.type === 'contribution' ? 'positive' : 'negative'}`}>
                    {activity.amount}
                  </span>
                )}
              </div>
              <span className="activity-description">{activity.description}</span>
            </div>
            <div className="activity-time">
              <span className="activity-date">{activity.date}</span>
              <span className="activity-clock">{activity.time}</span>
            </div>
          </div>
        ))}
      </div>
      
      <button className="view-all-btn">View All Activity</button>
    </section>
  );
};

export default RecentActivity;

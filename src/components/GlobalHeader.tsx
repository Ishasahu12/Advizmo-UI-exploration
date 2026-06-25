import { useState } from 'react';
import './GlobalHeader.css';

const timeFilters = [
  { id: 'today', label: 'Today' },
  { id: 'yesterday', label: 'Yesterday' },
  { id: '7days', label: 'Last 7 Days' },
  { id: 'month', label: 'This Month' },
  { id: 'lastmonth', label: 'Last Month' },
  { id: 'quarter', label: 'Quarter' },
  { id: 'year', label: 'Year' },
];

const currentDate = new Date();
const formattedDate = currentDate.toLocaleDateString('en-US', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

export default function GlobalHeader() {
  const [selectedFilter, setSelectedFilter] = useState('month');
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <header className="global-header">
      <div className="header-left">
        <h1 className="greeting">Good morning, Sarah</h1>
        <p className="current-date">{formattedDate}</p>
      </div>

      <div className="header-center">
        <div className="search-container">
          <SearchIcon />
          <input
            type="text"
            placeholder="Search transactions, accounts..."
            className="search-input"
          />
          <kbd className="search-kbd">⌘K</kbd>
        </div>
      </div>

      <div className="header-right">
        <div className="time-filter">
          {timeFilters.map((filter) => (
            <button
              key={filter.id}
              className={`time-filter-btn ${selectedFilter === filter.id ? 'active' : ''}`}
              onClick={() => setSelectedFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="header-actions">
          <button
            className="header-action-btn"
            onClick={() => setShowNotifications(!showNotifications)}
          >
            <BellIcon />
            <span className="notification-dot" />
          </button>

          <button className="header-action-btn">
            <HelpIcon />
          </button>

          <button className="profile-btn">
            <div className="profile-avatar">
              <span>SK</span>
            </div>
          </button>
        </div>
      </div>

      {showNotifications && (
        <div className="notifications-dropdown">
          <div className="notifications-header">
            <h3>Notifications</h3>
            <button className="mark-read-btn">Mark all read</button>
          </div>
          <div className="notifications-list">
            <div className="notification-item unread">
              <div className="notification-icon blue">
                <TrendingUpIcon />
              </div>
              <div className="notification-content">
                <p className="notification-text">Portfolio increased by $2,340 this month</p>
                <span className="notification-time">2 hours ago</span>
              </div>
            </div>
            <div className="notification-item unread">
              <div className="notification-icon green">
                <CheckIcon />
              </div>
              <div className="notification-content">
                <p className="notification-text">Emergency fund goal reached!</p>
                <span className="notification-time">Yesterday</span>
              </div>
            </div>
            <div className="notification-item">
              <div className="notification-icon yellow">
                <AlertIcon />
              </div>
              <div className="notification-content">
                <p className="notification-text">Quarterly tax estimate due in 5 days</p>
                <span className="notification-time">3 days ago</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="8" cy="8" r="5.5" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M12.5 12.5L16 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function BellIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M10 2C7.5 2 6 3.5 6 5.5V8L4 10V11H16V10L14 8V5.5C14 3.5 12.5 2 10 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M8 16C8 17.1 8.9 18 10 18C11.1 18 12 17.1 12 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function HelpIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M8 8C8 6.9 8.9 6 10 6C11.1 6 12 6.9 12 8C12 8.7 11.6 9.3 11 9.6V10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="10" cy="13.5" r="0.75" fill="currentColor"/>
    </svg>
  );
}

function TrendingUpIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M2 11L6 7L9 9L14 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11 4H14V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M3 8L6.5 11.5L13 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function AlertIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M8 5V8.5M8 11H8.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M7.1 2.5L1.5 12C1.2 12.6 1.6 13.3 2.2 13.3H13.8C14.4 13.3 14.8 12.6 14.5 12L8.9 2.5C8.6 1.9 7.4 1.9 7.1 2.5Z" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );
}
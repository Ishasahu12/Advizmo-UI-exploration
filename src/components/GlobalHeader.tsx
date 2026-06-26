import { useState } from 'react';
import './GlobalHeader.css';

const currentDate = new Date();
const formattedDate = currentDate.toLocaleDateString('en-US', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

const aiPlaceholders = [
  'Ask Advizmo anything...',
  'How can I improve my cash flow?',
  'Why is this money safe to invest?',
  'How much did I spend on subscriptions?',
];

export default function GlobalHeader() {
  const [showNotifications, setShowNotifications] = useState(false);
  const [placeholderIndex] = useState(
    () => Math.floor(Math.random() * aiPlaceholders.length),
  );

  return (
    <header className="global-header">
      <div className="header-left">
        <h1 className="greeting">Good morning, Sarah</h1>
        <p className="current-date">{formattedDate}</p>
      </div>

      <div className="header-center">
        <div className="ai-input-wrapper">
          <SparklesIcon />
          <input
            type="text"
            placeholder={aiPlaceholders[placeholderIndex]}
            className="ai-input"
          />
        </div>
      </div>

      <div className="header-right">
        <button
          className="header-icon-btn"
          onClick={() => setShowNotifications(!showNotifications)}
        >
          <BellIcon />
          <span className="notification-dot" />
        </button>

        <button className="profile-btn">
          <div className="profile-avatar">
            <span>SK</span>
          </div>
        </button>
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
                <p className="notification-text">
                  Portfolio increased by $2,340 this month
                </p>
                <span className="notification-time">2 hours ago</span>
              </div>
            </div>
            <div className="notification-item unread">
              <div className="notification-icon green">
                <CheckIcon />
              </div>
              <div className="notification-content">
                <p className="notification-text">
                  Emergency fund goal reached!
                </p>
                <span className="notification-time">Yesterday</span>
              </div>
            </div>
            <div className="notification-item">
              <div className="notification-icon yellow">
                <AlertIcon />
              </div>
              <div className="notification-content">
                <p className="notification-text">
                  Quarterly tax estimate due in 5 days
                </p>
                <span className="notification-time">3 days ago</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function SparklesIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M8 1L9.5 5.5L14 7L9.5 8.5L8 13L6.5 8.5L2 7L6.5 5.5L8 1Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <path
        d="M12.5 11L13.25 12.75L15 13.5L13.25 14.25L12.5 16L11.75 14.25L10 13.5L11.75 12.75L12.5 11Z"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BellIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M10 2C7.5 2 6 3.5 6 5.5V8L4 10V11H16V10L14 8V5.5C14 3.5 12.5 2 10 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M8 16C8 17.1 8.9 18 10 18C11.1 18 12 17.1 12 16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function TrendingUpIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M2 11L6 7L9 9L14 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 4H14V7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M3 8L6.5 11.5L13 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AlertIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M8 5V8.5M8 11H8.01"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M7.1 2.5L1.5 12C1.2 12.6 1.6 13.3 2.2 13.3H13.8C14.4 13.3 14.8 12.6 14.5 12L8.9 2.5C8.6 1.9 7.4 1.9 7.1 2.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

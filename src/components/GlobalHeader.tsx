import React, { useState, useEffect } from 'react';
import './GlobalHeader.css';

const GlobalHeader: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('Today');
  const [showNotifications, setShowNotifications] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });
  };

  const timeFilters = ['Today', 'Yesterday', 'Last 7 Days', 'This Month', 'This Quarter', 'YTD'];

  const notifications = [
    { id: 1, title: 'Portfolio rebalanced', message: 'Your portfolio was automatically rebalanced', time: '2h ago', read: false },
    { id: 2, title: 'Bill due soon', message: 'Mortgage payment due in 3 days', time: '5h ago', read: false },
    { id: 3, title: 'New insight available', message: 'AI found an opportunity in your portfolio', time: '1d ago', read: true },
  ];

  const unreadCount = notifications.filter((n) => !n.read).length;

  const getGreeting = () => {
    const hour = currentTime.getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 17) return 'Good afternoon';
    return 'Good evening';
  };

  return (
    <header className="global-header">
      <div className="header-left">
        <div className="greeting-section">
          <h1 className="greeting">
            {getGreeting()}, John
            <span className="greeting-wave">👋</span>
          </h1>
          <p className="current-date">{formatDate(currentTime)} • {formatTime(currentTime)}</p>
        </div>
      </div>

      <div className="header-center">
        <div className="search-bar">
          <span className="search-icon">⌕</span>
          <input
            type="text"
            placeholder="Search transactions, accounts, insights..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <span className="search-shortcut">⌘K</span>
        </div>
      </div>

      <div className="header-right">
        <div className="time-filters">
          {timeFilters.map((filter) => (
            <button
              key={filter}
              className={`filter-btn ${selectedFilter === filter ? 'active' : ''}`}
              onClick={() => setSelectedFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="header-actions">
          <button className="action-btn notifications-btn" onClick={() => setShowNotifications(!showNotifications)}>
            <span className="bell-icon">🔔</span>
            {unreadCount > 0 && <span className="notification-badge">{unreadCount}</span>}
          </button>

          <div className="profile-btn">
            <div className="profile-avatar">JD</div>
            <div className="profile-info">
              <span className="profile-name">John Doe</span>
              <span className="profile-status">Premium</span>
            </div>
          </div>
        </div>

        {showNotifications && (
          <div className="notifications-dropdown">
            <div className="notifications-header">
              <span>Notifications</span>
              <button className="mark-read">Mark all read</button>
            </div>
            <ul className="notifications-list">
              {notifications.map((notif) => (
                <li key={notif.id} className={`notification-item ${!notif.read ? 'unread' : ''}`}>
                  <div className="notif-content">
                    <span className="notif-title">{notif.title}</span>
                    <span className="notif-message">{notif.message}</span>
                    <span className="notif-time">{notif.time}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default GlobalHeader;

import React from 'react';
import './GlobalHeader.css';

const GlobalHeader: React.FC = () => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });

  return (
    <header className="global-header">
      <div className="header-left">
        <h1 className="greeting">Good morning</h1>
        <p className="current-date">{currentDate}</p>
      </div>

      <div className="header-center">
        <div className="search-container">
          <span className="search-icon">⌕</span>
          <input
            type="text"
            placeholder="Search transactions, accounts..."
            className="search-input"
          />
          <kbd className="search-shortcut">⌘K</kbd>
        </div>
      </div>

      <div className="header-right">
        <div className="notifications-btn">
          <span className="bell-icon">○</span>
          <span className="notification-dot" />
        </div>
        
        <div className="profile-section">
          <div className="profile-avatar">SK</div>
          <div className="profile-info">
            <span className="profile-name">Sarah Kim</span>
            <span className="profile-status">Premium</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default GlobalHeader;

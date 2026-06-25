import { useState } from 'react';
import './Navigation.css';

const navGroups = [
  {
    title: 'Overview',
    items: [
      { id: 'overview', label: 'Overview', icon: '◈' },
    ],
  },
  {
    title: 'Money',
    items: [
      { id: 'accounts', label: 'Accounts', icon: '◉' },
      { id: 'transactions', label: 'Transactions', icon: '●' },
      { id: 'bills', label: 'Bills', icon: '◎' },
      { id: 'cashflow', label: 'Cash Flow', icon: '◐' },
    ],
  },
  {
    title: 'Investing',
    items: [
      { id: 'portfolio', label: 'Portfolio', icon: '◑' },
      { id: 'investments', label: 'Investments', icon: '◒' },
      { id: 'performance', label: 'Performance', icon: '◓' },
    ],
  },
  {
    title: 'Automation',
    items: [
      { id: 'rules', label: 'Rules', icon: '⚙' },
      { id: 'recurring', label: 'Recurring', icon: '↻' },
      { id: 'idle-cash', label: 'Idle Cash', icon: '◇' },
      { id: 'auto-investing', label: 'Auto Investing', icon: '◆' },
    ],
  },
  {
    title: 'Planning',
    items: [
      { id: 'goals', label: 'Goals', icon: '◇' },
      { id: 'budget', label: 'Budget', icon: '◆' },
      { id: 'networth', label: 'Net Worth', icon: '◈' },
    ],
  },
  {
    title: 'Insights',
    items: [
      { id: 'ai-assistant', label: 'AI Assistant', icon: '✦' },
      { id: 'reports', label: 'Reports', icon: '◉' },
      { id: 'recommendations', label: 'Recommendations', icon: '●' },
    ],
  },
];

const Navigation: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <nav 
      className={`nav-sidebar ${expanded ? 'expanded' : ''}`}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <div className="nav-header">
        <div className="nav-logo">
          <span className="logo-icon">▲</span>
          <span className="logo-text">Advizmo</span>
        </div>
      </div>

      <div className="nav-content">
        {navGroups.map((group) => (
          <div key={group.title} className="nav-group">
            <div className="nav-group-title">{group.title}</div>
            {group.items.map((item) => (
              <button key={item.id} className={`nav-item ${item.id === 'overview' ? 'active' : ''}`}>
                <span className="nav-item-icon">{item.icon}</span>
                <span className="nav-item-label">{item.label}</span>
              </button>
            ))}
          </div>
        ))}
      </div>

      <div className="nav-footer">
        <button className="nav-item">
          <span className="nav-item-icon">⚙</span>
          <span className="nav-item-label">Settings</span>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;

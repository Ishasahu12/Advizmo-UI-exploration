import React, { useState } from 'react';
import './Navigation.css';

interface NavItem {
  label: string;
  icon: string;
  badge?: number;
}

interface NavSection {
  title: string;
  items: NavItem[];
}

const navData: Record<string, NavSection> = {
  Overview: {
    title: 'Overview',
    items: [
      { label: 'Dashboard', icon: '◈' },
      { label: 'AI Advisor', icon: '◇', badge: 3 },
      { label: 'Notifications', icon: '○', badge: 5 },
    ],
  },
  Money: {
    title: 'Money',
    items: [
      { label: 'Accounts', icon: '◉' },
      { label: 'Cash Flow', icon: '◎' },
      { label: 'Transactions', icon: '●' },
      { label: 'Budgets', icon: '◐' },
    ],
  },
  Investing: {
    title: 'Investing',
    items: [
      { label: 'Portfolio', icon: '◑' },
      { label: 'Performance', icon: '◒' },
      { label: 'Asset Allocation', icon: '◓' },
      { label: 'Risk Analysis', icon: '◔' },
    ],
  },
  Planning: {
    title: 'Planning',
    items: [
      { label: 'Goals', icon: '◇' },
      { label: 'Retirement', icon: '◆' },
      { label: 'Tax Center', icon: '◈' },
      { label: 'Insurance', icon: '◉' },
    ],
  },
  Utilities: {
    title: 'Utilities',
    items: [
      { label: 'Reports', icon: '◎' },
      { label: 'Settings', icon: '●' },
      { label: 'Help', icon: '○' },
    ],
  },
};

const Navigation: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [expandedSections, setExpandedSections] = useState<string[]>(Object.keys(navData));
  const [activeItem, setActiveItem] = useState('Dashboard');

  const toggleSection = (section: string) => {
    setExpandedSections((prev) =>
      prev.includes(section)
        ? prev.filter((s) => s !== section)
        : [...prev, section]
    );
  };

  const toggleCollapse = () => setCollapsed(!collapsed);

  return (
    <nav className={`navigation ${collapsed ? 'collapsed' : ''}`}>
      <div className="nav-header">
        <div className="nav-logo">
          <span className="logo-icon">▲</span>
          {!collapsed && <span className="logo-text">Advizmo</span>}
        </div>
        <button className="collapse-btn" onClick={toggleCollapse}>
          {collapsed ? '→' : '←'}
        </button>
      </div>

      <div className="nav-content">
        {Object.entries(navData).map(([sectionKey, section]) => (
          <div key={sectionKey} className="nav-section">
            <button
              className="section-header"
              onClick={() => toggleSection(sectionKey)}
            >
              {!collapsed && (
                <>
                  <span className="section-title">{section.title}</span>
                  <span className="section-toggle">
                    {expandedSections.includes(sectionKey) ? '−' : '+'}
                  </span>
                </>
              )}
              {collapsed && <span className="section-icon-only">{section.items[0]?.icon}</span>}
            </button>

            {!collapsed && expandedSections.includes(sectionKey) && (
              <ul className="nav-items">
                {section.items.map((item) => (
                  <li key={item.label}>
                    <button
                      className={`nav-item ${activeItem === item.label ? 'active' : ''}`}
                      onClick={() => setActiveItem(item.label)}
                    >
                      <span className="item-icon">{item.icon}</span>
                      <span className="item-label">{item.label}</span>
                      {item.badge && <span className="item-badge">{item.badge}</span>}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      <div className="nav-footer">
        <div className="user-profile">
          <div className="user-avatar">JD</div>
          {!collapsed && (
            <div className="user-info">
              <span className="user-name">John Doe</span>
              <span className="user-status">Premium</span>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

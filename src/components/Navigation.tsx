import { useState, useRef, useCallback } from 'react';
import './Navigation.css';

interface NavItem {
  icon: React.ReactNode;
  label: string;
  id: string;
  isNew?: boolean;
}

interface NavSection {
  title: string;
  items: NavItem[];
}

const navSections: NavSection[] = [
  {
    title: 'Overview',
    items: [
      { id: 'dashboard', label: 'Dashboard', icon: <DashboardIcon /> },
      { id: 'ai-advisor', label: 'Advizmo AI', icon: <AIIcon />, isNew: true },
    ],
  },
  {
    title: 'Money',
    items: [
      { id: 'accounts', label: 'Accounts', icon: <AccountsIcon /> },
      { id: 'transactions', label: 'Transactions', icon: <TransactionsIcon /> },
      { id: 'bills', label: 'Bills', icon: <BillsIcon /> },
    ],
  },
  {
    title: 'Investing',
    items: [
      { id: 'portfolio', label: 'Portfolio', icon: <PortfolioIcon /> },
      { id: 'performance', label: 'Performance', icon: <PerformanceIcon /> },
    ],
  },
  {
    title: 'Planning',
    items: [
      { id: 'goals', label: 'Goals', icon: <GoalsIcon /> },
      { id: 'tax', label: 'Tax Center', icon: <TaxIcon /> },
    ],
  },
];

export default function Navigation() {
  const [expanded, setExpanded] = useState(false);
  const [activeItem, setActiveItem] = useState('dashboard');
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleEnter = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setExpanded(true);
  }, []);

  const handleLeave = useCallback(() => {
    timeoutRef.current = setTimeout(() => setExpanded(false), 200);
  }, []);

  return (
    <nav
      className={`nav ${expanded ? 'nav--expanded' : ''}`}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <div className="nav-logo-area">
        <div className="nav-logo-icon">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M11 2L19 6.5V15.5L11 20L3 15.5V6.5L11 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M11 8V14M8 11H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
        <span className="nav-logo-text">Advizmo</span>
      </div>

      <div className="nav-sections">
        {navSections.map((section) => (
          <div key={section.title} className="nav-section">
            <span className="nav-section-title">{section.title}</span>
            <div className="nav-items">
              {section.items.map((item) => (
                <button
                  key={item.id}
                  className={`nav-item ${activeItem === item.id ? 'nav-item--active' : ''}`}
                  onClick={() => setActiveItem(item.id)}
                  title={!expanded ? item.label : undefined}
                >
                  <span className="nav-item-icon">{item.icon}</span>
                  <span className="nav-item-label">{item.label}</span>
                  {item.isNew && <span className="nav-item-badge">New</span>}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="nav-footer">
        <button className="nav-item" title={!expanded ? 'Settings' : undefined}>
          <span className="nav-item-icon"><SettingsIcon /></span>
          <span className="nav-item-label">Settings</span>
        </button>
      </div>
    </nav>
  );
}

function DashboardIcon() {
  return <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5"/></svg>;
}

function AIIcon() {
  return <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M12 2L14.5 8.5L21 9.5L16 14L17.5 21L12 17.5L6.5 21L8 14L3 9.5L9.5 8.5L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>;
}

function AccountsIcon() {
  return <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M3 9H21" stroke="currentColor" strokeWidth="1.5"/></svg>;
}

function TransactionsIcon() {
  return <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M4 7H20M4 12H20M4 17H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>;
}

function BillsIcon() {
  return <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M12 2L5 5.5V11C5 15.5 8 19 12 20.5C16 19 19 15.5 19 11V5.5L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}

function PortfolioIcon() {
  return <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M4 20L8.5 13L12.5 16L20 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M16 7H20V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}

function PerformanceIcon() {
  return <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.5"/><path d="M12 7V12L15 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>;
}

function GoalsIcon() {
  return <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.5"/><circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.5"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/></svg>;
}

function TaxIcon() {
  return <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M5 5H17L21 9V19C21 20 20 21 19 21H7C6 21 5 20 5 19V6C5 5 5 5 5 5Z" stroke="currentColor" strokeWidth="1.5"/><path d="M17 5V9H21" stroke="currentColor" strokeWidth="1.5"/><path d="M8 14H16M8 17H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>;
}

function SettingsIcon() {
  return <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.5"/><path d="M12 3V4.5M12 19.5V21M21 12H19.5M4.5 12H3M18.5 5.5L17.5 6.5M6.5 17.5L5.5 18.5M18.5 18.5L17.5 17.5M6.5 6.5L5.5 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>;
}

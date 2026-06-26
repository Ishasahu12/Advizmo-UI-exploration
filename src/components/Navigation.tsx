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
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 2L17 6V14L10 18L3 14V6L10 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M10 7V13M7 10H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
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
  return <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="2" y="2" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5"/><rect x="10" y="2" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5"/><rect x="2" y="10" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5"/><rect x="10" y="10" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5"/></svg>;
}

function AIIcon() {
  return <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 2L11 6.5L16 7.5L12.5 11L13.5 16L9 13.5L4.5 16L5.5 11L2 7.5L7 6.5L9 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>;
}

function AccountsIcon() {
  return <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="2" y="4" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M2 7H16" stroke="currentColor" strokeWidth="1.5"/></svg>;
}

function TransactionsIcon() {
  return <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M4 6H14M4 9H14M4 12H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>;
}

function BillsIcon() {
  return <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 2L4 4.5V8.5C4 11.8 6 14.5 9 15.5C12 14.5 14 11.8 14 8.5V4.5L9 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><path d="M7 9L8.5 10.5L11.5 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}

function PortfolioIcon() {
  return <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 15L6.5 10L9.5 12L15 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 5H15V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}

function PerformanceIcon() {
  return <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="6.5" stroke="currentColor" strokeWidth="1.5"/><path d="M9 5.5V9.5L11.5 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>;
}

function GoalsIcon() {
  return <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="6.5" stroke="currentColor" strokeWidth="1.5"/><circle cx="9" cy="9" r="3.5" stroke="currentColor" strokeWidth="1.5"/><circle cx="9" cy="9" r="1" fill="currentColor"/></svg>;
}

function TaxIcon() {
  return <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M4 4H12L15 7V14C15 15 14 16 13 16H5C4 16 3 15 3 14V5C3 4 4 4 4 4Z" stroke="currentColor" strokeWidth="1.5"/><path d="M12 4V7H15" stroke="currentColor" strokeWidth="1.5"/><path d="M6 11H12M6 14H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>;
}

function SettingsIcon() {
  return <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="2" stroke="currentColor" strokeWidth="1.5"/><path d="M9 2V3.5M9 14.5V16M16 9H14.5M3.5 9H2M14 4L13 5M5 13L4 14M14 14L13 13M5 5L4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>;
}

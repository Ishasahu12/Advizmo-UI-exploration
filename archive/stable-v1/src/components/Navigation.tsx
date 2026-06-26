import { useState } from 'react';
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
  defaultOpen?: boolean;
}

const navSections: NavSection[] = [
  {
    title: 'Overview',
    defaultOpen: true,
    items: [
      { id: 'dashboard', label: 'Dashboard', icon: <DashboardIcon /> },
      { id: 'ai-advisor', label: 'AI Advisor', icon: <AIIcon />, isNew: true },
    ],
  },
  {
    title: 'Money',
    items: [
      { id: 'accounts', label: 'Accounts', icon: <AccountsIcon /> },
      { id: 'transactions', label: 'Transactions', icon: <TransactionsIcon /> },
      { id: 'cash-flow', label: 'Cash Flow', icon: <CashFlowIcon /> },
      { id: 'spending', label: 'Spending', icon: <SpendingIcon /> },
      { id: 'budget', label: 'Budget', icon: <BudgetIcon /> },
    ],
  },
  {
    title: 'Investing',
    items: [
      { id: 'portfolio', label: 'Portfolio', icon: <PortfolioIcon /> },
      { id: 'investments', label: 'Investments', icon: <InvestmentsIcon /> },
      { id: 'performance', label: 'Performance', icon: <PerformanceIcon /> },
    ],
  },
  {
    title: 'Planning',
    items: [
      { id: 'goals', label: 'Goals', icon: <GoalsIcon /> },
      { id: 'tax', label: 'Tax', icon: <TaxIcon /> },
      { id: 'estate', label: 'Estate', icon: <EstateIcon /> },
    ],
  },
  {
    title: 'Utilities',
    items: [
      { id: 'calculators', label: 'Calculators', icon: <CalculatorsIcon /> },
      { id: 'recommendations', label: 'Recommendations', icon: <RecommendationsIcon /> },
      { id: 'key-dates', label: 'Key Dates', icon: <KeyDatesIcon /> },
    ],
  },
];

export default function Navigation() {
  const [expandedSections, setExpandedSections] = useState<string[]>(['Overview']);
  const [activeItem, setActiveItem] = useState('dashboard');

  const toggleSection = (title: string) => {
    setExpandedSections((prev) =>
      prev.includes(title) ? prev.filter((s) => s !== title) : [...prev, title]
    );
  };

  return (
    <nav className="navigation">
      <div className="nav-header">
        <img src="/logo.svg" alt="Advizmo" className="nav-logo" />
      </div>

      <div className="nav-sections">
        {navSections.map((section) => (
          <div key={section.title} className="nav-section">
            <button
              className="nav-section-toggle"
              onClick={() => toggleSection(section.title)}
            >
              <span className="nav-section-title">{section.title}</span>
              <ChevronIcon
                className={`nav-chevron ${
                  expandedSections.includes(section.title) ? 'expanded' : ''
                }`}
              />
            </button>

            {expandedSections.includes(section.title) && (
              <div className="nav-items">
                {section.items.map((item) => (
                  <button
                    key={item.id}
                    className={`nav-item ${activeItem === item.id ? 'active' : ''}`}
                    onClick={() => setActiveItem(item.id)}
                  >
                    <span className="nav-item-icon">{item.icon}</span>
                    <span className="nav-item-label">{item.label}</span>
                    {item.isNew && <span className="nav-item-badge">New</span>}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="nav-footer">
        <button className="nav-item">
          <span className="nav-item-icon"><SettingsIcon /></span>
          <span className="nav-item-label">Settings</span>
        </button>
      </div>
    </nav>
  );
}

function DashboardIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="2" y="2" width="7" height="7" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      <rect x="11" y="2" width="7" height="7" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      <rect x="2" y="11" width="7" height="7" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      <rect x="11" y="11" width="7" height="7" rx="2" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );
}

function AIIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M10 2L12.5 7.5L18 8L14 12L15 18L10 15L5 18L6 12L2 8L7.5 7.5L10 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>
  );
}

function AccountsIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M2 8H18" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );
}

function TransactionsIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M4 6H16M4 10H16M4 14H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function CashFlowIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M3 10L10 3L17 10M3 10V17H17V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function SpendingIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M10 6V10L13 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function BudgetIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="2" y="3" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M2 7H18M6 11H8M12 11H14M6 14H8M12 14H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function PortfolioIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M3 17L7 11L11 13L17 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3 17H17V3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function InvestmentsIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M10 6V10L12.5 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function PerformanceIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M3 14L8 9L11 11L17 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14 5H17V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function GoalsIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="10" cy="10" r="4" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="10" cy="10" r="1" fill="currentColor"/>
    </svg>
  );
}

function TaxIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M4 4H14L18 8V16C18 17 17 18 16 18H4C3 18 2 17 2 16V5C2 4 3 4 4 4Z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M14 4V8H18" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M6 12H14M6 15H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function EstateIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M3 18V8L10 3L17 8V18H14V12H6V18H3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>
  );
}

function CalculatorsIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="3" y="2" width="14" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      <rect x="6" y="5" width="8" height="4" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M6 12H7M9 12H10M12 12H13M6 15H7M9 15H10M12 15H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function RecommendationsIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M4 10L8 14L16 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function KeyDatesIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="3" y="4" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M3 8H17M7 2V4M13 2V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function SettingsIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M10 2V4M10 16V18M18 10H16M4 10H2M15.5 4.5L14 6M6 14L4.5 15.5M15.5 15.5L14 14M6 6L4.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className={className}>
      <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
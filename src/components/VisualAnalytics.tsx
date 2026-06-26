import { useState } from 'react';
import './VisualAnalytics.css';

type Period = '1d' | 'today' | '1m' | '6m' | '1y';

const filters = [
  { id: '1d' as Period, label: 'Yesterday' },
  { id: 'today' as Period, label: 'Today' },
  { id: '1m' as Period, label: 'This Month' },
  { id: '6m' as Period, label: '6 Months' },
  { id: '1y' as Period, label: 'Year' },
];

const periodLabels: Record<Period, string> = {
  '1d': 'vs Yesterday',
  today: 'vs Today',
  '1m': 'vs Last Month',
  '6m': 'vs 6 Months Ago',
  '1y': 'vs Last Year',
};

/* ── Cash Flow Data ─────────────────────────────────────── */

const cashFlowData: Record<Period, { points: number[]; labels: string[]; metric: string; trend: string; insight: string }> = {
  today: { points: [20,35,28,42,38,55,48,62,58,70,65,80], labels: ['6a','7a','8a','9a','10a','11a','12p','1p','2p','3p','4p','5p'], metric: '+$180', trend: '+8% vs avg', insight: 'Cash flow stayed positive throughout today.' },
  '1d': { points: [30,45,38,52,48,65,58,72,68,80,75,85], labels: ['6a','7a','8a','9a','10a','11a','12p','1p','2p','3p','4p','5p'], metric: '+$1,240', trend: '+5% vs today', insight: 'Yesterday maintained positive hourly cash flow.' },
  '1m': { points: [40,42,38,45,50,48,52,55,58,54,60,62,58,65,68,64,70,72,68,75,78,74,80,82,78,85,88,84,90,92], labels: Array.from({length:30},(_,i)=>`${i+1}`), metric: '+$1,360', trend: '+12%', insight: 'Income exceeded spending every day this month.' },
  '6m': { points: [35,40,38,45,48,42,50,55,52,58,60,56], labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'].slice(0,12), metric: '+$8,420', trend: '+18%', insight: 'Positive cash flow maintained for 6 consecutive months.' },
  '1y': { points: [30,35,32,40,38,45,48,52,55,58,62,65], labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'], metric: '+$16,840', trend: '+24%', insight: 'Annual cash flow increased 24% year over year.' },
};

/* ── Income vs Expenses Data ────────────────────────────── */

const ieData: Record<Period, { income: number[]; expense: number[]; labels: string[]; saved: string; rate: string; insight: string }> = {
  today: { income: [80,85,90,88,92], expense: [60,62,58,65,60], labels: ['6a','9a','12p','3p','6p'], saved: '$340', rate: '28%', insight: 'You saved 28% of today\'s income so far.' },
  '1d': { income: [75,82,88,85,90], expense: [58,60,55,62,58], labels: ['6a','9a','12p','3p','6p'], saved: '$1,240', rate: '24%', insight: 'Yesterday\'s savings rate was above your average.' },
  '1m': { income: [85,92,78,100], expense: [62,58,70,65], labels: ['W1','W2','W3','W4'], saved: '$1,360', rate: '22%', insight: 'You saved an average of 22% this month.' },
  '6m': { income: [82,88,85,92,90,95], expense: [65,68,62,70,68,72], labels: ['Jan','Feb','Mar','Apr','May','Jun'], saved: '$8,420', rate: '21%', insight: 'Savings rate improved from 18% to 22% over 6 months.' },
  '1y': { income: [78,82,85,88,90,92,88,95,92,98,95,100], expense: [65,68,62,70,68,72,70,75,72,78,75,80], labels: ['J','F','M','A','M','J','J','A','S','O','N','D'], saved: '$16,840', rate: '22%', insight: 'Annual savings rate averaged 22% across all months.' },
};

/* ── Investment Data ────────────────────────────────────── */

const investData: Record<Period, { value: string; gain: string; periodGain: string; annual: string; contributions: string; returns: string; avgReturn: string; points: number[]; labels: string[]; insight: string }> = {
  today: { value: '$289,450', gain: '+$420', periodGain: '+$420', annual: '+18.4%', contributions: '$121,600', returns: '$167,850', avgReturn: '+14.2%', points: [40,42,41,44,43,46,45,48], labels: ['9a','10a','11a','12p','1p','2p','3p','4p'], insight: 'Portfolio gained $420 today.' },
  '1d': { value: '$289,030', gain: '-$180', periodGain: '-$180', annual: '+18.4%', contributions: '$121,600', returns: '$167,430', avgReturn: '+14.2%', points: [45,43,44,42,43,41,42,40], labels: ['9a','10a','11a','12p','1p','2p','3p','4p'], insight: 'Yesterday saw a minor pullback of 0.06%.' },
  '1m': { value: '$289,450', gain: '+$8,640', periodGain: '+$8,640', annual: '+18.4%', contributions: '$121,600', returns: '$167,850', avgReturn: '+14.2%', points: [30,32,35,33,38,36,40,42,41,45,44,48], labels: ['1','3','5','7','9','11','13','15','17','19','21','23'], insight: 'Portfolio reached a new all-time high this month.' },
  '6m': { value: '$289,450', gain: '+$42,800', periodGain: '+$42,800', annual: '+18.4%', contributions: '$121,600', returns: '$167,850', avgReturn: '+14.2%', points: [25,28,32,35,38,42,45,48,52,55,58,62], labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'].slice(0,12), insight: 'Portfolio grew steadily with low volatility over 6 months.' },
  '1y': { value: '$289,450', gain: '+$72,400', periodGain: '+$72,400', annual: '+18.4%', contributions: '$121,600', returns: '$167,850', avgReturn: '+14.2%', points: [20,22,25,28,30,33,35,38,40,42,45,48], labels: ['J','F','M','A','M','J','J','A','S','O','N','D'], insight: 'Annual return of 18.4% outperformed your benchmark.' },
};

/* ── Tax Data ───────────────────────────────────────────── */

const taxData: Record<Period, { savings: string; harvesting: string; lotOpt: string; washSale: string; projected: string; points: number[]; labels: string[]; insight: string }> = {
  today: { savings: '$45', harvesting: '$45', lotOpt: '$12', washSale: '$0', projected: '$4,280', points: [0,5,12,18,25,32,38,45], labels: ['9a','10a','11a','12p','1p','2p','3p','4p'], insight: 'Today harvested $45 in tax losses.' },
  '1d': { savings: '$38', harvesting: '$38', lotOpt: '$10', washSale: '$0', projected: '$4,235', points: [0,4,10,16,22,28,34,38], labels: ['9a','10a','11a','12p','1p','2p','3p','4p'], insight: 'Yesterday\'s harvesting saved an estimated $38.' },
  '1m': { savings: '$420', harvesting: '$320', lotOpt: '$85', washSale: '$15', projected: '$4,280', points: [0,35,72,110,148,185,225,268,310,352,395,420], labels: ['1','3','5','7','9','11','13','15','17','19','21','23'], insight: 'Tax-loss harvesting reduced estimated taxes by $420 this month.' },
  '6m': { savings: '$2,480', harvesting: '$1,840', lotOpt: '$480', washSale: '$160', projected: '$4,280', points: [0,280,560,840,1120,1400,1680,1960,2240,2480], labels: ['Jan','Feb','Mar','Apr','May','Jun'], insight: 'Cumulative tax savings reached $2,480 over 6 months.' },
  '1y': { savings: '$4,280', harvesting: '$3,200', lotOpt: '$840', washSale: '$240', projected: '$4,280', points: [0,380,720,1100,1480,1850,2200,2580,2940,3320,3680,4020,4280], labels: ['J','F','M','A','M','J','J','A','S','O','N','D'], insight: 'Tax optimization added $4,280 to your after-tax return this year.' },
};

/* ── Allocation Data ────────────────────────────────────── */

const allocation = [
  { name: 'US Equities', pct: 48, value: '$164,400', change: '+3%', color: 'var(--brand-primary)' },
  { name: 'International', pct: 25, value: '$85,600', change: '-1%', color: 'var(--chart-6)' },
  { name: 'Bonds', pct: 15, value: '$51,400', change: '+0.5%', color: 'var(--chart-1)' },
  { name: 'Cash', pct: 12, value: '$41,180', change: '-2%', color: 'var(--accent-warning)' },
];

/* ── Accounts Data ──────────────────────────────────────── */

const advizmoAccounts = [
  { type: 'Cash', count: 2, value: '$59,050', icon: 'cash' },
  { type: 'Investment', count: 1, value: '$189,450', icon: 'invest' },
  { type: 'Retirement', count: 1, value: '$82,300', icon: 'retire' },
  { type: 'Credit', count: 1, value: '$3,200', icon: 'credit' },
];

const accountDist = [
  { name: 'Brokerage', value: '$189,450', pct: 55, color: 'var(--brand-primary)' },
  { name: 'Retirement', value: '$82,300', pct: 24, color: 'var(--chart-6)' },
  { name: 'Checking', value: '$24,850', pct: 7, color: 'var(--chart-1)' },
  { name: 'Savings', value: '$34,200', pct: 10, color: 'var(--accent-warning)' },
  { name: 'Cash', value: '$11,780', pct: 4, color: 'var(--text-tertiary)' },
];

/* ── AI Insights Data ───────────────────────────────────── */

const aiInsights = [
  { text: 'Portfolio is heavily weighted toward US equities at 48%.', action: 'Consider diversifying' },
  { text: 'Cash allocation is above your target of 10%.', action: 'Deploy idle cash' },
  { text: 'International exposure decreased 1% this month.', action: 'Review allocation' },
  { text: 'Dividend income increased by 8% compared to last quarter.', action: null as string | null },
];

/* ── Investment Insights Data ────────────────────────────── */

const investInsightsData: Record<Period, string> = {
  today: 'Your portfolio gained $420 today driven by US equities.',
  '1d': 'Yesterday saw a minor pullback of 0.06%.',
  '1m': 'Portfolio reached a new all-time high this month.',
  '6m': 'Technology exposure increased 4% over the past 6 months.',
  '1y': 'Annual return of 18.4% outperformed your benchmark.',
};

/* ── Component ──────────────────────────────────────────── */

export default function VisualAnalytics() {
  const [activeFilter, setActiveFilter] = useState<Period>('1m');

  const cf = cashFlowData[activeFilter];
  const ie = ieData[activeFilter];
  const inv = investData[activeFilter];
  const tx = taxData[activeFilter];

  return (
    <section className="visual-analytics">
      <div className="va-header">
        <div>
          <h2 className="section-title">Analytics</h2>
          <p className="section-subtitle">Understand how your finances are changing over time.</p>
        </div>
        <div className="va-filters">
          {filters.map((f) => (
            <button key={f.id} className={`filter-pill ${activeFilter === f.id ? 'active' : ''}`} onClick={() => setActiveFilter(f.id)}>
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <div className="va-grid">

        {/* ── Cash Flow ────────────────────────────────── */}
        <div className="va-card">
          <div className="va-card-header">
            <div>
              <h3 className="va-card-title">Cash Flow</h3>
              <p className="va-card-desc">Money in vs money out</p>
            </div>
            <div className="va-card-metric">
              <span className="va-metric-value">{cf.metric}</span>
              <span className="va-metric-trend trend-up"><TrendUpIcon /> {cf.trend}</span>
            </div>
          </div>
          <div className="va-chart">
            <svg viewBox="0 0 400 80" className="va-area-chart">
              <defs>
                <linearGradient id="cfG" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="var(--accent-positive)" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="var(--accent-positive)" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d={`M0 80 ${cf.points.map((p, i) => `L${(i / (cf.points.length - 1)) * 400} ${80 - (p / 100) * 70}`).join(' ')} L400 80Z`} fill="url(#cfG)" />
              <path d={`M0 ${80 - (cf.points[0] / 100) * 70} ${cf.points.map((p, i) => `L${(i / (cf.points.length - 1)) * 400} ${80 - (p / 100) * 70}`).join(' ')}`} fill="none" stroke="var(--accent-positive)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="400" cy={80 - (cf.points[cf.points.length - 1] / 100) * 70} r="3" fill="var(--accent-positive)" />
            </svg>
            <div className="va-chart-labels">{cf.labels.map((l, i) => <span key={i}>{l}</span>)}</div>
          </div>
          <div className="va-insight"><LightbulbIcon /><span>{cf.insight}</span></div>
        </div>

        {/* ── Income vs Expenses ───────────────────────── */}
        <div className="va-card">
          <div className="va-card-header">
            <div>
              <h3 className="va-card-title">Income vs Expenses</h3>
              <p className="va-card-desc">How much you keep from what you earn</p>
            </div>
            <div className="va-card-metric">
              <span className="va-metric-value">{ie.rate}</span>
              <span className="va-metric-trend trend-neutral">Savings Rate</span>
            </div>
          </div>
          <div className="va-bar-chart">
            {ie.income.map((inc, i) => (
              <div key={i} className="va-bar-group">
                <div className="va-bar-container">
                  <div className="va-bar income" style={{ height: `${inc}%` }} />
                  <div className="va-bar expense" style={{ height: `${ie.expense[i]}%` }} />
                </div>
                <span className="va-bar-label">{ie.labels[i]}</span>
              </div>
            ))}
          </div>
          <div className="va-bar-legend">
            <span className="va-legend-item"><span className="va-dot income" />Income</span>
            <span className="va-legend-item"><span className="va-dot expense" />Expenses</span>
            <span className="va-legend-item"><span className="va-dot savings" />Saved {ie.saved}</span>
          </div>
          <div className="va-insight"><LightbulbIcon /><span>{ie.insight}</span></div>
        </div>

        {/* ── Investment Portfolio ─────────────────────── */}
        <div className="va-card">
          <div className="va-card-header">
            <div>
              <h3 className="va-card-title">Investment Portfolio</h3>
              <p className="va-card-desc">Performance and allocation overview</p>
            </div>
            <div className="va-card-metric">
              <span className="va-metric-value">{inv.value}</span>
              <span className={`va-metric-trend ${inv.gain.startsWith('+') ? 'trend-up' : 'trend-down'}`}>
                {inv.gain.startsWith('+') ? <TrendUpIcon /> : <TrendDownIcon />} {inv.periodGain}
              </span>
            </div>
          </div>
          <div className="va-metrics-row">
            <div className="va-mini-stat"><span className="va-mini-label">Today's Gain</span><span className="va-mini-value positive">{inv.gain}</span></div>
            <div className="va-mini-stat"><span className="va-mini-label">Annual Return</span><span className="va-mini-value positive">{inv.annual}</span></div>
            <div className="va-mini-stat"><span className="va-mini-label">Contributions</span><span className="va-mini-value">{inv.contributions}</span></div>
          </div>
          <div className="va-chart">
            <svg viewBox="0 0 400 70" className="va-area-chart">
              <defs>
                <linearGradient id="ipG" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="var(--brand-primary)" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="var(--brand-primary)" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d={`M0 70 ${inv.points.map((p, i) => `L${(i / (inv.points.length - 1)) * 400} ${70 - (p / 70) * 60}`).join(' ')} L400 70Z`} fill="url(#ipG)" />
              <path d={`M0 ${70 - (inv.points[0] / 70) * 60} ${inv.points.map((p, i) => `L${(i / (inv.points.length - 1)) * 400} ${70 - (p / 70) * 60}`).join(' ')}`} fill="none" stroke="var(--brand-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="400" cy={70 - (inv.points[inv.points.length - 1] / 70) * 60} r="3" fill="var(--brand-primary)" />
            </svg>
          </div>
          <div className="va-insight"><LightbulbIcon /><span>{investInsightsData[activeFilter]}</span></div>
        </div>

        {/* ── Estimated Tax Savings ────────────────────── */}
        <div className="va-card">
          <div className="va-card-header">
            <div>
              <h3 className="va-card-title">Estimated Tax Savings</h3>
              <p className="va-card-desc">Value created by tax optimization</p>
            </div>
            <div className="va-card-metric">
              <span className="va-metric-value">{tx.savings}</span>
              <span className="va-metric-trend trend-up"><TrendUpIcon /> {periodLabels[activeFilter]}</span>
            </div>
          </div>
          <div className="va-metrics-row">
            <div className="va-mini-stat"><span className="va-mini-label">Tax-Loss Harvesting</span><span className="va-mini-value positive">{tx.harvesting}</span></div>
            <div className="va-mini-stat"><span className="va-mini-label">Lot Optimization</span><span className="va-mini-value positive">{tx.lotOpt}</span></div>
            <div className="va-mini-stat"><span className="va-mini-label">Wash Sale Prevented</span><span className="va-mini-value">{tx.washSale}</span></div>
          </div>
          <div className="va-chart">
            <svg viewBox="0 0 400 70" className="va-area-chart">
              <defs>
                <linearGradient id="txG" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="var(--chart-1)" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="var(--chart-1)" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d={`M0 70 ${tx.points.map((p, i) => `L${(i / (tx.points.length - 1)) * 400} ${70 - (p / Math.max(...tx.points)) * 60}`).join(' ')} L400 70Z`} fill="url(#txG)" />
              <path d={`M0 ${70 - (tx.points[0] / Math.max(...tx.points)) * 60} ${tx.points.map((p, i) => `L${(i / (tx.points.length - 1)) * 400} ${70 - (p / Math.max(...tx.points)) * 60}`).join(' ')}`} fill="none" stroke="var(--chart-1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="va-insight"><LightbulbIcon /><span>Tax-loss harvesting reduced estimated taxes by {tx.savings} this period. Projected end-of-year savings: {tx.projected}.</span></div>
        </div>

        {/* ── Asset Allocation ─────────────────────────── */}
        <div className="va-card">
          <div className="va-card-header">
            <div>
              <h3 className="va-card-title">Asset Allocation</h3>
              <p className="va-card-desc">How your investments are distributed</p>
            </div>
            <div className="va-card-metric">
              <span className="va-metric-value">$342,580</span>
              <span className="va-metric-trend trend-neutral">Total Value</span>
            </div>
          </div>
          <div className="va-allocation">
            <div className="va-donut-wrap">
              <svg viewBox="0 0 100 100" className="va-donut">
                <circle cx="50" cy="50" r="38" fill="none" stroke="var(--bg-tertiary)" strokeWidth="10" />
                {(() => {
                  let offset = 0;
                  const c = 2 * Math.PI * 38;
                  return allocation.map((a) => {
                    const dash = (a.pct / 100) * c;
                    const el = <circle key={a.name} cx="50" cy="50" r="38" fill="none" stroke={a.color} strokeWidth="10" strokeDasharray={`${dash} ${c - dash}`} strokeDashoffset={`${-offset}`} transform="rotate(-90 50 50)" />;
                    offset += dash;
                    return el;
                  });
                })()}
              </svg>
            </div>
            <div className="va-alloc-list">
              {allocation.map((a) => (
                <div key={a.name} className="va-alloc-item">
                  <span className="va-alloc-dot" style={{ background: a.color }} />
                  <span className="va-alloc-name">{a.name}</span>
                  <span className="va-alloc-pct">{a.pct}%</span>
                  <span className="va-alloc-value">{a.value}</span>
                  <span className={`va-alloc-change ${a.change.startsWith('+') ? 'positive' : 'negative'}`}>{a.change}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="va-insight"><LightbulbIcon /><span>US Equities lead at 48%. International exposure decreased 1% this month.</span></div>
        </div>

        {/* ── Advizmo Accounts ─────────────────────────── */}
        <div className="va-card">
          <div className="va-card-header">
            <div>
              <h3 className="va-card-title">Advizmo Accounts</h3>
              <p className="va-card-desc">Consolidated overview of all linked accounts</p>
            </div>
            <div className="va-card-metric">
              <span className="va-metric-value">5</span>
              <span className="va-metric-trend trend-neutral">Linked Accounts</span>
            </div>
          </div>
          <div className="va-accounts-grid">
            {advizmoAccounts.map((a) => (
              <div key={a.type} className="va-account-card">
                <div className="va-account-icon-wrap">
                  {a.icon === 'cash' && <CashIcon />}
                  {a.icon === 'invest' && <InvestIcon />}
                  {a.icon === 'retire' && <RetireIcon />}
                  {a.icon === 'credit' && <CreditIcon />}
                </div>
                <span className="va-account-type">{a.type}</span>
                <span className="va-account-val">{a.value}</span>
                <span className="va-account-count">{a.count} account{a.count > 1 ? 's' : ''}</span>
              </div>
            ))}
          </div>
          <div className="va-insight"><LightbulbIcon /><span>68% of your assets are invested. Checking holds more idle cash than recommended.</span></div>
          <button className="va-cta-link">View All Accounts</button>
        </div>

        {/* ── Account Distribution ─────────────────────── */}
        <div className="va-card">
          <div className="va-card-header">
            <div>
              <h3 className="va-card-title">Account Distribution</h3>
              <p className="va-card-desc">Where your money is located</p>
            </div>
          </div>
          <div className="va-account-list">
            {accountDist.map((a) => (
              <div key={a.name} className="va-account-row">
                <div className="va-account-info">
                  <span className="va-account-dot" style={{ background: a.color }} />
                  <span className="va-account-name">{a.name}</span>
                </div>
                <span className="va-account-value">{a.value}</span>
                <div className="va-account-bar-wrap">
                  <div className="va-account-bar" style={{ width: `${a.pct}%`, background: a.color }} />
                </div>
                <span className="va-account-pct">{a.pct}%</span>
              </div>
            ))}
          </div>
          <div className="va-insight"><LightbulbIcon /><span>Brokerage holds 55% of total assets. Checking accounts hold more idle cash than recommended.</span></div>
        </div>

        {/* ── Investment Insights ──────────────────────── */}
        <div className="va-card va-insights-card">
          <div className="va-card-header">
            <div>
              <h3 className="va-card-title">Investment Insights</h3>
              <p className="va-card-desc">AI-generated observations</p>
            </div>
            <div className="va-card-metric">
              <span className="va-metric-value">4</span>
              <span className="va-metric-trend trend-neutral">New Insights</span>
            </div>
          </div>
          <div className="va-ai-insights">
            {aiInsights.map((item, i) => (
              <div key={i} className="va-ai-row">
                <SparkleIcon />
                <span className="va-ai-text">{item.text}</span>
                {item.action && <button className="va-ai-action">{item.action}</button>}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

/* ── Icons ──────────────────────────────────────────────── */

function TrendUpIcon() {
  return <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 9L5 5.5L7.5 7.5L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function TrendDownIcon() {
  return <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 3L5 6.5L7.5 4.5L10 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function LightbulbIcon() {
  return <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="va-insight-icon"><path d="M7 1C4.8 1 3 2.8 3 5C3 6.4 3.7 7.6 4.8 8.3V10C4.8 10.3 5 10.5 5.3 10.5H8.7C9 10.5 9.2 10.3 9.2 10V8.3C10.3 7.6 11 6.4 11 5C11 2.8 9.2 1 7 1Z" stroke="currentColor" strokeWidth="1.2" /><path d="M5.3 11.5H8.7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" /></svg>;
}

function SparkleIcon() {
  return <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="va-sparkle-icon"><path d="M7 1L8.2 5L12 5.8L8.2 6.6L7 10.6L5.8 6.6L2 5.8L5.8 5L7 1Z" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" /></svg>;
}

function CashIcon() {
  return <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="2" y="5" width="14" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5"/><circle cx="9" cy="9" r="2" stroke="currentColor" strokeWidth="1.2"/></svg>;
}

function InvestIcon() {
  return <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M2 15L6 10L9 12L16 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M13 5H16V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}

function RetireIcon() {
  return <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.5"/><path d="M9 5V9L12 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>;
}

function CreditIcon() {
  return <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="2" y="4" width="14" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.5"/><path d="M2 8H16" stroke="currentColor" strokeWidth="1.5"/></svg>;
}

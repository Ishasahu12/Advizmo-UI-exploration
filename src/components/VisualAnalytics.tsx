import React from 'react';
import './VisualAnalytics.css';

const VisualAnalytics: React.FC = () => {
  const cashFlowData = [
    { month: 'Jan', value: 4200 },
    { month: 'Feb', value: 3800 },
    { month: 'Mar', value: 5100 },
    { month: 'Apr', value: 4600 },
    { month: 'May', value: 5200 },
    { month: 'Jun', value: 4800 },
  ];

  const maxValue = Math.max(...cashFlowData.map(d => d.value));

  const savingsData = [
    { category: 'Housing', amount: 2100, percent: 49 },
    { category: 'Food', amount: 680, percent: 16 },
    { category: 'Transport', amount: 420, percent: 10 },
    { category: 'Utilities', amount: 280, percent: 7 },
    { category: 'Other', amount: 800, percent: 18 },
  ];

  const allocationData = [
    { name: 'Stocks', value: 60, color: 'var(--brand-purple)' },
    { name: 'Bonds', value: 25, color: 'var(--brand-cyan)' },
    { name: 'Cash', value: 15, color: 'var(--accent-green)' },
  ];

  return (
    <section className="visual-analytics">
      <h2 className="section-title">Analytics</h2>
      
      <div className="charts-grid">
        <div className="chart-card">
          <div className="chart-header">
            <h3 className="chart-title">Cash Flow</h3>
            <span className="chart-period">Last 6 months</span>
          </div>
          <div className="chart-content">
            <div className="bar-chart">
              {cashFlowData.map((d) => (
                <div key={d.month} className="bar-group">
                  <div 
                    className="bar" 
                    style={{ height: `${(d.value / maxValue) * 100}%` }}
                  />
                  <span className="bar-label">{d.month}</span>
                </div>
              ))}
            </div>
            <div className="chart-legend">
              <span className="legend-item">
                <span className="legend-dot" style={{ background: 'var(--accent-green)' }} />
                Net savings: $1,560/mo avg
              </span>
            </div>
          </div>
        </div>

        <div className="chart-card">
          <div className="chart-header">
            <h3 className="chart-title">Monthly Spending</h3>
            <span className="chart-period">June</span>
          </div>
          <div className="chart-content">
            <div className="spending-list">
              {savingsData.map((item) => (
                <div key={item.category} className="spending-item">
                  <span className="spending-category">{item.category}</span>
                  <div className="spending-bar-container">
                    <div 
                      className="spending-bar" 
                      style={{ width: `${item.percent}%` }}
                    />
                  </div>
                  <span className="spending-amount">${item.amount.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="chart-card">
          <div className="chart-header">
            <h3 className="chart-title">Asset Allocation</h3>
            <span className="chart-period">Current</span>
          </div>
          <div className="chart-content allocation-content">
            <div className="allocation-donut">
              <svg viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" fill="none" stroke="var(--bg-tertiary)" strokeWidth="12" />
                {allocationData.reduce((acc, item) => {
                  const offset = acc.offset;
                  const strokeDash = (item.value / 100) * 251.2;
                  acc.elements.push(
                    <circle
                      key={item.name}
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke={item.color}
                      strokeWidth="12"
                      strokeDasharray={`${strokeDash} ${251.2 - strokeDash}`}
                      strokeDashoffset={-offset}
                      transform="rotate(-90 50 50)"
                    />
                  );
                  acc.offset += strokeDash;
                  return acc;
                }, { elements: [] as React.ReactNode[], offset: 0 }).elements}
              </svg>
              <div className="donut-center">
                <span className="donut-value">$289k</span>
                <span className="donut-label">Invested</span>
              </div>
            </div>
            <div className="allocation-legend">
              {allocationData.map((item) => (
                <div key={item.name} className="legend-item">
                  <span className="legend-color" style={{ background: item.color }} />
                  <span className="legend-name">{item.name}</span>
                  <span className="legend-value">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="chart-card">
          <div className="chart-header">
            <h3 className="chart-title">Income vs Expenses</h3>
            <span className="chart-period">This Month</span>
          </div>
          <div className="chart-content">
            <div className="comparison-chart">
              <div className="comparison-item">
                <span className="comparison-label">Income</span>
                <div className="comparison-bar-container">
                  <div className="comparison-bar income" style={{ width: '100%' }} />
                </div>
                <span className="comparison-value">$5,840</span>
              </div>
              <div className="comparison-item">
                <span className="comparison-label">Expenses</span>
                <div className="comparison-bar-container">
                  <div className="comparison-bar expenses" style={{ width: '73%' }} />
                </div>
                <span className="comparison-value">$4,280</span>
              </div>
            </div>
            <div className="savings-indicator">
              <span className="savings-label">Monthly Savings</span>
              <span className="savings-value">$1,560</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisualAnalytics;

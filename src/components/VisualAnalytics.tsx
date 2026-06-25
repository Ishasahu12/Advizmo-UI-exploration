import React from 'react';
import './VisualAnalytics.css';

const VisualAnalytics: React.FC = () => {
  const cashFlowData = [
    { month: 'Jul', value: 4200 },
    { month: 'Aug', value: 3800 },
    { month: 'Sep', value: 5100 },
    { month: 'Oct', value: 4600 },
    { month: 'Nov', value: 5200 },
    { month: 'Dec', value: 4800 },
  ];

  const incomeVsExpenses = {
    income: 12500,
    expenses: 7680,
  };

  const assetAllocation = [
    { name: 'Stocks', value: 45, color: 'var(--brand-purple)' },
    { name: 'Bonds', value: 25, color: 'var(--brand-cyan)' },
    { name: 'Real Estate', value: 15, color: 'var(--accent-blue)' },
    { name: 'Cash', value: 10, color: 'var(--accent-green)' },
    { name: 'Crypto', value: 5, color: 'var(--accent-yellow)' },
  ];

  const monthlySpending = [
    { category: 'Housing', amount: 2400, percent: 31 },
    { category: 'Food', amount: 800, percent: 10 },
    { category: 'Transport', amount: 450, percent: 6 },
    { category: 'Entertainment', amount: 320, percent: 4 },
    { category: 'Shopping', amount: 680, percent: 9 },
    { category: 'Other', amount: 2030, percent: 26 },
  ];

  const maxCashFlow = Math.max(...cashFlowData.map((d) => d.value));
  const maxSpending = Math.max(...monthlySpending.map((d) => d.amount));

  return (
    <div className="visual-analytics">
      <h2 className="section-title">Visual Analytics</h2>
      <div className="charts-grid">
        <div className="chart-card cash-flow-chart">
          <div className="chart-header">
            <h3 className="chart-title">Cash Flow Trend</h3>
            <span className="chart-period">Last 6 months</span>
          </div>
          <div className="chart-body">
            <div className="bar-chart">
              {cashFlowData.map((data, index) => (
                <div key={data.month} className="bar-group">
                  <div
                    className="bar"
                    style={{ height: `${(data.value / maxCashFlow) * 100}%` }}
                  >
                    <span className="bar-value">${(data.value / 1000).toFixed(1)}k</span>
                  </div>
                  <span className="bar-label">{data.month}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="chart-card income-expenses-chart">
          <div className="chart-header">
            <h3 className="chart-title">Income vs Expenses</h3>
            <span className="chart-period">This Month</span>
          </div>
          <div className="chart-body">
            <div className="comparison-bars">
              <div className="comparison-item">
                <div className="comparison-label">Income</div>
                <div className="comparison-bar-container">
                  <div
                    className="comparison-bar income"
                    style={{ width: '100%' }}
                  />
                </div>
                <span className="comparison-value">$12,500</span>
              </div>
              <div className="comparison-item">
                <div className="comparison-label">Expenses</div>
                <div className="comparison-bar-container">
                  <div
                    className="comparison-bar expenses"
                    style={{ width: `${(incomeVsExpenses.expenses / incomeVsExpenses.income) * 100}%` }}
                  />
                </div>
                <span className="comparison-value">$7,680</span>
              </div>
            </div>
            <div className="savings-indicator">
              <span className="savings-label">Savings Rate</span>
              <span className="savings-value">38.6%</span>
            </div>
          </div>
        </div>

        <div className="chart-card allocation-chart">
          <div className="chart-header">
            <h3 className="chart-title">Asset Allocation</h3>
          </div>
          <div className="chart-body">
            <div className="donut-container">
              <svg viewBox="0 0 100 100" className="donut-chart">
                {assetAllocation.reduce(
                  (acc, item, index) => {
                    const offset = acc.offset;
                    const strokeDash = (item.value / 100) * 251.2;
                    const remaining = 251.2 - strokeDash;
                    acc.elements.push(
                      <circle
                        key={item.name}
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke={item.color}
                        strokeWidth="12"
                        strokeDasharray={`${strokeDash} ${remaining}`}
                        strokeDashoffset={-offset}
                        transform="rotate(-90 50 50)"
                      />
                    );
                    acc.offset += strokeDash;
                    return acc;
                  },
                  { elements: [] as React.ReactNode[], offset: 0 }
                ).elements}
              </svg>
              <div className="donut-center">
                <span className="donut-value">$522k</span>
                <span className="donut-label">Invested</span>
              </div>
            </div>
            <ul className="allocation-legend">
              {assetAllocation.map((item) => (
                <li key={item.name} className="legend-item">
                  <span className="legend-color" style={{ backgroundColor: item.color }} />
                  <span className="legend-name">{item.name}</span>
                  <span className="legend-value">{item.value}%</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="chart-card spending-chart">
          <div className="chart-header">
            <h3 className="chart-title">Monthly Spending</h3>
            <span className="chart-period">This Month</span>
          </div>
          <div className="chart-body">
            <ul className="spending-list">
              {monthlySpending.map((item) => (
                <li key={item.category} className="spending-item">
                  <div className="spending-info">
                    <span className="spending-category">{item.category}</span>
                    <span className="spending-amount">${item.amount.toLocaleString()}</span>
                  </div>
                  <div className="spending-bar-container">
                    <div
                      className="spending-bar"
                      style={{ width: `${item.percent}%` }}
                    />
                  </div>
                  <span className="spending-percent">{item.percent}%</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisualAnalytics;

import { useState } from 'react';
import { useInView } from '../hooks/useInView';
import './FinancialSnapshot.css';

interface MetricData {
  label: string;
  numericValue: number;
  prefix?: string;
  suffix?: string;
  change: Record<string, number>;
  sparkline: number[];
}

const metrics: MetricData[] = [
  {
    label: 'Net Worth',
    numericValue: 342580,
    prefix: '$',
    change: { '1d': 0.1, today: 0.1, '1m': 2.4, '6m': 8.2, '1y': 14.6 },
    sparkline: [30, 35, 32, 40, 38, 45, 48, 52],
  },
  {
    label: 'Cash Available',
    numericValue: 24850,
    prefix: '$',
    change: { '1d': -0.3, today: -0.3, '1m': -1.2, '6m': 4.5, '1y': -2.8 },
    sparkline: [45, 42, 40, 38, 35, 32, 30, 28],
  },
  {
    label: 'Invested Assets',
    numericValue: 289450,
    prefix: '$',
    change: { '1d': 0.4, today: 0.4, '1m': 3.1, '6m': 10.2, '1y': 18.4 },
    sparkline: [20, 25, 28, 32, 38, 42, 48, 55],
  },
  {
    label: 'Cash Flow',
    numericValue: 4280,
    prefix: '+$',
    change: { '1d': 0, today: 0, '1m': 18, '6m': 12, '1y': 8 },
    sparkline: [10, 12, 15, 14, 18, 20, 22, 25],
  },
  {
    label: 'Emergency Fund',
    numericValue: 15000,
    prefix: '$',
    change: { '1d': 0, today: 0, '1m': 0, '6m': 0, '1y': 0 },
    sparkline: [100, 100, 100, 100, 100, 100, 100, 100],
  },
  {
    label: 'Portfolio Growth',
    numericValue: 12.4,
    prefix: '+',
    suffix: '%',
    change: { '1d': 0.2, today: 0.2, '1m': 2.1, '6m': 6.8, '1y': 12.4 },
    sparkline: [15, 16, 18, 17, 20, 22, 24, 26],
  },
];

const filters = [
  { id: '1d', label: 'Yesterday' },
  { id: 'today', label: 'Today' },
  { id: '1m', label: 'This Month' },
  { id: '6m', label: '6 Months' },
  { id: '1y', label: 'Year' },
];

const filterLabels: Record<string, string> = {
  '1d': 'vs Yesterday',
  today: 'vs Today',
  '1m': 'vs Last Month',
  '6m': 'vs 6 Months Ago',
  '1y': 'vs Last Year',
};

function formatNumber(n: number, prefix?: string, suffix?: string): string {
  const formatted = n % 1 === 0 ? n.toLocaleString('en-US') : n.toFixed(1);
  return `${prefix || ''}${formatted}${suffix || ''}`;
}

export default function FinancialSnapshot() {
  const [activeFilter, setActiveFilter] = useState('1m');
  const { ref, inView } = useInView(0.2);

  return (
    <section className="snapshot-section" ref={ref}>
      <div className="snapshot-header">
        <div>
          <h2 className="section-title">Financial Snapshot</h2>
          <p className="section-subtitle">Your financial position at a glance</p>
        </div>
        <div className="snapshot-filters">
          {filters.map((f) => (
            <button
              key={f.id}
              className={`filter-pill ${activeFilter === f.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <div className="snapshot-grid">
        {metrics.map((m, idx) => {
          const changeVal = m.change[activeFilter];
          const trend = changeVal > 0 ? 'up' : changeVal < 0 ? 'down' : 'neutral';

          return (
            <div
              key={m.label}
              className="snapshot-card"
              style={{ animationDelay: `${idx * 60}ms` }}
            >
              <span className="snapshot-label">{m.label}</span>
              <span className="snapshot-value">
                {inView ? (
                  <AnimatedNumber
                    end={m.numericValue}
                    prefix={m.prefix}
                    suffix={m.suffix}
                  />
                ) : (
                  formatNumber(0, m.prefix, m.suffix)
                )}
              </span>
              <div className="snapshot-change">
                {trend === 'up' && <TrendUpIcon />}
                {trend === 'down' && <TrendDownIcon />}
                {trend === 'neutral' && <TrendNeutralIcon />}
                <span className={`change-val trend-${trend}`}>
                  {changeVal > 0 ? '+' : ''}
                  {changeVal}%
                </span>
                <span className="change-period">{filterLabels[activeFilter]}</span>
              </div>
              <div className="snapshot-sparkline">
                {m.sparkline.map((v, i) => (
                  <div
                    key={i}
                    className={`sparkline-bar ${trend}`}
                    style={{
                      height: `${(v / 110) * 100}%`,
                      transitionDelay: `${i * 30}ms`,
                    }}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function AnimatedNumber({
  end,
  prefix,
  suffix,
}: {
  end: number;
  prefix?: string;
  suffix?: string;
}) {
  const [current, setCurrent] = useState(0);
  const frameRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);
  const duration = 800;

  useEffect(() => {
    const animate = (ts: number) => {
      if (!startRef.current) startRef.current = ts;
      const elapsed = ts - startRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(eased * end);
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };
    frameRef.current = requestAnimationFrame(animate);
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [end]);

  return <>{formatNumber(current, prefix, suffix)}</>;
}

function TrendUpIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M2 9L5 5.5L7.5 7.5L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TrendDownIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M2 3L5 6.5L7.5 4.5L10 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TrendNeutralIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M2 6H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

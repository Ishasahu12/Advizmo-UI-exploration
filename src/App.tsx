import { useState, useEffect } from 'react';
import './index.css';
import Navigation from './components/Navigation';
import GlobalHeader from './components/GlobalHeader';
import UpcomingItems from './components/UpcomingItems';
import FinancialSnapshot from './components/FinancialSnapshot';
import FinancialHealth from './components/FinancialHealth';
import Insights from './components/Insights';
import VisualAnalytics from './components/VisualAnalytics';
import RecentActivity from './components/RecentActivity';
import AIRecommendations from './components/AIRecommendations';

import HeroV0 from './variations/HeroV0';
import HeroV4 from './variations/HeroV4';
import HeroV5 from './variations/HeroV5';
import HeroV6 from './variations/HeroV6';
import HeroV7 from './variations/HeroV7';
import HeroV8 from './variations/HeroV8';
import HeroV9 from './variations/HeroV9';
import HeroV10 from './variations/HeroV10';
import HeroV11 from './variations/HeroV11';
import HeroV12 from './variations/HeroV12';
import HeroV13 from './variations/HeroV13';

type VariationId = 'v0' | 'v4' | 'v5' | 'v6' | 'v7' | 'v8' | 'v9' | 'v10' | 'v11' | 'v12' | 'v13';

const heroMap: Record<VariationId, React.FC> = {
  v0: HeroV0,
  v4: HeroV4,
  v5: HeroV5,
  v6: HeroV6,
  v7: HeroV7,
  v8: HeroV8,
  v9: HeroV9,
  v10: HeroV10,
  v11: HeroV11,
  v12: HeroV12,
  v13: HeroV13,
};

function getVariationFromHash(): VariationId {
  const hash = window.location.hash.replace('#', '');
  return hash in heroMap ? (hash as VariationId) : 'v4';
}

function App() {
  const [variation, setVariation] = useState<VariationId>(getVariationFromHash);

  useEffect(() => {
    const handler = () => setVariation(getVariationFromHash());
    window.addEventListener('hashchange', handler);
    return () => window.removeEventListener('hashchange', handler);
  }, []);

  const HeroComponent = heroMap[variation];

  return (
    <div className="app-layout">
      <Navigation />
      <main className="main-content">
        <GlobalHeader />
        <div className="dashboard-container">
          <HeroComponent />
          <UpcomingItems />
          <FinancialSnapshot />
          <FinancialHealth />
          <Insights />
          <VisualAnalytics />
          <RecentActivity />
          <AIRecommendations />
        </div>
      </main>
    </div>
  );
}

export default App;

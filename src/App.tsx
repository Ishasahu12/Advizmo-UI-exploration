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

import VariationNav from './variations/VariationNav';
import HeroV0 from './variations/HeroV0';
import HeroV4 from './variations/HeroV4';
import HeroV5 from './variations/HeroV5';
import HeroV6 from './variations/HeroV6';
import HeroV7 from './variations/HeroV7';

type VariationId = 'v0' | 'v4' | 'v5' | 'v6' | 'v7';

const heroMap: Record<VariationId, React.FC> = {
  v0: HeroV0,
  v4: HeroV4,
  v5: HeroV5,
  v6: HeroV6,
  v7: HeroV7,
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
        <VariationNav />
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

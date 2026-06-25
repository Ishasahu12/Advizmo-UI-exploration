import './index.css';
import Navigation from './components/Navigation';
import GlobalHeader from './components/GlobalHeader';
import ActionCenter from './components/ActionCenter';
import FinancialSnapshot from './components/FinancialSnapshot';
import FinancialHealth from './components/FinancialHealth';
import Insights from './components/Insights';
import VisualAnalytics from './components/VisualAnalytics';
import RecentActivity from './components/RecentActivity';
import UpcomingItems from './components/UpcomingItems';
import AIRecommendations from './components/AIRecommendations';

function App() {
  return (
    <div className="app-container">
      <Navigation />
      
      <div className="main-wrapper">
        <GlobalHeader />
        
        <main className="main-content">
          <ActionCenter />
          <FinancialSnapshot />
          <FinancialHealth />
          <Insights />
          <VisualAnalytics />
          <RecentActivity />
          <UpcomingItems />
          <AIRecommendations />
        </main>
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import { AppProvider, useApp } from './contexts/AppContext';
import WelcomeScreen from './components/WelcomeScreen';
import HomePage from './components/HomePage';
import StudyMode from './components/StudyMode';
import QuizMode from './components/QuizMode';
import QuizScreen from './components/QuizScreen';
import ProfileScreen from './components/ProfileScreen';
import AITransparency from './components/AITransparency';

const AppContent: React.FC = () => {
  const { state } = useApp();

  const renderCurrentScreen = () => {
    switch (state.currentScreen) {
      case 'welcome':
        return <WelcomeScreen />;
      case 'home':
        return <HomePage />;
      case 'study':
        return <StudyMode />;
      case 'quiz':
        return state.currentQuiz.length > 0 ? <QuizScreen /> : <QuizMode />;
      case 'profile':
        return <ProfileScreen />;
      case 'transparency':
        return <AITransparency />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="font-sans antialiased">
      {renderCurrentScreen()}
    </div>
  );
};

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;
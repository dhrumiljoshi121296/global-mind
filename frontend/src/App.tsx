import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import ProfileSetup from './pages/ProfileSetup';
import ProblemSubmission from './pages/ProblemSubmission';
import ExpertMatching from './pages/ExpertMatching';
import CollaborationRoom from './pages/CollaborationRoom';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<ProfileSetup />} />
            <Route path="/submit-problem" element={<ProblemSubmission />} />
            <Route path="/matching" element={<ExpertMatching />} />
            <Route path="/collaborate/:roomId" element={<CollaborationRoom />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;

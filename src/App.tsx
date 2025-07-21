import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MentorshipHub from './components/MentorshipHub';
import WellnessCenter from './components/WellnessCenter';
import ChatInterface from './components/ChatInterface';
import Dashboard from './components/Dashboard';
import CommunityForum from './components/CommunityForum';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isChatOpen, setIsChatOpen] = useState(false);

  const renderSection = () => {
    switch (activeSection) {
      case 'mentorship':
        return <MentorshipHub />;
      case 'wellness':
        return <WellnessCenter />;
      case 'dashboard':
        return <Dashboard />;
      case 'community':
        return <CommunityForum />;
      default:
        return <Hero onStartChat={() => setIsChatOpen(true)} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header 
        activeSection={activeSection} 
        setActiveSection={setActiveSection}
        onChatClick={() => setIsChatOpen(true)}
      />
      
      <main className="relative">
        {renderSection()}
      </main>

      {isChatOpen && (
        <ChatInterface onClose={() => setIsChatOpen(false)} />
      )}

      <Footer />
    </div>
  );
}

export default App;
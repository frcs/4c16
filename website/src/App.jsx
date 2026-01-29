import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeTab from './components/HomeTab';
import LecturesTab from './components/LecturesTab';
import LabsTab from './components/LabsTab';
import KeynotesTab from './components/KeynotesTab';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {activeTab === 'home' && <HomeTab />}
        {activeTab === 'lectures' && <LecturesTab />}
        {activeTab === 'labs' && <LabsTab />}
        {activeTab === 'keynotes' && <KeynotesTab />}
      </main>

      <Footer />
    </div>
  );
}

export default App;
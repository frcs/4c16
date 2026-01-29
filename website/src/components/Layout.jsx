import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {
  // Use location to determine active tab for the Header styling
  const location = useLocation();
  // Map path to active tab name
  const getActiveTab = (pathname) => {
    if (pathname === '/LabSystem') return 'lab system';
    if (pathname === '/lectures') return 'lectures';
    if (pathname === '/labs') return 'labs';
    if (pathname === '/keynotes') return 'keynotes';
    return 'home';
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Header activeTab={getActiveTab(location.pathname)} />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

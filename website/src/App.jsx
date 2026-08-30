import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import HomeTab from './components/HomeTab';
import LecturesTab from './components/LecturesTab';
import LabsTab from './components/LabsTab';
import KeynotesTab from './components/KeynotesTab';
import LabSystemTab from './components/LabSystemTab';
import HistoryTab from './components/HistoryTab';

function App() {
  // Automatically adopt Vite's BASE_URL (e.g. '/4c16' on GitHub Pages, undefined / root on Vercel)
  const basename = import.meta.env.BASE_URL.replace(/\/$/, '') || undefined;
  
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeTab />} />
          <Route path="lectures" element={<LecturesTab />} />
          <Route path="labs" element={<LabsTab />} />
          <Route path="lab-system" element={<LabSystemTab />} />
          <Route path="LabSystem" element={<LabSystemTab />} /> {/* Case sensitive alias */}
          <Route path="lab-system/history" element={<HistoryTab />} />
          <Route path="LabSystem/history" element={<HistoryTab />} />
          <Route path="history" element={<HistoryTab />} />
          <Route path="keynotes" element={<KeynotesTab />} />
          {/* Catch-all route to redirect back to home or show 404 */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import HomeTab from './components/HomeTab';
import LecturesTab from './components/LecturesTab';
import LabsTab from './components/LabsTab';
import KeynotesTab from './components/KeynotesTab';
import LabSystemTab from './components/LabSystemTab';

function App() {
  // Using a hash router or handling the base path is important for GitHub Pages.
  // Since we want clean URLs (e.g. /4c16/LabSystem), we use BrowserRouter with basename.
  // Ideally, the basename matches the repository name.
  
  return (
    <BrowserRouter basename="/4c16">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeTab />} />
          <Route path="lectures" element={<LecturesTab />} />
          <Route path="labs" element={<LabsTab />} />
          <Route path="lab-system" element={<LabSystemTab />} />
          <Route path="LabSystem" element={<LabSystemTab />} /> {/* Case sensitive alias */}
          <Route path="keynotes" element={<KeynotesTab />} />
          {/* Catch-all route to redirect back to home or show 404 */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

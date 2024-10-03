import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import Qualified from './Qualified.jsx';

createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      {/* Define your routes here */}
      <Route path="/" element={<App />} />
      <Route path="/qualified" element={<Qualified />} />
    </Routes>
  </Router>
);

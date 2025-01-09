// src/App.jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import Dashboard from './pages/Dashboard';
import WorkoutsPage from './pages/WorkoutsPage';
import MealsPage from './pages/MealsPage';
import CaloriesPage from './pages/CaloriesPage';
import Settings from './pages/Settings';
import './styles/globals.css'; // Ensure your styles are imported

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <div className="main-content">
        <Sidebar />
        <div className="page-content">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/workouts" element={<WorkoutsPage />} />
            <Route path="/meals" element={<MealsPage />} />
            <Route path="/calories" element={<CaloriesPage />} />
            <Route path="/settings" element={<Settings />} />
            {/* Add more routes as needed */}
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;

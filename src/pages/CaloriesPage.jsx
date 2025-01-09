// src/pages/CaloriesPage.jsx
import React from 'react';
import CalorieTracker from '../features/calories/components/CalorieTracker';
import CalorieChart from '../features/calories/components/CalorieChart';
import './CaloriesPage.css'; // Optional: Create a CSS file for CaloriesPage styles

const CaloriesPage = () => {
  return (
    <div className="calories-page">
      <h2>Calorie Tracking</h2>
      <CalorieTracker />
      <CalorieChart />
    </div>
  );
};

export default CaloriesPage;

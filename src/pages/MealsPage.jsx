// src/pages/MealsPage.jsx
import React from 'react';
import MealList from '../features/meals/components/MealList';
import AddMeal from '../features/meals/components/AddMeal';
import './MealsPage.css'; // Optional: Create a CSS file for MealsPage styles

const MealsPage = () => {
  return (
    <div className="meals-page">
      <h2>Meals</h2>
      <AddMeal />
      <MealList />
    </div>
  );
};

export default MealsPage;

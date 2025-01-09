// src/pages/MealsPage.jsx
import React from 'react';
import MealList from '../features/meals/components/MealList';
import AddMeal from '../features/meals/components/AddMeal';
import './MealsPage.css'; // Optional: Create a CSS file for MealsPage styles

const MealsPage = () => {
  return (
    <div className="meals-page">
      <h2>Meals</h2>
      <p className="meals-description">
        Track and manage your daily meals to maintain a balanced diet. Add new meals, view your meal history, 
        and monitor your nutritional intake to help achieve your health goals.
      </p>
      <AddMeal />
      <MealList />
    </div>
  );
};

export default MealsPage;

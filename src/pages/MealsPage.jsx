// src/pages/MealsPage.jsx
import React, { useState } from 'react';
import MealList from '../features/meals/components/MealList';
import AddMeal from '../features/meals/components/AddMeal';
import Button from '../components/common/Button';
import Dialog from '../components/common/Dialog';
import './MealsPage.css';

const MealsPage = () => {
  const [showAddMeal, setShowAddMeal] = useState(false);

  return (
    <div className="meals-page">
      <h2>Meals</h2>
      <Button 
        className="show-add-meal-btn"
        onClick={() => setShowAddMeal(true)}
      >
        Add New Meal
      </Button>
      <p className="meals-description">
        Track and manage your daily meals to maintain a balanced diet. Add new meals, view your meal history, 
        and monitor your nutritional intake to help achieve your health goals.
      </p>
      <Dialog
        isOpen={showAddMeal}
        onClose={() => setShowAddMeal(false)}
        title="Add New Meal"
      >
        <AddMeal onClose={() => setShowAddMeal(false)} />
      </Dialog>

      <MealList />
    </div>
  );
};

export default MealsPage;

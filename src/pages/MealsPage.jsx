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
      <div className="meals-hero">
        <img 
          src="/assets/images/healthy_plate.jpg"
          alt="A healthy balanced meal plate"
          className="hero-image"
        />
        <div className="hero-content">
          <h2>Meals</h2>
          <p className="meals-description">
            Track and manage your daily meals to maintain a balanced diet. Add new meals, view your meal history, 
            and monitor your nutritional intake to help achieve your health goals.
          </p>
        </div>
      </div>
      <div className="meal-images-grid">
        {[
          {
            src: "/assets/images/fruits_and_vegetables.jpeg",
            alt: "Fresh fruits and vegetables"
          },
          {
            src: "/assets/images/healthy_food_2.jpg", 
            alt: "Healthy meal preparation"
          },
          {
            src: "/assets/images/healthy_food_3.webp",
            alt: "Nutritious meal options"
          },
          {
            src: "/assets/images/healthy_plate_2.jpg",
            alt: "Well balanced meal"
          }
        ].reduce((acc, _, index, array) => {
          if (index % 2 === 0) {
            acc.push(
              <div key={index} className="image-pair">
                <img 
                  src={array[index].src}
                  alt={array[index].alt}
                  className="meal-image"
                />
                {array[index + 1] && (
                  <img
                    src={array[index + 1].src}
                    alt={array[index + 1].alt} 
                    className="meal-image"
                  />
                )}
              </div>
            );
          }
          return acc;
        }, [])}
      </div>

      <Button 
        className="show-add-meal-btn"
        onClick={() => setShowAddMeal(true)}
      >
        Add New Meal
      </Button>

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

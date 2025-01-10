// src/pages/MealsPage.jsx
import React, { useState, useEffect } from 'react';
import MealList from '../features/meals/components/MealList';
import AddMeal from '../features/meals/components/AddMeal';
import Button from '../components/common/Button';
import Dialog from '../components/common/Dialog';
import './MealsPage.css';

const MealsPage = () => {
  const [showAddMeal, setShowAddMeal] = useState(false);
  const [currentImages, setCurrentImages] = useState([0, 1]);

  const images = [
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
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImages(current => {
        const next = [(current[0] + 2) % images.length, (current[1] + 2) % images.length];
        return next;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

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
      <div className="meals-image-grid">
        <div className="meals-image-pair">
          <img
            src={images[currentImages[0]].src}
            alt={images[currentImages[0]].alt}
            className="meals-image"
          />
          <img 
            src={images[currentImages[1]].src}
            alt={images[currentImages[1]].alt}
            className="meals-image"
          />
        </div>
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

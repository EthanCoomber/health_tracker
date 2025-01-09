// src/features/meals/components/AddMeal.jsx
import React, { useState } from 'react';
import Button from '../../../components/common/Button';

const AddMeal = () => {
  const [name, setName] = useState('');
  const [calories, setCalories] = useState('');
  const [servingSize, setServingSize] = useState('');

  const handleAddMeal = (e) => {
    e.preventDefault();
    // Dispatch action to add meal
    console.log('Adding Meal:', { name, calories, servingSize });
    // Reset form
    setName('');
    setCalories('');
    setServingSize('');
  };

  return (
    <form className="add-meal-form" onSubmit={handleAddMeal}>
      <h3>Add New Meal</h3>
      <div>
        <label>Meal Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Calories:</label>
        <input
          type="number"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
          required
          min="0"
        />
      </div>
      <div>
        <label>Serving Size:</label>
        <input
          type="text"
          value={servingSize}
          onChange={(e) => setServingSize(e.target.value)}
          required
          placeholder="e.g. 1 cup, 100g"
        />
      </div>
      <Button type="submit">Add Meal</Button>
    </form>
  );
};

export default AddMeal;

// src/features/meals/components/AddMeal.jsx
import React, { useState } from 'react';
import Button from '../../../components/common/Button';
import './AddMeal.css';

const AddMeal = ({ onClose }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [servingSize, setServingSize] = useState('');
  const [calories, setCalories] = useState('');
  const [cookingMethod, setCookingMethod] = useState('');
  const [mealType, setMealType] = useState('breakfast');

  const handleAddMeal = (e) => {
    e.preventDefault();
    // Dispatch action to add meal
    console.log('Adding Meal:', { 
      name, 
      description,
      ingredients,
      servingSize,
      calories,
      cookingMethod,
      mealType
    });
    // Reset form
    setName('');
    setDescription('');
    setIngredients('');
    setServingSize('');
    setCalories('');
    setCookingMethod('');
    setMealType('breakfast');
    onClose();
  };

  return (
    <form className="add-meal-form" onSubmit={handleAddMeal}>
      <div className="add-meal-form-group">
        <label className="add-meal-label">Meal Name:</label>
        <input
          className="add-meal-input"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="e.g. Grilled Chicken Salad"
        />
      </div>
      <div className="add-meal-form-group">
        <label className="add-meal-label">Description:</label>
        <textarea
          className="add-meal-textarea"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          placeholder="Describe your meal in detail"
          rows={3}
        />
      </div>
      <div className="add-meal-form-group">
        <label className="add-meal-label">Ingredients:</label>
        <textarea
          className="add-meal-textarea"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          required
          placeholder="List ingredients (one per line)"
          rows={4}
        />
      </div>
      <div className="add-meal-form-group">
        <label className="add-meal-label">Serving Size:</label>
        <input
          className="add-meal-input"
          type="text"
          value={servingSize}
          onChange={(e) => setServingSize(e.target.value)}
          required
          placeholder="e.g. 1 cup, 100g"
        />
      </div>
      <div className="add-meal-form-group">
        <label className="add-meal-label">Cooking Method:</label>
        <input
          className="add-meal-input"
          type="text"
          value={cookingMethod}
          onChange={(e) => setCookingMethod(e.target.value)}
          required
          placeholder="e.g. Grilled, Baked, Raw"
        />
      </div>
      <div className="add-meal-form-group">
        <label className="add-meal-label">Meal Type:</label>
        <select
          className="add-meal-select"
          value={mealType}
          onChange={(e) => setMealType(e.target.value)}
          required
        >
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
          <option value="snack">Snack</option>
        </select>
      </div>
      <div className="add-meal-form-group">
        <label className="add-meal-label">Calories (Optional):</label>
        <input
          className="add-meal-input"
          type="number"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
          min="0"
          placeholder="AI will calculate if left empty"
        />
      </div>
      <Button type="submit" className="add-meal-submit">Add Meal</Button>
    </form>
  );
};

export default AddMeal;

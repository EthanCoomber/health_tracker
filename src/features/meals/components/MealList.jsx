import React from 'react';

const MealList = () => {
  // Sample meal data - would typically come from state/props
  const meals = [
    { id: 1, name: 'Breakfast Oatmeal', calories: 300, servingSize: '1 cup' },
    { id: 2, name: 'Chicken Salad', calories: 450, servingSize: '2 cups' },
    { id: 3, name: 'Protein Smoothie', calories: 200, servingSize: '16 oz' }
  ];

  return (
    <div className="meal-list">
      <h3>Your Meals</h3>
      {meals.length === 0 ? (
        <p>No meals added yet.</p>
      ) : (
        <ul>
          {meals.map(meal => (
            <li key={meal.id} className="meal-item">
              <h4>{meal.name}</h4>
              <p>Calories: {meal.calories}</p>
              <p>Serving Size: {meal.servingSize}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MealList;

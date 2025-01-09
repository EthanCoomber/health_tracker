import React from 'react';
import './MealList.css';

const MealList = () => {
  // Sample meal data - would typically come from state/props
  const meals = [
    { 
      id: 1, 
      name: 'Breakfast Oatmeal',
      description: 'Hearty oatmeal with fresh berries and honey',
      ingredients: 'Oats, berries, honey, milk',
      servingSize: '1 cup',
      calories: 300,
      cookingMethod: 'Stovetop',
      mealType: 'breakfast'
    },
    { 
      id: 2, 
      name: 'Chicken Salad',
      description: 'Fresh garden salad with grilled chicken breast',
      ingredients: 'Lettuce, chicken breast, tomatoes, cucumber, olive oil',
      servingSize: '2 cups',
      calories: 450,
      cookingMethod: 'Grilled',
      mealType: 'lunch'
    },
    { 
      id: 3, 
      name: 'Protein Smoothie',
      description: 'Post-workout protein smoothie with fruits',
      ingredients: 'Protein powder, banana, berries, almond milk',
      servingSize: '16 oz',
      calories: 200,
      cookingMethod: 'Blended',
      mealType: 'snack'
    }
  ];

  return (
    <div className="meal-list-container">
      <h3 className="meal-list-title">Your Meals</h3>
      {meals.length === 0 ? (
        <p className="meal-list-empty">No meals added yet.</p>
      ) : (
        <ul className="meal-list">
          {meals.map(meal => (
            <li key={meal.id} className="meal-list-item">
              <div className="meal-list-item-header">
                <h4 className="meal-list-item-title">{meal.name}</h4>
                <span className="meal-list-item-type">{meal.mealType}</span>
              </div>

              <div className="meal-list-item-main">
                <p className="meal-list-item-detail">
                  <strong>Description:</strong> {meal.description}
                </p>
                <p className="meal-list-item-detail">
                  <strong>Ingredients:</strong> {meal.ingredients}
                </p>
              </div>

              <div className="meal-list-item-details">
                <div className="meal-list-item-detail-group">
                  <p className="meal-list-item-detail">
                    <strong>Serving Size:</strong> {meal.servingSize}
                  </p>
                  <p className="meal-list-item-detail">
                    <strong>Calories:</strong> {meal.calories}
                  </p>
                </div>
                <div className="meal-list-item-detail-group">
                  <p className="meal-list-item-detail">
                    <strong>Cooking Method:</strong> {meal.cookingMethod}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MealList;

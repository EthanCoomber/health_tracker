import React from 'react';
import PropTypes from 'prop-types';

const MealItem = ({ meal }) => {
  return (
    <div className="meal-item">
      <h4>{meal.name}</h4>
      <div className="meal-details">
        <p>Calories: {meal.calories}</p>
        <p>Serving Size: {meal.servingSize}</p>
      </div>
      <div className="meal-actions">
        <button 
          className="delete-btn"
          onClick={() => console.log('Delete meal:', meal.id)}
        >
          Delete
        </button>
        <button
          className="edit-btn" 
          onClick={() => console.log('Edit meal:', meal.id)}
        >
          Edit
        </button>
      </div>
    </div>
  );
};

MealItem.propTypes = {
  meal: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    calories: PropTypes.number.isRequired,
    servingSize: PropTypes.string.isRequired
  }).isRequired
};

export default MealItem;

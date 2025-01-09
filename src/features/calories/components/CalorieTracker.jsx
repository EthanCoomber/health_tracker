import React, { useState } from 'react';
import Button from '../../../components/common/Button';

const CalorieTracker = () => {
  const [dailyGoal, setDailyGoal] = useState(2000);
  const [caloriesConsumed, setCaloriesConsumed] = useState(0);

  const remainingCalories = dailyGoal - caloriesConsumed;

  const handleUpdateGoal = (e) => {
    e.preventDefault();
    const newGoal = parseInt(e.target.goal.value);
    if (!isNaN(newGoal) && newGoal > 0) {
      setDailyGoal(newGoal);
    }
    e.target.reset();
  };

  const handleAddCalories = (e) => {
    e.preventDefault();
    const calories = parseInt(e.target.calories.value);
    if (!isNaN(calories) && calories > 0) {
      setCaloriesConsumed(prev => prev + calories);
    }
    e.target.reset();
  };

  return (
    <div className="calorie-tracker">
      <div className="calorie-stats">
        <h3>Daily Calorie Tracker</h3>
        <div className="stats-grid">
          <div className="stat-box">
            <label>Daily Goal:</label>
            <p>{dailyGoal} calories</p>
          </div>
          <div className="stat-box">
            <label>Consumed:</label>
            <p>{caloriesConsumed} calories</p>
          </div>
          <div className="stat-box">
            <label>Remaining:</label>
            <p>{remainingCalories} calories</p>
          </div>
        </div>
      </div>

      <div className="calorie-forms">
        <form onSubmit={handleUpdateGoal} className="update-goal-form">
          <h4>Update Daily Goal</h4>
          <div>
            <input
              type="number"
              name="goal"
              min="0"
              placeholder="Enter new goal"
              required
            />
            <Button type="submit">Update Goal</Button>
          </div>
        </form>

        <form onSubmit={handleAddCalories} className="add-calories-form">
          <h4>Add Calories</h4>
          <div>
            <input
              type="number"
              name="calories"
              min="0"
              placeholder="Enter calories"
              required
            />
            <Button type="submit">Add Calories</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CalorieTracker;

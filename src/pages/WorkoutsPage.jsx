// src/pages/WorkoutsPage.jsx
import React, { useState } from 'react';
import WorkoutList from '../features/workouts/components/WorkoutList';
import AddWorkout from '../features/workouts/components/AddWorkout';
import Button from '../components/common/Button'; // Ensure you have a Button component
import './WorkoutsPage.css'; // Ensure this CSS file exists

const WorkoutsPage = () => {
  const [showAddWorkout, setShowAddWorkout] = useState(false);

  const handleShowAddWorkout = () => {
    setShowAddWorkout(true);
  };

  const handleHideAddWorkout = () => {
    setShowAddWorkout(false);
  };

  return (
    <div className="workouts-page">
      <h2>Workouts</h2>
      {!showAddWorkout && (
        <Button onClick={handleShowAddWorkout} className="show-add-workout-btn">
          Add Workout
        </Button>
      )}
      {showAddWorkout && (
        <div>
          <Button onClick={handleHideAddWorkout} className="show-add-workout-btn">
            Cancel
          </Button>
          <AddWorkout onAdd={handleHideAddWorkout} />
        </div>
      )}
      <WorkoutList />
    </div>
  );
};

export default WorkoutsPage;

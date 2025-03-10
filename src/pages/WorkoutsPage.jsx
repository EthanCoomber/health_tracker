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
      <div className="workouts-hero">
        <img 
          src="/assets/images/workout_class.png"
          alt="People working out in a fitness class"
          className="hero-image"
        />
        <div className="hero-content">
          <h2>Workouts</h2>
          <p className="workouts-description">
            Track and manage your fitness journey by logging your workouts. Add new exercises, 
            view your workout history, and monitor your progress to help achieve your fitness goals. 
            Stay motivated by seeing your improvements over time.
          </p>
        </div>
      </div>

      <div className="workout-images-grid">
        <img src="/assets/images/running.jpeg" alt="Person running" className="workout-image" />
        <img src="/assets/images/lunge.jpeg" alt="Person doing lunges" className="workout-image" />
        <img src="/assets/images/planking.webp" alt="Person planking" className="workout-image" />
        <img src="/assets/images/woman_treadmill.webp" alt="Woman on treadmill" className="workout-image" />
      </div>

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

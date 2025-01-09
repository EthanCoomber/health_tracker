// src/pages/WorkoutsPage.jsx
import React from 'react';
import WorkoutList from '../features/workouts/components/WorkoutList';
import AddWorkout from '../features/workouts/components/AddWorkout';
import './WorkoutsPage.css'; // Ensure this CSS file exists

const WorkoutsPage = () => {
  return (
    <div className="workouts-page">
      <h2>Workouts</h2>
      <AddWorkout />
      <WorkoutList />
    </div>
  );
};

export default WorkoutsPage;

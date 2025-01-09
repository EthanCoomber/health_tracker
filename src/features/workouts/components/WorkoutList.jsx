// src/features/workouts/components/WorkoutList.jsx
import React from 'react';
// import { useSelector } from 'react-redux';
// import { selectAllWorkouts } from '../workoutsSlice';

const WorkoutList = () => {
  // const workouts = useSelector(selectAllWorkouts);

  // Temporary static data
  const workouts = [
    { id: 1, name: 'Push Ups', duration: 30 },
    { id: 2, name: 'Running', duration: 45 },
    { id: 3, name: 'Cycling', duration: 60 },
    { id: 4, name: 'Yoga', duration: 30 },
    { id: 5, name: 'Weightlifting', duration: 45 },
  ];

  return (
    <div className="workout-list">
      <h3>Your Workouts</h3>
      <ul>
        {workouts.map((workout) => (
          <li key={workout.id}>
            {workout.name} - {workout.duration} minutes
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkoutList;

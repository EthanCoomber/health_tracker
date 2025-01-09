// src/features/workouts/components/WorkoutList.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllWorkouts } from '../workoutsSlice';
import './WorkoutList.css'; // Ensure this CSS file exists

const WorkoutList = () => {
  const workouts = useSelector(selectAllWorkouts);

  return (
    <div className="workout-list">
      <h3>Your Workouts</h3>
      {workouts.length === 0 ? (
        <p>No workouts recorded yet.</p>
      ) : (
        <ul>
          {workouts.map((workout) => (
            <li key={workout.id}>
              <span className="workout-name">{workout.name}</span>
              <span className="workout-duration">{workout.duration} minutes</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WorkoutList;

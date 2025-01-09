// src/features/workouts/components/AddWorkout.jsx
import React, { useState } from 'react';
import Button from '../../../components/common/Button';

const AddWorkout = () => {
  const [name, setName] = useState('');
  const [duration, setDuration] = useState('');

  const handleAddWorkout = (e) => {
    e.preventDefault();
    // Dispatch action to add workout
    console.log('Adding Workout:', { name, duration });
    // Reset form
    setName('');
    setDuration('');
  };

  return (
    <form className="add-workout-form" onSubmit={handleAddWorkout}>
      <h3>Add New Workout</h3>
      <div>
        <label>Workout Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Duration (minutes):</label>
        <input
          type="number"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          required
          min="1"
        />
      </div>
      <Button type="submit">Add Workout</Button>
    </form>
  );
};

export default AddWorkout;

// src/features/workouts/components/AddWorkout.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addWorkout } from '../workoutsSlice';
import Button from '../../../components/common/Button';
import { v4 as uuidv4 } from 'uuid';
import './AddWorkout.css'; // Ensure this CSS file exists

const AddWorkout = () => {
  const [name, setName] = useState('');
  const [duration, setDuration] = useState('');
  const dispatch = useDispatch();

  const handleAddWorkout = (e) => {
    e.preventDefault();
    const newWorkout = {
      id: uuidv4(),
      name,
      duration: Number(duration),
    };
    dispatch(addWorkout(newWorkout));
    setName('');
    setDuration('');
  };

  return (
    <form className="add-workout-form" onSubmit={handleAddWorkout}>
      <h3>Add New Workout</h3>
      <div className="form-group">
        <label>Workout Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
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

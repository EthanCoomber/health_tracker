// src/features/workouts/components/AddWorkout.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addWorkout } from '../workoutsSlice';
import Button from '../../../components/common/Button';
import { v4 as uuidv4 } from 'uuid';
import './AddWorkout.css'; // Ensure this CSS file exists

const AddWorkout = ({ onAdd }) => { // Receive onAdd as a prop
  const [name, setName] = useState('');
  const [duration, setDuration] = useState('');
  const [intensity, setIntensity] = useState('moderate');
  const [activityType, setActivityType] = useState('cardio');
  const dispatch = useDispatch();

  const handleAddWorkout = (e) => {
    e.preventDefault();
    const newWorkout = {
      id: uuidv4(),
      name,
      duration: Number(duration),
      intensity,
      activityType
    };
    dispatch(addWorkout(newWorkout));
    // Reset form fields
    setName('');
    setDuration('');
    setIntensity('moderate');
    setActivityType('cardio');
    // Call the onAdd callback to hide the form
    if (onAdd) {
      onAdd();
    }
  };

  return (
    <form className="add-workout-form workout-container" onSubmit={handleAddWorkout}>
      <h3 className="workout-title">Add New Workout</h3>
      <div className="form-group workout-input-group">
        <label className="workout-label">Workout Name:</label>
        <input
          className="workout-input"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-group workout-input-group">
        <label className="workout-label">Activity Type:</label>
        <select
          className="workout-input"
          value={activityType}
          onChange={(e) => setActivityType(e.target.value)}
          required
        >
          <option value="cardio">Cardio</option>
          <option value="weights">Weight Training</option>
          <option value="hiit">HIIT</option>
          <option value="yoga">Yoga</option>
          <option value="swimming">Swimming</option>
          <option value="cycling">Cycling</option>
        </select>
      </div>
      <div className="form-group workout-input-group">
        <label className="workout-label">Intensity Level:</label>
        <select
          className="workout-input"
          value={intensity}
          onChange={(e) => setIntensity(e.target.value)}
          required
        >
          <option value="light">Light</option>
          <option value="moderate">Moderate</option>
          <option value="vigorous">Vigorous</option>
          <option value="maximum">Maximum</option>
        </select>
      </div>
      <div className="form-group workout-input-group">
        <label className="workout-label">Duration (minutes):</label>
        <input
          className="workout-input workout-duration-input"
          type="number"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          required
          min="1"
        />
      </div>
      <Button type="submit" className="workout-submit-btn">Add Workout</Button>
    </form>
  );
};

export default AddWorkout;

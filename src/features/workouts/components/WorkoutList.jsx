// src/features/workouts/components/WorkoutList.jsx
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllWorkouts, deleteWorkout, updateWorkout } from '../workoutsSlice';
import { FiClock, FiActivity, FiEdit2, FiTrash2, FiInfo } from 'react-icons/fi';
import Button from '../../../components/common/Button';
import './WorkoutList.css';

const WorkoutList = () => {
  const workouts = useSelector(selectAllWorkouts);
  const dispatch = useDispatch();
  const [editingWorkout, setEditingWorkout] = useState(null);
  const [showDetails, setShowDetails] = useState(null);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this workout?')) {
      dispatch(deleteWorkout(id));
    }
  };

  const handleEdit = (workout) => {
    setEditingWorkout(workout);
    setShowDetails(null);
  };

  const handleUpdate = (e, workout) => {
    e.preventDefault();
    const updatedWorkout = {
      ...workout,
      name: e.target.name.value,
      duration: Number(e.target.duration.value),
      intensity: e.target.intensity.value,
      activityType: e.target.activityType.value
    };
    dispatch(updateWorkout(updatedWorkout));
    setEditingWorkout(null);
  };

  const toggleDetails = (workoutId) => {
    setShowDetails(showDetails === workoutId ? null : workoutId);
    setEditingWorkout(null);
  };

  return (
    <div className="workout-list">
      <h3>
        <FiActivity className="workout-icon" />
        Your Workouts
      </h3>
      {workouts.length === 0 ? (
        <div className="empty-state">
          <p>No workouts recorded yet.</p>
          <p className="empty-state-subtitle">Add your first workout to get started!</p>
        </div>
      ) : (
        <ul>
          {workouts.map((workout) => (
            <li key={workout.id} className="workout-item">
              {editingWorkout?.id === workout.id ? (
                <form onSubmit={(e) => handleUpdate(e, workout)} className="edit-workout-form">
                  <input 
                    name="name" 
                    defaultValue={workout.name} 
                    required
                    className="edit-input edit-name"
                  />
                  <input 
                    name="duration" 
                    type="number" 
                    defaultValue={workout.duration} 
                    required 
                    min="1"
                    className="edit-input edit-duration" 
                  />
                  <select 
                    name="intensity" 
                    defaultValue={workout.intensity}
                    className="edit-select edit-intensity"
                  >
                    <option value="light">Light</option>
                    <option value="moderate">Moderate</option>
                    <option value="vigorous">Vigorous</option>
                    <option value="maximum">Maximum</option>
                  </select>
                  <select 
                    name="activityType" 
                    defaultValue={workout.activityType}
                    className="edit-select edit-activity-type"
                  >
                    <option value="cardio">Cardio</option>
                    <option value="weights">Weight Training</option>
                    <option value="hiit">HIIT</option>
                    <option value="yoga">Yoga</option>
                    <option value="swimming">Swimming</option>
                    <option value="cycling">Cycling</option>
                  </select>
                  <div className="edit-actions">
                    <Button type="submit" className="edit-btn edit-save">Save</Button>
                    <Button type="button" onClick={() => setEditingWorkout(null)} className="edit-btn edit-cancel">Cancel</Button>
                  </div>
                </form>
              ) : (
                <>
                  <div className="workout-info">
                    <span className="workout-name">
                      {workout.name}
                    </span>
                    <span className="workout-duration">
                      <FiClock className="duration-icon" />
                      {workout.duration} minutes
                    </span>
                  </div>
                  <div className="workout-actions">
                    <div className="action-btn-group">
                      <Button 
                        onClick={() => toggleDetails(workout.id)} 
                        className="action-btn info"
                        title="View Details"
                      >
                        <FiInfo />
                      </Button>
                      <Button 
                        onClick={() => handleEdit(workout)} 
                        className="action-btn edit"
                        title="Edit Workout"
                      >
                        <FiEdit2 />
                      </Button>
                      <Button 
                        onClick={() => handleDelete(workout.id)} 
                        className="action-btn delete"
                        title="Delete Workout"
                      >
                        <FiTrash2 />
                      </Button>
                    </div>
                  </div>
                  {showDetails === workout.id && (
                    <div className="workout-details">
                      <p className="workout-detail-item"><strong className="detail-label">Activity Type:</strong> <span className="detail-value">{workout.activityType}</span></p>
                      <p className="workout-detail-item"><strong className="detail-label">Intensity:</strong> <span className="detail-value">{workout.intensity}</span></p>
                    </div>
                  )}
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WorkoutList;

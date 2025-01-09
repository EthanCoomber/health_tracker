import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  workouts: [], // Array to store all workouts
  currentWorkout: null, // Currently selected/edited workout
  workoutTypes: ['Cardio', 'Strength', 'Flexibility', 'HIIT'] // Default workout types
};

const workoutsSlice = createSlice({
  name: 'workouts',
  initialState,
  reducers: {
    addWorkout: (state, action) => {
      state.workouts.push({
        id: Date.now(),
        ...action.payload,
        timestamp: new Date().toISOString()
      });
    },
    updateWorkout: (state, action) => {
      const index = state.workouts.findIndex(workout => workout.id === action.payload.id);
      if (index !== -1) {
        state.workouts[index] = {
          ...state.workouts[index],
          ...action.payload,
          timestamp: new Date().toISOString()
        };
      }
    },
    deleteWorkout: (state, action) => {
      state.workouts = state.workouts.filter(workout => workout.id !== action.payload);
    },
    setCurrentWorkout: (state, action) => {
      state.currentWorkout = action.payload;
    },
    clearCurrentWorkout: (state) => {
      state.currentWorkout = null;
    },
    clearAllWorkouts: (state) => {
      state.workouts = [];
      state.currentWorkout = null;
    }
  }
});

export const {
  addWorkout,
  updateWorkout,
  deleteWorkout,
  setCurrentWorkout,
  clearCurrentWorkout,
  clearAllWorkouts
} = workoutsSlice.actions;

export default workoutsSlice.reducer;

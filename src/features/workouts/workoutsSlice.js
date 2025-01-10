import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  workouts: [
    {
      id: 1,
      name: "Morning Run",
      duration: 30,
      intensity: "moderate",
      activityType: "cardio",
      timestamp: "2024-01-15T08:00:00.000Z"
    },
    {
      id: 2, 
      name: "Weight Training",
      duration: 45,
      intensity: "vigorous",
      activityType: "weights",
      timestamp: "2024-01-15T16:30:00.000Z"
    },
    {
      id: 3,
      name: "Yoga Flow",
      duration: 60,
      intensity: "light",
      activityType: "yoga",
      timestamp: "2024-01-16T07:00:00.000Z"
    },
    {
      id: 4,
      name: "HIIT Workout",
      duration: 25,
      intensity: "maximum",
      activityType: "hiit",
      timestamp: "2024-01-16T18:00:00.000Z"
    },
    {
      id: 5,
      name: "Lap Swimming",
      duration: 40,
      intensity: "vigorous", 
      activityType: "swimming",
      timestamp: "2024-01-17T12:00:00.000Z"
    }
  ],
  currentWorkout: null,
  workoutTypes: ['Cardio', 'Strength', 'Flexibility', 'HIIT']
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

// Selectors
export const selectAllWorkouts = (state) => state.workouts.workouts;

export default workoutsSlice.reducer;

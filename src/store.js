// src/store.js
import { configureStore } from '@reduxjs/toolkit';
// Import your feature slices here
import workoutsReducer from './features/workouts/workoutsSlice';
import mealsReducer from './features/meals/mealsSlice';
import caloriesReducer from './features/calories/caloriesSlice';

const store = configureStore({
  reducer: {
    workouts: workoutsReducer,
    meals: mealsReducer,
    calories: caloriesReducer,
  },
});

export default store;

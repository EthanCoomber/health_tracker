import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dailyGoal: 2000, // Default daily calorie goal
  consumed: 0, // Calories consumed today
  burned: 0, // Calories burned today
  history: [] // Array to store historical calorie data
};

const caloriesSlice = createSlice({
  name: 'calories',
  initialState,
  reducers: {
    setDailyGoal: (state, action) => {
      state.dailyGoal = action.payload;
    },
    addConsumedCalories: (state, action) => {
      state.consumed += action.payload;
    },
    addBurnedCalories: (state, action) => {
      state.burned += action.payload;
    },
    resetDaily: (state) => {
      // Save current day's data to history
      state.history.push({
        date: new Date().toISOString(),
        consumed: state.consumed,
        burned: state.burned
      });
      // Reset daily values
      state.consumed = 0;
      state.burned = 0;
    },
    clearHistory: (state) => {
      state.history = [];
    }
  }
});

export const {
  setDailyGoal,
  addConsumedCalories,
  addBurnedCalories,
  resetDaily,
  clearHistory
} = caloriesSlice.actions;

export default caloriesSlice.reducer;

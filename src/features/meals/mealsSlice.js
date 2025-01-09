import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  meals: [], // Array to store all meals
  currentMeal: null, // Currently selected/edited meal
  mealTypes: ['Breakfast', 'Lunch', 'Dinner', 'Snack'] // Default meal types
};

const mealsSlice = createSlice({
  name: 'meals',
  initialState,
  reducers: {
    addMeal: (state, action) => {
      state.meals.push({
        id: Date.now(), // Simple unique ID
        ...action.payload,
        timestamp: new Date().toISOString()
      });
    },
    updateMeal: (state, action) => {
      const index = state.meals.findIndex(meal => meal.id === action.payload.id);
      if (index !== -1) {
        state.meals[index] = {
          ...state.meals[index],
          ...action.payload,
          timestamp: new Date().toISOString()
        };
      }
    },
    deleteMeal: (state, action) => {
      state.meals = state.meals.filter(meal => meal.id !== action.payload);
    },
    setCurrentMeal: (state, action) => {
      state.currentMeal = action.payload;
    },
    clearCurrentMeal: (state) => {
      state.currentMeal = null;
    },
    clearAllMeals: (state) => {
      state.meals = [];
      state.currentMeal = null;
    }
  }
});

export const {
  addMeal,
  updateMeal,
  deleteMeal,
  setCurrentMeal,
  clearCurrentMeal,
  clearAllMeals
} = mealsSlice.actions;

export default mealsSlice.reducer;

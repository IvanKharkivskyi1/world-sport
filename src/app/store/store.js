// redux/store.js
import { configureStore } from '@reduxjs/toolkit';

// Створення reducer для sport
const sportsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_SPORTS':
      return action.payload;
    default:
      return state;
  }
};

// Налаштування store
export const store = configureStore({
  reducer: {
    sports: sportsReducer,
  },
});

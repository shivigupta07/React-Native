import { configureStore } from '@reduxjs/toolkit';
import budgetReducer from '../reducers/budgetReducer';

const initialState = {
  budgetEntries: [] // Initial state for budget entries
};

const store = configureStore({
  reducer: {
    budget: budgetReducer // Assuming budgetReducer handles 'budget' slice of state
  },
  preloadedState: initialState
});

export default store;

// reducers/budgetReducer.js

import { ADD_BUDGET_ENTRY, DELETE_BUDGET_ENTRY, SET_BUDGET_ENTRIES } from '../actions/budgetActions';

const initialState = {
  budgetEntries: [],
};

const budgetReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BUDGET_ENTRY:
      return {
        ...state,
        budgetEntries: [...state.budgetEntries, action.payload],
      };
    case DELETE_BUDGET_ENTRY:
      const updatedEntries = [...state.budgetEntries];
      updatedEntries.splice(action.payload, 1);
      return {
        ...state,
        budgetEntries: updatedEntries,
      };
    case SET_BUDGET_ENTRIES:
      return {
        ...state,
        budgetEntries: action.payload,
      };
    default:
      return state;
  }
};

export default budgetReducer;

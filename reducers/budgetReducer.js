// reducers/budgetReducer.js

const initialState = {
  budgetEntries: [], // Initial state with an empty array for budget entries
};

const budgetReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BUDGET_ENTRY':
      return {
        ...state,
        budgetEntries: [...state.budgetEntries, action.payload],
      };
    case 'DELETE_BUDGET_ENTRY':
      const updatedEntries = state.budgetEntries.filter((entry, index) => index !== action.payload);
      return {
        ...state,
        budgetEntries: updatedEntries,
      };
    default:
      return state;
  }
};

export default budgetReducer;

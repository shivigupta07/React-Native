// actions/budgetActions.js

export const addBudgetEntry = (entry) => ({
    type: 'ADD_BUDGET_ENTRY',
    payload: entry,
  });
  
  export const deleteBudgetEntry = (index) => ({
    type: 'DELETE_BUDGET_ENTRY',
    payload: index,
  });
  
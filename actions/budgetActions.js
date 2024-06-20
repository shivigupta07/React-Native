// actions/budgetActions.js

// Define action types
export const ADD_BUDGET_ENTRY = 'ADD_BUDGET_ENTRY';
export const DELETE_BUDGET_ENTRY = 'DELETE_BUDGET_ENTRY';
export const SET_BUDGET_ENTRIES = 'SET_BUDGET_ENTRIES';

// Utility function to safely retrieve and parse JSON data from localStorage
const getStoredEntries = () => {
  try {
    const entries = JSON.parse(localStorage.getItem('budgetEntries'));
    return Array.isArray(entries) ? entries : [];
  } catch (error) {
    console.error('Error retrieving budget entries from localStorage:', error);
    return [];
  }
};

// Action creators
export const addBudgetEntry = (entry) => {
  const existingEntries = getStoredEntries();

  // Add new entry to the existing list
  const updatedEntries = [...existingEntries, entry];

  // Update localStorage with the updated entries
  localStorage.setItem('budgetEntries', JSON.stringify(updatedEntries));

  // Return action object
  return {
    type: ADD_BUDGET_ENTRY,
    payload: entry,
  };
};

export const deleteBudgetEntry = (index) => {
  const existingEntries = getStoredEntries();

  // Remove entry at the specified index
  const updatedEntries = existingEntries.filter((_, i) => i !== index);

  // Update localStorage with the updated entries
  localStorage.setItem('budgetEntries', JSON.stringify(updatedEntries));

  // Return action object
  return {
    type: DELETE_BUDGET_ENTRY,
    payload: index,
  };
};

// Action to set budget entries on load
export const setBudgetEntries = (entries) => {
  return {
    type: SET_BUDGET_ENTRIES,
    payload: entries,
  };
};

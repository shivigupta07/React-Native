// reducers/index.js

import { combineReducers } from 'redux';
import budgetReducer from './budgetReducer';

const rootReducer = combineReducers({
  budget: budgetReducer, // 'budget' is the slice of state managed by budgetReducer
  // other reducers if any
});

export default rootReducer;

import { combineReducers } from 'redux';
import counterReducer from '../pages/HomePage/countReducer';

const rootReducers = combineReducers({
  counter: counterReducer,
});

export default rootReducers;

import { combineReducers } from 'redux';
import counterReducer from '../pages/HomePage/countReducer';
import todosReduser from '../pages/HomePage/todosReduce';

const rootReducers = combineReducers({
  counter: counterReducer,
  todos: todosReduser,
});

export default rootReducers;

import { createStore, combineReducers, applyMiddleware } from 'redux';
import profileReducer from './profile-Reducer';
import dialogsReducer from './dialogs-Reducer';
import sideBarReducer from './sideBar-Reducer';
import usersReducer from './users-Reducer';
import authReducer from './auth-Reducer';
import appReducer from './app-Reducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sideBar: sideBarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;

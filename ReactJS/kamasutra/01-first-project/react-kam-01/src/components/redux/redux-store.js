import { createStore, combineReducers } from 'redux';
import profileReducer from './profile-Reducer';
import dialogsReducer from './dialogs-Reducer';
import sideBarReducer from './sideBar-Reducer';
import usersReducer from './users-Reducer';

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sideBar: sideBarReducer,
  usersPage: usersReducer,
});

let store = createStore(reducers);
window.store = store;
export default store;

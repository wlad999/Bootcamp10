import { createStore, combineReducers } from 'redux';
import profileReducer from './profile-Reducer';
import dialogsReducer from './dialogs-Reducer';
import sideBarReducer from './sideBar-Reducer';

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sideBar: sideBarReducer,
});

let store = createStore(reducers);
window.store = store;
export default store;

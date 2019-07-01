import { createStore, combineReducers } from 'redux';
import profileReducer from './profile-Reducer';
import dialogsReducer from './profile-Reducer';
import sideBarReducer from './profile-Reducer';

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  //   sideBar: sideBarReducer,
});

let store = createStore(reducers);
export default store;

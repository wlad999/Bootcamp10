import { createStore } from 'redux';
import rootReducers from './rootReducer';

const Store = createStore(rootReducers);

export default Store;

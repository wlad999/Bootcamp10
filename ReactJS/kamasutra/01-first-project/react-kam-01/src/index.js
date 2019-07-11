import * as serviceWorker from './serviceWorker';
import store from './components/redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// import StoreContext from './StoreContext';
// import { Provider } from './StoreContext';
import { Provider } from 'react-redux';
// Ctrl и пробел - подсказки по импорту

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);

// rerenderEntireTree(store.getState());

// store.subscribe(rerenderEntireTree);

// store.subscribe(() => {
//   let state = store.getState();
//   rerenderEntireTree(state);
// });

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import * as serviceWorker from './serviceWorker';
import store from './components/redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// Ctrl и пробел - подсказки по импорту

let rerenderEntireTree = state => {
  debugger;
  ReactDOM.render(
    <BrowserRouter>
      <App
        state={state}
        store={store}
        dispatch={store.dispatch.bind(store)}
        // upDateNewPostText={store.upDateNewPostText.bind(store)}
        // addMessage={store.addMessage.bind(store)}
        // upDateNewMessage={store.upDateNewMessage.bind(store)}
      />
    </BrowserRouter>,
    document.getElementById('root'),
  );
};
rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);
// store.subscribe(() => {
//   let state = store.getState();
//   rerenderEntireTree(state);
// });

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

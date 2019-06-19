import * as serviceWorker from './serviceWorker';
import state from './components/redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addPost } from './components/redux/state';
import { upDateNewPostText } from './components/redux/state';
import { upDateNewMessage } from './components/redux/state';
import { addMessage } from './components/redux/state';
import { subscribe } from './components/redux/state';
import { BrowserRouter } from 'react-router-dom';
// Ctrl и пробел - подсказки по импорту

let rerenderEntireTree = state => {
  ReactDOM.render(
    <BrowserRouter>
      <App
        state={state}
        addPost={addPost}
        upDateNewPostText={upDateNewPostText}
        upDateNewMessage={upDateNewMessage}
        addMessage={addMessage}
      />
    </BrowserRouter>,
    document.getElementById('root'),
  );
};
rerenderEntireTree(state);
subscribe(rerenderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

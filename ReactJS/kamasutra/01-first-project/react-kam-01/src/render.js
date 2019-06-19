import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addPost } from './components/redux/state';
import { upDateNewPostText } from './components/redux/state';
import { upDateNewMessage } from './components/redux/state';
import { addMessage } from './components/redux/state';
import { BrowserRouter } from 'react-router-dom';
// Ctrl и пробел - подсказки по импорту

export let rerenderEntireTree = state => {
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

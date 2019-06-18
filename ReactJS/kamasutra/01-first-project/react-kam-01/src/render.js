import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addPost } from './components/redux/state';
import { BrowserRouter } from 'react-router-dom';
// Ctrl и пробел - подсказки по импорту

export let rerenderEntireTree = state => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} addPost={addPost} />
    </BrowserRouter>,
    document.getElementById('root'),
  );
};

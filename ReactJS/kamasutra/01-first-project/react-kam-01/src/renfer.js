import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state from './components/redux/state';
import { addPost } from './components/redux/state';
import { BrowserRouter } from 'react-router-dom';
// Ctrl и пробел - подсказки по импорту
addPost('Lets Start');

let rerenderEntireTree = () => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} addPost={addPost} />
    </BrowserRouter>,
    document.getElementById('root'),
  );
};

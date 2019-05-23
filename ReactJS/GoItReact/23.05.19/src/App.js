import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Store from './store';

const App = () => (
  <Provider store={Store}>
    <Router>
      <Route path="/" component={HomePage} />
    </Router>
  </Provider>
);

export default App;

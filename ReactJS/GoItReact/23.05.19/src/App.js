import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import TodosPage from './pages/TodosPage';
import Store from './store';
import Counter from './components/Counter/Counter';

const App = () => (
  <>
    <Provider store={Store}>
      <Counter />
      <Router>
        <Route exact path="/" component={HomePage} />
        <Route path="/" component={TodosPage} />
      </Router>
    </Provider>
  </>
);

export default App;

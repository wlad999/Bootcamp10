import React, { Component, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from './Header/Header';
// import Home from './Home/Home';
// import About from './About/About';

const AsyncHome = lazy(() => import('./Home/Home'));
const AsyncAbout = lazy(() => import('./About/About'));
const Loader = () => <div>load...</div>;

const App = () => (
  <Router>
    <Suspense fallback={Loader}>
      <Header />
      <Route exact path="/" component={AsyncHome} />
      <Route exact path="/about" component={AsyncAbout} />
      <Route
        path="/about/:id"
        render={props => (
          <div>
            {props.match.params.id}
            <button onClick={() => props.history.push('/')}>back</button>
            <button onClick={() => props.history.goBack()}>home</button>
          </div>
        )}
      />
    </Suspense>
  </Router>
);

export default App;

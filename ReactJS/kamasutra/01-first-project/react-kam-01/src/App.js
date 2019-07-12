import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import { Route } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer.jsx';

const App = props => {
  return (
    <div className="app-wrapper">
      <Header />
      <NavBar />
      <div className="app-wrapper-content">
        <Route path="/Dialogs" render={() => <DialogsContainer />} />
        <Route path="/Profile" render={() => <Profile />} />
        <Route path="/users" render={() => <UsersContainer />} />
        <Route path="/News" component={News} />
        <Route path="/Settings" component={Settings} />
        <Route path="/Musiс" component={Music} />
      </div>
    </div>
  );
};

export default App;

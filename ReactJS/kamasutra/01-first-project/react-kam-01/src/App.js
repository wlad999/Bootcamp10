import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import NavBar from './components/NavBar/NavBar';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import { Route } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer.jsx';
import Login from './components/Login/Login';

const App = props => {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <NavBar />
      <div className="app-wrapper-content">
        <Route path="/dialogs" render={() => <DialogsContainer />} />
        <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
        {/* <Route path="/profile" render={() => <ProfileContainer />} /> */}
        <Route path="/users" render={() => <UsersContainer />} />
        <Route path="/login" render={() => <Login />} />
        {/* <Route path="/login" component={Login} /> */}
        <Route path="/news" component={News} />
        <Route path="/settings" component={Settings} />
        <Route path="/musiс" component={Music} />
      </div>
    </div>
  );
};

export default App;

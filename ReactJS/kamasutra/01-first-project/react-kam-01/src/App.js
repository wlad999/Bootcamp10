import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom'; /*подключаем router.всталяем тег <BrowserRouter>*/

const App = () => {
  return (
    <BrowserRouter> {/*подключаем тег <BrowserRouter>*/}
      <div className="app-wrapper">
        <Header />
        <NavBar />
        <div className="app-wrapper-content">
          <Route path="/Dialogs" component={Dialogs} />
          <Route path="/Profile" component={Profile} />
          <Route path="/News" component={News} />
          <Route path="/Settings" component={Settings} />
          <Route path="/Musik" component={Music} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

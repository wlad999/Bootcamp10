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
// /*подключаем router.всталяем тег <BrowserRouter>*/- перенесли его в index.js

const App = props => {
  // console.log('addPost -App', props.state);

  return (
    // <BrowserRouter>
    /*подключаем тег <BrowserRouter>*/
    <div className="app-wrapper">
      <Header />
      <NavBar state={props.state.sideBar} />
      <div className="app-wrapper-content">
        {/* <Route path="/Dialogs" component={Dialogs} />
          <Route path="/Profile" component={Profile} /> */}
        {/* при совпадении пути path="/Profile" -  Route вызывает component={Profile}. 
          В данном случае {Profile} просто название компоненты,
        поэтому мы не можеи туда прокинуть props, выходим из положения путём использования атрибута "render", 
        куда запихуем анонимную функцию, 
        который отрисовывает компоненту, а в неё уже можно закинуть props*/}
        <Route
          path="/Dialogs"
          render={() => <DialogsContainer store={props.store} />}
        />
        <Route path="/Profile" render={() => <Profile store={props.store} />} />
        <Route path="/News" component={News} />
        <Route path="/Settings" component={Settings} />
        <Route path="/Musik" component={Music} />
      </div>
    </div>
    // </BrowserRouter>
  );
};

export default App;

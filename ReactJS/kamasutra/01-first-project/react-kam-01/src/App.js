import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import { Route } from 'react-router-dom';
// /*подключаем router.всталяем тег <BrowserRouter>*/- перенесли его в index.js

// let dialogs = [
//   { id: 1, name: 'Vlad' },
//   { id: 2, name: 'Stas' },
//   { id: 3, name: 'Alex' },
//   { id: 4, name: 'Valera' },
//   { id: 5, name: 'Pasha' },
//   { id: 6, name: 'Rodik' },
// ];

// let messages = [
//   { id: 1, message: 'Hello' },
//   { id: 2, message: 'Mambo' },
//   { id: 3, message: 'Shuari' },
//   { id: 4, message: 'Jumbo' },
//   { id: 5, message: 'Yuhu' },
//   { id: 6, message: 'Cool' },
// ];

// let posts = [
//   { id: 1, likesCount: 5, message: 'How are you?' },
//   { id: 2, likesCount: 7, message: "it's my first post" },
//   { id: 3, likesCount: 3, message: 'Realy?' },
//   { id: 4, likesCount: 15, message: 'Cool!' },
// ];
const App = props => {
  // console.log('addPost -App', props.addPost);

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
          render={() => (
            <Dialogs
              state={props.state.dialogsPage}
              upDateNewMessage={props.upDateNewMessage}
              addMessage={props.addMessage}
            />
          )}
        />
        <Route
          path="/Profile"
          render={() => (
            <Profile
              profilePage={props.state.profilePage}
              addPost={props.addPost}
              upDateNewPostText={props.upDateNewPostText}
            />
          )}
        />
        <Route path="/News" component={News} />
        <Route path="/Settings" component={Settings} />
        <Route path="/Musik" component={Music} />
      </div>
    </div>
    // </BrowserRouter>
  );
};

export default App;

import React from 'react';
import s from './NavBar.module.css';

const NavBar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <a href="/profile">Profile</a>
      </div>
      <div className={`${s.active} ${s.item} `}>
        <a href="/dialogs">Messages</a>
      </div>
      <div className={s.item}>
        <a>News</a>
      </div>
      <div className={s.item}>
        <a>Musik</a>
      </div>
      <div className={s.item}>
        <a>Settings</a>
      </div>
    </nav>
  );
};

export default NavBar;

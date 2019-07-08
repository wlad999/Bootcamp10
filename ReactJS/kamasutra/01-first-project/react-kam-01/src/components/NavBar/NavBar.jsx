import React from 'react';
import s from './NavBar.module.css';
import { NavLink } from 'react-router-dom';
// import Friends from '../Friends/Friends';

const NavBar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="/profile" activeClassName={s.activeLink}>
          Profile
        </NavLink>
      </div>
      <div className={`${s.active} ${s.item} `}>
        <NavLink to="/dialogs" activeClassName={s.activeLink}>
          Messages
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/news" activeClassName={s.activeLink}>
          News
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/musiс" activeClassName={s.activeLink}>
          Musiс
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/settings" activeClassName={s.activeLink}>
          Settings
        </NavLink>
      </div>
      {/* <Friends /> */}
    </nav>
  );
};

export default NavBar;

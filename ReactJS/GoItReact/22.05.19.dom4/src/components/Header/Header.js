import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => (
  <header className={styles.header}>
    <nav className={styles.navigation}>
      <NavLink
        activeClassName={styles.linkActiv}
        className={styles.link}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        activeClassName={styles.linkActiv}
        className={styles.link}
        to="/pets"
      >
        Pets
      </NavLink>
      <NavLink
        activeClassName={styles.linkActiv}
        className={styles.link}
        to="/about"
      >
        About
      </NavLink>
    </nav>
  </header>
);

export default Header;

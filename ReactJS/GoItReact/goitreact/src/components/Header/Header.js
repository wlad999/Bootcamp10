import React from 'react';
import styles from './Header.module.css';
import injectSheet from 'react-jss';
import classnames from 'classnames/bind';
import PropTypes from 'prop-types';

const cx = classnames.bind(styles);

const inline = {
  logo: {
    backgroundColor: 'orange',
    padding: 20,
    fontSize: 40,
  },
};

const Header = ({ classes, logotitle, logged }) => {
  // const cls =[styles.header];
  // if(logged) cls.push(styles.headerlogged);
  // className={cls.join(" ")}
  return (
    <header className={cx('header', { headerlogged: logged })}>
      <span className={classes.logo}>{logotitle}</span>
      {/* <span className={`${classes.logo} ${logged ? "logged": ''}`}>{logotitle}</span> */}
    </header>
  );
};
Header.propTypes = {
  classes: PropTypes.object,
  logotitle: PropTypes.string.isRequired,
  logged: PropTypes.bool,
};

const StyledHeader = (() => injectSheet(inline)(Header))();

export default StyledHeader;

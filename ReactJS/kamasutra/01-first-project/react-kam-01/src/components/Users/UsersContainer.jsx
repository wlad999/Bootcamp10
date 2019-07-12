import React from 'react';
import { connect } from 'react-redux';
import { unfollowAC, setUserswAC, followAC } from '../redux/users-Reducer.js';
import Users from './Users';

let mapStateToProps = state => {
  return { users: state.usersPage.users };
};

let mapDispatchToProps = dispatch => {
  return {
    follow: userId => {
      dispatch(followAC(userId));
    },
    unfollow: userId => {
      dispatch(unfollowAC(userId));
    },
    setUsers: users => {
      dispatch(setUserswAC(users));
    },
  };
};

const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Users);

export default UsersContainer;

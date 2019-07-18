import React from 'react';
import { connect } from 'react-redux';
import {
  unfollowAC,
  setUserswAC,
  followAC,
  setCurrentPageAC,
  setTotalUsersCountAC,
} from '../redux/users-Reducer.js';
import Users from './Users';
import * as Axios from 'axios';
// import UsersApiComponent from './UsersApiComponent';

class UsersApiComponent extends React.Component {
  componentDidMount() {
    Axios.get(
      `https://social-network.samuraijs.com/api/1.0/users?page=${
        this.props.currentPage
      }&count = ${this.props.pageSize}`,
    ).then(response => {
      this.props.setUsers(response.data.items);
      this.props.setTotalUsersCount(response.data.totalCount);
    });
  }
  onPageChanged = pageNumber => {
    this.props.setCurrentPage(pageNumber);
    Axios.get(
      `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count = ${
        this.props.pageSize
      }`,
    ).then(response => {
      this.props.setUsers(response.data.items);
    });
  };

  render() {
    return (
      <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        users={this.props.users}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
      />
    );
  }
}

let mapStateToProps = state => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
  };
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
    setCurrentPage: pageNumber => {
      dispatch(setCurrentPageAC(pageNumber));
    },
    setTotalUsersCount: totalCount => {
      dispatch(setTotalUsersCountAC(totalCount));
    },
  };
};

const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UsersApiComponent);

export default UsersContainer;

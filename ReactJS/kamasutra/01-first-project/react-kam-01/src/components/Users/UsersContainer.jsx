import React from 'react';
import { connect } from 'react-redux';
import {
  unfollow,
  setUsers,
  follow,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
} from '../redux/users-Reducer.js';
import Users from './Users';
// import * as Axios from 'axios';
import Preloader from '../common/preloader/Preloader';
// import { getUsers } from '../../api/api.js';
import { usersAPI } from '../../api/api';

class UsersApiComponent extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    usersAPI
      .getUsers(this.props.currentPage, this.props.pageSize)
      // Axios.get(
      //   `https://social-network.samuraijs.com/api/1.0/users?page=${
      //     this.props.currentPage
      //   }&count = ${this.props.pageSize}`,
      //   {
      //     withCredentials: true,
      //   },
      // )
      .then(data => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items);
        this.props.setTotalUsersCount(data.totalCount);
      });
  }
  onPageChanged = pageNumber => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);
    // Axios.get(
    //   `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count = ${
    //     this.props.pageSize
    //   }`,
    //   {
    //     withCredentials: true,
    //   },
    // )
    usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(data.items);
    });
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
        />
      </>
    );
  }
}

let mapStateToProps = state => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  };
};

// let mapDispatchToProps = dispatch => {
//   return {
//     follow: userId => {
//       dispatch(followAC(userId));
//     },
//     unfollow: userId => {
//       dispatch(unfollowAC(userId));
//     },
//     setUsers: users => {
//       dispatch(setUserswAC(users));
//     },
//     setCurrentPage: pageNumber => {
//       dispatch(setCurrentPageAC(pageNumber));
//     },
//     setTotalUsersCount: totalCount => {
//       dispatch(setTotalUsersCountAC(totalCount));
//     },
//     toggleIsFetching: isFetching => {
//       dispatch(toggleIsFetchingAC(isFetching));
//     },
//   };
// };

export default connect(
  mapStateToProps,
  {
    follow,
    unfollow,
    setUsers: setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
  },
)(UsersApiComponent);

import React from 'react';
import { connect } from 'react-redux';
import {
  unfollow,
  // setUsers,
  follow,
  // setCurrentPage,
  // setTotalUsersCount,
  // toggleIsFetching,
  toggleFollowingProgress,
  getUsersThunkCreator,
  followUserThunkCreator,
  unfollowUserThunkCreator,
} from '../redux/users-Reducer.js';
import Users from './Users';
// import * as Axios from 'axios';
import Preloader from '../common/preloader/Preloader';
import { withAuthRedirect } from '../../hoc/withAuthRedirect.js';
// import { getUsers } from '../../api/api.js';
// import { usersAPI } from '../../api/api';

class UsersApiComponent extends React.Component {
  componentDidMount() {
    this.props.getUsersThunkCreator(
      this.props.currentPage,
      this.props.pageSize,
    );

    /*Вместо (usersAPI) этого вызываем getUsersThunkCreator()
    this.props.toggleIsFetching(true);
    usersAPI
      .getUsers(this.props.currentPage, this.props.pageSize)
      .then(data => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items);
        this.props.setTotalUsersCount(data.totalCount);
      });*/
    /* вместо этого поставили usersAPI.getUsers
      // Axios.get(
      //   `https://social-network.samuraijs.com/api/1.0/users?page=${
      //     this.props.currentPage
      //   }&count = ${this.props.pageSize}`,
      //   {
      //     withCredentials: true,
      //   },
      // )*/
  }
  onPageChanged = pageNumber => {
    this.props.getUsersThunkCreator(pageNumber, this.props.pageSize);

    // ---------------------------------
    // this.props.setCurrentPage(pageNumber);
    // this.props.toggleIsFetching(true);
    // usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
    //   this.props.toggleIsFetching(false);
    //   this.props.setUsers(data.items);
    // });
    // ---------------------------------------
    // Axios.get(
    //   `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count = ${
    //     this.props.pageSize
    //   }`,
    //   {
    //     withCredentials: true,
    //   },
    // )
    // -----------------------------------------
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
          // follow={this.props.follow}
          // unfollow={this.props.unfollow}
          // toggleFollowingProgress={this.props.toggleFollowingProgress}
          followingInProgress={this.props.followingInProgress}
          followUserThunkCreator={this.props.followUserThunkCreator}
          unfollowUserThunkCreator={this.props.unfollowUserThunkCreator}
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
    followingInProgress: state.usersPage.followingInProgress,
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
let withRedirect = withAuthRedirect(UsersApiComponent);
export default connect(
  mapStateToProps,
  {
    follow,
    unfollow,
    // setUsers: setUsers,
    // setCurrentPage,
    // setTotalUsersCount,
    // toggleIsFetching,
    toggleFollowingProgress,
    getUsersThunkCreator,
    followUserThunkCreator,
    unfollowUserThunkCreator,
  },
)(withRedirect);

// Второй вариан записи - сразу connect оборачиваем в withAuthRedirect
// export default withAuthRedirect(
//   connect(
//     mapStateToProps,
//     {
//       follow,
//       unfollow,
//       toggleFollowingProgress,
//       getUsersThunkCreator,
//       followUserThunkCreator,
//       unfollowUserThunkCreator,
//     },
//   )(UsersApiComponent),
// );

import React from 'react';
import styles from './users.module.css';
import userPhoto from '../../assets/images/users.png';
import { NavLink } from 'react-router-dom';
// import * as Axios from 'axios';
import { usersAPI } from '../../api/api';

let Users = props => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      <div>
        {pages.map(p => {
          return (
            <span
              className={
                props.currentPage === p ? styles.selectedPage : styles.page
              }
              onClick={e => {
                props.onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div>
      {props.users.map(u => (
        <div key={u.id}>
          <span>
            <div>
              {/* <NavLink to={'/profile'}> */}
              <NavLink to={'/profile/' + u.id}>
                <img
                  src={u.photos.small != null ? u.photos.small : userPhoto}
                  alt=""
                  className={styles.userPhoto}
                />
              </NavLink>
            </div>
            <div>
              {u.followed ? (
                <button
                  disabled={props.followingInProgress}
                  onClick={() => {
                    debugger;
                    props.toggleFollowingProgress(true);
                    usersAPI
                      .unfollowUser(u)
                      // Axios.delete(
                      //   `https://social-network.samuraijs.com/api/1.0/follow/${
                      //     u.id
                      //   }`,
                      //   {
                      //     withCredentials: true,
                      //     headers: {
                      //       'API-KEY': '635d4a98-5c9c-4ce7-b29e-636f275b6bb7',
                      //     },
                      //   },
                      .then(data => {
                        if (data.resultCode === 0) {
                          props.unfollow(u.id);
                        }
                      });
                    props.toggleFollowingProgress(false);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  disabled={props.followingInProgress}
                  onClick={() => {
                    debugger;
                    props.toggleFollowingProgress(true);
                    usersAPI.followUser(u).then(data => {
                      if (data.resultCode === 0) {
                        props.follow(u.id);
                      }
                    });
                    // Axios.post(
                    //   `https://social-network.samuraijs.com/api/1.0/follow/${
                    //     u.id
                    //   }`,
                    //   {},
                    //   {
                    //     withCredentials: true,
                    //     headers: {
                    //       'API-KEY': '635d4a98-5c9c-4ce7-b29e-636f275b6bb7',
                    //     },
                    //   },
                    // ).then(response => {
                    //   if (response.data.resultCode === 0) {
                    //     props.follow(u.id);
                    //   }
                    // });
                    props.toggleFollowingProgress(false);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{'u.location.counrty'}</div>
              <div>{'u.location.city'}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;

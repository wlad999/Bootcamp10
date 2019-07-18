import React from 'react';
// import styles from './users.module.css';
import * as Axios from 'axios';
// import userPhoto from '../../assets/images/users.png';
import Users from './Users';

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
    // let pagesCount = Math.ceil(
    //   this.props.totalUsersCount / this.props.pageSize,
    // );
    // let pages = [];
    // for (let i = 1; i <= pagesCount; i++) {
    //   pages.push(i);
    // }
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
    // <div>
    //   <div>
    //     {pages.map(p => {
    //       return (
    //         <span
    //           className={
    //             this.props.currentPage === p
    //               ? styles.selectedPage
    //               : styles.page
    //           }
    //           onClick={e => {
    //             this.onPageChanged(p);
    //           }}
    //         >
    //           {p}
    //         </span>
    //       );
    //     })}
    //   </div>
    //   {this.props.users.map(u => (
    //     <div key={u.id}>
    //       <span>
    //         <div>
    //           <img
    //             src={u.photos.small != null ? u.photos.small : userPhoto}
    //             alt=""
    //             className={styles.userPhoto}
    //           />
    //         </div>
    //         <div>
    //           {u.followed ? (
    //             <button
    //               onClick={() => {
    //                 this.props.unfollow(u.id);
    //               }}
    //             >
    //               Unfollow
    //             </button>
    //           ) : (
    //             <button
    //               onClick={() => {
    //                 this.props.follow(u.id);
    //               }}
    //             >
    //               Follow
    //             </button>
    //           )}
    //         </div>
    //       </span>
    //       <span>
    //         <span>
    //           <div>{u.name}</div>
    //           <div>{u.status}</div>
    //         </span>
    //         <span>
    //           <div>{'u.location.counrty'}</div>
    //           <div>{'u.location.city'}</div>
    //         </span>
    //       </span>
    //     </div>
    //   ))}
    // </div>
  }
}
export default UsersApiComponent;

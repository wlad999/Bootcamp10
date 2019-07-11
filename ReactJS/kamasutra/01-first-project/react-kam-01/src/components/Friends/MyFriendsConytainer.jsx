import { connect } from 'react-redux';
// import React from 'react';
import OneFriend from './OneFriend';
// import s from './Friends.module.css';

let mapStateToProps = state => {
  debugger;
  return {
    friends: state.sideBar.friends,
  };
};
let mapDispatchToProps = dispatch => {
  return {};
};

const MyFriendsConytainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(OneFriend);

// const Friends = props => {
//   return (
//     <div className={s.main}>
//       FRIENDS
//       <OneFriend />
//     </div>
//   );
// };

export default MyFriendsConytainer;

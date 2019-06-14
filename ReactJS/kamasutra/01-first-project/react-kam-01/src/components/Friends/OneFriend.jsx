import React from 'react';
import s from './OneFriend.module.css';
// import s from './Profile.module.css';
// import MyPosts from './MyPosts/MyPosts';
// import ProfileInfo from './ProfileInfo/ProfileInfo';

const OneFriend = props => {
  let oneAvaFriend = props.state.map(p => (
    <div className={s.fr}>
      <img src={p.ava} alt="" />
      {p.name}
    </div>
  ));
  return <div className={s.item}> {oneAvaFriend}</div>;
};

// const OneFriend = props => {
//   return props.state.map(p => (
//     <div className={s.fr}>
//       <img src={p.ava} alt="" />
//       {p.name}
//     </div>
//   ));
// };

export default OneFriend;

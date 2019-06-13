import React from 'react';
import OneFriend from './OneFriend';
import s from './Friends.module.css';
// import s from './Profile.module.css';
// import MyPosts from './MyPosts/MyPosts';
// import ProfileInfo from './ProfileInfo/ProfileInfo';

const Friends = props => {
  return (
    <div className={s.main}>
      FRIENDS
      <OneFriend state={props.state} />
    </div>
  );
};

export default Friends;

import React from 'react';
// import s from './Profile.module.css';
// import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsConytainer from './MyPosts/MyPostsContainer';

const Profile = props => {
  // console.log('props Profile', props);

  return (
    <div>
      <ProfileInfo img="https://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg" />
      <MyPostsConytainer store={props.store} />
    </div>
  );
};

export default Profile;

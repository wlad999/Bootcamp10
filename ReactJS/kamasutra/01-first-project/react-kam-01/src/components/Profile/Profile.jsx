import React from 'react';
// import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = props => {
  // console.log('props Profile', props);

  return (
    <div>
      <ProfileInfo img="https://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg" />
      <MyPosts
        posts={props.profilePage.posts}
        newPostText={props.profilePage.newPostText}
        dispatch={props.dispatch}
        // upDateNewPostText={props.upDateNewPostText}
      />
    </div>
  );
};

export default Profile;

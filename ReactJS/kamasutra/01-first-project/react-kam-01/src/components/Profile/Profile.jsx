import React from 'react';
// import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

// let posts = [
//   { id: 1, likesCount: 5, message: 'How are you?' },
//   { id: 2, likesCount: 7, message: "it's my first post" },
//   { id: 3, likesCount: 3, message: 'Realy?' },
//   { id: 4, likesCount: 15, message: 'Cool!' },
// ];

const Profile = props => {
  console.log('props Profile', props);

  return (
    <div>
      <ProfileInfo img="https://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg" />
      <MyPosts posts={props.state.posts} />
    </div>
  );
};

export default Profile;

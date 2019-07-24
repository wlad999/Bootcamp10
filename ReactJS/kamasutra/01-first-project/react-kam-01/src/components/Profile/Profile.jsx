import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsConytainer from './MyPosts/MyPostsContainer';

const Profile = props => {
  return (
    <div>
      <ProfileInfo
        profile={props.profile}
        img="https://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg"
      />
      <MyPostsConytainer />
    </div>
  );
};

export default Profile;

import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      My posts
      <div />
      <div>New post</div>
      <Post message="How are you?" />
      <Post message="it's my first post" />
    </div>
  );
};

export default MyPosts;

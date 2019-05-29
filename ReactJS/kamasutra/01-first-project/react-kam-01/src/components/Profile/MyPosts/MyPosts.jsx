import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea />
        <button>add post</button>
      </div>
      <div>New post</div>
      <Post message="How are you?" likesCount="5" />
      <Post message="it's my first post" likesCount="7" />
    </div>
  );
};

export default MyPosts;

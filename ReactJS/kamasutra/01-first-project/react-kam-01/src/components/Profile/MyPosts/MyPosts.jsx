import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = props => {
  return (
    <div className={s.postsBlock}>
      <h3> My posts</h3>
      <div>
        <div>
          <textarea />
        </div>
        <div>
          <button>add post</button>
        </div>
      </div>
      <div className={s.posts}>
        <Post message="How are you?" likesCount="5" />
        <Post message="it's my first post" likesCount="7" />
      </div>
    </div>
  );
};

export default MyPosts;

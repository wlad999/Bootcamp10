import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = props => {
  let posts = [
    { id: 1, likesCount: 5, message: 'How are you?' },
    { id: 2, likesCount: 7, message: "it's my first post" },
    { id: 3, likesCount: 3, message: 'Realy?' },
    { id: 4, likesCount: 15, message: 'Cool!' },
  ];

  let postsElements = posts.map(p => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

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
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;

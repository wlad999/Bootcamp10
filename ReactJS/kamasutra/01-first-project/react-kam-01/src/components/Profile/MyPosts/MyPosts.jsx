import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
// import addPostActionCreator from '../../redux/state';
// import {
//   updateNewPostTextActionCreator,
//   addPostActionCreator,
// } from '../../redux/profile-Reducer';

const MyPosts = props => {
  // console.log(props);

  let postsElements = props.posts.map(p => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));
  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  };
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.upDateNewPostText(text);
  };

  return (
    <div className={s.postsBlock}>
      <h3> My posts</h3>
      <div>
        <div>
          <textarea
            placeholder="Enter your post"
            onChange={onPostChange}
            ref={newPostElement}
            value={props.newPostText}
          />
        </div>
        <div>
          <button onClick={onAddPost}>add post</button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;

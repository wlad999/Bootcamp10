import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
// import addPostActionCreator from '../../redux/state';
import {
  updateNewPostTextActionCreator,
  addPostActionCreator,
} from '../../redux/profile-Reducer';

const MyPosts = props => {
  // console.log(props);

  let postsElements = props.posts.map(p => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));
  let newPostElement = React.createRef();

  let addPost = () => {
    // props.addPost();
    props.dispatch(addPostActionCreator());
    // props.dispatch({
    //   type: 'ADD-POST',
    // });
  };
  let onPostChange = () => {
    let text = newPostElement.current.value;
    // props.upDateNewPostText(text);
    // let action = { type: 'UPDATE-NEW-POST-TEXT', newText: text };
    let action = updateNewPostTextActionCreator(text);
    // props.dispatch({ type: 'UPDATE-NEW-POST-TEXT', newText: text });
    props.dispatch(action);
  };

  return (
    <div className={s.postsBlock}>
      <h3> My posts</h3>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            value={props.newPostText}
          />
        </div>
        <div>
          <button onClick={addPost}>add post</button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;

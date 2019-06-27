import React from 'react';

import {
  updateNewPostTextActionCreator,
  addPostActionCreator,
} from '../../redux/profile-Reducer';
import MyPosts from './MyPosts';

const MyPostsConytainer = props => {
  debugger;
  let state = props.store.getState();

  // console.log('MyPostsConytainer', state);

  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };
  let onPostChange = text => {
    let action = updateNewPostTextActionCreator(text);
    props.store.dispatch(action);
  };

  return (
    <MyPosts
      upDateNewPostText={onPostChange}
      addPost={addPost}
      posts={state.profilePage.posts}
      // posts={props.store.getState().profilePage.posts}
      newPostText={state.profilePage.newPostText}
    />
  );
};

export default MyPostsConytainer;

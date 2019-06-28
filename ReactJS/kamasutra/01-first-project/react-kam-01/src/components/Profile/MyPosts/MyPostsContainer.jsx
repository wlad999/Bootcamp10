import React from 'react';
import StoreContext from '../../../StoreContext';

import {
  updateNewPostTextActionCreator,
  addPostActionCreator,
} from '../../redux/profile-Reducer';
import MyPosts from './MyPosts';

const MyPostsConytainer = () => {
  return (
    <StoreContext.Consumer>
      {store => {
        let state = store.getState();
        let addPost = () => {
          store.dispatch(addPostActionCreator());
        };
        let onPostChange = text => {
          let action = updateNewPostTextActionCreator(text);
          store.dispatch(action);
        };
        return (
          <MyPosts
            upDateNewPostText={onPostChange}
            addPost={addPost}
            posts={store.getState().profilePage.posts}
            newPostText={store.getState().profilePage.newPostText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default MyPostsConytainer;

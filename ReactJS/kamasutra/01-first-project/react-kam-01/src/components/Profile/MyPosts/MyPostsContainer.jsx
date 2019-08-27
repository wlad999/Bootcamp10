import React from 'react';
import { connect } from 'react-redux';

import {
  // updateNewPostTextActionCreator,
  addPostActionCreator,
} from '../../redux/profile-Reducer';
import MyPosts from './MyPosts';

let mapStateToProps = state => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};
let mapDispatchToProps = dispatch => {
  return {
    // upDateNewPostText: text => {
    //   let action = updateNewPostTextActionCreator(text);
    //   dispatch(action);
    // },
    addPost: newPostBody => {
      dispatch(addPostActionCreator(newPostBody));
    },
  };
};

const MyPostsConytainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyPosts);

export default MyPostsConytainer;

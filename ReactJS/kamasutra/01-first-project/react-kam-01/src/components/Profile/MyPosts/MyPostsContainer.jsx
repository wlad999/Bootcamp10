import React from 'react';
import { connect } from 'react-redux';

import {
  updateNewPostTextActionCreator,
  addPostActionCreator,
} from '../../redux/profile-Reducer';
import MyPosts from './MyPosts';

let mapStateToProps = state => {
  debugger;
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};
let mapDispatchToProps = dispatch => {
  return {
    upDateNewPostText: text => {
      let action = updateNewPostTextActionCreator(text);
      dispatch(action);
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    },
  };
};

const MyPostsConytainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyPosts);

export default MyPostsConytainer;

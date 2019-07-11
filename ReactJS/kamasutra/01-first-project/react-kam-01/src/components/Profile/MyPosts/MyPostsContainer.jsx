// import React from 'react';
import { connect } from 'react-redux';

import {
  updateNewPostTextActionCreator,
  addPostActionCreator,
} from '../../redux/profile-Reducer';
import MyPosts from './MyPosts';

// const MyPostsConytainer = () => {
//   return (
//     <StoreContext.Consumer>
//       {store => {
//         // let state = store.getState();
//         let addPost = () => {
//           store.dispatch(addPostActionCreator());
//         };
//         let onPostChange = text => {
//           let action = updateNewPostTextActionCreator(text);
//           store.dispatch(action);
//         };
//         return (
//           <MyPosts
//             upDateNewPostText={onPostChange}
//             addPost={addPost}
//             posts={store.getState().profilePage.posts}
//             newPostText={store.getState().profilePage.newPostText}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };

let mapStateToProps = state => {
  debugger;
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};
let mapDispatchToProps = dispatch => {
  // debugger;
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

import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';

const MyPosts = props => {
  let postsElements = props.posts.map(p => (
    <Post message={p.message} likesCount={p.likesCount} key={p.id} />
  ));

  let onAddPost = values => {
    props.addPost(values.newPostText);
  };

  return (
    <div className={s.postsBlock}>
      <h3> My posts</h3>
      <div>
        <MyPostsFormRedux onSubmit={onAddPost} />
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

const AddNewPostForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={'textarea'}
        name="newPostText"
        placeholder="Enter your post"
      />
      <div>
        <button>add post</button>
      </div>
    </form>
  );
};
const MyPostsFormRedux = reduxForm({ form: 'PropfileAddNewPostForm' })(
  AddNewPostForm,
);

export default MyPosts;

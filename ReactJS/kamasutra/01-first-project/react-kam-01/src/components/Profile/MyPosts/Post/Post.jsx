import React from 'react';
import s from './Post.module.css';

const Post = props => {
  return (
    <div className={s.item}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwYQ43xf57fSFItMUR-83hm3x2vfz__or4Pxeg8Z9qEW22TjQx"
        alt=""
      />
      {props.message}
      <div>
        <span>like</span>
        {props.likesCount}
      </div>
    </div>
  );
};

export default Post;

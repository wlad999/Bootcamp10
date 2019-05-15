import React from 'react';
import s from'./Profile.module.css';


const Profile = ()=>{
    return    <div className={s.content}>
    <div>
      <img src ='https://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg'></img>
    </div>
    <div>
      ava + descripyion
    </div>
    <div>
      my posts
      <div>
        New post
      </div>
      <div className={s.posts}>
        <div className={s.item} >
          post 1
        </div>
        <div className={s.item}>
          post 2
        </div>
      </div>
    </div>
    </div>
}

export  default Profile
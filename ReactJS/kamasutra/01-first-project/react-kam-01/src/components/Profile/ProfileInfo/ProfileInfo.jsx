import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = props => {
  return (
    <>
      <div>
        <img src={props.img} />
      </div>
      <div className={s.descriptionBlock}>ava + descripyion</div>
    </>
  );
};

export default ProfileInfo;

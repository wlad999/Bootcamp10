import React from 'react';
import s from './ProfileInfo.module.css';
import userPhoto from '../../../assets/images/users.png';
import Preloader from '../../common/preloader/Preloader';

const ProfileInfo = props => {
  if (!props.propfile) {
    return <Preloader />;
  }
  return (
    <>
      <div>
        <img src={props.img} alt="" />
      </div>
      <div className={s.descriptionBlock}>
        <img
          src={props.propfile.photos.large}
          // src={
          //   props.propfile.photos.large != null
          //     ? props.propfile.photos.large
          //     : userPhoto
          // }
          alt=""
        />
        ava + descripyion
      </div>
    </>
  );
};

export default ProfileInfo;

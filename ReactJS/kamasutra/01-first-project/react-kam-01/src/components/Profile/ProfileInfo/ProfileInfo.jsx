import React from 'react';
import s from './ProfileInfo.module.css';
// import userPhoto from '../../../assets/images/users.png';
import Preloader from '../../common/preloader/Preloader';
import lookingForAJob from '../../../assets/images/looking-for-a-job-500x286.jpg';
import noNeedAJob from '../../../assets/images/no.png';
import twitter from '../../../assets/images/twitter_PNG32.png';
import fb from '../../../assets/images/FB.svg';
import git from '../../../assets/images/GH.png';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = props => {
  if (!props.profile) {
    return <Preloader />;
  }
  // debugger;
  return (
    <>
      {/* <div>
        <img src={props.img} alt="" />
      </div> */}
      <div className={s.descriptionBlock}>
        <img
          src={props.profile.photos.large}
          // src={
          //   props.propfile.photos.large != null
          //     ? props.propfile.photos.large
          //     : userPhoto
          // }
          alt=""
        />
        <ProfileStatus
          status={props.status}
          updateStatus={props.updateStatus}
        />
        <h1> STATUS!!!</h1>
        <div>aboutMe: {props.profile.fullName}</div>
        <div>aboutMe: {props.profile.aboutMe}</div>
        <div>
          {/* lookingForAJob: */}
          {props.profile.lookingForAJob ? (
            <img src={lookingForAJob} alt="" className={s.job} />
          ) : (
            <img src={noNeedAJob} alt="" />
          )}
        </div>
        <div>
          <a href={props.profile.contacts.twitter}>
            <img src={twitter} alt="" width="50px" />
          </a>
          {/* <a href={'https://' + props.profile.contacts.facebook}> */}
          <a href={props.profile.contacts.facebook}>
            <img src={fb} alt="" width="50px" />
          </a>
          {/* <a href={'https://' + props.profile.contacts.github}> */}
          <a href={props.profile.contacts.github}>
            <img src={git} alt="" width="50px" />
          </a>
        </div>
      </div>
    </>
  );
};

export default ProfileInfo;

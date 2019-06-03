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

// const Profile = () => {
//   return (
//     <div>
//       <ProfileInfo img="https://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg" />
//       {/* <div>
//         <img src="https://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg" />
//       </div>
//       <div>ava + descripyion</div> */}
//     </div>
//   );
// };

export default ProfileInfo;

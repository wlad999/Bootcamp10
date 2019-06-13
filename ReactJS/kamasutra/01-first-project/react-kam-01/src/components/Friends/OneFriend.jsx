import React from 'react';
import s from './OneFriend.module.css';
// import s from './Profile.module.css';
// import MyPosts from './MyPosts/MyPosts';
// import ProfileInfo from './ProfileInfo/ProfileInfo';

const OneFriend = props => {
  let oneAvaFriend = props.state.map(p => (
    <div className={s.fr}>
      <img src={p.ava} alt="" />
      {p.name}
    </div>
  ));
  return (
    <div className={s.item}>
      {' '}
      {oneAvaFriend}
      {/* <div className={s.fr}>
        <img
          src="https://www.perunica.ru/uploads/posts/2011-10/1319832745_0_6065c_b70de565_l.jpg"
          alt=""
        />
        Stive
      </div>
      ) */}
      {/* <div className={s.fr}>
        <img
          src="https://www.perunica.ru/uploads/posts/2011-10/1319832745_0_6065c_b70de565_l.jpg"
          alt=""
        />
        Robert
      </div>
      <div className={s.fr}>
        <img
          src="https://www.perunica.ru/uploads/posts/2011-10/1319832745_0_6065c_b70de565_l.jpg"
          alt=""
        />
        Jack
      </div> */}
    </div>
  );
};

export default OneFriend;

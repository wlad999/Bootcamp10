import React from 'react';
import s from './OneFriend.module.css';
import ss from './Friends.module.css';

const OneFriend = props => {
  let oneAvaFriend = props.friends.map(p => (
    <div className={s.fr} key={p.id}>
      <img src={p.ava} alt="" />
      {p.name}
    </div>
  ));
  return (
    <div className={ss.main}>
      <h3>FRIENDS</h3>
      <div className={s.item}> {oneAvaFriend}</div>
    </div>
  );
};

export default OneFriend;

import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = props => {
  let path = '/dialogs/' + props.id;
  return (
    <div className={s.dialog + ' ' + s.active}>
      {/* <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink> */}
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Massage = props => {
  return <div className={s.dialog}>{props.message}</div>;
};

const Dialogs = props => {
  let dialogsData = [
    { id: 1, name: 'Vlad' },
    { id: 2, name: 'Stas' },
    { id: 3, name: 'Alex' },
    { id: 4, name: 'Evgeniya' },
    { id: 5, name: 'Sveta' },
    { id: 6, name: 'Rodik' },
  ];

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name="Stas" id="2" />
        <DialogItem name="Pavel" id="3" />
        <DialogItem name="Evgeniya" id="4" />
        <DialogItem name="Sveta" id="5" />
        <DialogItem name="Rodik" id="6" />
      </div>
      <div className={s.messages}>
        <Massage message="Hello" />
        <Massage message="Mambo" />
        <Massage message="Shuari" />
        <Massage message="Jumbo" />
        <Massage message="Yuhu" />
        <Massage message="Cool" />
      </div>
    </div>
  );
};

export default Dialogs;

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
    { id: 4, name: 'Valera' },
    { id: 5, name: 'Pasha' },
    { id: 6, name: 'Rodik' },
  ];

  let messagesData = [
    { id: 1, message: 'Hello' },
    { id: 2, message: 'Mambo' },
    { id: 3, message: 'Shuari' },
    { id: 4, message: 'Jumbo' },
    { id: 5, message: 'Yuhu' },
    { id: 6, message: 'Cool' },
  ];

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
      </div>
      <div className={s.messages}>
        <Massage message={messagesData[0].message} />
        <Massage message={messagesData[1].message} />
      </div>
    </div>
  );
};

export default Dialogs;

import React from 'react';
import s from './Dialogs.module.css';
import Massage from './Massage/Massage';
import DialogItem from './DialogItem/DialogItem';
import { Redirect } from 'react-router-dom';

const Dialogs = props => {
  debugger;
  let state = props.dialogsPage;
  let dialogsElements = state.dialogs.map(dialog => (
    <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} />
  ));

  let messegesElements = state.messages.map(m => (
    <Massage message={m.message} key={m.id} />
  ));
  let onSendMessageClick = () => {
    props.sendMessage();
  };

  let onMassegeChange = e => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
    // let newMes = newMessageElement.current.value;
    // вместо ссылки ref={newMessageElement} используем в функции event.target.value
  };
  // let newMessageElement = React.createRef();
  // вместо ссылки ref={newMessageElement} используем в функции event.target.value
  if (!props.isAuth) {
    return <Redirect to={'/login'} />;
  }
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div>
        <div className={s.messages}>{messegesElements}</div>
        <textarea
          placeholder="Enter your massege"
          onChange={onMassegeChange}
          value={state.newMessage}
          cols="20"
          rows="5"
        />
        <div>
          <button onClick={onSendMessageClick}>add message</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;

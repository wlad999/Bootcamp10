import React from 'react';
import s from './Dialogs.module.css';
import Massage from './Massage/Massage';
import DialogItem from './DialogItem/DialogItem';

const Dialogs = props => {
  let state = props.dialogsPage;
  let dialogsElements = state.dialogs.map(dialog => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  let messegesElements = state.messages.map(m => (
    <Massage message={m.message} />
  ));
  let onSendMessageClick = () => {
    // props.addMessage();
    // props.dispatch({ type: 'ADD-MESSAGE' });
    props.sendMessage();
  };
  // };

  let onMassegeChange = e => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
    // let newMes = newMessageElement.current.value;
    // вместо ссылки ref={newMessageElement} используем в функции event.target.value
  };
  // let newMessageElement = React.createRef();
  // вместо ссылки ref={newMessageElement} используем в функции event.target.value

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div>
        <div className={s.messages}>{messegesElements}</div>
        <textarea
          placeholder="Enter your massege"
          onChange={onMassegeChange}
          value={props.newMessage}
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

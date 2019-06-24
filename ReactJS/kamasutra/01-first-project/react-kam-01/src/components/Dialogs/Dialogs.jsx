import React from 'react';
import s from './Dialogs.module.css';
import Massage from './Massage/Massage';
import DialogItem from './DialogItem/DialogItem';

const Dialogs = props => {
  let dialogsElements = props.state.dialogs.map(dialog => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  let messegesElements = props.state.messages.map(m => (
    <Massage message={m.message} />
  ));
  let addMessage = () => {
    // props.addMessage();
    props.dispatch({ type: 'ADD-MESSAGE' });
  };
  // };

  let onMassegeChange = () => {
    let newMes = newMessageElement.current.value;
    // props.upDateNewMessage(newMes);
    props.dispatch({ type: 'UPDATE-NEW-MESSAGE', newMess: newMes });
    // console.log(newMes);
  };
  let newMessageElement = React.createRef();

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div>
        <div className={s.messages}>{messegesElements}</div>
        <textarea
          ref={newMessageElement}
          onChange={onMassegeChange}
          value={props.state.newMessage}
          cols="20"
          rows="5"
        />
        <div>
          <button onClick={addMessage}>add message</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;

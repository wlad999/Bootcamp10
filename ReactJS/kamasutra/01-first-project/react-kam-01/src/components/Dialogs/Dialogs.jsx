import React from 'react';
import s from './Dialogs.module.css';
import Massage from './Massage/Massage';
import DialogItem from './DialogItem/DialogItem';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { TextArea } from '../common/FormsControls/FormsControls';
import { maxLengthCreator, required } from '../../utils/validators/validators';

const Dialogs = props => {
  let state = props.dialogsPage;
  let dialogsElements = state.dialogs.map(dialog => (
    <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} />
  ));

  let messegesElements = state.messages.map(m => (
    <Massage message={m.message} key={m.id} />
  ));

  let addNewMessage = values => {
    props.sendMessage(values.newMessageBody);
  };
  if (!props.isAuth) {
    return <Redirect to={'/login'} />;
  }
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div>
        <div className={s.messages}>{messegesElements}</div>
        <AddMessageFormRedux onSubmit={addNewMessage} />
        {/* <textarea
          placeholder="Enter your massege"
          onChange={onMassegeChange}
          value={state.newMessage}
          cols="20"
          rows="5"
        />
        <div>
          <button onClick={onSendMessageClick}>add message</button>
        </div> */}
      </div>
    </div>
  );
};
const maxLength50 = maxLengthCreator(50);

const AddMessageForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={TextArea}
        name="newMessageBody"
        placeholder="Enter your massege"
        validate={[required, maxLength50]}
      />
      <div>
        <button>send</button>
      </div>
    </form>
  );
};
const AddMessageFormRedux = reduxForm({ form: 'dialogsAddMessageForm' })(
  AddMessageForm,
);

export default Dialogs;

import React from 'react';
import {
  addMessageActionCreator,
  updateNewMessageActionCreator,
} from '../redux/dialogs-Reducer';
import Dialogs from './Dialogs';

const DialogsContainer = props => {
  let state = props.store.getState().dialogsPage;

  let onSendMessageClick = () => {
    props.store.dispatch(addMessageActionCreator());
  };

  let onNewMassegeChange = body => {
    props.store.dispatch(updateNewMessageActionCreator(body));
  };

  return (
    <Dialogs
      updateNewMessageBody={onNewMassegeChange}
      sendMessage={onSendMessageClick}
      dialogsPage={state}
    />
  );
};

export default DialogsContainer;

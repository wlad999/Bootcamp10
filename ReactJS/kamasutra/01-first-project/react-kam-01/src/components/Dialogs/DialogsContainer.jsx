import React from 'react';
import {
  addMessageActionCreator,
  updateNewMessageActionCreator,
} from '../redux/dialogs-Reducer';
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';

const DialogsContainer = () => {
  debugger;
  return (
    <StoreContext.Consumer>
      {store => {
        let state = store.getState().dialogsPage;

        let onSendMessageClick = () => {
          store.dispatch(addMessageActionCreator());
        };

        let onNewMassegeChange = body => {
          store.dispatch(updateNewMessageActionCreator(body));
        };
        return (
          <Dialogs
            updateNewMessageBody={onNewMassegeChange}
            sendMessage={onSendMessageClick}
            dialogsPage={state}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;

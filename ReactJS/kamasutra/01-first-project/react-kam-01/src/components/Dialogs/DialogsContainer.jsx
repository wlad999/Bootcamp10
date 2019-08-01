import React from 'react';
import {
  addMessageActionCreator,
  updateNewMessageActionCreator,
} from '../redux/dialogs-Reducer';
import Dialogs from './Dialogs';
// import StoreContext from '../../StoreContext';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

// const DialogsContainer = () => {
//   debugger;
//   return (
//     <StoreContext.Consumer>
//       {store => {
//         let state = store.getState().dialogsPage;

//         let onSendMessageClick = () => {
//           store.dispatch(addMessageActionCreator());
//         };

//         let onNewMassegeChange = body => {
//           store.dispatch(updateNewMessageActionCreator(body));
//         };
//         return (
//           <Dialogs
//             updateNewMessageBody={onNewMassegeChange}
//             sendMessage={onSendMessageClick}
//             dialogsPage={state}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };

let mapStateToPropsForRedirect = state => {
  return { isAuth: state.auth.isAuth };
};
let mapStateToProps = state => {
  return { dialogsPage: state.dialogsPage };
};
// let mapStateToProps = state => {
//   return { dialogsPage: state.dialogsPage, isAuth: state.auth.isAuth };
// };
let mapDispatchToProps = dispatch => {
  return {
    updateNewMessageBody: body => {
      dispatch(updateNewMessageActionCreator(body));
    },
    sendMessage: () => {
      dispatch(addMessageActionCreator());
    },
  };
};

// let AuthRedirectContainer = props => {
//   if (!this.props.isAuth) {
//     return <Redirect to={'/login'} />;
//   }
//   return <Dialogs {...props} />;
// };
let AuthRedirectContainer = withAuthRedirect(Dialogs);
AuthRedirectContainer = connect(mapStateToPropsForRedirect)(
  AuthRedirectContainer,
);

const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AuthRedirectContainer);
// const DialogsContainer = connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(Dialogs);

export default DialogsContainer;
//

import React from 'react';
import { addMessageActionCreator } from '../redux/dialogs-Reducer';
import Dialogs from './Dialogs';
// import StoreContext from '../../StoreContext';
import { connect } from 'react-redux';
// import { Redirect } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

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
// let AuthRedirectContainer = withAuthRedirect(Dialogs);

// ---------Эту логику запихнули в withAuthRedirect.js
// let mapStateToPropsForRedirect = state => {
//   return { isAuth: state.auth.isAuth };
// };

// AuthRedirectContainer = connect(mapStateToPropsForRedirect)(
//   AuthRedirectContainer,
// );
// -------------------------------------------------------
let mapStateToProps = state => {
  return { dialogsPage: state.dialogsPage };
};
// let mapStateToProps = state => {
//   return { dialogsPage: state.dialogsPage, isAuth: state.auth.isAuth };
// };
let mapDispatchToProps = dispatch => {
  return {
    sendMessage: newMessageBody => {
      dispatch(addMessageActionCreator(newMessageBody));
    },
  };
};

// let AuthRedirectContainer = props => {
//   if (!this.props.isAuth) {
//     return <Redirect to={'/login'} />;
//   }
//   return <Dialogs {...props} />;
// };
// compose(
//   connect(
//     mapStateToProps,
//     mapDispatchToProps,
//   ),
//   withAuthRedirect,
// )(Dialogs);

// let AuthRedirectContainer = withAuthRedirect(Dialogs);
// const DialogsContainer = connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(AuthRedirectContainer);
// const DialogsContainer = connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(Dialogs);

// export default DialogsContainer;
//
export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withAuthRedirect,
)(Dialogs);

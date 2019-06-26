const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: 7,
        message: state.newMessage,
      };
      let newCustomer = { id: 7, name: 'Bond' };

      state.messages.push(newMessage);
      state.dialogs.push(newCustomer);
      state.newMessage = '';
      return state;
    case UPDATE_NEW_MESSAGE:
      state.newMessage = action.newMess;
      return state;
    default:
      return state;
  }
  // if (action.type === ADD_MESSAGE) {
  //   let newMessage = {
  //     id: 7,
  //     message: state.newMessage,
  //   };
  //   let newCustomer = { id: 7, name: 'Bond' };

  //   state.messages.push(newMessage);
  //   state.dialogs.push(newCustomer);
  //   state.newMessage = '';
  // } else if (action.type === UPDATE_NEW_MESSAGE) {
  //   state.newMessage = action.newMess;
  // }
  // return state;
};

export const addMessageActionCreator = () => ({
  type: ADD_MESSAGE,
});
export const updateNewMessageActionCreator = newMes => ({
  type: UPDATE_NEW_MESSAGE,
  newMess: newMes,
});

export default dialogsReducer;

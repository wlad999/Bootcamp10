const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

let initialState = {
  dialogs: [
    { id: 1, name: 'Vlad' },
    { id: 2, name: 'Stas' },
    { id: 3, name: 'Alex' },
    { id: 4, name: 'Valera' },
    { id: 5, name: 'Pasha' },
    { id: 6, name: 'Rodik' },
  ],
  messages: [
    { id: 1, message: 'Hello' },
    { id: 2, message: 'Mambo' },
    { id: 3, message: 'Shuari' },
    { id: 4, message: 'Jumbo' },
    { id: 5, message: 'Yuhu' },
    { id: 6, message: 'Cool' },
  ],
  newMessage: 'TEST!!!!!',
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      let addNewMessage = state.newMessage;
      // let newMessage = {
      //   id: 7,
      //   message: state.newMessage,
      // };
      // let newCustomer = { id: 7, name: 'Bond' };

      return {
        ...state,
        dialogs: [...state.dialogs, { id: 7, name: 'Bond' }],
        messages: [
          ...state.messages,
          {
            id: 7,
            message: addNewMessage,
          },
        ],
        newMessage: '',
      };
      // stateCopy.dialogs = [...state.dialogs];
      // stateCopy.messages = [...state.messages];
      // stateCopy.messages.push(newMessage);
      // stateCopy.dialogs.push(newCustomer);
      // stateCopy.newMessage = '';
    }
    case UPDATE_NEW_MESSAGE: {
      return { ...state, newMessage: action.newMess };
    }
    default:
      return state;
  }
};

export const addMessageActionCreator = () => ({
  type: ADD_MESSAGE,
});
export const updateNewMessageActionCreator = newMes => ({
  type: UPDATE_NEW_MESSAGE,
  newMess: newMes,
});

export default dialogsReducer;

const ADD_MESSAGE = 'ADD-MESSAGE';

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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      let addNewMessage = action.newMessageBody;

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
      };
    }

    default:
      return state;
  }
};

export const addMessageActionCreator = newMessageBody => ({
  type: ADD_MESSAGE,
  newMessageBody,
});

export default dialogsReducer;

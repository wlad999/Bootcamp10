import profileReducer from './profile-Reducer';
import dialogsReducer from './dialogs-Reducer';
import sideBarReducer from './sideBar-Reducer';

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, likesCount: 5, message: 'How are you?' },
        { id: 2, likesCount: 7, message: "it's my first post" },
        { id: 3, likesCount: 3, message: 'Realy?' },
        { id: 4, likesCount: 15, message: 'Cool!' },
      ],
      newPostText: 'it-kamasutra',
    },
    dialogsPage: {
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
    },
    sideBar: {
      friends: [
        {
          id: 1,
          name: 'Stive',
          ava:
            'https://st2.depositphotos.com/1007566/12301/v/950/depositphotos_123013306-stock-illustration-avatar-man-cartoon.jpg',
        },
        {
          id: 2,
          name: 'Robert',
          ava:
            'https://www.meme-arsenal.com/memes/7bdea6754f999b50e9577596f09197fb.jpg',
        },
        {
          id: 3,
          name: 'Jack',
          ava:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe5vdk8h6BZ-Hw4Hx6cPrW0FSSTh9U05ReaZovHbukvzZ6zICo',
        },
      ],
    },
  },
  _callSubscriber() {
    console.log('State changed');
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer; /*'Это pattern, наблюдатель-observer,  publisher-subscriber, addEventListener*/
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sideBar = sideBarReducer(this._state.sideBar, action);
    this._callSubscriber(this._state);
  },
};

// export const addPostActionCreator = () => ({
//   type: ADD_POST,
// });
// export const updateNewPostTextActionCreator = text => ({
//   type: UPDATE_NEW_POST_TEXT,
//   newText: text,
// });
// export const addMessageActionCreator = () => ({
//   type: ADD_MESSAGE,
// });
// export const updateNewMessageActionCreator = newMes => ({
//   type: UPDATE_NEW_MESSAGE,
//   newMess: newMes,
// });

export default store;

window.store = store;

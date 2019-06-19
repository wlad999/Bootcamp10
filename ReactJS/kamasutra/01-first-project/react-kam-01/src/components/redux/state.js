let rerenderEntireTree = () => {
  console.log('State changed');
};

let state = {
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
};
// window.state = state;
export const addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0,
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree();
};
export const upDateNewPostText = newText => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree();
};
export const addMessage = () => {
  let newMessage = {
    id: 7,
    message: state.dialogsPage.newMessage,
  };
  let newCustomer = { id: 7, name: 'Bond' };

  state.dialogsPage.messages.push(newMessage);
  state.dialogsPage.dialogs.push(newCustomer);

  state.dialogsPage.newMessage = '';
  rerenderEntireTree();
};

export const upDateNewMessage = newMess => {
  state.dialogsPage.newMessage = newMess;
  rerenderEntireTree();
};
export const subscribe = observer => {
  rerenderEntireTree = observer; /*'Это pattern, наблюдатель-observer,  publisher-subscriber, addEventListener*/
};

export default state;

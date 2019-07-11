const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  posts: [
    { id: 1, likesCount: 5, message: 'How are you?' },
    { id: 2, likesCount: 7, message: "it's my first post" },
    { id: 3, likesCount: 3, message: 'Realy?' },
    { id: 4, likesCount: 15, message: 'Cool!' },
  ],
  newPostText: 'it-kamasutra',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newMesInPost = state.newPostText;
      let newPost = {
        id: 5,
        message: newMesInPost,
        likesCount: 0,
      };
      return { ...state, posts: [...state.posts, newPost], newPostText: '' };
      // let stateCopy = { ...state };
      // stateCopy.posts = [...state.posts];
      // stateCopy.posts.push(newPost);
      // stateCopy.newPostText = '';
      // return stateCopy;
    }
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText,
      };
      // let stateCopy = { ...state };
      // stateCopy.newPostText = action.newText;
      // return stateCopy;
    }
    default:
      return state;
  }
  // if (action.type === ADD_POST) {
  //   let newPost = {
  //     id: 5,
  //     message: state.newPostText,
  //     likesCount: 0,
  //   };
  //   state.posts.push(newPost);
  //   state.newPostText = '';
  // } else if (action.type === UPDATE_NEW_POST_TEXT) {
  //   state.newPostText = action.newText;
  // }
  // return state;
  // меняем "IF" на "switch"
};

export const addPostActionCreator = () => ({
  type: ADD_POST,
});
export const updateNewPostTextActionCreator = text => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export default profileReducer;

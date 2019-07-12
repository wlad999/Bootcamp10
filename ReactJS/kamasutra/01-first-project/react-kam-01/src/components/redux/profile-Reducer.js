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
    }
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText,
      };
    }
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({
  type: ADD_POST,
});
export const updateNewPostTextActionCreator = text => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export default profileReducer;

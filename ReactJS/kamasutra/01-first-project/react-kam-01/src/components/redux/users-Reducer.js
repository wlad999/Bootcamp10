const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
  users: [
    // {
    //   id: 1,
    //   photoUrl:
    //     'https://steamuserimages-a.akamaihd.net/ugc/963095678570779142/678F6DDE61B17A1AA32739F4D31B128B5B5BF6D1/',
    //   followed: false,
    //   fullName: 'Dmitry',
    //   status: 'i am a Boss',
    //   location: { city: 'Minsk', country: 'Belarus' },
    // },
    // {
    //   id: 2,
    //   photoUrl:
    //     'https://www.meme-arsenal.com/memes/12be6fef3f4ab64e65e4f69a19b9f64d.jpg',
    //   followed: true,
    //   fullName: 'Alex',
    //   status: 'i am a Boss too',
    //   location: { city: 'Moscow', country: 'Russia' },
    // },
    // {
    //   id: 3,
    //   photoUrl:
    //     'https://steamuserimages-a.akamaihd.net/ugc/933814008881152016/838D9568CF06E89568DD6D8D58A61291110336C5/',
    //   followed: false,
    //   fullName: 'Andrew',
    //   status: 'i am a more Boss',
    //   location: { city: 'Kiev', country: 'Ukraine' },
    // },
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case SET_USERS: {
      return { ...state, users: [...state.users, ...action.users] };
    }
    default:
      return state;
  }
};
// ActionCreator - AC
export const followAC = userId => ({
  type: FOLLOW,
  userId,
});
export const unfollowAC = userId => ({
  type: UNFOLLOW,
  userId,
});
export const setUserswAC = users => ({
  type: SET_USERS,
  users,
});

export default usersReducer;

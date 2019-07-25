const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  // isFetching: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };

    default:
      return state;
  }
};
// ActionCreator - AC
export const setAuthUserData = (userId, email, login) => ({
  type: SET_USER_DATA,
  data: { userId, email, login },
});

// export const toggleIsFetching = isFetching => ({
//   type: TOGGLE_IS_FETCHING,
//   isFetching: isFetching,
//   // если ключь и значения равны можно записать один раз - isFetching
// });

export default authReducer;

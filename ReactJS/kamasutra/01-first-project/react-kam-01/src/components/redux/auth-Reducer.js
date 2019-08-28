import { authAPI } from '../../api/api';
import { stopSubmit } from 'redux-form';
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
        ...action.payload,
      };

    default:
      return state;
  }
};
// ActionCreator - AC
export const setAuthUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: { userId, email, login, isAuth },
});
//getAuthUserData - thunk
export const getAuthUserData = () => {
  return dispatch => {
    authAPI.me().then(response => {
      if (response.data.resultCode === 0) {
        let {
          id,
          login,
          email,
        } = response.data.data; /*Деструктуризируем нужные свойства в переменные */
        dispatch(setAuthUserData(id, email, login, true));
      }
    });
  };
};
//login - thunk Creator - функция которая возвращает санку и может принимать чтото и то что-то доступно санке благодаря замыканию
// thunk - это функция которая принимает метод dispatch
export const login = (email, password, rememberMe) => dispatch => {
  authAPI.login(email, password, rememberMe).then(response => {
    if (response.data.resultCode === 0) {
      dispatch(getAuthUserData());
    } else {
      let message =
        response.data.messages.length > 0
          ? response.data.messages[0]
          : 'Some error';
      dispatch(stopSubmit('login', { _error: message }));
    }
  });
};

export const logout = () => {
  return dispatch => {
    authAPI.logout().then(response => {
      if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
      }
    });
  };
};

// export const toggleIsFetching = isFetching => ({
//   type: TOGGLE_IS_FETCHING,
//   isFetching: isFetching,
//   // если ключь и значения равны можно записать один раз - isFetching
// });

export default authReducer;

import { getAuthUserData } from './auth-Reducer';

const INITIALAIZED_SUCCESS = 'INITIALAIZED_SUCCESS';

let initialState = {
  initialaized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALAIZED_SUCCESS:
      return {
        ...state,
        initialaized: true,
      };

    default:
      return state;
  }
};
// ActionCreator - AC
export const initialaizedSuccess = () => ({
  type: INITIALAIZED_SUCCESS,
});
//initialize - thunk Creator - функция которая возвращает санку и может принимать чтото и то что-то доступно санке благодаря замыканию
// thunk - это функция которая принимает метод dispatch
export const initializeApp = () => dispatch => {
  let promise = dispatch(getAuthUserData());

  // Если у нас есть несколько диспатчей и мы хотим дождаться выполнения всех, прежде чем поригициализироваться-накой синтаксис
  // Promise.all([promise]), в массив происуем все примисы
  Promise.all([promise]).then(() => {
    dispatch(initialaizedSuccess());
  });
  // promise.then(() => {
  //   dispatch(initialaizedSuccess());
  // });
};

export default appReducer;

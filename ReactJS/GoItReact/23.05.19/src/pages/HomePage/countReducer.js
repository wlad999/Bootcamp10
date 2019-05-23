import {
  HOME_COUNTER_INCREMENT,
  HOME_COUNTER_DECREMENT,
} from '../../utils/constans';

const initialState = 0;

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case HOME_COUNTER_INCREMENT:
      return state + 1;
    case HOME_COUNTER_DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

export default counterReducer;

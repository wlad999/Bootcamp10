import {
  HOME_COUNTER_INCREMENT,
  HOME_COUNTER_DECREMENT,
  TODOS_REMOVE,
} from '../../utils/constans';

export const increment = count => ({
  type: HOME_COUNTER_INCREMENT,
  count,
});

export const decrement = count => ({
  type: HOME_COUNTER_DECREMENT,
  count,
});

export const revomeTodo = id => ({
  type: TODOS_REMOVE,
  payload: id,
});

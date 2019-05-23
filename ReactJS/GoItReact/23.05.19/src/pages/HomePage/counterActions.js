import {
  HOME_COUNTER_INCREMENT,
  HOME_COUNTER_DECREMENT,
} from '../../utils/constans';

export const increment = () => ({
  type: HOME_COUNTER_INCREMENT,
});

export const decrement = () => ({
  type: HOME_COUNTER_DECREMENT,
});

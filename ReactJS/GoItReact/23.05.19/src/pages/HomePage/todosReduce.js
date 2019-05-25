import {
  TODOS_ADD,
  TODOS_REMOVE,
  TODOS_TOGGLE_COMPLETE,
} from '../../utils/constans';

const initialTodos = [
  {
    title: 'todo 1',
    description: 'descr',
    id: 'adsasdad',
    isComleted: false,
  },
  {
    title: 'todo 2',
    description: 'deasdasdasdscr',
    id: 'a;oiqwsdad',
    isComleted: true,
  },
];

const todosReducer = (state = initialTodos, action) => {
  console.log('act', action.type);
  switch (action.type) {
    case TODOS_ADD:
      return [...state, action.payload];
    case TODOS_REMOVE:
      return state.filter(el => el.id !== action.payload);
    case TODOS_TOGGLE_COMPLETE:
      return state.map(el => {
        if (el.id === action.payload) {
          return {
            ...el,
            isCompleted: !el.isCompleted,
          };
        }
        return el;
      });

    default:
      return state;
  }
};

export default todosReducer;

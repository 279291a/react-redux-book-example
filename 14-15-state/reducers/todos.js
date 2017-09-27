import { ADD_TODO, EDIT_TODO, DELETE_TODO, COMPLETE_TODO, COMPLETE_ALL, CLEAR_COMPLETED } from '../constants/ActionTypes';

const initialState = [
  {
    id: 0,
    text: 'Use redux',
    completed: false,
  },
];

function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        {
          id: state.reduce((maxId, todo) => (Math.max(maxId, todo.id) + 1), -1),
          text: action.text,
          completed: false,
        },
        ...state,
      ];

    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.id);
    case EDIT_TODO:
      return state.map(todo =>
        (todo.id === action.id ? Object.assign({}, todo, { text: action.text }) : todo));
    case COMPLETE_TODO:
      return state.map(todo =>
        (todo.id === action.id ? Object.assign({}, todo, { completed: !todo.completed }) : todo));
    case COMPLETE_ALL: {
      const areAllCompleted = state.every(todo => todo.completed);
      return state.map(todo => Object.assign({}, todo, { completed: !areAllCompleted }));
    }
    case CLEAR_COMPLETED:
      return state.filter(todo => !todo.completed);
    default :
      return state;
  }
}

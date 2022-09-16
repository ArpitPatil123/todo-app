import { actions } from "./todoActions";

const todoReducer = (state, action) => {
  switch (action.type) {
    case actions.ADD:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case actions.TOGGLE:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, complete: !todo.complete }
            : todo
        ),
      };

    case actions.DELETE:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    case actions.REFRESH:
      return {
        ...state,
        todos: action.payload,
      };

    default:
      return state;
  }
};

export default todoReducer;

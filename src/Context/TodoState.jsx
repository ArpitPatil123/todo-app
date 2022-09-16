import Context from "./todo-context";
import { useReducer } from "react";
import todoReducer from "./reducer";

const TodoState = ({ children }) => {
  const initialState = {
    todos: [], // { id: 123, text: "" , complete: false }
  };

  const [{ todos }, dispatch] = useReducer(todoReducer, initialState);

  //add todo
  const addTodo = (todo) => {
    dispatch({
      type: "ADD_TODO",
      payload: todo,
    });
  };

  //toggle todo
  const toggleTodo = (todoId) => {
    dispatch({
      type: "TOGGLE_TODO",
      payload: todoId,
    });
  };

  //delete todo
  const deleteTodo = (todoId) => {
    dispatch({
      type: "DELETE_TODO",
      payload: todoId,
    });
  };

  // refresh todo

  const refreshTodo = (todos) => {
    dispatch({
      type: "REFRESH_TODO",
      payload: todos,
    });
  };

  return (
    <Context.Provider
      value={{
        todos: todos,
        addTodo,
        toggleTodo,
        deleteTodo,
        refreshTodo,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default TodoState;

import React, { useContext, useState, useEffect } from "react";
import todoContext from "./Context/todo-context";

const todoItems = () => {
  const item = localStorage.getItem("todos");

  if (item) {
    return JSON.parse(localStorage.getItem("todos"));
  } else {
    return [];
  }
};

function TodoList() {
  const [todoItem] = useState(todoItems());

  const { todos, toggleTodo, deleteTodo, refreshTodo } =
    useContext(todoContext);

  useEffect(() => {
    refreshTodo(todoItem);
    console.log("Use State has ", todoItem);
  }, [todoItem]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="todo_list">
      <h1>Tasks</h1>
      {todos.map((todo) => (
        <div className="lists" key={todo.id}>
          <p>{todo.text}</p>
          <div className="actions">
            <button onClick={() => toggleTodo(todo.id)}>Toggle</button>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoList;

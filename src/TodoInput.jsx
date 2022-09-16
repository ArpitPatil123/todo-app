import { useContext, useEffect, useState } from "react";
import todoContext from "./Context/todo-context";

function TodoInput() {
  const [input, setInput] = useState("");
  const { addTodo, todos } = useContext(todoContext);

  const onChangeHandler = (e) => {
    setInput(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    addTodo({
      id: Math.random(),
      text: input,
      complete: false,
    });
    setInput("");
  };

  useEffect(() => {
    console.log("This is todo list", todos);
  }, [todos]);

  return (
    <div className="todo_input">
      <input
        type="text"
        placeholder="Enter Task"
        value={input}
        onChange={onChangeHandler}
      />
      <button onClick={onSubmitHandler}>Add</button>
    </div>
  );
}

export default TodoInput;

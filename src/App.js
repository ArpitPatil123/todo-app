import "./App.css";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function App() {
  return (
    <div className="App">
      <div className="app_todo">
        <h1>useReducer + useContext</h1>
        <TodoInput />
        <TodoList />
      </div>
    </div>
  );
}

export default App;

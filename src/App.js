import { useState } from "react";
import ToDo from "./components/ToDo";
import ToDoForm from "./components/ToDoForm";
import "./style.css";

function App() {
  const [todos, setTodos] = useState([]);

  const addTask = (input) => {
    if (input) {
      const newItem = {
        id: Math.random().toString(36).substr(2, 9),
        task: input,
        complete: false,
      };
      setTodos([...todos, newItem]);
    }
  };

  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };

  const handleToggle = (id) => {
    setTodos([
      ...todos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : { ...todo }
      ),
    ]);
  };

  return (
    <div className="App">
      <div className="Body">
        <header>
          <h1>ToDo Lists: {todos.length}</h1>
        </header>
        <ToDoForm addTask={addTask} />
        <div className="container">
          {todos.map((todo) => {
            return (
              <ToDo
                todo={todo}
                key={todo.id}
                toggleTask={handleToggle}
                removeTask={removeTask}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;

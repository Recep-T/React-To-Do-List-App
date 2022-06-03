import React, { useState } from "react";
import ToDoItem from "./components/ToDoItem";
import "./styles.css";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChange = (event) => {
    const newValue = event.target.value;
    setInput(newValue);
    console.log(newValue);
  };
  const addTodoItem = () => {
    setTodos((prevTodos) => {
      console.log(input, "added");
      return [...prevTodos, input];
    });
    setInput("");
    console.log(todos);
  };
  const removeItem = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((item, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" value={input} onChange={handleChange} />
        <button onClick={addTodoItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {todos.map((todoItem, index) => (
            <ToDoItem
              text={todoItem}
              id={index}
              key={index}
              onChange={removeItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

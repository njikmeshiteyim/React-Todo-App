import React, { useState } from "react";
import "./App.css";
import Header from "./component/Header";
import TodoInput from "./component/TodoInput";
import TodoList from "./component/TodoList";

const App = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState("null");

  return (
    <div className="container">
      <div className="app-wrapper">
      <div>
      <Header />
      </div>
      <div>
      <TodoInput
        input={input}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
        editTodo={editTodo}
        setEditTodo={setEditTodo}
      />
      </div>
      <div>
      <TodoList todos={todos} setTodos={setTodos} setEditTodo={setEditTodo} />
      </div>
      </div>
    </div>
  );
};

export default App;

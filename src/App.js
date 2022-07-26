import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilterredTodos] = useState([]);

  useEffect(() => {
    switch(status){
      case 'completed':
        setFilterredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilterredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilterredTodos(todos);
        break;
    }
  }, [todos,status]);

  return (
    <div className="App">
      <header>
        <h1>Yeswanth's Todo List App</h1>
      </header>
      <Form 
      todos={todos} 
      setTodos={setTodos}
      inputText = {inputText} 
      setInputText={setInputText}
      setStatus={setStatus}/>
      <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos}/>
    </div>
  );
}

export default App;

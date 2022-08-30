import "./../styles/App.css";
import React, { useState, useEffect, useRef } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
  };

  const saveTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  const deleteTodo = id => {
    const deleteArr = [...todos].filter(todo => todo.id !== id);

    setTodos(deleteArr);
  };

  const completeTodo = id => {
    let savedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(savedTodos);
  };

  return (
    <>
	<div className="main">
		
      <h1>Todo List</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
        saveTodo={saveTodo}
      />
	</div>
	</>
  );
}

export default App;
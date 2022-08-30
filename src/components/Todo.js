import React, { useState } from 'react';
import TodoForm from './TodoForm';

const Todo = ({ todos, completeTodo, deleteTodo, saveTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitSave = value => {
    saveTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitSave} />;
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <center>
      <div className='icons'>
        <span>
        <h5> &nbsp; <button
          onClick={() => deleteTodo(todo.id)}
          className='delete-icon'
        >Delete</button></h5>
        <h5> &nbsp; <button
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className='edit-icon'
          >Edit</button></h5>
    </span>
       
      </div>
      </center>
    </div>
  ));
};

export default Todo;
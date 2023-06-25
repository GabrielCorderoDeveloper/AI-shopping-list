import React from 'react';
import './TasksContainer.css';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { BsTrash } from "react-icons/bs";

const Todo = ({ todo, toggleTodo }) => {
  function handleTodoClick() {
    toggleTodo(todo.id);
  }

  return (
    <div className='todo-item'>
      <label>
        <input
          className='check'
          type='checkbox'
          checked={todo.complete}
          onChange={handleTodoClick}
        />
        <span className='todo-text'>{todo.name}</span>
      </label>
      <hr className='todo-hr'/>
    </div>
  );
};

const TaskList = ({ todos, toggleTodo }) => {
  return todos.map(todo => {
    return <Todo key={todo.id} toggleTodo={toggleTodo} todo={todo} />;
  });
};

const TaskCounter = ({ todos }) => {
  let totalTasks = todos.length;
  let completedTasks = todos.filter(todo => todo.complete).length;
  let now = Math.floor((completedTasks / totalTasks) * 100);
  if (!completedTasks) now = 0;

  return (
    <ProgressBar
      variant='mainColor'
      style={{ height: '15px' }}
      now={now}
      label={`${completedTasks}/${totalTasks}`}
      valuemin={0}
      valuemax={100}
      className='my-4 progress-bar-inside'
    />
  );
};

const Buttons = ({ clearTodos, saveList, recipe, todos }) => {
  return (
    <div className='mt-5 mb-4 d-flex justify-content-between'>
      <div className='ms-3 remove' onClick={clearTodos}>
        <BsTrash size="25px" />
      </div>

      <button className={`me-3 save-button btn btn-${todos.length > 0 && recipe.length < 4  ? "mainColor" : "gray non" }`} onClick={saveList}>
        Save this list
      </button>
    </div>
  );
};

//2? Tasks container ----------------------------------------------->
const TasksContainer = ({ todos, toggleTodo, clearTodos, saveList, recipe }) => {
  return (
    <div className='task-container mt-2 mb-md-5 mb-4'>
      <div className='task-counter'>
        <TaskCounter todos={todos}/> 
      </div>

      <TaskList todos={todos} toggleTodo={toggleTodo} />
      <Buttons todos={todos} clearTodos={clearTodos} saveList={saveList} recipe={recipe}/>
    </div>
  );
};

export default TasksContainer;
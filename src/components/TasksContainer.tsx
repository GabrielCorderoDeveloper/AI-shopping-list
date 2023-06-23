import React from 'react';
import './TasksContainer.css';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { BsTrash } from "react-icons/bs";

const Todo = ({ todo, toggleTodo }) => {
  function handleTodoClick() {
    toggleTodo(todo.id);
  }

  // Los elementos de la tarea se renderizarán
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

  // La barra de progreso mostrará cuántas tareas has completado
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

// Este es el botón para eliminar las tareas marcadas
const Buttons = ({ clearTodos }) => {
  return (
    <div className='mt-5 mb-4 d-flex justify-content-between'>
      <div className='ms-3 remove' onClick={clearTodos}>
        <BsTrash size="25px" />
      </div>

      <button className='me-3 save-button' onClick={clearTodos}>
        Save this list
      </button>
    </div>
  );
};

//2? Este es el componente del contenedor de tareas ----------------------------------------------->
const TasksContainer = ({ todos, toggleTodo, clearTodos }) => {
  return (
    <div className='task-container mb-md-5 mb-4'>
      <div className='task-counter'>
        <TaskCounter todos={todos}/> 
      </div>

      <TaskList todos={todos} toggleTodo={toggleTodo} />
      <Buttons clearTodos={clearTodos} />
    </div>
  );
};

export default TasksContainer;
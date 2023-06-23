import React from 'react';
import './TasksContainer.css';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { GrFormClose } from "react-icons/gr";

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
      variant='success'
      style={{ height: '30px' }}
      now={now}
      label={`${completedTasks} of ${totalTasks} tasks completed`}
      valuemin={0}
      valuemax={100}
      className='my-2 col-md-7'
    />
  );
};

// Este es el botón para eliminar las tareas marcadas
const RemoveChecked = ({ clearTodos }) => {
  return (
    <button className='btn btn-outline-success mt-md-0 mt-2' onClick={clearTodos}>
      Remove checked<GrFormClose size="25px" className='icon-fix' />
    </button>
  );
};

//2? Este es el componente del contenedor de tareas ----------------------------------------------->
const TasksContainer = ({ todos, toggleTodo, clearTodos }) => {
  return (
    <div className='task-container mb-md-5 mb-4'>
      <TaskCounter todos={todos}/> 
      <TaskList todos={todos} toggleTodo={toggleTodo} />
      <RemoveChecked clearTodos={clearTodos} />
    </div>
  );
};

export default TasksContainer;
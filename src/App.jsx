import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Animation from './components/Animation';
import Footer from './components/Footer';
import ChatContainer from './components/ChatContainer';
import AppNavbar from './components/AppNavbar';
import { useState, useEffect } from 'react';
import Instructions from './components/instructions';
import TasksContainer from './components/TasksContainer';
import SavedContainer from './components/SavedContainer';
import RecipeContainer from './components/RecipeContainer';

function App() {
  const [showComponent, setShowComponent] = useState(true);
  const [animation, setAnimation] = useState(false);
  const [recipeAnimation, setRecipeAnimation] = useState(false);

  const [todos, setTodos] = useState([{
    id: 1, name: 'Follow Gabriel_coder47 on instagram', complete: false
  },
  {
    id: 2, name: 'Follow Gabriel_coder47 on instagram', complete: false
  }]);

  function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete =! todo.complete
    setTodos(newTodos)
  }

  //It will erase the todos that are completed
  function clearTodos() {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }

    // After 2.5S the animation component will not be showed
    useEffect(() => {
      setTimeout(() => {
        setShowComponent(false);
      }, 2600);
  }, []);

  const handleSendChat = () => {
  };

  return (
    <>
      <AppNavbar/>
        {/* {showComponent && <Animation />} */}

      <div className='main-container'>
        <ChatContainer onSendChat={handleSendChat} animation={animation}/>
        <Instructions/>

        <TasksContainer todos={todos} toggleTodo={toggleTodo} clearTodos={clearTodos}/>
        <SavedContainer/>
        <RecipeContainer recipeAnimation={recipeAnimation}/>

        <div className='bottom-spacing'></div>
      </div>

        <Footer />
    </>
  )
}

export default App

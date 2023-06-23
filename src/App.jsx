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

        <TasksContainer/>
        <SavedContainer/>
        <RecipeContainer recipeAnimation={recipeAnimation}/>

        <div className='bottom-spacing'></div>
      </div>

        <Footer />
    </>
  )
}

export default App

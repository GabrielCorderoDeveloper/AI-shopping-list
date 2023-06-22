import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Animation from './components/Animation';
import Footer from './components/Footer';
import { useState, useEffect } from 'react';
import AppNavbar from './components/AppNavbar';


function App() {
  const [showComponent, setShowComponent] = useState(true);

    // After 2.5S the animation component will not be showed
    useEffect(() => {
      setTimeout(() => {
        setShowComponent(false);
      }, 2600);
  }, []);

  // ps-md-5 pe-md-5 pt-md-5
  return (
    <>
      <AppNavbar/>
      <div className='main-container '>
        {showComponent && <Animation />}

        <div className='chat-container'></div>
        <div className='tasks-container'></div>
        <div className='saved-container'></div>
        <div className='recipe-container'></div>

        <Footer />
      </div>
    </>
  )
}

export default App

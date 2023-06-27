import './App.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/main.min.css'; //Custom version of BootStrap
import Animation from './components/Animation';
import Footer from './components/Footer';
import ChatContainer from './components/ChatContainer';
import AppNavbar from './components/AppNavbar';
import { useState, useEffect } from 'react';
import Instructions from './components/instructions';
import TasksContainer from './components/TasksContainer';
import SavedContainer from './components/SavedContainer';
import RecipeContainer from './components/RecipeContainer';
const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;

function App() {
  const [showComponent, setShowComponent] = useState(true);
  const [animation, setAnimation] = useState(false);
  const [recipeAnimation, setRecipeAnimation] = useState(false);
  const [recipeText, setRecipeText] = useState('');
  const [recipe, setRecipe] = useState([]);

  const [todos, setTodos] = useState([{
    id: 1, name: 'Project created by Gabriel Cordero', complete: false
  },]);

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

  function saveList() {
    if (!todos.length > 0 || recipe.length > 3) return;

    const newRecipe = {
      "number": recipe.length + 1,
      "name": `Recipe ${recipe.length + 1}`,
      "list": todos,
      "recipe": recipeText
    }
    setRecipe([...recipe, newRecipe])
  }

//  2? Saving and loading recipes --------------------------------------------->
  useEffect(() => {
    const detect = localStorage.getItem('aishoppinglist.recipe')
    if (detect) {
      const storedRecipe = JSON.parse(localStorage.getItem('aishoppinglist.recipe') || [] );
    if (storedRecipe) setRecipe(storedRecipe)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('aishoppinglist.recipe', JSON.stringify(recipe))
  }, [recipe])

    // After 2.5S the animation component will not be showed
    useEffect(() => {
      setTimeout(() => {
        setShowComponent(false);
      }, 2600);
  }, []);

  async function handleSendChat(inputValue) {
    if(animation == true || inputValue.length == 0) return;
    setAnimation(true)
    await tasksGpt(inputValue);
  };

  async function tasksGpt(inputValue) {
    const systemMessage = {
      role: 'system',
      content: `
      You are a machine that only has onw way of comunication with the world and that is through javascript objects that contain id, name, and complete, which will be false.
      You can't speak human language and you have zero knoledge of undertanding of it You will receive the name of a recipe, and you will provide all the ingredients needed in the form of Javascript objects. example: [
        { "id": 1, "name": "Bread", "complete": false },
        { "id": 2, "name": "Butter", "complete": false },
        { "id": 3, "name": "Cheese", "complete": false },
        { "id": 4, "name": "Ham", "complete": false },
        { "id": 5, "name": "Lettuce", "complete": false },
        { "id": 6, "name": "Tomato", "complete": false }
      ]
      The message you will provide me will be inserted in a JS variable and the code will crash unless you only and exclusively provide the inside of a javascript object.
      `
    }
    let apiMessage = { role: 'user', content: `The message you will provide me will be inserted in a JS variable and the code will crash unless you only and exclusively provide me with the inside of a javascript object containing the ingredients of: ${inputValue}.
    example [
      { "id": 1, "name": "Bread", "complete": false },
      { "id": 2, "name": "Butter", "complete": false },
      { "id": 3, "name": "Cheese", "complete": false },
      { "id": 4, "name": "Ham", "complete": false },
      { "id": 5, "name": "Lettuce", "complete": false },
      { "id": 6, "name": "Tomato", "complete": false }
    ]`};
    const apiRequestBody = {
      'model': 'gpt-3.5-turbo',
      'messages': [
        systemMessage,  apiMessage,
      ]
    }
  await fetch('https://api.openai.com/v1/chat/completions', {
  method: "POST",
  headers: {
    "Authorization": "Bearer " + API_KEY,
    "Content-Type": "application/json"
  },
  body: JSON.stringify(apiRequestBody)
  })
  .then((data) => {
    return data.json();
  })
  .then((data) => {
    setAnimation(false);

    const cleanResult = extractIngredients(data.choices[0].message.content)

    setTodos(cleanResult) //! <----------------------
    recipeGpt(cleanResult)
  })
  .catch((error) => {
    // if it gets an error
    setAnimation(true)
    tasksGpt(inputValue);
    console.log(error);
  });
}
function extractIngredients(input) {
  const startIndex = input.indexOf('[');
  const endIndex = input.lastIndexOf(']');
  const extractedString = input.slice(startIndex, endIndex + 1);
  return JSON.parse(extractedString);
}


async function recipeGpt(inputValue) {
  setRecipeAnimation(true)

  function getNames(array) {
    return array.map(obj => obj.name).join(', ');
  }
  const namesString = getNames(inputValue);

  const systemMessage = {
    role: 'system',
    content: `Act like you are a professional chef with huge expertise in recipes. You will be provided with ingredients and you will give me a step by step recipe. `
  }

  let apiMessage = { role: 'user', content: `ingresients: ${namesString}`};

  const apiRequestBody = {
    'model': 'gpt-3.5-turbo',
    'messages': [
      systemMessage,  apiMessage,
    ]
  }

await fetch('https://api.openai.com/v1/chat/completions', {
method: "POST",
headers: {
  "Authorization": "Bearer " + API_KEY,
  "Content-Type": "application/json"
},
body: JSON.stringify(apiRequestBody)
})
.then((data) => {
  return data.json();
})
.then((data) => {
  setRecipeAnimation(false)

  const cleanResult = data.choices[0].message.content;
  setRecipeText(`${cleanResult}`) //! <----------------------
})
.catch((error) => {
  // if it gets an error
  recipeGpt(cleanResult)
  console.log(error);
});
}

  return (
    <>
      <AppNavbar/>
        {showComponent && <Animation />}

      <div className='main-container'>
        <ChatContainer onSendChat={handleSendChat} animation={animation}/>
        <Instructions/>

        <TasksContainer todos={todos} toggleTodo={toggleTodo} clearTodos={clearTodos} saveList={saveList} recipe={recipe}/>
        <SavedContainer recipe={recipe} setRecipe={setRecipe} setTodos={setTodos} setRecipeText={setRecipeText}/>
        <RecipeContainer recipeAnimation={recipeAnimation} recipeText={recipeText}/>

        <div className='bottom-spacing'></div>
      </div>

        <Footer />
    </>
  )
};

export default App

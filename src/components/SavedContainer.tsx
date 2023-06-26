import React from 'react'
import { useState, useEffect } from 'react';
import './SavedContainer.css';
import RecipeModal from './RecipeModal';

const SavedContainer = ({recipe, setRecipe, setTodos, setRecipeText}) => {
  const [selectedRecipe, setSelectedRecipe] = useState(-1);
        //1! RecipeModal
        const [showContact, setShowContact] = useState(false);
        const handleShowContact = () => setShowContact(true);
        const handleCloseContact = () => setShowContact(false);

        function setSelected(index){
          setSelectedRecipe(index)
          handleShowContact()
        }

  return (
    <div className='saved-container mt-4 mb-3'>
      {recipe.length > 0 
      ? 
      <div className='saved-item-container'>
        {recipe.map((recipeItem, index) => (
          <div className='save-animation' key={recipeItem.number} onClick={() => setSelected(index)} >
            <div className={`saved-item ${recipeItem.number == 2 || recipeItem.number == 4 ? "bg-coolOrange" : 'bg-lightBlack'} `}>
              <div>{recipeItem.number}</div>
            </div>
            <p>{recipeItem.name}</p>
          </div>
        ))}
        <RecipeModal recipe={recipe} showContact={showContact} handleCloseContact={handleCloseContact} selectedRecipe={selectedRecipe} setRecipe={setRecipe} setTodos={setTodos} setRecipeText={setRecipeText}/>
      </div>
      :
      <p className='empty-p'>Your saved recipes will appear here.</p>}
    </div>
  )
}

export default SavedContainer

import React from 'react'
import { useState, useEffect } from 'react';
import './SavedContainer.css';

const SavedContainer = ({recipe, setRecipe}) => {
  const [selectedRecipe, setSelectedRecipe] = useState(-1);

  return (
    <div className='saved-container mt-4 mb-3'>
      {recipe.length > 0 
      ? 
      <div className='saved-item-container'>
        {recipe.map((recipeItem) => (
          <div  key={recipeItem.number}>
            <div className={`saved-item ${recipeItem.number == 2 || recipeItem.number == 4 ? "bg-coolOrange" : 'bg-lightBlack'} `}>
              <div>{recipeItem.number}</div>
            </div>
            <p>{recipeItem.name}</p>
          </div>
        ))}
      </div>
      :
      <p className='empty-p'>Your saved recipes will appear here.</p>}
    </div>
  )
}

export default SavedContainer

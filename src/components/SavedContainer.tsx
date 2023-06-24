import React from 'react'
import { useState, useEffect } from 'react';
import './SavedContainer.css';

const SavedContainer = ({recipe, setRecipe}) => {
  const [selectedRecipe, setSelectedRecipe] = useState(-1);
  

  return (
    <div className='saved-container mt-5 mb-4'>
      {selectedRecipe > -1 
      ? 
      ''
      :
      <p className='empty-p'>Your saved recipes will appear here.</p>}
    </div>
  )
}

export default SavedContainer

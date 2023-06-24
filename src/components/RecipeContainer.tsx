import React from 'react'
import './RecipeContainer.css';

const RecipeContainer = ({ recipeAnimation, recipeText }) => {
  return (
    <>
        {/* Loading */}
        <div className={`d-flex loading-r-animation ${recipeAnimation ? 'animate' : 'opacity-0'}`}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div className='recipe-container mt-1 mb-5'>
        <p className='text-center mt-2 mb-4'>Recipe</p>
        <hr />

            <p className='mt-2 pb-2 body-p'>{recipeText}</p>
        </div>
    </>
  )
}

export default RecipeContainer

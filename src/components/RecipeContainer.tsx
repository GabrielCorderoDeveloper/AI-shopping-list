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
        <div className='recipe-container mb-5'>
        <p className='text-center mt-2 mb-4'>Recipe</p>
        <hr />
            <p className='mt-3 pb-3 body-p'>{recipeText}</p>
        </div>
    </>
  )
}

export default RecipeContainer

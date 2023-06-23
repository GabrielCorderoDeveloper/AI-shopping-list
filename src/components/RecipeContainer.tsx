import React from 'react'
import './RecipeContainer.css';

const RecipeContainer = ({ recipeAnimation }) => {
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

            <p className='mt-2 pb-2 body-p'>Certainly! Here's a step-by-step recipe for a sandwich using bread, cheddar cheese, and jam:
            Toast two slices of bread. 
            Spread jam on one slice of bread.
            Layer cheddar cheese on top of the jam.
            Place the other slice of bread on top.
            Enjoy your delicious cheddar cheese and jam sandwich!
            Please note that the order of the instructions is important to create the sandwich correctly. Enjoy your meal!</p>
        </div>
    </>
  )
}

export default RecipeContainer

import React from 'react'
import { IoClose } from 'react-icons/io5';
import { MdLightbulb } from 'react-icons/md';
import './instructions.css';

const Instructions = () => {
    function deleting() {
        const element = document.querySelector('.info-container');
        element?.classList.add('hidden');
    }
  return (
    <div className='info-container'>
      <MdLightbulb/>
      <IoClose className='delete' onClick={deleting}/>
      <p>Type the recipe you want to make and the AI will give you the list of all the ingredients you need.</p>
    </div>
  )
}

export default Instructions

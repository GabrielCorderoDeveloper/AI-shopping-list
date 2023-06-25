import React, { useState, useEffect } from 'react';
import { IoClose } from 'react-icons/io5';
import { MdLightbulb } from 'react-icons/md';
import { Typewriter } from 'react-simple-typewriter';
import './instructions.css';

const Instructions = () => {
  const [showParagraph, setShowParagraph] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowParagraph(true);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  function deleting() {
    const element = document.querySelector('.info-container');
    element?.classList.add('hidden');
  }

  return (
    <div className='info-container'>
      <MdLightbulb />
      <IoClose className='delete' onClick={deleting} />
      {showParagraph && (
        <p>
          <Typewriter
            words={[
              `Type the recipe you want to make and the AI will give you the list of all the ingredients you need.`,
            ]}
            typeSpeed={30}
            deleteSpeed={999999999}
          />
        </p>
      )}
    </div>
  );
};

export default Instructions;

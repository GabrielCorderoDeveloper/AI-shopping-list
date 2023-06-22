import React, { useState } from 'react'
import './ChatContainer.css';
import { BsFillSendFill } from 'react-icons/bs';


const ChatContainer = ({ onSendChat, animation}) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }

  const handleInputKeyDown = (event: { keyCode: number; }) => {
    if (event.keyCode == 13 ) { //13 is the code for Enter
      sendChat();
    }
  };

  const sendChat = () => {
    if (animation == false) {
      onSendChat(inputValue); 
      setInputValue('');
    }
  };
  return (
     <div className='c-container'>
        <div className={`chat-input d-flex justify-content-center ${animation ? 'null' : 'svg-hover'}`}>
        <input
          type="text"
          className="text-white"
          placeholder={"Send a message."}
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
        />
        <BsFillSendFill onClick={sendChat}/>
      </div>

       {/* Loading */}
       <div className={`d-flex loading-animation ${animation ? 'animate' : 'opacity-0'}`}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
     </div>
  )
}

export default ChatContainer

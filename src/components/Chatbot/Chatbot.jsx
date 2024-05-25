import React, { useState, useEffect, useRef, useContext } from 'react';
import chatboxIcon from '../../assets/images/chatbox-icon.svg';
import './chatbot.css';
import { AuthContext } from '../../context/AuthContext';
import { ChatHistoryContext } from '../../context/ChatHistoryContext';
import axios from 'axios';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [messages, setMessages] = useState([]);
  const inputRef = useRef(null);
  const chatboxRef = useRef(null);
  const { user } = useContext(AuthContext);
  const { messages, dispatch } = useContext(ChatHistoryContext); // Use ChatHistoryContext
  const userName = user?.data?.name || "User";

  
  const toggleChatbox = () => {
    setIsOpen(!isOpen);
  };

  const onSendButton = async () => {
    const textField = inputRef.current;
    const text1 = textField.value.trim();
    if (text1 === "") {
      return;
    }

    const msg1 = { name: userName, message: text1 };
    dispatch({ type: 'ADD_MESSAGE', payload: msg1 });
    // setMessages(prevMessages => [...prevMessages, msg1]);

    try {
      const response = await axios.post('http://127.0.0.1:5000/predict', { message: text1 }, { headers: { 'Content-Type': 'application/json' } });
      const msg2 = { name: "T3GTeam", message: response.data.answer };
      // setMessages(prevMessages => [...prevMessages, msg2]);
      dispatch({ type: 'ADD_MESSAGE', payload: msg1 });
      textField.value = '';
    } catch (error) {
      console.error('Error:', error);
      textField.value = '';
    }
  };

  useEffect(() => {
    const handleKeyUp = (event) => {
      if (event.key === "Enter") {
        onSendButton();
      }
    };

    const node = inputRef.current;
    if (node) {
      node.addEventListener("keyup", handleKeyUp);
    }

    return () => {
      if (node) {
        node.removeEventListener("keyup", handleKeyUp);
      }
    };
  }, []);

  return (
    <section className="chatbot container">
      <div className={`chatbox ${isOpen ? 'chatbox--active' : ''}`} ref={chatboxRef}>
        <div className="chatbox__support">
          <div className="chatbox__header">
            <div className="chatbox__image--header w-12 h-12">
              <img className='rounded-full'
                src='https://avatars.githubusercontent.com/u/157898914?s=400&u=7b007f0a226c5ab828e05f6f8a3c184585b7c1a8&v=4' 
                alt="User"
              />
            </div>
            <div className="chatbox__content--header">
              <h4 className="chatbox__heading--header">Chat support</h4>
              <p className="chatbox__description--header">Hi. My name is T3GTeam. How can I help you?</p>
            </div>
          </div>
          <div className="chatbox__messages">
            {messages.slice().reverse().map((item, index) => (
              <div key={index} className={`messages__item messages__item--${item.name === 'T3GTeam' ? 'visitor' : 'operator'}`}>
                {item.message}
              </div>
            ))}
          </div>
          <div className="chatbox__footer">
            <input type="text" placeholder="Write a message..." ref={inputRef} />
            <button className="chatbox__send--footer send__button" onClick={onSendButton}>Send</button>
          </div>
        </div>
        <div className="chatbox__button">
          <button onClick={toggleChatbox}>
            <img 
              src={chatboxIcon}
              alt="Chatbox Icon"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Chatbot;

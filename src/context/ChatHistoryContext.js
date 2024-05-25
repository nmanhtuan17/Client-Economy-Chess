import React, { createContext, useReducer, useEffect } from 'react';

// Khởi tạo giá trị ban đầu từ localStorage
const initial_state = {
  messages: localStorage.getItem('chatHistory')
    ? JSON.parse(localStorage.getItem('chatHistory'))
    : [],
  loading: false,
  error: null,
};

// Tạo ChatHistoryContext
export const ChatHistoryContext = createContext(initial_state);

// Tạo reducer để quản lý các hành động
const ChatHistoryReducer = (state, action) => {
  switch (action.type) {
    case 'SET_MESSAGES':
      return { ...state, messages: action.payload };
    case 'ADD_MESSAGE':
      return { ...state, messages: [...state.messages, action.payload] };
    default:
      return state;
  }
};

// Tạo ChatHistoryProvider
export const ChatHistoryProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ChatHistoryReducer, initial_state);

  useEffect(() => {
    localStorage.setItem('chatHistory', JSON.stringify(state.messages));
  }, [state.messages]);

  return (
    <ChatHistoryContext.Provider
      value={{
        messages: state.messages,
        dispatch,
      }}
    >
      {children}
    </ChatHistoryContext.Provider>
  );
};

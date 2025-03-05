// src/context/ChatContext.js
import React, { createContext, useReducer, useContext } from 'react';

// Initial state
const initialState = {
  conversations: [],
  isLoading: false,
  error: null,
  activeConversationId: null
};

// Reducer function
function chatReducer(state, action) {
  switch (action.type) {
    case 'FETCH_CONVERSATIONS_START':
      return { ...state, isLoading: true };
    
    case 'FETCH_CONVERSATIONS_SUCCESS':
      return { 
        ...state, 
        conversations: action.payload, 
        isLoading: false 
      };
    
    case 'FETCH_CONVERSATIONS_ERROR':
      return { 
        ...state, 
        error: action.payload, 
        isLoading: false 
      };
    
    case 'SET_ACTIVE_CONVERSATION':
      return { 
        ...state, 
        activeConversationId: action.payload 
      };
    
    case 'ADD_MESSAGE':
      return {
        ...state,
        conversations: state.conversations.map(conv => 
          conv.id === action.payload.conversationId 
            ? { 
                ...conv, 
                messages: [...conv.messages, action.payload.message],
                unreadCount: conv.unreadCount + 1
              } 
            : conv
        )
      };
    
    default:
      return state;
  }
}

// Create context
const ChatContext = createContext();

// Provider component
export const ChatProvider = ({ children }) => {
  const [state, dispatch] = useReducer(chatReducer, initialState);

  return (
    <ChatContext.Provider value={{ state, dispatch }}>
      {children}
    </ChatContext.Provider>
  );
};

// Custom hook for using chat context
export const useChatContext = () => {
  const context = useContext(ChatContext);
  
  if (!context) {
    throw new Error('useChatContext must be used within a ChatProvider');
  }
  
  return context;
};

// Action creators for easier dispatch
export const chatActions = {
  fetchConversationsStart: () => ({ type: 'FETCH_CONVERSATIONS_START' }),
  fetchConversationsSuccess: (conversations) => ({
    type: 'FETCH_CONVERSATIONS_SUCCESS',
    payload: conversations
  }),
  fetchConversationsError: (error) => ({
    type: 'FETCH_CONVERSATIONS_ERROR',
    payload: error
  }),
  setActiveConversation: (conversationId) => ({
    type: 'SET_ACTIVE_CONVERSATION',
    payload: conversationId
  }),
  addMessage: (conversationId, message) => ({
    type: 'ADD_MESSAGE',
    payload: { conversationId, message }
  })
};
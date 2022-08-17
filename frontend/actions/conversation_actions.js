import { createConversation } from "../util/conversation_util"

export const RECEIVE_CONVERSATIONS = "RECEIVE_ALL_CONVERSATIONS"
export const RECEIVE_CONVERSATION = "RECEIVE_CONVERSATION" 
export const CLEAR_CONVERSATIONS = "CLEAR_CONVERSATIONS"

export const RECEIVE_CONVERSATION_MESSAGES = "RECEIVE_CONVERSATION_MESSAGES"
export const RECEIVE_CONVERSATION_MESSAGE = "RECEIVE_CONVERSATION_MESSAGE"
export const CLEAR_CONVERSATION_MESSAGE = "CLEAR_CONVERSATION_MESSAGE"
export const CLEAR_CONVERSATION_MESSAGES = "CLEAR_CONVERSATION_MESSAGES"

export const receiveConversations = (conversations) => {
  return {
    type: RECEIVE_CONVERSATIONS,
    conversations
  }
}

export const receiveConversation = (conversation) => {
  return {
    type: RECEIVE_CONVERSATION, 
    conversation 
  }
}

export const receiveConversationMessages = (messages) => {
  return {
    type: RECEIVE_CONVERSATION_MESSAGES,
    messages
  }
}

export const receiveConversationMessage = (message) => {
  return {
    type: RECEIVE_CONVERSATION_MESSAGE,
    message 
  }
}

export const clearConversations = () => {
  return {
    type: CLEAR_CONVERSATIONS
  }
}

export const clearConversationMessages = () => {
  return {
    type: CLEAR_CONVERSATION_MESSAGES
  }
}

export const clearConversationMessage = (message) => {
  return {
    type: CLEAR_CONVERSATION_MESSAGE,
    message
  }
} 

export const createNewConversation = (conversation) => (dispatch) => {
  return createConversation(conversation)
    .then(res => dispatch(receiveConversation(res)))
}
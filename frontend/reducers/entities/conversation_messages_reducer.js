import { RECEIVE_CONVERSATION_MESSAGES, CLEAR_CONVERSATION_MESSAGES, RECEIVE_CONVERSATION_MESSAGE, CLEAR_CONVERSATION_MESSAGE } from "../../actions/conversation_actions"
import { LOGOUT_CURRENT_USER } from "../../actions/session_actions"

const conversationMessagesReducer = (state = {}, action) => {
  Object.freeze(state)
  const newState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_CONVERSATION_MESSAGES:
      action.messages.forEach(el => {
        if (!newState[el.conversation_id]) {
          newState[el.conversation_id] = {}
          newState[el.conversation_id] = Object.assign(newState[el.conversation_id], { [el.id]: el })
        } else {
          newState[el.conversation_id] = Object.assign(newState[el.conversation_id], { [el.id]: el }) 
        }
      })
      return newState;
    case RECEIVE_CONVERSATION_MESSAGE:
      if (!newState[action.message.conversation_id]) {
        newState[action.message.conversation_id] = {};
        newState[action.message.conversation_id] = Object.assign(newState[action.message.conversation_id], { [action.message.id]: action.message } )
      } else {
        newState[action.message.conversation_id] = Object.assign(newState[action.message.conversation_id], { [action.message.id]: action.message } )
      }
      return newState;
    case CLEAR_CONVERSATION_MESSAGE: 
      delete newState[action.message.conversation_id][action.message.id]
      return newState
    case CLEAR_CONVERSATION_MESSAGES:
      return {}
    case LOGOUT_CURRENT_USER:
      return {}
    default:
      return state;
  }
}

export default conversationMessagesReducer
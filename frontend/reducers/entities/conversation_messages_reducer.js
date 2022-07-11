import { RECEIVE_CONVERSATION_MESSAGES, CLEAR_CONVERSATION_MESSAGES } from "../../actions/conversation_actions"
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
    case CLEAR_CONVERSATION_MESSAGES:
      return {}
    case LOGOUT_CURRENT_USER:
      return {}
    default:
      return state;
  }
}

export default conversationMessagesReducer
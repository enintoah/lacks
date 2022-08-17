import { RECEIVE_CONVERSATIONS, CLEAR_CONVERSATIONS, RECEIVE_CONVERSATION } from "../../actions/conversation_actions"
import { LOGOUT_CURRENT_USER } from "../../actions/session_actions"

const conversationsReducer = (state = {}, action) => {
  Object.freeze(state)
  const newState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_CONVERSATIONS:
      action.conversations.forEach(el => {
        newState[el.id] = el 
      })
      return newState;
    case RECEIVE_CONVERSATION: 
      newState[action.conversation.id] = action.conversation
      return newState
    case CLEAR_CONVERSATIONS: 
    return {}
    case LOGOUT_CURRENT_USER:
      return {}
    default:
      return state;
  }
}

export default conversationsReducer
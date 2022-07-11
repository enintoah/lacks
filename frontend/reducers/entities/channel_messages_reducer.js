import { RECEIVE_CHANNEL_MESSAGES, CLEAR_CHANNEL_MESSAGES } from "../../actions/channel_actions"
import { LOGOUT_CURRENT_USER } from "../../actions/session_actions"

const channelMessagesReducer = (state = {}, action) => {
  Object.freeze(state)
  const newState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_CHANNEL_MESSAGES:
      action.messages.forEach(el => {
        if (!newState[el.channel_id]) {
          newState[el.channel_id] = {}
          newState[el.channel_id] = Object.assign(newState[el.channel_id], { [el.id]: el })
        } else {
          newState[el.channel_id] = Object.assign(newState[el.channel_id], { [el.id]: el }) 
        }
      })
      return newState;
    case CLEAR_CHANNEL_MESSAGES:
      return {}
    case LOGOUT_CURRENT_USER:
      return {}
    default:
      return state;
  }
}

export default channelMessagesReducer
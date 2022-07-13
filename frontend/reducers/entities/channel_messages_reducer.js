import { RECEIVE_CHANNEL_MESSAGES, CLEAR_CHANNEL_MESSAGES, RECEIVE_CHANNEL_MESSAGE } from "../../actions/channel_actions"
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
    case RECEIVE_CHANNEL_MESSAGE: 
      if (!newState[action.message.channel_id]) {
        newState[action.message.channel_id] = {};
        newState[action.message.channel_id] = Object.assign(newState[action.message.channel_id], { [action.message.id]: action.message } )
      } else {
        newState[action.message.channel_id] = Object.assign(newState[action.message.channel_id], { [action.message.id]: action.message } )
      }
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
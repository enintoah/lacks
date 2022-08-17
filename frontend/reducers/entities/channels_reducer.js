import { RECEIVE_CHANNELS, CLEAR_CHANNELS, RECEIVE_CHANNEL} from "../../actions/channel_actions"
import { LOGOUT_CURRENT_USER } from "../../actions/session_actions"

const channelsReducer = (state = {}, action) => {
  Object.freeze(state)
  const newState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_CHANNELS:
      action.channels.forEach(el => {
        newState[el.id] = el 
      })
      return newState;
    case RECEIVE_CHANNEL: 
      newState[action.channel.id] = action.channel
      return newState
    case CLEAR_CHANNELS:
      return {}
    case LOGOUT_CURRENT_USER:
      return {}
    default:
      return state;
  }
}

export default channelsReducer
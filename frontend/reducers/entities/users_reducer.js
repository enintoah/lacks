import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../../actions/session_actions";

const currentUserReducer = (state = {}, action) => {
  Object.freeze(state)
  const newState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState[action.user.id] = action.user
      return newState;
    case LOGOUT_CURRENT_USER:
      return {}
    default:
      return state;
  }
}

export default currentUserReducer
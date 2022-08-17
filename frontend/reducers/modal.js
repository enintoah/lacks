import { LOGOUT_CURRENT_USER } from "../actions/session_actions";
import { MODAL_ON, MODAL_OFF } from "../actions/modal_actions";

const modalReducer = (state = null, action) => {
  Object.freeze(state);
  switch (action.type) {
    case MODAL_ON:
      return "ON"
    case MODAL_OFF:
      return null
    case LOGOUT_CURRENT_USER:
      return null
    default:
      return state; 
  }
}

export default modalReducer
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_TEXTAREA_MESSAGE, RESET_TEXTAREA_MESSAGE } from "../actions/textarea_actions";

const textareaReducer = (state = {message: {}, type: "create", formType: null}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_TEXTAREA_MESSAGE:
      newState = action.message
      return newState
    case RESET_TEXTAREA_MESSAGE:
      return {message: {}, type: "create", formType: null}
    case LOGOUT_CURRENT_USER:
      return {message: {}, type: "create", formType: null}
    default:
      return state; 
  }
}

export default textareaReducer
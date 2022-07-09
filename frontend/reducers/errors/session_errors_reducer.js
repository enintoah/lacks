import { RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS, CLEAR_SESSION_ERRORS } from "../../actions/session_actions";

const sessionErrorsReducer = (state = {errors: []}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState.errors = [];
      return newState
    case RECEIVE_SESSION_ERRORS:  
      newState.errors = action.errors;
      return newState;
    case CLEAR_SESSION_ERRORS:
        newState.errors = [];
        return newState
    default:
      return state
  }
}

export default sessionErrorsReducer
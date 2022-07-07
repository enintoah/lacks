import { RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS } from "../actions/session_actions";

const sessionErrorsReducer = (state = {errors: []}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState.errors = action.errors;
      return newState;
    case RECEIVE_SESSION_ERRORS:  
      newState.errors = [];
      return newState
    default:
      return state
  }
}

export default sessionErrorsReducer
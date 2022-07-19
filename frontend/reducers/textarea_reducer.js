

const textareaReducer = (state = {id: null}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState.id = action.user.id
      return newState
    case LOGOUT_CURRENT_USER:
      newState.id = null
      return newState
    default:
      return state; 
  }
}

export default textareaReducer
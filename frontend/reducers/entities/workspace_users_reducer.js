import { RECEIVE_WORKSPACE_USERS, CLEAR_WORKSPACE_USERS } from './../../actions/workspace_actions'
import { LOGOUT_CURRENT_USER } from '../../actions/session_actions'

const workspaceUsersReducer = (state = {}, action) => {
  Object.freeze(state)
  const newState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_WORKSPACE_USERS:
      action.users.forEach(user => {
        newState[user.user_id] = user
      })
      return newState;
    case CLEAR_WORKSPACE_USERS:
      return {}
    case LOGOUT_CURRENT_USER:
      return {}
    default:
      return state;
  }
}

export default workspaceUsersReducer
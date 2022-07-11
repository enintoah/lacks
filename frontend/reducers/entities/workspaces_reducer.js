import { RECEIVE_ALL_WORKSPACES } from './../../actions/workspace_actions'
import { LOGOUT_CURRENT_USER } from '../../actions/session_actions'

const workspacesReducer = (state = {}, action) => {
  Object.freeze(state)
  const newState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_ALL_WORKSPACES:
      action.workspaces.forEach(workspace => {
        newState[workspace.id] = workspace
      })
      return newState 
    case LOGOUT_CURRENT_USER:
      return {}
    default:
      return state;
  }
}

export default workspacesReducer
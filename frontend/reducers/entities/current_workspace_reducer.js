import { LOGOUT_CURRENT_USER } from "../../actions/session_actions";
import { RECEIVE_CURRENT_WORKSPACE } from "../../actions/workspace_actions";

const currentWorkspaceReducer = (state = {}, action) => {
  Object.freeze(state)
  const newState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_CURRENT_WORKSPACE:
      newState[action.workspace.id] = action.workspace
      return newState;
    case LOGOUT_CURRENT_USER:
      return {}
    default:
      return state;
  }
}

export default currentWorkspaceReducer
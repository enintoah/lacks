import { connect } from "react-redux";
import Workspace from "./workspace";
import { populateWorkspace, clearWorkspace, requestUserWorkspaces} from "../../actions/workspace_actions";

const matchStateToProps = (state, ownProps) => {
  return {
    usersWorkspaces: Object.keys(state.entities.workspaces),
    currentUser: state.entities.currentUser[state.session.id]
  }
}

const matchDispatchToProps = (dispatch) => {
  return {
    requestUserWorkspaces: (id) => dispatch(requestUserWorkspaces(id)),
    populateWorkspace: (id) => dispatch(populateWorkspace(id)),
    clearWorkspace: () => dispatch(clearWorkspace())
  }
}

export default connect(matchStateToProps, matchDispatchToProps)(Workspace)
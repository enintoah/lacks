import { connect } from "react-redux";
import UserDashboard from "./user_dashboard";
import { logout } from "../../actions/session_actions";
import { requestUserWorkspaces } from "../../actions/workspace_actions";
import { receiveCurrentWorkspace } from "../../actions/workspace_actions";

const matchStateToProps = (state, ownProps) => {
  return {
    currentUser: state.entities.currentUser[state.session.id],
    workspaces: state.entities.workspaces
  }
}

const matchDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    requestUserWorkspaces: (id) => dispatch(requestUserWorkspaces(id)),
  }
}

export default connect(matchStateToProps, matchDispatchToProps)(UserDashboard)
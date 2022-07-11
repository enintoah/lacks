import { connect } from "react-redux";
import Workspace from "./workspace";
import { populateWorkspace, clearErrors } from "../../actions/workspace_actions";

const matchStateToProps = (state, ownProps) => {
  return {
    errors: state.errors.session.errors
  }
}

const matchDispatchToProps = (dispatch) => {
  return {
    populateWorkspace: (id) => dispatch(populateWorkspace(id)),
    clearWorkspace: () => dispatch(clearErrors())
  }
}

export default connect(matchStateToProps, matchDispatchToProps)(Workspace)
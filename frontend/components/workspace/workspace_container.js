import { connect } from "react-redux";
import { login, clearErrors } from "../../actions/session_actions";
import Workspace from "./workspace";

const matchStateToProps = (state, ownProps) => {
  return {
    errors: state.errors.session.errors
  }
}

const matchDispatchToProps = (dispatch) => {
  return {
    processForm: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
  }
}

export default connect(matchStateToProps, matchDispatchToProps)(Workspace)
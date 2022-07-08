import { connect } from "react-redux";
import SessionForm from "./session_form";
import { signup } from "../actions/session_actions";

const matchStateToProps = (state, ownProps) => {
  return {
    formType: "signup",
    errors: state.errors.session.errors
  }
}

const matchDispatchToProps = (dispatch) => {
  return {
    processForm: (user) => dispatch(signup(user))
  }
}

export default connect(matchStateToProps, matchDispatchToProps)(SessionForm)
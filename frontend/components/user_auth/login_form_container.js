import { connect } from "react-redux";
import { login, clearErrors } from "../../actions/session_actions";
import SessionForm from "./session_form";

const matchStateToProps = (state, ownProps) => {
  return {
    formType: "login",
    errors: state.errors.session.errors
  }
}

const matchDispatchToProps = (dispatch) => {
  return {
    processForm: (user) => dispatch(login(user)),
    demoLogin: () => dispatch(login({user: {email: "demo", password: "123456"}})),
    clearErrors: () => dispatch(clearErrors())
  }
}

export default connect(matchStateToProps, matchDispatchToProps)(SessionForm)
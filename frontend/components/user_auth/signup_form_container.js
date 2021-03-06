import { connect } from "react-redux";
import SessionForm from "./session_form";
import { signup, login, clearErrors} from "../../actions/session_actions";

const matchStateToProps = (state, ownProps) => {
  return {
    formType: "signup",
    errors: state.errors.session.errors
  }
}

const matchDispatchToProps = (dispatch) => {
  return {
    processForm: (user) => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors()),
    demoLogin: () => dispatch(login({user: {email: "demo@gmail.com", password: "123456"}}))
  }
}

export default connect(matchStateToProps, matchDispatchToProps)(SessionForm)
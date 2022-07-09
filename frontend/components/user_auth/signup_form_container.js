import { connect } from "react-redux";
import SessionForm from "./session_form";
import { signup, clearErrors} from "../../actions/session_actions";

const matchStateToProps = (state, ownProps) => {
  return {
    formType: "signup",
    errors: state.errors.session.errors
  }
}

const matchDispatchToProps = (dispatch) => {
  return {
    processForm: (user) => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors())
  }
}

export default connect(matchStateToProps, matchDispatchToProps)(SessionForm)
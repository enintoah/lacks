import { connect } from "react-redux";
import { login } from "../../actions/session_actions";
import HomePage from "./homepage";

const matchStateToProps = (state, ownProps) => {
  return {
  }
}

const matchDispatchToProps = (dispatch) => {
  return {
    demoLogin: () => dispatch(login({user: {email: "demo", password: "123456"}})),
  }
}

export default connect(matchStateToProps, matchDispatchToProps)(HomePage)
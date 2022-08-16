import { connect } from "react-redux";
import CreateConversation from "./create_conversation";

const matchStateToProps = (state, ownProps) => {
  return {
    workspaceUsers: state.entities.workspaceUsers
  }
}

const matchDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(matchStateToProps, matchDispatchToProps)(CreateConversation)
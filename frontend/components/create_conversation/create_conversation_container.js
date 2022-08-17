import { connect } from "react-redux";
import CreateConversation from "./create_conversation";
import { populateWorkspace, clearWorkspace, requestUserWorkspaces } from "../../actions/workspace_actions";
import { createNewConversation } from "../../actions/conversation_actions";

const matchStateToProps = (state, ownProps) => {
  return {
    workspaceUsers: state.entities.workspaceUsers,
    currentUser: state.entities.currentUser[state.session.id],
    currentWorkspace: state.entities.workspaces[ownProps.match.params.workspace_id],
    conversations: state.entities.conversations
  }
}

const matchDispatchToProps = (dispatch) => {
  return {
    requestUserWorkspaces: (id) => dispatch(requestUserWorkspaces(id)), 
    populateWorkspace: (id) => dispatch(populateWorkspace(id)), 
    clearWorkspace: () => dispatch(clearWorkspace()),
    createNewConversation: (conversation) => dispatch(createNewConversation(conversation))
  }
}

export default connect(matchStateToProps, matchDispatchToProps)(CreateConversation)
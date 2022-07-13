import { connect } from "react-redux";
import ChatBox from "./chat_box";
import { populateWorkspace, requestUserWorkspaces} from "../../actions/workspace_actions";

const matchStateToProps = (state, ownProps) => {
  return {
    chatBoxType: "conversation", 
    currentUser: state.entities.currentUser[state.session.id],
    currentChat: state.entities.conversations[ownProps.match.params.conversation_id],
    currentMessages: Object.values(state.entities.conversationMessages[ownProps.match.params.conversation_id]),
    currentWorkspace: state.entities.workspaces[ownProps.match.params.workspace_id],
    workspaceUsers: state.entities.workspaceUsers
  }
}

const matchDispatchToProps = (dispatch) => {
  return {
    requestUserWorkspaces: (id) => dispatch(requestUserWorkspaces(id)),
    populateWorkspace: (id) => dispatch(populateWorkspace(id))
  }
}

export default connect(matchStateToProps, matchDispatchToProps)(ChatBox)
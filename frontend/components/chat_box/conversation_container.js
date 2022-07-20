import { connect } from "react-redux";
import ChatBox from "./chat_box";
import { populateWorkspace, requestUserWorkspaces} from "../../actions/workspace_actions";
import { createConversationMessage } from "../../util/conversation_util";
import { receiveTextArea, clearTextArea } from "../../actions/textarea_actions";

const matchStateToProps = (state, ownProps) => {
  return {
    chatBoxType: "conversation", 
    currentUser: state.entities.currentUser[state.session.id],
    currentChat: state.entities.conversations[ownProps.match.params.conversation_id],
    currentMessages: state.entities.conversationMessages[ownProps.match.params.conversation_id],
    workspaceUsers: state.entities.workspaceUsers,
    textarea: state.textarea
  }
}

const matchDispatchToProps = (dispatch) => {
  return {
    requestUserWorkspaces: (id) => dispatch(requestUserWorkspaces(id)),
    populateWorkspace: (id) => dispatch(populateWorkspace(id)), 
    sendMessage: (message) => createConversationMessage(message),
    receiveTextArea: (message) => dispatch(receiveTextArea(message)),
    clearTextArea: () => dispatch(clearTextArea())
  }
}

export default connect(matchStateToProps, matchDispatchToProps)(ChatBox)
import { connect } from "react-redux";
import Workspace from "./workspace";
import { populateWorkspace, clearWorkspace, requestUserWorkspaces} from "../../actions/workspace_actions";
import { receiveChannelMessage } from "../../actions/channel_actions";
import { receiveConversationMessage } from "../../actions/conversation_actions";

const matchStateToProps = (state, ownProps) => {
  return {
    usersWorkspaces: Object.keys(state.entities.workspaces),
    currentUser: state.entities.currentUser[state.session.id],
    currentWorkspace: state.entities.workspaces[ownProps.match.params.workspace_id],
    channels: Object.values(state.entities.channels),
    conversations: Object.values(state.entities.conversations)
  }
}

const matchDispatchToProps = (dispatch) => {
  return {
    requestUserWorkspaces: (id) => dispatch(requestUserWorkspaces(id)),
    populateWorkspace: (id) => dispatch(populateWorkspace(id)),
    clearWorkspace: () => dispatch(clearWorkspace()),
    receiveChannelMessage: (message) => dispatch(receiveChannelMessage(message)),
    receiveConversationMessage: (message) => dispatch(receiveConversationMessage(message))
  }
}

export default connect(matchStateToProps, matchDispatchToProps)(Workspace)
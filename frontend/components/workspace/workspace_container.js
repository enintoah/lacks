import { connect } from "react-redux";
import Workspace from "./workspace";
import { populateWorkspace, clearWorkspace, requestUserWorkspaces} from "../../actions/workspace_actions";
import { receiveChannelMessage, clearChannelMessage } from "../../actions/channel_actions";
import { receiveConversationMessage, clearConversationMessage } from "../../actions/conversation_actions";
import { openModal } from "../../actions/modal_actions";
import { receiveCurrentWorkspace } from "../../actions/workspace_actions";

const matchStateToProps = (state, ownProps) => {
  return {
    usersWorkspaces: Object.keys(state.entities.workspaces),
    currentUser: state.entities.currentUser[state.session.id],
    currentWorkspace: state.entities.workspaces[ownProps.match.params.workspace_id],
    channels: Object.values(state.entities.channels),
    conversations: Object.values(state.entities.conversations),
    firstChannel: Object.keys(state.entities.channels)[0],
  }
}

const matchDispatchToProps = (dispatch) => {
  return {
    requestUserWorkspaces: (id) => dispatch(requestUserWorkspaces(id)),
    populateWorkspace: (id) => dispatch(populateWorkspace(id)),
    clearWorkspace: () => dispatch(clearWorkspace()),
    receiveChannelMessage: (message) => dispatch(receiveChannelMessage(message)),
    receiveConversationMessage: (message) => dispatch(receiveConversationMessage(message)),
    clearChannelMessage: (message) => dispatch(clearChannelMessage(message)),
    clearConversationMessage: (message) => dispatch(clearConversationMessage(message)),
    openModal: () => dispatch(openModal()),
    receiveCurrentWorkspace: (workspace) => dispatch(receiveCurrentWorkspace(workspace)),
  }
}

export default connect(matchStateToProps, matchDispatchToProps)(Workspace)
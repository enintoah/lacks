import { connect } from "react-redux";
import ChatBox from "./chat_box";
import { populateWorkspace, requestUserWorkspaces} from "../../actions/workspace_actions";
import { createChannelMessage } from "../../util/channel_util";
import { receiveTextArea, clearTextArea } from "../../actions/textarea_actions";

const matchStateToProps = (state, ownProps) => {
  return {
    chatBoxType: "channel",
    currentUser: state.entities.currentUser[state.session.id],
    currentChat: state.entities.channels[ownProps.match.params.channel_id],
    currentMessages: state.entities.channelMessages[ownProps.match.params.channel_id],
    workspaceUsers: state.entities.workspaceUsers,
    textarea: state.textarea
  }
}

const matchDispatchToProps = (dispatch) => {
  return {
    requestUserWorkspaces: (id) => dispatch(requestUserWorkspaces(id)),
    populateWorkspace: (id) => dispatch(populateWorkspace(id)),
    sendMessage: (message) => createChannelMessage(message),
    receiveTextArea: (message) => dispatch(receiveTextArea(message)),
    clearTextArea: () => dispatch(clearTextArea())
  }
}

export default connect(matchStateToProps, matchDispatchToProps)(ChatBox)
import { connect } from "react-redux";
import ChatBox from "./chat_box";
import { populateWorkspace, requestUserWorkspaces} from "../../actions/workspace_actions";
import { createChannelMessage } from "../../util/channel_util";

const matchStateToProps = (state, ownProps) => {
  return {
    chatBoxType: "channel",
    currentUser: state.entities.currentUser[state.session.id],
    currentChat: state.entities.channels[ownProps.match.params.channel_id],
    currentMessages: state.entities.channelMessages[ownProps.match.params.channel_id],
    workspaceUsers: state.entities.workspaceUsers
  }
}

const matchDispatchToProps = (dispatch) => {
  return {
    requestUserWorkspaces: (id) => dispatch(requestUserWorkspaces(id)),
    populateWorkspace: (id) => dispatch(populateWorkspace(id)),
    sendMessage: (message) => createChannelMessage(message)
  }
}

export default connect(matchStateToProps, matchDispatchToProps)(ChatBox)
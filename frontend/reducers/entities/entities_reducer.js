import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import workspacesReducer from "./workspaces_reducer";
import conversationsReducer from "./conversations_reducer";
import channelsReducer from "./channels_reducer";
import channelMessagesReducer from "./channel_messages_reducer";
import conversationMessagesReducer from "./conversation_messages_reducer";
import workspaceUsersReducer from "./workspace_users_reducer";

const entitiesReducer = combineReducers({
  currentUser: usersReducer,
  workspaces: workspacesReducer,
  conversations: conversationsReducer,
  channels: channelsReducer,
  channelMessages: channelMessagesReducer,
  conversationMessages: conversationMessagesReducer,
  workspaceUsers: workspaceUsersReducer
})

export default entitiesReducer;
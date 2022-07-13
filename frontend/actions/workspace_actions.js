import { fetchUserWorkspaces, fetchInitialMessages } from "../util/workspaces_util"
import { receiveChannels, receiveChannelMessages, clearChannels, clearChannelMessages } from "./channel_actions"
import { receiveConversations, receiveConversationMessages, clearConversations, clearConversationMessages } from "./conversation_actions"

export const RECEIVE_ALL_WORKSPACES = "RECEIVE_ALL_WORKSPACES"
export const RECEIVE_WORKSPACE_USERS = "RECEIVE_WORKSPACE_USERS"
export const CLEAR_WORKSPACE_USERS = "CLEAR_WORKSPACE_USERS"

const receiveWorkspaces = (workspaces) => {
  return {
    type: RECEIVE_ALL_WORKSPACES,
    workspaces,
  }
}

export const receiveWorkspaceUsers = (users) => {
  return {
    type: RECEIVE_WORKSPACE_USERS,
    users
  }
}

export const clearWorkspaceUsers = () => {
  return {
    type: CLEAR_WORKSPACE_USERS
  }
}

export const requestUserWorkspaces = (id) => (dispatch) => {
  return fetchUserWorkspaces(id).then((workspaces) => dispatch(receiveWorkspaces(workspaces)))
}


export const populateWorkspace = (id) => (dispatch) => {

  return fetchInitialMessages(id)
    .then((res) => {
      dispatch(receiveChannels(res.channels));
      dispatch(receiveConversations(res.conversations));
      dispatch(receiveChannelMessages(res.channel_messages));
      dispatch(receiveConversationMessages(res.conversation_messages));
      dispatch(receiveWorkspaceUsers(res.workspace_users))
    })
}

export const clearWorkspace = () => (dispatch) => {
  dispatch(clearChannelMessages());
  dispatch(clearChannels());
  dispatch(clearConversationMessages());
  dispatch(clearConversations());
  dispatch(clearWorkspaceUsers())
}
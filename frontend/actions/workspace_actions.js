import { fetchUserWorkspaces } from "../util/workspaces_util"

export const RECEIVE_ALL_WORKSPACES = "RECEIVE_ALL_WORKSPACES"

const receiveWorkspaces = (workspaces) => {
  return {
    type: RECEIVE_ALL_WORKSPACES,
    workspaces,
  }
}

export const requestUserWorkspaces = (id) => (dispatch) => {
  return fetchUserWorkspaces(id).then((workspaces) => dispatch(receiveWorkspaces(workspaces)))
}
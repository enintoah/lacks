import * as sessionAPI from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER"
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER"
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS"
export const CLEAR_SESSION_ERRORS = "CLEAR_SESSION_ERRORS"

export const receiveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    user: currentUser
  }
}

export const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER,
  }
}

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors, 
  }
}

export const removeErrors = () => {
  return {
    type: CLEAR_SESSION_ERRORS
  }
}

export const clearErrors = () => (dispatch) => {
  return dispatch(removeErrors())
}

export const login = (user) => (dispatch) => {
  return sessionAPI.login(user)
    .then(user => dispatch(receiveCurrentUser(user)),
    err => (dispatch(receiveErrors(err.responseJSON)))
    )
}

export const logout = () => (dispatch) => {
  return sessionAPI.logout()
    .then(() => dispatch(logoutCurrentUser()))
}

export const signup = (user) => (dispatch) => {
  return sessionAPI.signup(user)
    .then(user => dispatch(receiveCurrentUser(user)),
    err => (dispatch(receiveErrors(err.responseJSON)))
    )
}
import * as sessionAPI from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER"
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER"
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS"

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

export const login = (user) => {
  sessionAPI.login(user)
    .then(value => dispatch(user))
}

export const logout = () => {
  sessionAPI.logout()
    .then(value => dispatch(logoutCurrentUser()))
}

export const signup = (user) => {
  sessionAPI.signup(user)
    .then(value => dispatch(receiveCurrentUser(user)))
}
export const RECEIVE_TEXTAREA_MESSAGE = "RECEIVE_TEXTAREA_MESSAGE"
export const RESET_TEXTAREA_MESSAGE = "RESET_TEXTAREA_MESSAGE"

export const receiveTextArea = (message) => {
  return {
    type: RECEIVE_TEXTAREA_MESSAGE,
    message
  }
}

export const clearTextArea = () => {
  return {
    type: RESET_TEXTAREA_MESSAGE
  }
}
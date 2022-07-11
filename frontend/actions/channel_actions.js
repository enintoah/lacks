export const RECEIVE_CHANNELS = "RECEIVE_ALL_CHANNELS"
export const RECEIVE_CHANNEL = "RECEIVE_CHANNEL"
export const CLEAR_CHANNELS = "CLEAR_CHANNELS"

export const RECEIVE_CHANNEL_MESSAGES = "RECEIVE_ALL_CHANNEL_MESSAGES"
export const RECEIVE_CHANNEL_MESSAGE = "RECEIVE_CHANNEL_MESSAGE"
export const CLEAR_CHANNEL_MESSAGES = "CLEAR_CHANNEL_MESSAGES"

export const receiveChannels = (channels) => {
  return {
    type: RECEIVE_CHANNELS,
    channels
  }
}

export const receiveChannelMessages = (messages) => {
  return {
    type: RECEIVE_CHANNEL_MESSAGES,
    messages, 
  }
}

export const clearChannels = () => {
  return {
    type: CLEAR_CHANNELS
  }
}

export const clearChannelMessages = () => {
  return {
    type: CLEAR_CHANNEL_MESSAGES
  }
}
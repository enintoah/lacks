export const createChannelMessage = (message) => {
  return $.ajax({
    url: "/api/channel_messages",
    method: "POST", 
    data: message 
  })
}

export const deleteChannelMessage = (id) => {
  return $.ajax({
    url: `/api/channel_messages/${id}`,
    method: "DELETE"
  })
}

export const updateChannelMessage = (id, message) => {
  return $.ajax({
    url:  `/api/channel_messages/${id}`,
    method: 'PATCH',
    data: message
  })
}
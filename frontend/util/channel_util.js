export const createChannelMessage = (message) => {
  return $.ajax({
    url: "/api/channel_messages",
    method: "POST", 
    data: message 
  })
}
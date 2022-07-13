export const createConversationMessage = (message) => {
  return $.ajax({
    url: "/api/conversation_messages",
    method: "POST",
    data: message 
  })
}


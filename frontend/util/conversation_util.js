export const createConversationMessage = (message) => {
  return $.ajax({
    url: "/api/conversation_messages",
    method: "POST",
    data: message 
  })
}

export const deleteConversationMessage = (id) => {
  return $.ajax({
    url: `/api/conversation_messages/${id}`,
    method: "DELETE"
  })
} 

export const updateConversationMessage = (id, message) => {
  return $.ajax({
    url:  `/api/conversation_messages/${id}`,
    method: 'PATCH',
    data: message
  })
}
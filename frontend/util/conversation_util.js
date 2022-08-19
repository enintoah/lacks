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

export const createConversation = (data) => {
  return $.ajax({
    url: `/api/conversations`, 
    method: `POST`, 
    data: data
  })
}

export const deleteConversation = (id) => {
  return $.ajax({
    url: `/api/conversations/${id}`, 
    method: 'DELETE'
  })
}
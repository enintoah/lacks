json.channels do 
  json.array! @channels, :id, :name
end

json.channel_messages do 
  json.array! @channel_messages, :id, :user_id, :body, :channel_id 
end

json.conversations do 
  json.array! @conversations, :id, :first_user_id, :second_user_id, :first_user_name, :second_user_name
end

json.conversation_messages do
  json.array! @conversation_messages, :id, :author_id, :conversation_id, :body
end

json.workspace_users do
  json.array! @workspace_users, :user_id, :name
end
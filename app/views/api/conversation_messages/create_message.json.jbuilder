json.message do 
  json.extract! message, :id, :author_id, :conversation_id, :body
end
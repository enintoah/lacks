json.message do 
  json.extract! message, :id, :user_id, :channel_id, :body
end
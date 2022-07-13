class Api::InitialMessagesController < ApplicationController
  def show
    if current_user.workspace_ids.include?(params[:id].to_i)
      workspace = Workspace.find_by(id: params[:id])
      @workspace_users = workspace.users
      @channels = workspace.channels
      @channel_messages = find_channel_messages(@channels)
      @conversations = Conversation.find_conversations(current_user.id, workspace.id)
      @conversation_messages = find_conversation_messages(@conversations)
      render :show
    else 
       render json: ["You do not belong to this workspace brother."], status: 422
    end
  end

  def find_channel_messages(channels)
    arr = []
    channels.each do |channel|
      arr.concat(channel.messages)
    end
    return arr
  end

  def find_conversation_messages(conversations)
    arr = []
    conversations.each do |conversation|
      arr.concat(conversation.messages)
    end
    return arr
  end

end

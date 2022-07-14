class Api::ConversationMessagesController < ApplicationController
  def create 
    @message = UserMessage.new(conversation_message_params)
    if @message.save
      ConversationsChannel.broadcast_to(@message.conversation, @message)
      render :create
    else
      render json: ["message did not send brother"], status: 422
    end
  end

  private 
  def conversation_message_params
    params.require(:message).permit(:author_id, :conversation_id, :body, :recipient_id)
  end
end

class Api::ConversationMessagesController < ApplicationController
  def create 
    @message = UserMessage.new(conversation_message_params)
    if @message.save
      ConversationsChannel.broadcast_to @message.conversation,
        type: 'RECEIVE_MESSAGE', 
        **from_template('api/conversation_messages/create_message', message: @message)
    else
      render json: ["message did not send brother"], status: 422
    end
  end

  def update 
    @message = UserMessage.find_by(id: params[:id])
    if @message.update(conversation_message_params)
      ConversationsChannel.broadcast_to @message.conversation,
        type: 'RECEIVE_MESSAGE',
        **from_template('api/conversation_messages/create_message', message: @message)
    else 
      render json ["message did not update brother"], status: 422
    end
  end

  def destroy
    @message = UserMessage.find_by(id: params[:id])
    if @message.destroy 
      ConversationsChannel.broadcast_to @message.conversation,
        type: 'DESTROY_MESSAGE',
        **from_template('api/conversation_messages/destroy_message', message: @message) 
    end
  end



  private 
  def conversation_message_params
    params.require(:message).permit(:author_id, :conversation_id, :body, :recipient_id)
  end
end

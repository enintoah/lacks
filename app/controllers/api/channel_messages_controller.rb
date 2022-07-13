class Api::ChannelMessagesController < ApplicationController
  def create
    @message = ChannelMessage.new(channel_message_params)
    if @message.save
      render :create 
    else 
      render json: ["message did not send brother"], status: 422
    end
  end 

  private 
  def channel_message_params
    params.require(:message).permit(:channel_id, :user_id, :body)
  end
end

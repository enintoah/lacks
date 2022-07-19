class Api::ChannelMessagesController < ApplicationController
  def create
    @message = ChannelMessage.new(channel_message_params)
    if @message.save
      ChannelsChannel.broadcast_to @message.channel,
        type: 'RECEIVE_MESSAGE',
        **from_template('api/channel_messages/create_message', message: @message)

    else 
      render json: ["message did not send brother"], status: 422
    end
  end 

  def update 
    @message = ChannelMessage.find_by(id: params[:id])
    if @message.update(channel_message_params)
      ChannelsChannel.broadcast_to @message.channel,
        type: 'RECEIVE_MESSAGE',
        **from_template('api/channel_messages/create_message', message: @message)
    else
      render json: ["message did not update brother"], status: 422
    end
  end

  def destroy
    @message = ChannelMessage.find_by(id: params[:id])
    if @message.destroy
      ChannelsChannel.broadcast_to @message.channel,
        type: 'DESTROY_MESSAGE',
        **from_template('api/channel_messages/destroy_message', message: @message) 
    end
  end

  private 
  def channel_message_params
    params.require(:message).permit(:channel_id, :user_id, :body)
  end
end

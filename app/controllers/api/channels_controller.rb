class Api::ChannelsController < ApplicationController
  def create
    @channel = Channel.new(channel_params)
    if @channel.save
      render json: @channel
    else 
      render json: ["Channel did not save"], status: 422
    end
  end

  def destroy

  end

  private 
  def channel_params
    params.require(:channel).permit(:name, :workspace_id)
  end

end

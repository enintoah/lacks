class Api::ConversationsController < ApplicationController

  def create 
    @conversation = Conversation.new(conversation_params)
    if @conversation.save 
      render json: @conversation 
    else 
      render json: ["Conversation was not created"], status: 422
    end
  end

  def destroy 
    @conversation = Conversation.find_by(id: params[:id])
    @conversation.messages.destroy_all
    if @conversation.destroy
      render json: @conversation
    else 
      render json: ["Conversation was not destroyed"], status 422 
    end
  end

  private 
  def conversation_params 
    params.require(:conversation).permit(:first_user_id, :second_user_id, :workspace_id, :first_user_name, :second_user_name)
  end

end

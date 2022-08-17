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

  end

  private 
  def conversation_params 
    params.require(:conversation).permit(:first_user_id, :second_user_id, :workspace_id, :first_user_name, :second_user_name)
  end

end

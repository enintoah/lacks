class Api::InitialMessagesController < ApplicationController
  def show
    if check_user_workspaces(params[:id])
      
    else 
      render json: ["You do not belong to this workspace."] status: 422
    end
  end

  def check_user_workspaces(workspace_id)
    if current_user.workspace_ids.include?(workspace_id)
      return true 
    else 
      return false 
    end
  end
end

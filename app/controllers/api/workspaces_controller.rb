class Api::WorkspacesController < ApplicationController
  def show 
    user = User.find_by(id: params[:id])
    @workspaces = user.workspaces
    render :show
  end
end

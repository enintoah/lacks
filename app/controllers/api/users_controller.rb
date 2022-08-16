class Api::UsersController < ApplicationController
  def create 
    @user = User.new(valid_params)
    if @user.save
      political = Workspace.find_by(name: "Political Conversations")
      food = Workspace.find_by(name: "Restaurant Recommendations")
      music = Workspace.find_by(name: "Good Music?")
      UsersWorkspace.create(user_id: @user.id, workspace_id: political.id)
      UsersWorkspace.create(user_id: @user.id, workspace_id: food.id)
      UsersWorkspace.create(user_id: @user.id, workspace_id: music.id)
      login(@user)
      render :create
    else 
      render json: @user.errors.full_messages, status: 422
    end
  end
  private 
  def valid_params
    params.require(:user).permit(:email, :name, :password)
  end
end

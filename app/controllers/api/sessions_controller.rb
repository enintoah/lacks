class Api::SessionsController < ApplicationController
  def create 
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
    if @user
      login(@user)
      render :create
    else 
      render json: ["Unsuccessful Login :( "]
    end
  end

  def destroy
    if logout
      render json: ["Successful Logout"]
    else 
      render json: ["you are not logged in brother"]
    end
  end
end

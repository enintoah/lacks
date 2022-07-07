class Api::SessionController < ApplicationController
  def create 
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
    if @user
      login(@user)
      render json: ["Successful Login!!"]
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

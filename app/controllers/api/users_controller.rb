class Api::UsersController < ApplicationController
  def create 
    @user = User.new(valid_params)
    if @user.save!
      login(@user)
      render :create
    else 
      render json: ["Error... Could not create account :( "]
    end
  end

  private 
  def valid_params
    params.require(:user).permit(:email, :name, :password)
  end
end

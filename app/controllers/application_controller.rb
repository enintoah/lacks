class ApplicationController < ActionController::Base
  before_action :verify_authenticity_token
  helper_method :current_user, :logged_in?

  def current_user 
    return nil if session[:session_token] == nil
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def require_log_in 

  end

  def logged_in?
    !!current_user
  end

  def login(user)
    session[:session_token] = user.reset_session_token!
    @current_user = user
  end

  def logout
    if logged_in?
      current_user.reset_session_token!
      session[:session_token] = nil
      @current_user = nil 
      return true 
    else 
      return false 
    end
  end
end

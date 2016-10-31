class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user

  def log_in!(user)
    @current_user = user
    session[:session_token] = user.reset_session_token!
  end

  def log_out!
    @current_user.reset_session_token! if @current_user
    session[:session_token] = nil
    true
  end

  def current_user
    @current_user = User.find_by_session_token(session[:session_token])
  end
end

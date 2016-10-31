class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(session_params[:username], session_params[:password])

    if @user
      log_in!(@user)
      render 'api/users/show'
    else
      render json: 'Invalid credentials', status: 401
    end
  end

  def destroy
    if log_out!
      render json: {}
    else
      render 'No user to log out', status: 404
    end
  end

  def session_params
    params.require(:user).permit(:username, :password)
  end
end

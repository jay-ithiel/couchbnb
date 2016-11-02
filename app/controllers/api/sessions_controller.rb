class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if @user
      login!(@user)
      render 'api/users/home'
    else
      render json: ["Invalid login credentials"], status: 422
    end
  end

  def destroy
    if logged_in?
      logout!
      render json: {}
    else
      render json: ["No current user"], status: 404
    end
  end

end

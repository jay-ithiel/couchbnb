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
      render @user.errors.full_messages, status: 422
    end
  end

  def destroy
    logout!
    render '/'
  end

end

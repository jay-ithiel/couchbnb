class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render :home
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def home
    @user = User.find(params[:id])
    render :home
  end

  private
    def user_params
      params.require(:user).permit(
        :first_name,
        :last_name,
        :email,
        :password
      )
    end
end

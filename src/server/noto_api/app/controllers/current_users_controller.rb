class CurrentUsersController < ApplicationController
  def create
    @user = User.find_by(email: params[:email])
    render json: @user
  end
end

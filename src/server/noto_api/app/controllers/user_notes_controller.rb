class UserNotesController < ApplicationController
  def show
    @user = User.find(params[:id])
    @notes = @user.notes
    render json: @notes
  end
end

class GetTagsController < ApplicationController
  def show
    @note = Note.find_by(id: params[:id])
    @tags = @note.tags
    render json: @tags
  end
end

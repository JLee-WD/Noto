class NotesController < ApplicationController
  before_action :set_note_by_id, only: [:show, :update, :destroy]
  before_action :read_notes, only: [:index, :destroy]

  def index
    render json: @notes
  end
  
  def show
    render json: @note
  end

  def create
    @note = Note.create(title: params[:title],description: params[:description], code: params[:code], public: params[:public])
    render json: @note
  end

  def update
    @note.update(title: params[:title],description: params[:description], code: params[:code], public: params[:public])
    render json: @note
  end

  def destroy
    @note.destroy
    render json: @notes
  end

  private
  
  def set_note_by_id
    @note = Note.find(params[:id])
  end
  def read_notes
    @notes = Note.all
  end
  def note_params
    params.require(:note).permit(:title, :description, :code, :public)
  end
end

class NotesController < ApplicationController
  before_action :set_note_by_id, only: [:show, :update]
  before_action :set_note_tags_and_join, only: [:destroy]
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
    @noteTagJoins.each do |join|
        join.destroy
    end
    @note.destroy
    @noteTags.each do |tag|
      if tag.notes.length === 0
        tag.destroy
      end
    end
    render json: @notes
  end

  private
  
  def set_note_by_id
    @note = Note.find(params[:id])
  end
  def set_note_tags_and_join
    @note = Note.find(params[:id])
    @noteTags = @note.tags
    @noteTagJoins = @note.note_tags
  end
  def read_notes
    @notes = Note.all
  end
  def note_params
    params.require(:note).permit(:title, :description, :code, :public, :id)
  end
end

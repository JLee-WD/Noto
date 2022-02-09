require 'rails_helper'

Rspec.describe Note, type: :model do
  
  it "should respond to title" do
    note = Note.new
    expect(note).to respond_to(:title)
  end

  it "should respond to tags" do
    note = Note.new
    expect(note).to respond_to(:tags)
  end

  it "should respond to note_tags" do
    note = Note.new
    expect(note).to respond_to(:note_tags)
  end

  it "should respond to description" do
    note = Note.new
    expect(note).to respond_to(:description)
  end

  it "should respond to code" do
    note = Note.new
    expect(note).to respond_to(:code)
  end

  it "should respond to public" do
    note = Note.new
    expect(note).to respond_to(:public)
  end

  it "should allow assignment to title" do
    note = Note.new
    note.title = "Foo"
    expect(note.name).to eq("Foo")
  end

end

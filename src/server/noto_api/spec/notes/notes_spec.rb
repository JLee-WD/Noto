require 'rails_helper'

RSpec.describe Note, type: :model do
  
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

  it "should respond to c" do
    note = Note.new
    expect(note).to respond_to(:public)
  end

  it "should allow assignment to title" do
    note = Note.new
    note.title = "Foo"
    expect(note.title).to eq("Foo")
  end

  it "should allow assignment to description" do
    note = Note.new
    note.description = "Lorem ipsum"
    expect(note.description).to eq("Lorem ipsum")
  end

  it "should allow assignment to code" do
    note = Note.new
    note.code = "console.log('Hello, World!')"
    expect(note.code).to eq("console.log('Hello, World!')")
  end

  it "should allow assigning boolean (true) to public" do
    note = Note.new
    note.public = true
    expect(note.public).to eq(true)
  end

  it "should allow assigning boolean (false) to public" do
    note = Note.new
    note.public = false
    expect(note.public).to eq(false)
  end

  it "should allow assigning boolean (false) to public" do
    note = Note.new
    note.public = false
    expect(note.public).to eq(false)
  end

  it "should not allow assigning string to public" do
    expect((Note.create(public: "true").valid?)).to eq(false)
  end
  
end

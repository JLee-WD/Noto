require 'rails_helper'
require 'faker'

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

  it "should respond to public" do
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

  it "can't create an empty note" do
    expect((Note.create().valid?)).to eq(false)
  end

  it "should be able to create a new note" do
    title = Faker::Book.title
    description = Faker::Book.genre
    code = Faker::Lorem.paragraph
    public = true
    expect((Note.create(title: title, description: description, code: code, public: public).valid?)).to eq(true)
  end

  it "should be able to create a new note and be recorded in the database" do
    title = Faker::Book.title
    description = Faker::Book.genre
    code = Faker::Lorem.paragraph
    public = true
    expect { Note.create(title: title, description: description, code: code, public: public) }.to change { Note.count }.by(1)
  end

  context "when invalid parameters" do
    subject { Note.new }
    let(:note) { Note.new }

    it "should be not valid" do
      expect(note).to_not be_valid # valid?
      expect(note.errors.full_messages).to include "Title can't be blank"
    end

    it "should be not valid" do
      expect(note).to_not be_valid # valid?
      expect(note.errors.full_messages).to include "Description can't be blank"
    end

    it "should be not valid" do
      expect(note).to_not be_valid # valid?
      expect(note.errors.full_messages).to include "Code can't be blank"
    end

    it "should be not valid" do
      expect(note).to_not be_valid # valid?
      expect(note.errors.full_messages).to include "Public can't be blank"
    end
  end
end

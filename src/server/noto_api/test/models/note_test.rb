# require 'test_helper'

# class NoteTest < ActiveSupport::TestCase
#   # test "the truth" do
#   #   assert true
#   # end
# end

require 'rails_helper'
require 'rspec/autorun'

Rspec.describe Note, type: :model do
  it "should respond to title" do
    note = Note.new
    expect(note).to respond_to(:title)
  end
end

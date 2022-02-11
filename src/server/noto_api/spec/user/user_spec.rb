require 'rails_helper'
require 'faker'

RSpec.describe User, type: :model do
    it "should respond to email" do
        user = User.new
        expect(user).to respond_to(:email)
    end

    it "should respond to encrypted_password" do
        user = User.new
        expect(user).to respond_to(:encrypted_password)
    end

    it "should respond to reset_password_token" do
        user = User.new
        expect(user).to respond_to(:reset_password_token)
    end

    it "should respond to reset_password_sent_at" do
        user = User.new
        expect(user).to respond_to(:reset_password_sent_at)
    end

    it "should respond to remember_created_at" do
        user = User.new
        expect(user).to respond_to(:remember_created_at)
    end

    it "should allow assignment to email" do
        user = User.new
        user.email = "user@email.com"
        expect(user.email).to eq("user@email.com")
    end 

    it "should be able to register a new user" do
        email = Faker::Internet.email
        password = Faker::Internet.password
        expect((User.create(email: email, encrypted_password: password).valid?)).to eq(true)
    end
end
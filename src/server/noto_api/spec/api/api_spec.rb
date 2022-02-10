require 'rails_helper'
require 'faker'

RSpec.describe 'API', type: :request do

    describe 'should fetch notes' do
      subject { get '/notes' }
  
      it 'returns success' do
        subject
        
        expect(response).to have_http_status(200)
      end
    end

    describe "should fetch all notes", type: :request do
      before {get '/notes'}
      it 'returns all notes' do
          expect(JSON.parse(response.body).size).to eq(Note.count)
        end
      it 'returns status code 200' do
          expect(response).to have_http_status(200)
        end
      end

    describe 'should fetch tags', type: :request do
        subject { get '/tags' }
    
        it 'returns success' do
          subject
          
          expect(response).to have_http_status(200)
        end
      end

      describe "should fetch all tags", type: :request do
        before {get '/tags'}
        it 'returns all tags' do
            expect(JSON.parse(response.body).size).to eq(Tag.count)
          end
        it 'returns status code 200' do
            expect(response).to have_http_status(200)
          end
        end

    # describe "should delete note", type: :request do
    #     title = Faker::Book.title
    #     description = Faker::Book.genre
    #     code = Faker::Lorem.paragraph
    #     public = true
    #     note = Note.create(title: title, description: description, code: code, public: public)
    #     it 'delete returns success' do
    #       delete '/notes', :note => { :id => note.id } 
    #       expect(response).to have_http_status(200)
    #     end
    #   end

    # describe "#destroy" do
    #   it "responds to DELETE" do
    #     title = Faker::Book.title
    #     description = Faker::Book.genre
    #     code = Faker::Lorem.paragraph
    #     public = true
    #     note = Note.create(title: title, description: description, code: code, public: public)
    #     delete '/notes', :note => { :id => :note.id }
    #     expect(response).to have_http_status(200)
    #   end
    # end 

    describe "POST note" do
      subject { post '/notes' }
      it 'updates note successfully' do
        title = Faker::Book.title
        description = Faker::Book.genre
        code = Faker::Lorem.paragraph
        public = true
      post "/notes", :params => { :note => {:title => title, description => description, :code => code, :public => public}}
      expect(response).to have_http_status(200)
    end 
  end 
end
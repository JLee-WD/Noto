require 'rails_helper'

RSpec.describe 'API', type: :request do

    describe 'should allow fetching notes' do
      subject { get '/notes' }

      it 'returns error' do
        subject

        expect(response).to have_http_status(200)
      end
    end
    describe 'should allow fetching tags' do
      subject { get '/tags' }

      it 'returns error' do
        subject

        expect(response).to have_http_status(200)
      end
    end
end

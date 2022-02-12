require 'rails_helper'

RSpec.describe 'API', type: :request do

    describe 'should not allow fetching notes when user is unauthenticated' do
      subject { get '/notes' }

      it 'returns error' do
        subject

        expect(response).to have_http_status(302)
      end
    end
end

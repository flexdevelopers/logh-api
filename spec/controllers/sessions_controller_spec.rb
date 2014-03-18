require 'spec_helper'

describe API::SessionsController do

  before do
    bypass_http_token_authentication_on API::SessionsController
  end

  # POST /api/sessions
  describe '#create' do
    it 'creates a session' do
      user = FactoryGirl.create(:user)
      session_params = FactoryGirl.attributes_for(:session, email: user.email, password: user.password)
      post :create, session: session_params
      expect(response).to be_success
    end
  end

  describe '#destroy' do

  end

end

require 'spec_helper'

describe API::SessionsController do

  # POST /api/sessions
  describe '#create' do
    it 'creates a session' do
      user = FactoryGirl.create(:user)
      session_params = FactoryGirl.attributes_for(:session, email: user.email, password: user.password)
      post :create, session: session_params
      expect(response).to be_success
    end
  end

  # DELETE /api/sessions/:id
  describe '#destroy' do

  end

end

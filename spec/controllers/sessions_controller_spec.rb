require 'spec_helper'

describe API::SessionsController do
  let(:user) { FactoryGirl.create(:user) }

  # POST /api/sessions
  describe '#create' do
    context 'when an incorrect email is provided' do
      let(:session_params) { FactoryGirl.attributes_for(:session, email: 'bad@email.com', password: user.password) }
      it 'returns unauthorized' do
        post :create, session: session_params
        expect(response.status).to eq(401)
      end
    end
    context 'when an incorrect password is provided' do
      let(:session_params) { FactoryGirl.attributes_for(:session, email: user.email, password: 'badpassword') }
      it 'returns unauthorized' do
        post :create, session: session_params
        expect(response.status).to eq(401)
      end
    end
    context 'when a correct email and password is provided' do
      it 'returns an access token' do
        session_params = FactoryGirl.attributes_for(:session, email: user.email, password: user.password)
        post :create, session: session_params
        expect(response).to be_success
        expect(json[:payload][:user]).not_to be_blank
        expect(json[:payload][:token]).not_to be_blank
      end
    end
  end

  # DELETE /api/sessions/destroy
  describe '#destroy' do
    context 'when a current, valid access token is sent as a result of signing in' do
      before do
        sign_in(user)
      end
      it 'deletes the access token' do
        delete :destroy
        expect(response).to be_success
      end
    end
    context 'when an expired access token is sent' do
      before do
        sign_in(user)
        sign_out(user)
      end
      it 'deletes the access token' do
        delete :destroy
        expect(response).to be_success
      end
    end
    context 'when no current access token is sent' do
      it 'deletes the access token' do
        delete :destroy
        expect(response).to be_success
      end
    end
  end

end

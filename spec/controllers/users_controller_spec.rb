  require 'spec_helper'

describe API::UsersController do
  let(:user) { FactoryGirl.create(:user) }

  before do
    request_with_api_token
    sign_in(user)
  end

  # GET /api/users/:id
  describe '#show' do
    it 'returns a user' do
      get :show, id: user.id
      expect(response).to be_success
      expect(json['email']).to eq(user.email)
    end
  end

  # POST /api/users
  describe '#create' do
    it 'creates a user' do
      user_params = FactoryGirl.attributes_for(:user)
      expect { post :create, user: user_params }.to change(User, :count).by(1)
      expect(response).to be_success
    end
  end

  # PATCH/PUT /api/users/:id
  describe '#update' do
    before { user.email = 'bar@foo.com' }
    it 'updates a user' do
      patch :update, id: user.id, user: user.attributes
      user.reload
      user.email.should == 'bar@foo.com'
    end
  end

end

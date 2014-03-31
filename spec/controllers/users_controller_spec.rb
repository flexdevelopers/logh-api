require 'spec_helper'

describe API::UsersController do
  let(:current_user) { FactoryGirl.create(:user, email: 'foo@bar.com') }
  let(:another_user) { FactoryGirl.create(:user, email: 'foo@baz.com') }

  before do
    sign_in(current_user)
  end

  # GET /api/users/:id
  describe '#show' do
    context 'when requesting the signed in user' do
      it 'returns a user' do
        get :show, id: current_user.id
        expect(response).to be_success
        expect(json[:email]).to eq(current_user.email)
      end
    end
    context 'when requesting a user other than the signed in user' do
      it 'returns unauthorized' do
        get :show, id: another_user.id
        expect(response.status).to eq(401)
      end
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
    context 'when attempting to update the signed in user' do
      before { current_user.email = 'newemail@foo.com' }
      it 'updates the user' do
        patch :update, id: current_user.id, user: current_user.attributes
        expect(response).to be_success
        current_user.reload
        current_user.email.should == 'newemail@foo.com'
      end
    end
    context 'when attempting to update a user other than the signed in user' do
      before { another_user.email = 'newemail@foo.com' }
      it 'returns unauthorized and does not update the user' do
        patch :update, id: another_user.id, user: another_user.attributes
        expect(response.status).to eq(401)
        another_user.reload
        another_user.email.should == 'foo@baz.com'
      end
    end

  end

end

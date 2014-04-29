require 'spec_helper'

describe API::UsersController do
  let(:current_user) { FactoryGirl.create(:user, email: 'foo@bar.com') }
  let(:another_user) { FactoryGirl.create(:user, email: 'foo@baz.com') }

  before do
    sign_in(current_user)
  end

  # GET /api/users/current
  describe '#current' do
    context 'when requesting the current' do
      it 'returns a user' do
        get :current
        expect(response).to be_success
        expect(json[:email]).to eq(current_user.email)
      end
    end
  end

  # POST /api/users
  describe '#create' do
    it 'creates a user and returns an access token' do
      user_params = FactoryGirl.attributes_for(:user)
      expect { post :create, user: user_params }.to change(User, :count).by(1)
      expect(response).to be_success
      expect(json[:payload][:user]).not_to be_blank
      expect(json[:payload][:token]).not_to be_blank
    end
    it 'sends a welcome email' do
      user = FactoryGirl.create(:user)
      expect(ActionMailer::Base.deliveries.last.to).to include(user.email)
    end
  end

  # PUT /api/users/current
  describe '#update' do
    context 'when attempting to update the signed in user' do
      before do
        current_user.email = 'themaninblack@cash.com'
        current_user.first_name = 'Johnny'
        current_user.last_name = 'Cash'
        current_user.admin = true
      end
      it 'updates the user except for the admin field' do
        put :update, user: current_user.attributes
        expect(response).to be_success
        current_user.reload
        current_user.email.should == 'themaninblack@cash.com'
        current_user.first_name.should == 'Johnny'
        current_user.last_name.should == 'Cash'
        current_user.admin.should be_false
      end
    end
    context 'when attempting to update a user other than the signed in user' do
      before { another_user.email = 'newemail@foo.com' }
      it 'does not update the other user' do
        put :update, user: another_user.attributes
        another_user.reload
        another_user.email.should == 'foo@baz.com'
      end
    end

  end

end

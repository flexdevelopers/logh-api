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
        expect(response.status).to eq(403)
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
    it 'sends a welcome email' do
      user = FactoryGirl.create(:user)
      expect(ActionMailer::Base.deliveries.last.to).to include(user.email)
    end
  end

  # PATCH/PUT /api/users/:id
  describe '#update' do
    context 'when attempting to update the signed in user' do
      before do
        current_user.email = 'themaninblack@cash.com'
        current_user.first_name = 'Johnny'
        current_user.last_name = 'Cash'
        current_user.admin = true
      end
      it 'updates the user except for the admin field' do
        patch :update, id: current_user.id, user: current_user.attributes
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
      it 'returns unauthorized and does not update the user' do
        patch :update, id: another_user.id, user: another_user.attributes
        expect(response.status).to eq(403)
        another_user.reload
        another_user.email.should == 'foo@baz.com'
      end
    end

  end

end

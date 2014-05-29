require 'spec_helper'

describe API::UsersController do
  render_views # for rabl

  let(:current_user) { FactoryGirl.create(:user, email: 'foo@bar.com') }
  let(:another_user) { FactoryGirl.create(:user, email: 'foo@baz.com') }

  before do
    sign_in(current_user)
  end

  # GET /api/users/current
  describe '#current' do
    context 'when requesting the current' do
      it 'returns a user' do
        get :current, format: 'json'
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
      expect(json[:user]).not_to be_blank
      expect(json[:token]).not_to be_blank
    end
    it 'sends a welcome email' do
      user = FactoryGirl.create(:user)
      expect(ActionMailer::Base.deliveries.last.to).to include(user.email)
    end
  end

  # PUT /api/users/current
  describe '#update' do
    let(:user_params) { FactoryGirl.attributes_for(:user) }
    before do
      user_params[:email] = 'themaninblack@cash.com'
      user_params[:first_name] = 'Johnny'
      user_params[:last_name] = 'Cash'
      user_params[:admin] = true
    end
    context 'when attempting to update the signed in user' do
      it 'updates the user except for the admin field and the email field' do
        put :update, user: user_params
        expect(response).to be_success
        current_user.reload
        current_user.email.should_not == 'themaninblack@cash.com'
        current_user.admin.should be_false
        current_user.first_name.should == 'Johnny'
        current_user.last_name.should == 'Cash'
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

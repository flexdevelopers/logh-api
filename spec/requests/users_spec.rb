require 'spec_helper'

describe 'Users API' do

  describe 'GET /users' do
    it 'returns a list of users' do
      FactoryGirl.create_list(:user, 10)
      get users_path
      response.status.should be(200)
      expect(json.length).to eq(10)
    end
  end

  describe 'GET /users/:id' do
    it 'returns a user' do
      user = FactoryGirl.create(:user)
      get user_path(user)
      expect(response).to be_success
      expect(json['email']).to eq(user.email)
    end
  end

  describe 'GET /users/new' do
    it 'returns a new user' do
      get new_user_path
      expect(response).to be_success
    end
  end

  describe 'POST /users' do
    it 'creates a user' do
      user_params = FactoryGirl.attributes_for(:user)
      expect { post users_path, user: user_params }.to change(User, :count).by(1)
    end
  end

  describe 'PATCH /users/:id' do
    it 'updates a user' do
      user = FactoryGirl.create(:user)
      user.email = 'bar@foo.com'
      patch user_path(user), user: user.attributes
      user.reload
      user.email.should == 'bar@foo.com'
    end
  end

  describe 'DELETE /users/:id' do
    it 'deletes a user' do
      user = FactoryGirl.create(:user)
      expect { delete user_path(user), id: user.id }.to change(User, :count).by(-1)
    end
  end

end

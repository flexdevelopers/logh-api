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

end

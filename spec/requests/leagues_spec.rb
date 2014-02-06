require 'spec_helper'

describe 'Leagues API' do
  describe 'GET /users/:id/leagues' do
    it 'returns a list of leagues for the specified user' do
      user = FactoryGirl.create(:user)
      FactoryGirl.create(:league, user: user)
      FactoryGirl.create(:league, user: user)
      FactoryGirl.create(:league, user: user)
      FactoryGirl.create(:league, user: user)
      FactoryGirl.create(:league, user: user)
      get "/api/users/#{user.id}/leagues"
      expect(response).to be_success
      expect(json.length).to eq(5)
    end
  end
end
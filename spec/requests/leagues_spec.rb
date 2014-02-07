require 'spec_helper'

describe 'Leagues API' do

  describe 'GET /api/users/:user_id/leagues' do
    it 'returns a list of leagues for the specified user' do
      user = FactoryGirl.create(:user)
      FactoryGirl.create(:league, user: user)
      FactoryGirl.create(:league, user: user)
      FactoryGirl.create(:league, user: user)
      FactoryGirl.create(:league, user: user)
      FactoryGirl.create(:league, user: user)
      get api_user_leagues_path(user)
      expect(response).to be_success
      expect(json.length).to eq(5)
    end
  end

  describe 'GET /api/users/:user_id/leagues/:id' do
    it 'returns a league for a user' do
      user = FactoryGirl.create(:user)
      league = FactoryGirl.create(:league, user: user)
      get api_user_league_path(user, league)
      expect(response).to be_success
      expect(json[:name]).should == user[:name]
    end
  end

  describe 'PATCH /api/users/:user_id/leagues/:id' do
    it 'updates a league for a user' do
      user = FactoryGirl.create(:user)
      league = FactoryGirl.create(:league, user: user)
      league.name = 'Good News Bears'
      patch api_user_league_path(user, league), league: league.attributes
      league.reload
      expect(league[:name]).to eq('Good News Bears')
    end
  end
end
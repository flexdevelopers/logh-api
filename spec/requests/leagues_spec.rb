require 'spec_helper'

describe 'Leagues API' do

  describe 'GET /api/users/:user_id/leagues' do
    it 'returns a list of leagues for the specified user' do
      NUMBER_OF_ACTIVE_LEAGUES = 5
      user = FactoryGirl.create(:user)
      FactoryGirl.create(:league, user: user)
      FactoryGirl.create(:league, user: user)
      FactoryGirl.create(:league, user: user)
      FactoryGirl.create(:league, user: user)
      FactoryGirl.create(:league, user: user)
      FactoryGirl.create(:league, active: false, user: user)
      get api_user_leagues_path(user)
      expect(response).to be_success
      expect(json.length).to eq(NUMBER_OF_ACTIVE_LEAGUES)
      json.each do |league|
        expect(league['active']).to be_true
      end
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

  describe 'GET /api/users/:user_id/leagues/new' do
    it 'returns a new league for a user' do
      user = FactoryGirl.create(:user)
      get new_api_user_league_path(user)
      expect(response).to be_success
    end
  end

  describe 'POST /api/users/:user_id/leagues' do
    it 'creates a league for a user' do
      user = FactoryGirl.create(:user)
      league_params = FactoryGirl.attributes_for(:league)
      expect { post api_user_leagues_path(user), league: league_params }.to change(League, :count).by(1)
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

  describe 'DELETE /api/users/:user_id/leagues/:id' do
    it 'destroys a league for a user' do
      user = FactoryGirl.create(:user)
      league = FactoryGirl.create(:league, user: user)
      expect { delete api_user_league_path(user, league) }.to change(League, :count).by(-1)
    end
  end
end
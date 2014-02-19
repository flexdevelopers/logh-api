require 'spec_helper'

describe API::LeaguesController do

  # GET /api/leagues
  describe '#index - all leagues' do
    it 'returns a list of all leagues' do
      FactoryGirl.create(:league)
      FactoryGirl.create(:league)
      FactoryGirl.create(:league)
      get api_leagues_path
      expect(response).to be_success
      expect(json.length).to eq(3)
    end
  end

  # GET /api/users/:user_id/leagues
  describe '#index - user leagues' do
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

  # GET /api/leagues/:id
  describe '#show' do
    it 'returns a league' do
      league = FactoryGirl.create(:league)
      get api_user_league_path(league.user, league)
      expect(response).to be_success
      expect(json['name']).to eq(league.name)
    end
  end

  # POST /api/users/:user_id/leagues
  describe '#create' do
    it 'creates a league for a user' do
      user = FactoryGirl.create(:user)
      league_params = FactoryGirl.attributes_for(:league)
      expect { post api_user_leagues_path(user), league: league_params }.to change(user.leagues, :count).by(1)
    end

  end

  # PATCH/PUT /api/leagues/:id
  describe '#update' do
    it 'updates a league' do
      league = FactoryGirl.create(:league)
      league.name = 'Good News Bears'
      patch api_user_league_path(league.user, league), league: league.attributes
      league.reload
      expect(league[:name]).to eq('Good News Bears')
    end
  end

  # DELETE /api/leagues/:id
  describe '#destroy' do
    it 'destroys a league' do
      league = FactoryGirl.create(:league)
      expect { delete api_user_league_path(league.user, league) }.to change(league.user.leagues, :count).by(-1)
    end
    it 'destroys all the teams for the destroyed team' do
      league = FactoryGirl.create(:league)
      team1 = FactoryGirl.create(:team, league: league)
      team2 = FactoryGirl.create(:team, league: league)
      expect { delete api_user_league_path(league.user, league) }.to change(Team, :count).by(-2)
    end
  end
end
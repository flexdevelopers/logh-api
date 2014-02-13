require 'spec_helper'

describe API::LeaguesController do

  # GET /api/leagues
  describe '#index - all leagues' do
    it 'returns a list of all leagues' do
      FactoryGirl.create(:league, active: true)
      FactoryGirl.create(:league, active: true)
      FactoryGirl.create(:league, active: false)
      get api_leagues_path
      expect(response).to be_success
      expect(json.length).to eq(3)
    end
  end

  # GET /api/users/:user_id/leagues
  describe '#index - user leagues' do
    it 'returns a list of active leagues for the specified user' do
      NUMBER_OF_ACTIVE_LEAGUES_FOR_USER = 5
      user = FactoryGirl.create(:user)
      FactoryGirl.create(:league, user: user)
      FactoryGirl.create(:league, user: user)
      FactoryGirl.create(:league, user: user)
      FactoryGirl.create(:league, user: user)
      FactoryGirl.create(:league, user: user)
      FactoryGirl.create(:league, active: false, user: user)
      get api_user_leagues_path(user)
      expect(response).to be_success
      expect(json.length).to eq(NUMBER_OF_ACTIVE_LEAGUES_FOR_USER)
      json.each do |league|
        expect(league['active']).to be_true
      end
    end
  end

  # GET /api/leagues/:id
  describe '#show' do
    it 'returns a league' do
      league = FactoryGirl.create(:league)
      get api_league_path(league)
      expect(response).to be_success
      expect(json['name']).should == league[:name]
    end
  end

  # GET /api/users/:user_id/leagues/new
  describe '#new' do
    it 'returns a new league for a user' do
      user = FactoryGirl.create(:user)
      get new_api_user_league_path(user)
      expect(response).to be_success
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
      patch api_league_path(league), league: league.attributes
      league.reload
      expect(league[:name]).to eq('Good News Bears')
    end
  end

  # DELETE /api/leagues/:id
  describe '#destroy' do
    it 'destroys a league' do
      league = FactoryGirl.create(:league)
      expect { delete api_league_path(league) }.to change(League, :count).by(-1)
    end
  end
end
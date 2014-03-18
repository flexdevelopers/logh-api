require 'spec_helper'

describe API::LeaguesController do

  before do
    request_with_api_token
    sign_in(FactoryGirl.create(:user))
  end

  # GET /api/leagues
  describe '#index - all leagues' do
    it 'returns a list of all leagues' do
      FactoryGirl.create(:league)
      FactoryGirl.create(:league)
      FactoryGirl.create(:league)
      get :index
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
      get :index, user_id: user.id
      expect(response).to be_success
      expect(json.length).to eq(5)
    end
  end

  # GET /api/users/:user_id/leagues/:id
  describe '#show' do
    it 'returns a league' do
      league = FactoryGirl.create(:league)
      get :show, user_id: league.user.id, id: league.id
      expect(response).to be_success
      expect(json['name']).to eq(league.name)
    end
  end

  # POST /api/users/:user_id/leagues
  describe '#create' do
    it 'creates a league for a user' do
      user = FactoryGirl.create(:user)
      league = FactoryGirl.build(:league)
      expect { post :create, user_id: user.id, league: league.attributes }.to change(user.leagues, :count).by(1)
    end

  end

  # PATCH/PUT /api/users/:user_id/leagues/:id
  describe '#update' do
    it 'updates a league' do
      league = FactoryGirl.create(:league)
      league.name = 'Good News Bears'
      patch :update, user_id: league.user.id, id: league.id, league: league.attributes
      league.reload
      expect(league[:name]).to eq('Good News Bears')
    end
  end

  # DELETE /api/users/:user_id/leagues/:id
  describe '#destroy' do
    it 'destroys a league' do
      league = FactoryGirl.create(:league)
      expect { delete :destroy, user_id: league.user.id, id: league.id }.to change(league.user.leagues, :count).by(-1)
    end
    it 'destroys all the teams for the destroyed team' do
      league = FactoryGirl.create(:league)
      team1 = FactoryGirl.create(:team, league: league)
      team2 = FactoryGirl.create(:team, league: league)
      expect { delete :destroy, user_id: league.user.id, id: league.id }.to change(Team, :count).by(-2)
    end
  end
end
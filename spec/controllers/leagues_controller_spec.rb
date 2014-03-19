require 'spec_helper'

describe API::LeaguesController do
  let(:user) { FactoryGirl.create(:user) }

  before do
    request_with_api_token
    sign_in(user)
  end

  # GET /api/users/:user_id/leagues
  describe '#index - user leagues' do
    before do
      FactoryGirl.create(:league, user: user)
      FactoryGirl.create(:league, user: user)
      FactoryGirl.create(:league, user: user)
      FactoryGirl.create(:league, user: user)
      FactoryGirl.create(:league, user: user)
    end
    it 'returns a list of leagues for the specified user' do
      get :index, user_id: user.id
      expect(response).to be_success
      expect(json.length).to eq(5)
    end
  end

  # GET /api/users/:user_id/leagues/:id
  describe '#show' do
    let(:league) { FactoryGirl.create(:league, user: user) }
    it 'returns a league' do
      get :show, user_id: league.user.id, id: league.id
      expect(response).to be_success
      expect(json['name']).to eq(league.name)
    end
  end

  # POST /api/users/:user_id/leagues
  describe '#create' do
    let(:league) { FactoryGirl.build(:league, user: user) }
    it 'creates a league for a user' do
      expect { post :create, user_id: user.id, league: league.attributes }.to change(user.leagues, :count).by(1)
    end

  end

  # PATCH/PUT /api/users/:user_id/leagues/:id
  describe '#update' do
    let(:league) { FactoryGirl.create(:league, user: user) }
    before { league.name = 'Good News Bears' }
    it 'updates a league' do
      patch :update, user_id: league.user.id, id: league.id, league: league.attributes
      league.reload
      expect(league[:name]).to eq('Good News Bears')
    end
  end

  # DELETE /api/users/:user_id/leagues/:id
  describe '#destroy' do
    let(:league) { FactoryGirl.create(:league, user: user) }
    before { league }
    it 'destroys a league' do
      expect { delete :destroy, user_id: league.user.id, id: league.id }.to change(league.user.leagues, :count).by(-1)
    end
    it 'destroys all the teams for the destroyed team' do
      team1 = FactoryGirl.create(:team, league: league)
      team2 = FactoryGirl.create(:team, league: league)
      expect { delete :destroy, user_id: league.user.id, id: league.id }.to change(Team, :count).by(-2)
    end
  end
end
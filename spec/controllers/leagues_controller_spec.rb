require 'spec_helper'

describe API::LeaguesController do
  let(:current_user) { FactoryGirl.create(:user) }

  before do
    request_with_api_token
    sign_in(current_user)
  end

  # GET /api/leagues
  describe '#index' do
    before do
      FactoryGirl.create(:league, user: current_user)
      FactoryGirl.create(:league, user: current_user)
      FactoryGirl.create(:league, user: current_user)
      FactoryGirl.create(:league, user: current_user)
      FactoryGirl.create(:league, user: current_user)
    end
    it 'returns a list of leagues for the signed-in user' do
      get :index
      expect(response).to be_success
      expect(json.length).to eq(5)
    end
  end

  # GET /api/leagues/:id
  describe '#show' do
    let(:league) { FactoryGirl.create(:league, user: current_user) }
    it 'returns a league for the signed-in user' do
      get :show, id: league.id
      expect(response).to be_success
      expect(json['name']).to eq(league.name)
      expect(json['user_id']).to eq(current_user.id)
    end
  end

  # POST /api/leagues
  describe '#create' do
    let(:league) { FactoryGirl.build(:league) }
    it 'creates a league for the signed-in user' do
      expect { post :create, league: league.attributes }.to change(current_user.leagues, :count).by(1)
      expect(json['user_id']).to eq(current_user.id)
    end

  end

  # PATCH/PUT /api/leagues/:id
  describe '#update' do
    let(:league) { FactoryGirl.create(:league, user: current_user) }
    before { league.name = 'Good News Bears' }
    it 'updates a league for the signed-in user' do
      patch :update, id: league.id, league: league.attributes
      league.reload
      expect(league[:name]).to eq('Good News Bears')
    end
  end

  # DELETE /api/leagues/:id
  describe '#destroy' do
    let(:league) { FactoryGirl.create(:league, user: current_user) }
    before { league }
    it 'destroys a league for the signed-in user' do
      expect { delete :destroy, id: league.id }.to change(current_user.leagues, :count).by(-1)
    end
    it 'destroys all the teams for the destroyed league' do
      team1 = FactoryGirl.create(:team, league: league)
      team2 = FactoryGirl.create(:team, league: league)
      expect { delete :destroy, id: league.id }.to change(Team, :count).by(-2)
    end
  end
end
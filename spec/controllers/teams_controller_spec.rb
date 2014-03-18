require 'spec_helper'

describe API::TeamsController do

  before do
    request_with_api_token
    sign_in(FactoryGirl.create(:user))
  end

  # GET /api/teams
  describe '#index - all teams' do
    it 'returns a list of all teams' do
      FactoryGirl.create(:team)
      FactoryGirl.create(:team)
      FactoryGirl.create(:team)
      get :index
      expect(response).to be_success
      expect(json.length).to eq(3)
    end
  end

  # GET /api/leagues/:league_id/teams
  describe '#index - league teams' do
    it 'returns a list of teams for the specified league' do
      league = FactoryGirl.create(:league)
      FactoryGirl.create(:team)
      FactoryGirl.create(:team, league: league)
      FactoryGirl.create(:team, league: league)
      get :index, league_id: league.id
      expect(response).to be_success
      expect(json.length).to eq(2)
    end
  end

  # GET /api/users/:user_id/teams
  describe '#index - user teams' do
    it 'returns a list of teams for the specified user' do
      user = FactoryGirl.create(:user)
      FactoryGirl.create(:team)
      FactoryGirl.create(:team, user: user)
      FactoryGirl.create(:team, user: user)
      get :index, user_id: user.id
      expect(response).to be_success
      expect(json.length).to eq(2)
    end
  end

  # GET /api/leagues/:league_id/teams/:id
  describe '#show' do
    it 'returns a team' do
      team = FactoryGirl.create(:team)
      get :show, league_id: team.league.id, id: team.id
      expect(response).to be_success
      expect(json['name']).to eq('Fire Breathing Rubber Duckies')
    end
  end

  # POST /api/leagues/:league_id/teams
  describe '#create' do
    it 'creates a team for a specified league' do
      team = FactoryGirl.create(:team)
      expect { post :create, league_id: team.league.id, team: team.attributes }.to change(team.league.teams, :count).by(1)
    end
  end

  # PATCH/PUT /api/leagues/:league_id/teams/:id
  describe '#update' do
    it 'updates a team' do
      team = FactoryGirl.create(:team)
      team.name = 'Average Joes'
      patch :update, league_id: team.league.id, id: team.id, team: team.attributes
      team.reload
      expect(team.name).to eq('Average Joes')
    end
  end

  # DELETE /api/leagues/:league_id/teams/:id
  describe '#destroy' do
    it 'deletes a team' do
      team = FactoryGirl.create(:team)
      expect { delete :destroy, league_id: team.league.id, id: team.id }.to change(team.league.teams, :count).by(-1)
    end
    it 'deletes all the picks for the deleted team' do
      week1 = FactoryGirl.create(:week, number: 1)
      week2 = FactoryGirl.create(:week, number: 2)
      team = FactoryGirl.create(:team)
      pick1 = FactoryGirl.create(:pick, week: week1, team: team)
      pick2 = FactoryGirl.create(:pick, week: week2, team: team)
      expect(team.picks).to include(pick1)
      expect(team.picks).to include(pick2)
      expect { delete :destroy, league_id: team.league.id, id: team.id }.to change(team.picks, :count).by(-2)
    end
  end

end

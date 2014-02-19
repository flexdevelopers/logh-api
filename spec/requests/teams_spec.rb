require 'spec_helper'

describe API::TeamsController do

  # GET /api/teams
  describe '#index - all teams' do
    it 'returns a list of all teams' do
      FactoryGirl.create(:team)
      FactoryGirl.create(:team)
      FactoryGirl.create(:team)
      get api_teams_path
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
      get api_league_teams_path(league)
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
      get api_user_teams_path(user)
      expect(response).to be_success
      expect(json.length).to eq(2)
    end
  end

  # GET /api/teams/:id
  describe '#show' do
    it 'returns a team' do
      team = FactoryGirl.create(:team)
      get api_league_team_path(team.league, team)
      expect(response).to be_success
      expect(json['name']).to eq('Fire Breathing Rubber Duckies')
    end
  end

  # POST /api/leagues/:league_id/teams
  describe '#create' do
    it 'creates a team for a specified league' do
      team = FactoryGirl.create(:team)
      expect { post api_league_teams_path(team.league), team: team.attributes }.to change(team.league.teams, :count).by(1)
    end
  end

  # PATCH/PUT /api/teams/:id
  describe '#update' do
    it 'updates a team' do
      team = FactoryGirl.create(:team)
      team.name = 'Average Joes'
      patch api_league_team_path(team.league, team), team: team.attributes
      team.reload
      expect(team.name).to eq('Average Joes')
    end
  end

  # DELETE /api/teams/:id
  describe '#destroy' do
    it 'deletes a team' do
      team = FactoryGirl.create(:team)
      expect { delete api_league_team_path(team.league, team) }.to change(team.league.teams, :count).by(-1)
    end
    it 'deletes all the picks for the deleted team' do
      team = FactoryGirl.create(:team)
      pick1 = FactoryGirl.create(:pick, team: team)
      pick2 = FactoryGirl.create(:pick, team: team)
      expect(team.picks).to include(pick1)
      expect(team.picks).to include(pick2)
      expect { delete api_league_team_path(team.league, team) }.to change(team.picks, :count).by(-2)
    end
  end

end

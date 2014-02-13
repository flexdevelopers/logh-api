require 'spec_helper'

describe API::TeamsController do

  # GET /api/teams
  describe '#index - all teams' do
    it 'returns a list of all teams' do
      get api_teams_path
    end
  end

  # GET /api/leagues/:league_id/teams
  describe '#index - league teams' do
    it 'returns a list of teams for the specified league' do
      league = FactoryGirl.create(:league)
      get api_league_teams_path(league)
    end
  end

  # GET /api/users/:user_id/teams
  describe '#index - user teams' do
    it 'returns a list of teams for the specified user' do
      user = FactoryGirl.create(:user)
      get api_user_teams_path(user)
    end
  end

  # GET /api/teams/:id
  describe '#show' do
    it 'returns a team' do
      team = FactoryGirl.create(:team)
      get api_team_path(team)
    end
  end

  # GET /api/leagues/:league_id/teams/new
  describe '#new' do
    it 'returns a new team for a specified league' do
      league = FactoryGirl.create(:league)
      get new_api_league_team_path(league)
    end
  end

  # POST /api/leagues/:league_id/teams
  describe '#create' do
    it 'creates a team for a specified league' do
      team = FactoryGirl.create(:team)
      post api_league_teams_path(team.league, team), team: team.attributes
    end
  end

  # PATCH/PUT /api/teams/:id
  describe '#update' do
    it 'updates a team' do
      team = FactoryGirl.create(:team)
      patch api_team_path(team), team: team.attributes
    end
  end

  # DELETE /api/leagues/:id
  describe '#destroy' do
    it 'deletes a team' do
      team = FactoryGirl.create(:team)
      delete api_team_path(team)
    end
  end

end

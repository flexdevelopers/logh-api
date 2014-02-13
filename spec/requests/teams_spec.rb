require 'spec_helper'

describe API::TeamsController do

  describe '#index' do
    it 'returns a list of teams for the specified league' do
      league = FactoryGirl.create(:league)
      get api_league_teams_path(league)
    end
  end

  describe '#show' do
    it 'returns a team' do
      team = FactoryGirl.create(:team)
      get api_team_path(team)
    end
  end

  describe '#new' do
    it 'returns a new team for a specified league' do
      league = FactoryGirl.create(:league)
      get new_api_league_team_path(league)
    end
  end

  describe '#create' do
    it 'creates a team for a specified league' do
      team = FactoryGirl.create(:team)
      post api_league_teams_path(team.league, team), team: team.attributes
    end
  end

  describe '#update' do
    it 'updates a team' do
      team = FactoryGirl.create(:team)
      patch api_team_path(team), team: team.attributes
    end
  end

  describe '#destroy' do
    it 'deletes a team' do
      team = FactoryGirl.create(:team)
      delete api_team_path(team)
    end
  end

end

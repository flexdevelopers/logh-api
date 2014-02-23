require 'spec_helper'

describe API::PicksController do

  before do
    bypass_http_token_authentication_on API::PicksController
  end

  #GET /api/teams/team_id/picks
  describe '#index - team picks' do
    it 'returns a list of picks for a specified team' do
      team1 = FactoryGirl.create(:team)
      team2 = FactoryGirl.create(:team)
      FactoryGirl.create(:pick, team: team1)
      FactoryGirl.create(:pick, team: team1)
      FactoryGirl.create(:pick, team: team1)
      FactoryGirl.create(:pick, team: team2)
      get api_team_picks_path(team1)
      expect(response).to be_success
      expect(json.length).to eq(3)
    end
  end

  #GET /api/picks/id
  describe '#show' do
    it 'returns a pick' do
      pick = FactoryGirl.create(:pick)
      get api_team_pick_path(pick.team, pick)
      expect(response).to be_success
      expect(json['team_id']).to eq(pick.team.id)
    end
  end

  #POST /api/teams/team_id/picks
  describe '#create' do
    it 'creates a pick for the specified team' do
      pick = FactoryGirl.create(:pick)
      expect { post api_team_picks_path(pick.team), pick: pick.attributes }.to change(pick.team.picks, :count).by(1)
      expect(response).to be_success
    end
  end

  #PATCH/PUT /api/picks/id
  #todo: nothing to update yet
  describe '#update' do
    xit 'updates a pick' do
      pick = FactoryGirl.create(:pick)
      patch api_pick_path(pick), pick: pick.attributes
      expect(response).to be_success
    end
  end

  #DELETE /api/picks/id
  describe '#destroy' do
    it 'deletes a pick' do
      pick = FactoryGirl.create(:pick)
      expect { delete api_team_pick_path(pick.team, pick) }.to change(pick.team.picks, :count).by(-1)
    end
  end

end

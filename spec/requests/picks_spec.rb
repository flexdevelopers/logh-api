require 'spec_helper'

describe API::PicksController do

  #GET /api/teams/team_id/picks
  describe '#index - team picks' do
    it 'returns a list of picks for a specified team' do
      team = FactoryGirl.create(:team)
      get api_team_picks_path(team)
    end
  end

  #GET /api/picks/id
  describe '#show' do
    it 'returns a pick' do
      pick = FactoryGirl.create(:pick)
      get api_pick_path(pick)
    end
  end

  #POST /api/teams/team_id/picks
  describe '#create' do
    it 'creates a pick for the specified team' do
      team = FactoryGirl.create(:team)
      pick = FactoryGirl.create(:pick)
      post api_team_picks_path(team), pick: pick
    end
  end

  #PATCH/PUT /api/picks/id
  describe '#update' do
    it 'updates a pick' do
      pick = FactoryGirl.create(:pick)
      patch api_pick_path(pick), pick: pick.attributes
    end
  end

  #DELETE /api/picks/id
  describe '#destroy' do
    it 'deletes a pick' do
      pick = FactoryGirl.create(:pick)
      delete api_pick_path(pick)
    end
  end

end

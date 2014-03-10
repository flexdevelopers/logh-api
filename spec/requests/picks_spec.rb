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

  #POST /api/teams/team_id/picks?week_id=:week_id&loser_id=:squad_id
  describe '#create' do
    it 'creates a pick for the specified team' do
      pick = FactoryGirl.build(:pick)
      expect { post api_team_picks_path(pick.team), pick: pick.attributes }.to change(pick.team.picks, :count).by(1)
      expect(response).to be_success
    end
    context 'when the team tries to make two picks in a week' do
      it 'the 2nd pick is not created' do
        week = FactoryGirl.create(:week, number: 1)
        team = FactoryGirl.create(:team)
        squad1 = FactoryGirl.create(:squad)
        squad2 = FactoryGirl.create(:squad)
        pick1 = FactoryGirl.create(:pick, week: week, team: team, loser: squad1)
        pick2_params = FactoryGirl.attributes_for(:pick, week: week, team: team, loser: squad2)
        expect { post api_team_picks_path(team), pick: pick2_params }.not_to change(week.picks, :count).by(1)
        expect(response.status).to eq(422) # Unprocessable Entity
      end
    end
    context 'when the team tries make two picks with the same loser' do
      it 'the 2nd pick is not created' do
        week1 = FactoryGirl.create(:week, number: 1)
        week2 = FactoryGirl.create(:week, number: 2)
        team = FactoryGirl.create(:team)
        squad = FactoryGirl.create(:squad)
        week1_pick = FactoryGirl.create(:pick, team: team, week: week1, loser: squad)
        week2_pick_params = FactoryGirl.attributes_for(:pick, team: team, week: week2, loser: squad)
        expect { post api_team_picks_path(team), pick: week2_pick_params }.not_to change(team.picks, :count).by(1)
        expect(response.status).to eq(422) # Unprocessable Entity
      end
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

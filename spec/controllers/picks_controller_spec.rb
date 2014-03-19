require 'spec_helper'

describe API::PicksController do

  before do
    request_with_api_token
    sign_in(FactoryGirl.create(:user))
  end

  #GET /api/teams/team_id/picks
  describe '#index - team picks' do
    let(:team1) { FactoryGirl.create(:team) }
    let(:team2) { FactoryGirl.create(:team) }
    before {
      FactoryGirl.create(:pick, team: team1)
      FactoryGirl.create(:pick, team: team1)
      FactoryGirl.create(:pick, team: team1)
      FactoryGirl.create(:pick, team: team2)
    }
    it 'returns a list of picks for a specified team' do
      get :index, team_id: team1.id
      expect(response).to be_success
      expect(json.length).to eq(3)
    end
  end

  #GET /api/teams/:team_id/picks/id
  describe '#show' do
    let(:pick) { FactoryGirl.create(:pick) }
    it 'returns a pick' do
      get :show, team_id: pick.team.id, id: pick.id
      expect(response).to be_success
      expect(json['team_id']).to eq(pick.team.id)
    end
  end

  #POST /api/teams/team_id/picks?week_id=:week_id&loser_id=:squad_id
  describe '#create' do
    let(:pick) { FactoryGirl.build(:pick) }
    it 'creates a pick for the specified team' do
      expect { post :create, team_id: pick.team.id, pick: pick.attributes }.to change(pick.team.picks, :count).by(1)
      expect(response).to be_success
    end
    context 'when the team tries to make two picks in a week' do
      let(:week) { FactoryGirl.create(:week, number: 1) }
      let(:team) { FactoryGirl.create(:team) }
      let(:squad1) { FactoryGirl.create(:squad) }
      let(:squad2) { FactoryGirl.create(:squad) }
      let(:pick2_params) { FactoryGirl.attributes_for(:pick, week: week, team: team, loser: squad2) }
      before { FactoryGirl.create(:pick, week: week, team: team, loser: squad1) }
      it 'the 2nd pick is not created' do
        expect { post :create, team_id: team.id, pick: pick2_params }.not_to change(week.picks, :count).by(1)
        expect(response.status).to eq(422) # Unprocessable Entity
      end
    end
    context 'when the team tries make two picks with the same loser' do
      let(:week1) { FactoryGirl.create(:week, number: 1) }
      let(:week2) { FactoryGirl.create(:week, number: 2) }
      let(:team) { FactoryGirl.create(:team) }
      let(:squad) { FactoryGirl.create(:squad) }
      before { FactoryGirl.create(:pick, team: team, week: week1, loser: squad) }
      it 'the 2nd pick is not created' do
        week2_pick_params = FactoryGirl.attributes_for(:pick, team: team, week: week2, loser: squad)
        expect { post :create, team_id: team.id, pick: week2_pick_params }.not_to change(team.picks, :count).by(1)
        expect(response.status).to eq(422) # Unprocessable Entity
      end
    end
  end

  #PATCH/PUT /api/picks/id
  #todo: nothing to update yet - this route needs to be updated
  describe '#update' do
    let(:pick) { FactoryGirl.create(:pick) }
    xit 'updates a pick' do
      patch :update, id: pick.id, pick: pick.attributes
      expect(response).to be_success
    end
  end

  #DELETE /api/teams/:team_id/picks/id
  describe '#destroy' do
    let(:pick) { FactoryGirl.create(:pick) }
    it 'deletes a pick' do
      expect { delete :destroy, team_id: pick.team.id, id: pick.id }.to change(pick.team.picks, :count).by(-1)
    end
  end

end

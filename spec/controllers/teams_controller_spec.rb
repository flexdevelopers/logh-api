require 'spec_helper'

describe API::TeamsController do
  let(:current_user) { FactoryGirl.create(:user) }

  before do
    sign_in(current_user)
  end

  # GET /api/leagues/:league_id/teams
  describe '#index' do
    let(:league) { FactoryGirl.create(:league) }
    before do
      FactoryGirl.create(:team, league: league, coaches: [ current_user ])
      FactoryGirl.create(:team, league: league, coaches: [ current_user ])
    end
    it 'returns a list of teams for the specified league' do
      get :index, league_id: league.id
      expect(response).to be_success
      expect(json.length).to eq(2)
    end
  end

  # GET /api/leagues/:league_id/teams/:id
  describe '#show' do
    context 'when the current user is a coach of the team' do
      let(:team) { FactoryGirl.create(:team, coaches: [ current_user ]) }
      it 'returns the team' do
        get :show, league_id: team.league.id, id: team.id
        expect(response).to be_success
        expect(json['name']).to eq('Fire Breathing Rubber Duckies')
      end
    end
    context 'when the current user is not a coach of the team' do
      let(:another_user) { FactoryGirl.create(:user) }
      let(:team) { FactoryGirl.create(:team, coaches: [ another_user ]) }
      it 'returns unathorized' do
        get :show, league_id: team.league.id, id: team.id
        expect(response.status).to eq(401)
      end
    end
  end

  # POST /api/leagues/:league_id/teams
  describe '#create' do
    let(:team) { FactoryGirl.build(:team) }
    context 'when a valid league password is provided' do
      it 'creates a team for a specified league' do
        expect { post :create, league_id: team.league.id, league_password: 'foobar', team: team.attributes }.to change(current_user.teams, :count).by(1)
      end
    end
    context 'when an invalid league password is provided' do
      it 'does not create a team and returns unauthorized' do
        expect { post :create, league_id: team.league.id, league_password: 'badpassword', team: team.attributes }.to change(current_user.teams, :count).by(0)
        expect(response.status).to eq(401)
      end
    end
  end

  # PATCH/PUT /api/leagues/:league_id/teams/:id
  describe '#update' do
    context 'when the current user is a coach of the team' do
      let(:team) { FactoryGirl.create(:team, coaches: [current_user]) }
      before { team.name = 'Average Joes' }
      it 'updates the team' do
        patch :update, league_id: team.league.id, id: team.id, team: team.attributes
        team.reload
        expect(team.name).to eq('Average Joes')
      end
    end
    context 'when the current user is not a coach of the team' do
      let(:another_user) { FactoryGirl.create(:user) }
      let(:team) { FactoryGirl.create(:team, coaches: [another_user]) }
      before { team.name = 'Average Joes' }
      it 'returns unauthorized' do
        patch :update, league_id: team.league.id, id: team.id, team: team.attributes
        expect(response.status).to eq(401)
      end
    end
  end

  # DELETE /api/leagues/:league_id/teams/:id
  describe '#destroy' do
    context 'when the current user is a coach of the team' do
      let(:team) { FactoryGirl.create(:team, coaches: [current_user]) }
      before { team }
      it 'deletes the team' do
        expect { delete :destroy, league_id: team.league.id, id: team.id }.to change(current_user.teams, :count).by(-1)
      end
      it 'deletes all the picks for the deleted team' do
        week1 = FactoryGirl.create(:week, number: 1)
        week2 = FactoryGirl.create(:week, number: 2)
        pick1 = FactoryGirl.create(:pick, week: week1, team: team)
        pick2 = FactoryGirl.create(:pick, week: week2, team: team)
        expect(team.picks).to include(pick1)
        expect(team.picks).to include(pick2)
        expect { delete :destroy, league_id: team.league.id, id: team.id }.to change(Pick, :count).by(-2)
      end
    end
    context 'when the current user is not a coach of the team' do
      let(:another_user) { FactoryGirl.create(:user) }
      let(:team) { FactoryGirl.create(:team, coaches: [another_user]) }
      it 'does not delete the team and returns unauthorized' do
        expect { delete :destroy, league_id: team.league.id, id: team.id }.not_to change(current_user.teams, :count).by(-1)
        expect(response.status).to eq(401)
      end
    end
  end

end

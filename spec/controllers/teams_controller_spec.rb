require 'spec_helper'

describe API::TeamsController do
  let(:current_user) { FactoryGirl.create(:user) }

  before do
    sign_in(current_user)
  end

  # GET /api/leagues/:league_id/teams
  describe '#index' do
    context 'when the current user is a commish of the league' do
      let(:league) { FactoryGirl.create(:league, commishes: [ current_user ]) }
      before do
        FactoryGirl.create(:team, league: league)
        FactoryGirl.create(:team, league: league)
      end
      it 'returns a list of teams for the specified league' do
        get :index, league_id: league.id
        expect(response).to be_success
        expect(json.length).to eq(2)
      end
    end
    context 'when the current user has a team in the league' do
      let(:league) { FactoryGirl.create(:league) }
      before do
        FactoryGirl.create(:team, league: league, coaches: [ current_user ])
        FactoryGirl.create(:team, league: league)
        FactoryGirl.create(:team, league: league)
      end
      it 'returns a list of teams for the specified league' do
        get :index, league_id: league.id
        expect(response).to be_success
        expect(json.length).to eq(3)
      end
    end
    context 'when the current user is not a commish of the league nor has a team in the league' do
      let(:league) { FactoryGirl.create(:league) }
      before do
        FactoryGirl.create(:team, league: league)
        FactoryGirl.create(:team, league: league)
      end
      it 'returns unauthorized' do
        get :index, league_id: league.id
        expect(response.status).to eq(401)
      end
    end
  end

  # GET /api/leagues/:league_id/teams/:id
  describe '#show' do
    context 'when the current user is a coach of the team' do
      let(:team) { FactoryGirl.create(:team, coaches: [ current_user ]) }
      it 'returns the team' do
        get :show, league_id: team.league.id, id: team.id
        expect(response).to be_success
        expect(json[:name]).to eq('Fire Breathing Rubber Duckies')
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
      subject { -> { post :create, league_id: team.league.id, league_password: 'foobar', team: team.attributes } }
      it { should change(team.league.teams, :count).by(1) }
      it { should change(current_user.teams, :count).by(1) }
    end
    context 'when an invalid league password is provided' do
      subject(:foo) { -> { post :create, league_id: team.league.id, league_password: 'badpassword', team: team.attributes } }
      it { should change(team.league.teams, :count).by(0) }
      it { should change(current_user.teams, :count).by(0) }
    end
    context 'when max number of teams per user has been met' do
      let(:league) { FactoryGirl.create(:league, max_teams_per_user: 2) }
      let(:another_league) { FactoryGirl.create(:league) }
      let(:team) { FactoryGirl.build(:team) }
      before do
        FactoryGirl.create(:team, league: league, coaches: [current_user])
        FactoryGirl.create(:team, league: league, coaches: [current_user])
        FactoryGirl.create(:team, league: another_league, coaches: [current_user])
      end
      it 'returns unauthorized and does not create a team' do
        expect { post :create, league_id: league.id, league_password: 'foobar', team: team.attributes }.to change(league.teams, :count).by(0)
        expect(response.status).to eq(401)
      end
    end
    context 'when max number of teams per user has not been met' do
      let(:league) { FactoryGirl.create(:league, max_teams_per_user: 3) }
      let(:another_league) { FactoryGirl.create(:league) }
      let(:team) { FactoryGirl.build(:team) }
      before do
        FactoryGirl.create(:team, league: league, coaches: [current_user])
        FactoryGirl.create(:team, league: league, coaches: [current_user])
        FactoryGirl.create(:team, league: another_league, coaches: [current_user])
      end
      it 'creates a team' do
        expect { post :create, league_id: league.id, league_password: 'foobar', team: team.attributes }.to change(league.teams, :count).by(1)
        expect(response).to be_success
      end
    end
    context 'when max number of teams per user is not defined' do
      let(:league) { FactoryGirl.create(:league) }
      let(:team) { FactoryGirl.build(:team, league: league) }
      before do
        FactoryGirl.create(:team, league: league, coaches: [current_user])
        FactoryGirl.create(:team, league: league, coaches: [current_user])
      end
      it 'creates a team' do
        expect { post :create, league_id: league.id, league_password: 'foobar', team: team.attributes }.to change(league.teams, :count).by(1)
        expect(response).to be_success
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
        team.reload
        expect(team.name).not_to eq('Average Joes')
      end
    end
  end

  # DELETE /api/leagues/:league_id/teams/:id
  describe '#destroy' do
    context 'when the current user is a coach of the team' do
      let(:team) { FactoryGirl.create(:team, coaches: [current_user]) }
      subject { -> { delete :destroy, league_id: team.league.id, id: team.id } }
      before { team }
      it { should change(team.league.teams, :count).by(-1) }
      it { should change(current_user.teams, :count).by(-1) }
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
      subject { -> { delete :destroy, league_id: team.league.id, id: team.id } }
      it { should change(team.league.teams, :count).by(0) }
      it { should change(current_user.teams, :count).by(0) }
    end
  end

end

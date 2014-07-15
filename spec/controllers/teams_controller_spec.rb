require 'spec_helper'

describe API::TeamsController do
  render_views # for rabl

  let(:current_user) { FactoryGirl.create(:user) }

  before do
    sign_in(current_user)
  end

  # GET /api/seasons/:season_id/teams/alive
  describe '#alive' do
    context 'when requesting alive teams for a season' do
      let(:league) { FactoryGirl.create(:league) }
      before do
        FactoryGirl.create(:team, league: league, alive: true, coaches: [ current_user ])
        FactoryGirl.create(:team, league: league, alive: true, coaches: [ current_user ])
        FactoryGirl.create(:team, league: league, alive: true, coaches: [ current_user ])
        FactoryGirl.create(:team, league: league, alive: false, coaches: [ current_user ])
      end
      it 'returns only alive teams for the current user' do
        get :alive, format: 'json', season_id: league.season.id
        expect(response).to be_success
        expect(json.length).to eq(3)
        json.each do |team|
          expect(team[:alive]).to be_true
        end
      end
    end
  end

  # GET /api/seasons/:season_id/teams/alive?league_id=23
  describe '#alive' do
    context 'when requesting alive teams for a league' do
      let(:league) { FactoryGirl.create(:league) }
      before do
        FactoryGirl.create(:team, league: league, alive: true)
        FactoryGirl.create(:team, league: league, alive: true)
        FactoryGirl.create(:team, league: league, alive: false)
        FactoryGirl.create(:team, league: league, alive: false)
      end
      it 'returns only alive teams for the league' do
        get :alive, format: 'json', season_id: league.season.id, league_id: league.id
        expect(response).to be_success
        expect(json.length).to eq(2)
        json.each do |team|
          expect(team[:alive]).to be_true
        end
      end
    end
  end

  # GET /api/seasons/:season_id/teams/dead
  describe '#dead' do
    context 'when requesting dead teams for a season' do
      let(:league) { FactoryGirl.create(:league) }
      before do
        FactoryGirl.create(:team, league: league, alive: false, coaches: [ current_user ])
        FactoryGirl.create(:team, league: league, alive: false, coaches: [ current_user ])
        FactoryGirl.create(:team, league: league, alive: true, coaches: [ current_user ])
        FactoryGirl.create(:team, league: league, alive: true, coaches: [ current_user ])
      end
      it 'returns only dead teams for the current user' do
        get :dead, format: 'json', season_id: league.season.id
        expect(response).to be_success
        expect(json.length).to eq(2)
        json.each do |team|
          expect(team[:alive]).to be_false
        end
      end
    end
  end

  # GET /api/seasons/:season_id/teams/dead?league_id=45
  describe '#dead' do
    context 'when requesting dead teams for a league' do
      let(:league) { FactoryGirl.create(:league) }
      before do
        FactoryGirl.create(:team, league: league, alive: true)
        FactoryGirl.create(:team, league: league, alive: true)
        FactoryGirl.create(:team, league: league, alive: true)
        FactoryGirl.create(:team, league: league, alive: false)
      end
      it 'returns only dead teams for the league' do
        get :dead, format: 'json', season_id: league.season.id, league_id: league.id
        expect(response).to be_success
        expect(json.length).to eq(1)
        json.each do |team|
          expect(team[:alive]).to be_false
        end
      end
    end
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
        get :index, format: 'json', league_id: league.id
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
        get :index, format: 'json', league_id: league.id
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
        expect(response.status).to eq(403)
      end
    end
  end

  # GET /api/leagues/:league_id/teams/:id
  describe '#show' do
    context 'when the current user is a coach of the team' do
      let(:another_user) { FactoryGirl.create(:user, email: 'another@user.com') }
      let(:team) { FactoryGirl.create(:team, coaches: [ current_user, another_user ]) }
      it 'returns the team and the emails of the coaches' do
        get :show, format: 'json', league_id: team.league.id, id: team.id
        expect(response).to be_success
        expect(json[:name]).to eq(team[:name])
        expect(json[:coach_emails].length).to eq(2)
        expect(json[:coach_emails]).to include(current_user[:email])
        expect(json[:coach_emails]).to include(another_user[:email])
      end
    end
    context 'when the current user is not a coach of the team' do
      let(:another_user) { FactoryGirl.create(:user) }
      let(:team) { FactoryGirl.create(:team, coaches: [ another_user ]) }
      it 'returns forbidden' do
        get :show, league_id: team.league.id, id: team.id
        expect(response.status).to eq(403)
      end
    end
  end

  # POST /api/leagues/:league_id/teams
  describe '#create' do
    context 'when creating 2 teams in the same league with the same name' do
      let(:team) { FactoryGirl.create(:team, name: 'foobar team')}
      let(:bad_team_params) { FactoryGirl.attributes_for(:team, name: 'foobar team') }
      it 'the 2nd team is not created' do
        expect { post :create, league_id: team.league_id, team: bad_team_params }.not_to change(team.league.teams, :count).by(1)
        expect(response.status).to eq(422) # Unprocessable Entity
      end
    end
    context 'when a league is private' do
      let(:league) { FactoryGirl.create(:league, public: false) }
      context 'and a league invitation exists' do
        let(:team) { FactoryGirl.build(:team, league: league) }
        before { FactoryGirl.create(:invitation, league: team.league, email: current_user.email) }
        subject { -> { post :create, league_id: team.league.id, team: team.attributes } }
        it { should change(team.league.teams, :count).by(1) }
        it { should change(current_user.teams, :count).by(1) }
      end
      context 'and a league invitation exists' do
        let(:team) { FactoryGirl.build(:team, league: league) }
        before { FactoryGirl.create(:invitation, league: team.league, email: current_user.email) }
        it 'marks the invitation as accepted' do
          post :create, league_id: team.league.id, team: team.attributes
          invitation = league.invitations.find_by(email: current_user.email)
          expect(invitation.accepted_at).to be_within(2.seconds).of(Time.now)
        end
      end
      context 'and an invitation has already been accepted' do
        let(:team) { FactoryGirl.build(:team, league: league) }
        before { FactoryGirl.create(:invitation, league: team.league, email: current_user.email, accepted_at: 2.days.ago) }
        it 'it does not update the accepted_at field' do
          post :create, league_id: team.league.id, team: team.attributes
          invitation = league.invitations.find_by(email: current_user.email)
          expect(invitation.accepted_at).to be_within(2.seconds).of(2.days.ago)
        end
      end
      context 'and no invitation exists' do
        let(:team) { FactoryGirl.build(:team, league: league) }
        subject { -> { post :create, league_id: team.league.id, team: team.attributes } }
        it { should change(team.league.teams, :count).by(0) }
        it { should change(current_user.teams, :count).by(0) }
      end
      context 'and no invitation exists and the commish tries to join the league' do
        let(:league) { FactoryGirl.create(:league, public: false, commishes: [ current_user ]) }
        let(:team) { FactoryGirl.build(:team, league: league) }
        subject { -> { post :create, league_id: team.league.id, team: team.attributes } }
        it { should change(team.league.teams, :count).by(1) }
        it { should change(current_user.teams, :count).by(1) }
      end
    end
    context 'when a league is public' do
      let(:league) { FactoryGirl.create(:league, public: true) }
      context 'and no invitation exists' do
        let(:team) { FactoryGirl.build(:team, league: league) }
        subject { -> { post :create, league_id: team.league.id, team: team.attributes } }
        it { should change(team.league.teams, :count).by(1) }
        it { should change(current_user.teams, :count).by(1) }
      end
    end
    context 'when the league has already started' do
      let(:start_week) { FactoryGirl.create(:week, starts_at: Time.zone.now - 1.week) }
      let(:league) { FactoryGirl.create(:league, start_week: start_week) }
      let(:team) { FactoryGirl.build(:team, league: league) }
      subject { -> { post :create, league_id: team.league.id, team: team.attributes } }
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
        expect { post :create, league_id: league.id, team: team.attributes }.to change(league.teams, :count).by(0)
        expect(response.status).to eq(403)
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
        expect { post :create, league_id: league.id, team: team.attributes }.to change(league.teams, :count).by(1)
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
        expect { post :create, league_id: league.id, team: team.attributes }.to change(league.teams, :count).by(1)
        expect(response).to be_success
      end
    end
  end

  # PATCH/PUT /api/leagues/:league_id/teams/:id
  describe '#update' do
    context 'when the current user is a coach of the team' do
      let(:team) { FactoryGirl.create(:team, coaches: [current_user]) }
      before do
        team.name = 'Average Joes'
        team.alive = false
        team.active = false
      end
      it 'updates the team except for the alive and active attribute' do
        put :update, league_id: team.league.id, id: team.id, team: team.attributes
        team.reload
        expect(team.name).to eq('average joes')
        expect(team.alive).to be_true # this field is not updated
        expect(team.active).to be_true # this field is changed via the activate / deactivate route
      end
      context 'and the league has already started' do
        let(:start_week) { FactoryGirl.create(:week, starts_at: Time.zone.now - 1.week) }
        let(:league) { FactoryGirl.create(:league, start_week: start_week) }
        let(:team) { FactoryGirl.create(:team, name: 'Original Name', league: league, coaches: [current_user]) }
        before do
          team.name = 'A Different Name'
        end
        it 'does not update the team' do
          put :update, league_id: team.league.id, id: team.id, team: team.attributes
          team.reload
          expect(team.name).to eq('original name')
        end
      end
    end
    context 'when the current user is not a coach of the team' do
      let(:another_user) { FactoryGirl.create(:user) }
      let(:team) { FactoryGirl.create(:team, coaches: [another_user]) }
      before { team.name = 'Average Joes' }
      it 'returns unauthorized' do
        put :update, league_id: team.league.id, id: team.id, team: team.attributes
        expect(response.status).to eq(403)
        team.reload
        expect(team.name).not_to eq('Average Joes')
      end
    end
    context 'when the current user is a commish of the league and the league has already started' do
      let(:start_week) { FactoryGirl.create(:week, starts_at: Time.zone.now - 1.week) }
      let(:league) { FactoryGirl.create(:league, start_week: start_week, commishes: [current_user]) }
      let(:team) { FactoryGirl.create(:team, name: 'Original Name', league: league, coaches: [current_user]) }
      before do
        team.name = 'A Different Name'
      end
      it 'does update the team' do
        put :update, league_id: team.league.id, id: team.id, team: team.attributes
        team.reload
        expect(team.name).to eq('a different name')
      end
    end

  end

  # DELETE /api/leagues/:league_id/teams/:id
  describe '#destroy' do
    context 'when the current user is a coach of the team' do
      let(:team) { FactoryGirl.create(:team, coaches: [current_user]) }
      subject { -> { delete :destroy, league_id: team.league.id, id: team.id } }
      before { team }
      it { should change(team.league.teams, :count).by(0) }
      it { should change(current_user.teams, :count).by(0) }

    end
  end

end

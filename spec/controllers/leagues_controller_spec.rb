require 'spec_helper'

describe API::LeaguesController do
  render_views # for rabl

  let(:current_user) { FactoryGirl.create(:user) }
  let(:season) { FactoryGirl.create(:season) }

  before do
    sign_in(current_user)
  end

  # GET /api/seasons/:season_id/leagues/public
  describe '#public' do
    context 'when requesting public leagues for a season' do
      before do
        FactoryGirl.create(:league, public: true, season: season)
        FactoryGirl.create(:league, public: true, season: season)
        FactoryGirl.create(:league, public: true, season: season)
        FactoryGirl.create(:league, public: false, season: season)
      end
      it 'returns only public leagues' do
        get :public, format: 'json', season_id: season.id
        expect(response).to be_success
        expect(json.length).to eq(3)
        json.each do |league|
          expect(league[:public]).to be_true
        end
      end
    end
  end

  # GET /api/seasons/:season_id/leagues/private
  describe '#private' do
    context 'when requesting private leagues for a season' do
      before do
        FactoryGirl.create(:league, public: true, season: season)
        FactoryGirl.create(:league, public: true, season: season)
        FactoryGirl.create(:league, public: false, season: season)
        FactoryGirl.create(:league, public: false, season: season)
      end
      it 'returns only private leagues' do
        get :private, format: 'json', season_id: season.id
        expect(response).to be_success
        expect(json.length).to eq(2)
        json.each do |league|
          expect(league[:public]).to be_false
        end
      end
    end
  end

  # GET /api/seasons/:season_id/leagues
  describe '#index' do
    before do
      FactoryGirl.create(:league, season: season)
      FactoryGirl.create(:league, season: season)
      FactoryGirl.create(:league, season: season)
      FactoryGirl.create(:league, season: season)
      FactoryGirl.create(:league, season: season)
    end
    it 'returns a list of leagues for the season' do
      get :index, format: 'json', season_id: season.id
      expect(response).to be_success
      expect(json.length).to eq(5)
    end
  end

  # GET /api/seasons/:season_id/leagues/:id
  describe '#show' do
    context 'when the signed in user requests a league' do
      let(:first_user) { FactoryGirl.create(:user, email: 'don@draper.com') }
      let(:second_user) { FactoryGirl.create(:user, email: 'betty@draper.com') }
      let(:league) { FactoryGirl.create(:league, season: season, commishes: [ first_user, second_user ]) }
      it 'returns the league along with the emails of the commishes' do
        get :show, format: 'json', season_id: season.id, id: league.id
        expect(response).to be_success
        expect(json[:name]).to eq(league.name)
        expect(json[:commish_emails].length).to eq(2)
        expect(json[:commish_emails]).to include('don@draper.com')
        expect(json[:commish_emails]).to include('betty@draper.com')
      end
    end
    context 'when the signed in user requests a league that is public and has started' do
      let(:start_week) { FactoryGirl.create(:week, starts_at: Time.zone.now - 1.week) }
      let(:league) { FactoryGirl.create(:league, public: true, start_week: start_week) }
      it 'returns the league' do
        get :show, format: 'json', season_id: league.season_id, id: league.id
        expect(response).to be_success
        expect(json[:name]).to eq(league.name)
      end
    end
    context 'when the signed in user requests a league that is private and has not started' do
      let(:start_week) { FactoryGirl.create(:week, starts_at: Time.zone.now + 1.week) }
      let(:league) { FactoryGirl.create(:league, public: false, start_week: start_week) }
      it 'returns the league' do
        get :show, format: 'json', season_id: league.season_id, id: league.id
        expect(response).to be_success
        expect(json[:name]).to eq(league.name)
      end
    end
    context 'when the signed in user requests a league that is private and has started and they belong to it' do
      let(:start_week) { FactoryGirl.create(:week, starts_at: Time.zone.now - 1.week) }
      let(:league) { FactoryGirl.create(:league, public: false, start_week: start_week) }
      before do
        FactoryGirl.create(:team, league: league, alive: true, coaches: [ current_user ])
      end
      it 'returns the league' do
        get :show, format: 'json', season_id: league.season_id, id: league.id
        expect(response).to be_success
        expect(json[:name]).to eq(league.name)
      end
    end
    context 'when the signed in user requests a league that is private and has started and they do not belong to it' do
      let(:start_week) { FactoryGirl.create(:week, starts_at: Time.zone.now - 1.week) }
      let(:league) { FactoryGirl.create(:league, public: false, start_week: start_week) }
      it 'returns forbidden' do
        get :show, format: 'json', season_id: league.season_id, id: league.id
        expect(response.status).to eq(403) # Forbidden
      end
    end
  end

  # POST /api/seasons/:season_id/leagues
  describe '#create' do
    context 'when creating 2 leagues in the same season with the same name' do
      let(:league) { FactoryGirl.create(:league, name: 'foobar league')}
      let(:bad_league_params) { FactoryGirl.attributes_for(:league, name: 'foobar league') }
      it 'the 2nd league is not created' do
        expect { post :create, season_id: league.season_id, league: bad_league_params }.not_to change(league.season.leagues, :count).by(1)
        expect(response.status).to eq(422) # Unprocessable Entity
      end
    end
    context 'when the start week start date is in the future' do
      let(:future_week) { FactoryGirl.create(:week, starts_at: Time.zone.now + 1.day) }
      let(:league_params) { FactoryGirl.attributes_for(:league, start_week_id: future_week.id) }
      subject { -> { post :create, season_id: season.id, league: league_params } }
      it { should change(season.leagues, :count).by(1) }
      it { should change(current_user.managed_leagues, :count).by(1) }
    end
    context 'when the start week start date is in the past' do
      let(:old_week) { FactoryGirl.create(:week, starts_at: Time.zone.now - 1.day) }
      let(:league_params) { FactoryGirl.attributes_for(:league, start_week_id: old_week.id) }
      subject { -> { post :create, season_id: season.id, league: league_params } }
      it { should change(season.leagues, :count).by(0) }
      it { should change(current_user.managed_leagues, :count).by(0) }
    end
    context 'when the start week start date is today' do
      let(:old_week) { FactoryGirl.create(:week, starts_at: Time.zone.now) }
      let(:league_params) { FactoryGirl.attributes_for(:league, start_week_id: old_week.id) }
      subject { -> { post :create, season_id: season.id, league: league_params } }
      it { should change(season.leagues, :count).by(0) }
      it { should change(current_user.managed_leagues, :count).by(0) }
    end
    context 'when the league is public and no password is given' do
      let(:league_params) { FactoryGirl.attributes_for(:league, public: true, password: '') }
      subject { -> { post :create, season_id: season.id, league: league_params } }
      it { should change(season.leagues, :count).by(1) }
      it { should change(current_user.managed_leagues, :count).by(1) }
    end
  end

  # PUT /api/seasons/:season_id/leagues/:id
  describe '#update' do
    context 'when the signed in user is a commish of the league' do
      let(:league) { FactoryGirl.create(:league, season: season, commishes: [ current_user ]) }
      let(:future_week) { FactoryGirl.create(:week, starts_at: Time.zone.now + 1.day) }
      before {
        league.name = 'Good News Bears'
        league.start_week = future_week
        league.public = false
        league.max_teams_per_user = 15
      }
      it 'updates the league' do
        put :update, season_id: season.id, id: league.id, league: league.attributes
        league.reload
        expect(league.name).to eq('Good News Bears')
        expect(league.start_week).to eq(future_week)
        expect(league.public).to be_false
        expect(league.max_teams_per_user).to eq(15)
      end
      context 'and the start week has yet to arrive' do
        context 'and the start week is changed to a future start week' do
          let(:current_start_week) { FactoryGirl.create(:week, starts_at: Time.zone.now + 1.day) }
          let(:new_start_week) { FactoryGirl.create(:week, starts_at: Time.zone.now + 1.week) }
          let(:league) { FactoryGirl.create(:league, season: season, start_week: current_start_week, commishes: [ current_user ]) }
          before { league.start_week = new_start_week }
          it 'updates the start week' do
            put :update, season_id: season.id, id: league.id, league: league.attributes
            expect(response).to be_success
            league.reload
            expect(league[:start_week_id]).to eq(new_start_week.id)
          end
        end
        context 'and the start week is changed to a past start week' do
          let(:current_start_week) { FactoryGirl.create(:week, starts_at: Time.zone.now + 1.day) }
          let(:new_start_week) { FactoryGirl.create(:week, starts_at: Time.zone.now - 1.week) }
          let(:league) { FactoryGirl.create(:league, season: season, start_week: current_start_week, commishes: [ current_user ]) }
          before { league.start_week = new_start_week }
          it 'updates the start week' do
            put :update, season_id: season.id, id: league.id, league: league.attributes
            expect(response.status).to eq(403)
            league.reload
            expect(league[:start_week_id]).to eq(current_start_week.id)
          end
        end
      end
      context 'and the start week has passed' do
        context 'and league name is changed' do
          let(:start_week) { FactoryGirl.create(:week, starts_at: Time.zone.now - 1.week) }
          let(:new_start_week) { FactoryGirl.create(:week, starts_at: Time.zone.now + 1.week) }
          let(:league) { FactoryGirl.create(:league, season: season, start_week: start_week, commishes: [ current_user ]) }
          before {
            league.name = 'Good News Bears'
            league.start_week = new_start_week
          }
          it 'it does not update the league name' do
            put :update, season_id: season.id, id: league.id, league: league.attributes
            expect(response.status).to eq(403)
            league.reload
            expect(league[:name]).not_to eq('Good News Bears')
          end
        end
      end
    end
    context 'when the signed in user is not a commish of the league' do
      let(:league) { FactoryGirl.create(:league, season: season) }
      before { league.name = 'Good News Bears' }
      it 'returns unauthorized and does not update the league' do
        put :update, season_id: season.id, id: league.id, league: league.attributes
        expect(response.status).to eq(403)
        league.reload
        expect(league[:name]).not_to eq('Good News Bears')
      end
    end
  end

  # DELETE /api/seasons/:season_id/leagues/:id
  describe '#destroy' do
    context 'when the signed in user is a commish of the league' do
      let(:league) { FactoryGirl.create(:league, season: season, commishes: [ current_user ]) }
      before { league }
      it 'destroys a league for the signed-in user' do
        expect { delete :destroy, season_id: season.id, id: league.id }.to change(current_user.managed_leagues, :count).by(-1)
      end
      it 'destroys all the teams for the destroyed league' do
        team1 = FactoryGirl.create(:team, league: league)
        team2 = FactoryGirl.create(:team, league: league)
        expect { delete :destroy, season_id: season.id, id: league.id }.to change(Team, :count).by(-2)
      end
    end
    context 'when the signed in user is not a commish of the league' do
      let(:league) { FactoryGirl.create(:league, season: season) }
      it 'should not delete the league and return unauthorized' do
        expect { delete :destroy, season_id: season.id, id: league.id }.not_to change(League, :count).by(-1)
        expect(response.status).to eq(403)
      end
    end
  end
end
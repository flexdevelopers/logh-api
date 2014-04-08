require 'spec_helper'

describe API::LeaguesController do
  let(:current_user) { FactoryGirl.create(:user) }
  let(:season) { FactoryGirl.create(:season) }

  before do
    sign_in(current_user)
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
      get :index, season_id: season.id
      expect(response).to be_success
      expect(json.length).to eq(5)
    end
  end

  # GET /api/seasons/:season_id/leagues/:id
  describe '#show' do
    context 'when the signed in user is a commish of the league' do
      let(:league) { FactoryGirl.create(:league, season: season, commishes: [ current_user ]) }
      it 'returns the league' do
        get :show, season_id: season.id, id: league.id
        expect(response).to be_success
        expect(json[:name]).to eq(league.name)
      end
    end
    context 'when the signed in user has a team in the league' do
      let(:league) { FactoryGirl.create(:league, season: season) }
      before { FactoryGirl.create(:team, league: league, coaches: [ current_user ]) }
      it 'returns the league' do
        get :show, season_id: season.id, id: league.id
        expect(response).to be_success
        expect(json[:name]).to eq(league.name)
      end
    end
    context 'when the signed in user has no team in the league and is not a commish of the league' do
      let(:league) { FactoryGirl.create(:league, season: season) }
      it 'returns unauthorized' do
        get :show, season_id: season.id, id: league.id
        expect(response.status).to eq(403)
      end
    end
  end

  # POST /api/seasons/:season_id/leagues
  describe '#create' do
    context 'when the start week start date is in the future' do
      let(:future_week) { FactoryGirl.create(:week, starts_at: Time.zone.now.to_date + 1.day) }
      let(:league_params) { FactoryGirl.attributes_for(:league, start_week_id: future_week.id) }
      subject { -> { post :create, season_id: season.id, league: league_params } }
      it { should change(season.leagues, :count).by(1) }
      it { should change(current_user.managed_leagues, :count).by(1) }
    end
    context 'when the start week start date is in the past' do
      let(:old_week) { FactoryGirl.create(:week, starts_at: Time.zone.now.to_date - 1.day) }
      let(:league_params) { FactoryGirl.attributes_for(:league, start_week_id: old_week.id) }
      subject { -> { post :create, season_id: season.id, league: league_params } }
      it { should change(season.leagues, :count).by(0) }
      it { should change(current_user.managed_leagues, :count).by(0) }
    end
    context 'when the start week start date is today' do
      let(:old_week) { FactoryGirl.create(:week, starts_at: Time.zone.now.to_date) }
      let(:league_params) { FactoryGirl.attributes_for(:league, start_week_id: old_week.id) }
      subject { -> { post :create, season_id: season.id, league: league_params } }
      it { should change(season.leagues, :count).by(0) }
      it { should change(current_user.managed_leagues, :count).by(0) }
    end
  end

  # PATCH/PUT /api/seasons/:season_id/leagues/:id
  describe '#update' do
    context 'when the signed in user is a commish of the league' do
      let(:league) { FactoryGirl.create(:league, season: season, commishes: [ current_user ]) }
      before { league.name = 'Good News Bears' }
      it 'updates the league' do
        patch :update, season_id: season.id, id: league.id, league: league.attributes
        league.reload
        expect(league[:name]).to eq('Good News Bears')
      end
      context 'and the start week has yet to arrive' do
        context 'and the start week is changed to a future start week' do
          let(:current_start_week) { FactoryGirl.create(:week, starts_at: Time.zone.now.to_date + 1.day) }
          let(:new_start_week) { FactoryGirl.create(:week, starts_at: Time.zone.now.to_date + 1.week) }
          let(:league) { FactoryGirl.create(:league, season: season, start_week: current_start_week, commishes: [ current_user ]) }
          before { league.start_week = new_start_week }
          it 'updates the start week' do
            patch :update, season_id: season.id, id: league.id, league: league.attributes
            expect(response).to be_success
            league.reload
            expect(league[:start_week_id]).to eq(new_start_week.id)
          end
        end
        context 'and the start week is changed to a past start week' do
          let(:current_start_week) { FactoryGirl.create(:week, starts_at: Time.zone.now.to_date + 1.day) }
          let(:new_start_week) { FactoryGirl.create(:week, starts_at: Time.zone.now.to_date - 1.week) }
          let(:league) { FactoryGirl.create(:league, season: season, start_week: current_start_week, commishes: [ current_user ]) }
          before { league.start_week = new_start_week }
          it 'updates the start week' do
            patch :update, season_id: season.id, id: league.id, league: league.attributes
            expect(response.status).to eq(403)
            league.reload
            expect(league[:start_week_id]).to eq(current_start_week.id)
          end
        end
      end
      context 'and the start week has passed' do
        context 'and league name is changed' do
          let(:start_week) { FactoryGirl.create(:week, starts_at: Time.zone.now.to_date - 1.week) }
          let(:new_start_week) { FactoryGirl.create(:week, starts_at: Time.zone.now.to_date + 1.week) }
          let(:league) { FactoryGirl.create(:league, season: season, start_week: start_week, commishes: [ current_user ]) }
          before {
            league.name = 'Good News Bears'
            league.start_week = new_start_week
          }
          it 'it does not update the league name' do
            patch :update, season_id: season.id, id: league.id, league: league.attributes
            expect(response.status).to eq(403)
            league.reload
            expect(league[:name]).to eq('Bad News Bears')
          end
        end
      end
    end
    context 'when the signed in user is not a commish of the league' do
      let(:league) { FactoryGirl.create(:league, season: season) }
      before { league.name = 'Good News Bears' }
      it 'returns unauthorized and does not update the league' do
        patch :update, season_id: season.id, id: league.id, league: league.attributes
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
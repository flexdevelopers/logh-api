require 'spec_helper'

describe API::WeeksController do
  render_views # for rabl

  let(:current_user) { FactoryGirl.create(:user, email: 'foo@bar.com') }

  before do
    sign_in(current_user)
  end

  # GET /api/seasons/:season_id/weeks
  describe '#index' do
    context 'when a signed in user requests the weeks for a season' do
      it 'returns the weeks for the season' do
        season = FactoryGirl.create(:season)
        FactoryGirl.create(:week, number: 1, season: season)
        FactoryGirl.create(:week, number: 2, season: season)
        get :index, format: 'json', season_id: season.id
        response.should be_success
        expect(json.length).to eq(2)
      end
    end
  end

  # GET /api/seasons/:season_id/weeks/available
  describe '#available' do
    context 'when a signed in user requests the available weeks for a season' do
      it 'returns the weeks for the season that are in the future' do
        season = FactoryGirl.create(:season)
        FactoryGirl.create(:week, number: 1, season: season, starts_at: Time.zone.now.to_date - 1.day)
        FactoryGirl.create(:week, number: 2, season: season, starts_at: Time.zone.now.to_date + 1.week)
        FactoryGirl.create(:week, number: 3, season: season, starts_at: Time.zone.now.to_date + 2.weeks)
        get :available, format: 'json', season_id: season.id
        response.should be_success
        expect(json.length).to eq(2)
      end
    end
  end

  # GET /api/seasons/:season_id/weeks/:id
  describe '#show' do
    context 'when an signed in user requests a week for a season' do
      it 'returns the week' do
        week = FactoryGirl.create(:week, number: 7)
        get :show, format: 'json', season_id: week.season.id, id: week.id
        response.should be_success
        expect(json[:number]).to eq(7)
      end
    end
  end

end

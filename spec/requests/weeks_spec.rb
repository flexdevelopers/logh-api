require 'spec_helper'

describe API::Admin::WeeksController do

  before do
    bypass_http_token_authentication_on API::Admin::WeeksController
  end

  # GET /api/admin/seasons/:season_id/weeks
  describe "#index" do
    it "returns weeks for a season" do
      season = FactoryGirl.create(:season)
      FactoryGirl.create(:week, number: 1, season: season)
      FactoryGirl.create(:week, number: 2, season: season)
      get api_admin_season_weeks_path(season)
      response.should be_success
      expect(json.length).to eq(2)
    end
  end

  # GET /api/admin/seasons/:season_id/weeks/:id
  describe "#show" do
    it "returns a week" do
      week = FactoryGirl.create(:week, number: 7)
      get api_admin_season_week_path(week.season, week)
      response.should be_success
      expect(json['number']).to eq(7)
    end
  end

  # POST /api/admin/seasons/:season_id/weeks
  describe "#create" do
    context 'when all required fields are provided' do
      it "creates a week for a season" do
        season = FactoryGirl.create(:season)
        week_params = FactoryGirl.attributes_for(:week)
        expect { post api_admin_season_weeks_path(season), week: week_params }.to change(season.weeks, :count).by(1)
        response.should be_success
      end
    end
    context 'when the same week number is added to 2 different seasons' do
      it 'creates a week for each season' do
        season1 = FactoryGirl.create(:season, name: '2014-15 NFL Season')
        season2 = FactoryGirl.create(:season, name: '2015-16 NFL Season')
        FactoryGirl.create(:week, number: 1, season: season1)
        week1_season2_params = FactoryGirl.attributes_for(:week, number: 1, season: season2)
        expect { post api_admin_season_weeks_path(season2), week: week1_season2_params  }.to change(season2.weeks, :count).by(1)
      end
    end
    context 'when attempting to create 2 weeks in one season with the same week number' do
      it 'should not create the 2nd week' do
        season = FactoryGirl.create(:season)
        FactoryGirl.create(:week, number: 1, season: season)
        bad_week_params = FactoryGirl.attributes_for(:week, number: 1)
        expect { post api_admin_season_weeks_path(season), week: bad_week_params }.not_to change(season.weeks, :count).by(1)
      end
    end
  end

  # PATCH/PUT /api/admin/seasons/:season_id/weeks/:id
  describe "#update" do
    it "updates a week" do
      week = FactoryGirl.create(:week)
      week.number = 7
      week.starts_at = Date.today.midnight
      week.complete = true
      patch api_admin_season_week_path(week.season, week), week: week.attributes
      response.should be_success
      week.reload
      expect(week.number).to eq(7)
      expect(week.starts_at).to eq(Date.today.midnight)
      expect(week.complete).to be_true
    end
  end

  # DELETE /api/admin/seasons/:season_id/weeks/:id
  describe "#destroy" do
    it "deletes a week" do
      week = FactoryGirl.create(:week)
      expect { delete api_admin_season_week_path(week.season, week) }.to change(week.season.weeks, :count).by(-1)
      response.should be_success
    end
  end

end

require 'spec_helper'

describe API::Admin::SeasonsController do

  before do
    request_with_api_token
    sign_in(FactoryGirl.create(:user))
  end

  # GET /api/admin/seasons
  describe '#index' do
    it 'returns a list of seasons' do
      FactoryGirl.create(:season)
      FactoryGirl.create(:season)
      get :index
      expect(response).to be_success
      expect(json.length).to eq(2)
    end
  end

  # GET /api/admin/seasons/:id
  describe '#show' do
    it 'returns a season' do
      season = FactoryGirl.create(:season)
      get :show, id: season.id
      expect(response).to be_success
      expect(json['name']).to eq('2014-15 NFL Season')
    end
  end

  # POST /api/admin/seasons
  describe '#create' do
    it 'creates a season' do
      season_params = FactoryGirl.attributes_for(:season)
      expect { post :create, season: season_params }.to change(Season, :count).by(1)
    end
  end

  # PATCH/PUT /api/admin/seasons/:id
  describe '#update' do
    it 'updates a season' do
      season = FactoryGirl.create(:season)
      season.name = 'Foo Bar'
      patch :update, id: season.id, season: season.attributes
      season.reload
      expect(season.name).to eq('Foo Bar')
    end
  end

  # DELETE /api/admin/seasons/:id
  describe '#destroy' do
    it 'deletes a season' do
      season = FactoryGirl.create(:season)
      expect { delete :destroy, id: season.id }.to change(Season, :count).by(-1)
    end
  end

end


require 'spec_helper'

describe API::Admin::SeasonsController do
  let(:current_user_admin) { FactoryGirl.create(:user, email: 'foo@bar.com', admin: true) }

  before do
    sign_in(current_user_admin)
  end

  # GET /api/admin/seasons
  describe '#index' do
    context 'when an admin requests all seasons' do
      it 'returns a list of seasons' do
        FactoryGirl.create(:season)
        FactoryGirl.create(:season)
        get :index
        expect(response).to be_success
        expect(json.length).to eq(2)
      end
    end
  end

  # GET /api/admin/seasons/:id
  describe '#show' do
    context 'when an admin request a season' do
      it 'returns a season' do
        season = FactoryGirl.create(:season)
        get :show, id: season.id
        expect(response).to be_success
        expect(json[:name]).to eq('2014-15 NFL Season')
      end
    end
  end

  # POST /api/admin/seasons
  describe '#create' do
    context 'when an admin attempts to create a season' do
      it 'creates a season' do
        season_params = FactoryGirl.attributes_for(:season)
        expect { post :create, season: season_params }.to change(Season, :count).by(1)
      end
    end
  end

  # PATCH/PUT /api/admin/seasons/:id
  describe '#update' do
    context 'when an admin updates a season' do
      it 'updates a season' do
        season = FactoryGirl.create(:season)
        season.name = 'Foo Bar'
        patch :update, id: season.id, season: season.attributes
        season.reload
        expect(season.name).to eq('Foo Bar')
      end
    end
  end

  # DELETE /api/admin/seasons/:id
  describe '#destroy' do
    context 'when an admin attempts to delete a season' do
      it 'deletes a season' do
        season = FactoryGirl.create(:season)
        expect { delete :destroy, id: season.id }.to change(Season, :count).by(-1)
      end
    end
  end

end


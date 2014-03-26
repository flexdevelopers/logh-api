require 'spec_helper'

describe API::Admin::LeaguesController do
  let(:current_user_admin) { FactoryGirl.create(:user, email: 'foo@bar.com', admin: true) }
  let(:season1) { FactoryGirl.create(:season) }
  let(:season2) { FactoryGirl.create(:season) }

  before do
    sign_in(current_user_admin)
  end

  # GET /api/admin/leagues
  describe '#index' do
    context 'when an admin requests all leagues' do
      before do
        FactoryGirl.create(:league, season: season1)
        FactoryGirl.create(:league, season: season1)
        FactoryGirl.create(:league, season: season1)
        FactoryGirl.create(:league, season: season2)
        FactoryGirl.create(:league, season: season2)
      end
      it 'returns all leagues' do
        get :index
        expect(response).to be_success
        expect(json.length).to eq(5)
      end
    end
  end

end
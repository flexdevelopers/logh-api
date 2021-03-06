require 'spec_helper'

describe API::SeasonsController do
  render_views # for rabl

  # GET /api/seasons/current
  describe '#current' do
    context 'when requesting the current season when not logged in' do
      it 'returns a season' do
        get :current, format: 'json'
        expect(response).to be_success
      end
    end
  end

end

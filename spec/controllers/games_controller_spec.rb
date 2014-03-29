require 'spec_helper'

describe API::GamesController do

  before do
    sign_in(FactoryGirl.create(:user))
  end

  # GET /api/weeks/:week_id/games
  describe '#index' do
    let(:week) { FactoryGirl.create(:week) }
    before do
      FactoryGirl.create(:game, week: week)
      FactoryGirl.create(:game, week: week)
    end
    it 'returns games for a week' do
      get :index, week_id: week.id
      response.should be_success
      expect(json.length).to eq(2)
    end
  end

  # GET /api/weeks/:week_id/games/:id
  describe '#show' do
    let(:home_squad) { FactoryGirl.create(:squad, name: 'Denver Broncos', abbrev: 'DEN') }
    let(:visiting_squad) { FactoryGirl.create(:squad, name: 'New England Patriots', abbrev: 'NEP') }
    let(:game) { FactoryGirl.create(:game, home_squad: home_squad, visiting_squad: visiting_squad) }
    it 'returns a game' do
      get :show, week_id: game.week.id, id: game.id
      response.should be_success
      expect(json['home_squad_id']).to eq(home_squad.id)
      expect(json['visiting_squad_id']).to eq(visiting_squad.id)
    end
  end

end

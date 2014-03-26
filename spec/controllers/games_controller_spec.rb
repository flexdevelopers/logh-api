require 'spec_helper'

describe API::GamesController do

  before do
    sign_in(FactoryGirl.create(:user))
  end

  # GET /api/weeks/:week_id/games
  describe '#index' do
    it 'returns games for a week' do
      week = FactoryGirl.create(:week)
      FactoryGirl.create(:game, week: week)
      FactoryGirl.create(:game, week: week)
      get :index, week_id: week.id
      response.should be_success
      expect(json.length).to eq(2)
    end
  end

  # GET /api/weeks/:week_id/games/:id
  describe '#show' do
    it 'returns a game' do
      home_squad = FactoryGirl.create(:squad, name: 'Denver Broncos', abbrev: 'DEN')
      visiting_squad = FactoryGirl.create(:squad, name: 'New England Patriots', abbrev: 'NEP')
      game = FactoryGirl.create(:game, home_squad: home_squad, visiting_squad: visiting_squad)
      get :show, week_id: game.week.id, id: game.id
      response.should be_success
      expect(json['home_squad_id']).to eq(home_squad.id)
      expect(json['visiting_squad_id']).to eq(visiting_squad.id)
    end
  end

end

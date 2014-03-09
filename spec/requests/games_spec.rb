require 'spec_helper'

describe API::Admin::GamesController do

  before do
    bypass_http_token_authentication_on API::Admin::GamesController
  end

  # GET /api/admin/weeks/:week_id/games
  describe "#index" do
    it "returns games for a week" do
      week = FactoryGirl.create(:week)
      FactoryGirl.create(:game, week: week)
      FactoryGirl.create(:game, week: week)
      get api_admin_week_games_path(week)
      response.should be_success
      expect(json.length).to eq(2)
    end
  end

  # GET /api/admin/weeks/:week_id/games/:id
  describe "#show" do
    it "returns a game" do
      home_squad = FactoryGirl.create(:squad, name: 'Denver Broncos', abbrev: 'DEN')
      visiting_squad = FactoryGirl.create(:squad, name: 'New England Patriots', abbrev: 'NEP')
      game = FactoryGirl.create(:game, home_squad: home_squad, visiting_squad: visiting_squad)
      get api_admin_week_game_path(game.week, game)
      response.should be_success
      expect(json['home_squad_id']).to eq(home_squad.id)
      expect(json['visiting_squad_id']).to eq(visiting_squad.id)
    end
  end

  # POST /api/admin/weeks/:week_id/games
  describe "#create" do
    it "creates a game for a week" do
      week = FactoryGirl.create(:week)
      game_params = FactoryGirl.attributes_for(:game)
      game_params[:home_squad_id] = game_params[:home_squad].id
      game_params[:visiting_squad_id] = game_params[:visiting_squad].id
      expect { post api_admin_week_games_path(week), game: game_params }.to change(week.games, :count).by(1)
      response.should be_success
    end
  end

  # PUT/PATCH /api/admin/weeks/:week_id/games/:id
  describe "#update" do
    it "updates a game" do
      game = FactoryGirl.create(:game)
      game.home_squad = FactoryGirl.create(:squad, name: 'Seattle Seahawks', abbrev: 'SEA')
      game.visiting_squad = FactoryGirl.create(:squad, name: 'New York Giants', abbrev: 'NYG')
      patch api_admin_week_game_path(game.week, game), game: game.attributes
      response.should be_success
      game.reload
      expect(game.home_squad.abbrev).to eq('SEA')
      expect(game.visiting_squad.abbrev).to eq('NYG')
    end
  end

  # DELETE /api/admin/weeks/:week_id/games/:id
  describe "#destroy" do
    it "destroys a game" do
      game = FactoryGirl.create(:game)
      expect { delete api_admin_week_game_path(game.week, game) }.to change(game.week.games, :count).by(-1)
      response.should be_success
    end
  end

end

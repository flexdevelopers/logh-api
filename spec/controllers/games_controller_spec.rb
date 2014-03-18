require 'spec_helper'

describe API::Admin::GamesController, type: :controller do

  before do
    bypass_http_token_authentication_on API::Admin::GamesController
  end

  # GET /api/admin/weeks/:week_id/games
  describe "#index" do
    it "returns games for a week" do
      week = FactoryGirl.create(:week)
      FactoryGirl.create(:game, week: week)
      FactoryGirl.create(:game, week: week)
      get :index, week_id: week.id
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
      get :show, week_id: game.week.id, id: game.id
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
      # todo: this is weird
      game_params[:home_squad_id] = game_params[:home_squad].id
      game_params[:visiting_squad_id] = game_params[:visiting_squad].id
      expect { post :create, week_id: week.id, game: game_params }.to change(week.games, :count).by(1)
      response.should be_success
    end
    context 'when trying to create 2 games in the same week with the same home squad' do
      it 'should not create the 2nd game' do
        week = FactoryGirl.create(:week)
        squad = FactoryGirl.create(:squad)
        game1_params = FactoryGirl.attributes_for(:game, week: week, home_squad: squad)
        # todo: this is weird
        game1_params[:home_squad_id] = game1_params[:home_squad].id
        game1_params[:visiting_squad_id] = game1_params[:visiting_squad].id
        game2_params = FactoryGirl.attributes_for(:game, week: week, home_squad: squad)
        game2_params[:home_squad_id] = game2_params[:home_squad].id
        game2_params[:visiting_squad_id] = game2_params[:visiting_squad].id
        expect { post :create, week_id: week.id, game: game1_params }.to change(week.games, :count).from(0).to(1)
        expect { post :create, week_id: week.id, game: game2_params }.not_to change(week.games, :count).from(1).to(2)
      end
    end
    context 'when trying to create 2 games in the same week with the same visiting squad' do
      it 'should not create the 2nd game' do
        week = FactoryGirl.create(:week)
        squad = FactoryGirl.create(:squad)
        game1_params = FactoryGirl.attributes_for(:game, week: week, visiting_squad: squad)
        # todo: this is weird
        game1_params[:home_squad_id] = game1_params[:home_squad].id
        game1_params[:visiting_squad_id] = game1_params[:visiting_squad].id
        game2_params = FactoryGirl.attributes_for(:game, week: week, visiting_squad: squad)
        game2_params[:home_squad_id] = game2_params[:home_squad].id
        game2_params[:visiting_squad_id] = game2_params[:visiting_squad].id
        expect { post :create, week_id: week.id, game: game1_params }.to change(week.games, :count).from(0).to(1)
        expect { post :create, week_id: week.id, game: game2_params }.not_to change(week.games, :count).from(1).to(2)
      end
    end
    context 'when a squad is part of two games in a week' do
      it 'should not create the 2nd game' do
        week = FactoryGirl.create(:week)
        squad = FactoryGirl.create(:squad)
        game1_params = FactoryGirl.attributes_for(:game, week: week, home_squad: squad)
        # todo: this is weird
        game1_params[:home_squad_id] = game1_params[:home_squad].id
        game1_params[:visiting_squad_id] = game1_params[:visiting_squad].id
        game2_params = FactoryGirl.attributes_for(:game, week: week, visiting_squad: squad)
        game2_params[:home_squad_id] = game2_params[:home_squad].id
        game2_params[:visiting_squad_id] = game2_params[:visiting_squad].id
        expect { post :create, week_id: week.id, game: game1_params }.to change(week.games, :count).by(1)
        expect { post :create, week_id: week.id, game: game2_params }.to raise_error
        expect(week.games.length).to eq(1)
      end
    end

  end

  # PUT/PATCH /api/admin/weeks/:week_id/games/:id
  describe "#update" do
    it "updates a game" do
      game = FactoryGirl.create(:game)
      game.home_squad = FactoryGirl.create(:squad, name: 'Seattle Seahawks', abbrev: 'SEA')
      game.visiting_squad = FactoryGirl.create(:squad, name: 'New York Giants', abbrev: 'NYG')
      patch :update, week_id: game.week.id, id: game.id, game: game.attributes
      response.should be_success
      game.reload
      expect(game.home_squad.abbrev).to eq('SEA')
      expect(game.visiting_squad.abbrev).to eq('NYG')
    end
    context 'when visiting squad score is less than home squad score' do
      subject(:game) { FactoryGirl.create(:game) }
      it 'should add visiting squad to the weeks losers' do
        game[:home_squad_score] = 34
        game[:visiting_squad_score] = 24
        patch :update, week_id: game.week.id, id: game.id, game: game.attributes
        expect(response).to be_success
        expect(game.week.losers.where(squad: game.visiting_squad).length).to eq(1)
        expect(game.week.losers.where(squad: game.home_squad).length).to eq(0)
      end
    end
    context 'when home squad score is less than visiting squad score' do
      subject(:game) { FactoryGirl.create(:game) }
      it 'should add home squad to the weeks losers' do
        game[:home_squad_score] = 21
        game[:visiting_squad_score] = 28
        patch :update, week_id: game.week.id, id: game.id, game: game.attributes
        expect(response).to be_success
        expect(game.week.losers.where(squad: game.home_squad).length).to eq(1)
        expect(game.week.losers.where(squad: game.visiting_squad).length).to eq(0)
      end
    end
    context 'when home squad score equals visiting squad score' do
      subject(:game) { FactoryGirl.create(:game) }
      it 'should not add either squad to the weeks losers' do
        game[:home_squad_score] = game[:visiting_squad_score] = 14
        patch :update, week_id: game.week.id, id: game.id, game: game.attributes
        expect(response).to be_success
        expect(game.week.losers.where(squad: game.home_squad).length).to eq(0)
        expect(game.week.losers.where(squad: game.visiting_squad).length).to eq(0)
      end
    end
    context 'when game score is updated multiple times with different results' do
      subject(:game) { FactoryGirl.create(:game) }
      it 'both opponents should not be marked as losers' do
        game[:home_squad_score] = 24
        game[:visiting_squad_score] = 14
        patch :update, week_id: game.week.id, id: game.id, game: game.attributes
        expect(response).to be_success
        expect(game.week.losers.find_by(squad: game.visiting_squad)).not_to be_nil
        game[:home_squad_score] = 14
        game[:visiting_squad_score] = 24
        patch :update, week_id: game.week.id, id: game.id, game: game.attributes
        expect(response).to be_success
        expect(game.week.losers.where(squad: game.home_squad).length).to eq(1)
        expect(game.week.losers.where(squad: game.visiting_squad).length).to eq(0)
      end
    end

  end

  # DELETE /api/admin/weeks/:week_id/games/:id
  describe "#destroy" do
    it "destroys a game" do
      game = FactoryGirl.create(:game)
      expect { delete :destroy, week_id: game.week.id, id: game.id }.to change(game.week.games, :count).by(-1)
      response.should be_success
    end
  end

end

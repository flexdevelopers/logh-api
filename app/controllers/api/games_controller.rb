class API::GamesController < API::BaseController
  before_action :_set_week
  before_action :_set_game, only: [:show, :update, :destroy]

  # GET /api/weeks/:week_id/games
  def index
    @games = @week.games
    render json: @games
  end

  # GET /api/weeks/:week_id/games/:id
  def show
    render json: @game
  end

  private

    def _set_week
      @week = Week.find(params[:week_id])
    end

    def _set_game
      @game = @week.games.find(params[:id])
    end

end

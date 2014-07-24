class API::GamesController < API::BaseController
  before_action :_set_league, only: [:current]
  before_action :_set_week, except: [:current]
  before_action :_set_game, only: [:show, :update, :destroy]

  # GET /api/weeks/:week_id/games
  def index
    @games = @week.games
    respond_with @games
  end

  # GET /api/games/current?league_id=27
  def current
    if @league.started?
      @week = @league.season.weeks.started.order('starts_at DESC')[0] # current week
    else
      @week = @league.start_week
    end
    @games = @week.games
    respond_with @games
  end

  # GET /api/weeks/:week_id/games/:id
  def show
    respond_with @game
  end

  private

    def _set_league
      @league = League.find(params[:league_id])
    end

    def _set_week
      @week = Week.find(params[:week_id])
    end

    def _set_game
      @game = @week.games.find(params[:id])
    end

end

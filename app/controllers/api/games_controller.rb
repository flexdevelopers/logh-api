class API::GamesController < API::BaseController
  before_action :_set_league, only: [:current]
  before_action :_set_week, except: [:current]
  before_action :_set_game, only: [:show, :update, :destroy]

  # GET /api/weeks/:week_id/games
  def index
    @games = @week.games.includes(:visiting_squad, :home_squad, :week).map { |game| GameDecorator.decorate(game) }
    respond_with @games
  end

  # GET /api/games/current?league_id=27
  def current
    if @league.started?
      week = @league.season.current_week
    else
      week = @league.start_week
    end
    @games = week.games.includes(:visiting_squad, :home_squad, :week).map { |game| GameDecorator.decorate(game) }
    respond_with @games
  end

  # GET /api/weeks/:week_id/games/:id
  def show
    @game = GameDecorator.decorate(@game)
    respond_with @game # rendered via app/views/api/games/show.json.rabl
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

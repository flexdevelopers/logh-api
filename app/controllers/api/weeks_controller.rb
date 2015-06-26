class API::WeeksController < API::BaseController
  before_action :_set_season
  before_action :_set_league, only: [:current]
  before_action :_set_week, only: [:show]

  # GET /api/seasons/:season_id/weeks
  # GET /api/seasons/:season_id/weeks?league_id=:league_id
  def index
    if params[:league_id]
      league = League.find(params[:league_id])
      start_week = league.start_week
      @weeks = @season.weeks.started.where('starts_at >= ?', start_week[:starts_at]).order(starts_at: :asc)
    else
      @weeks = @season.weeks.order(starts_at: :asc)
    end
    @weeks = @weeks.map { |week| WeekDecorator.decorate(week) }
    respond_with @weeks # rendered via app/views/api/weeks/index.json.rabl
  end

  # GET /api/seasons/:season_id/weeks/available
  def available
    @weeks = @season.weeks.not_complete.order(starts_at: :asc)
    @weeks = @weeks.map { |week| WeekDecorator.decorate(week) }
    respond_with @weeks # rendered via app/views/api/weeks/available.json.rabl
  end

  # GET /api/seasons/:season_id/weeks/current?league_id=27
  def current
    if @league.started?
      @week = @league.season.current_week
    else
      @week = @league.start_week
    end
    @week = WeekDecorator.decorate(@week)
    respond_with @week # rendered via app/views/api/weeks/show.json.rabl
  end

  # GET /api/seasons/:season_id/weeks/:id
  def show
    @week = WeekDecorator.decorate(@week)
    respond_with @week # rendered via app/views/api/weeks/show.json.rabl
  end

  private

  def _week_params
    params.require(:week).permit(:name, :week_type_id, :starts_at, :ends_at, :complete)
  end

  def _set_season
    @season = Season.find(params[:season_id])
  end

  def _set_league
    @league = League.find(params[:league_id])
  end

  def _set_week
    @week = @season.weeks.find(params[:id])
  end

end

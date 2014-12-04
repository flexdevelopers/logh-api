class API::WeeksController < API::BaseController
  before_action :_set_season
  before_action :_set_week, only: [:show]

  # GET /api/seasons/:season_id/weeks
  def index
    @weeks = @season.weeks.order(starts_at: :asc)
    respond_with @weeks # rendered via app/views/api/weeks/index.json.rabl
  end

  # GET /api/seasons/:season_id/weeks/available
  def available
    @weeks = @season.weeks.not_complete.order(starts_at: :asc)
    respond_with @weeks # rendered via app/views/api/weeks/available.json.rabl
  end

  # GET /api/seasons/:season_id/weeks/:id
  def show
    respond_with @week # rendered via app/views/api/weeks/show.json.rabl
  end

  private

  def _week_params
    params.require(:week).permit(:number, :week_type_id, :starts_at, :complete)
  end

  def _set_season
    @season = Season.find(params[:season_id])
  end

  def _set_week
    @week = @season.weeks.find(params[:id])
  end

end

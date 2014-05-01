class API::WeeksController < API::BaseController
  before_action :_set_season
  before_action :_set_week, only: [:show]


  # GET /api/seasons/:season_id/weeks
  def index
    @weeks = @season.weeks.all
    render json: @weeks
  end

  # GET /api/seasons/:season_id/weeks/available
  def available
    @weeks = @season.weeks.available
    render json: @weeks
  end

  # GET /api/seasons/:season_id/weeks/:id
  def show
    render json: @week
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

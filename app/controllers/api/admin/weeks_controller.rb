class API::Admin::WeeksController < API::BaseController
  before_action :_set_season
  before_action :_set_week, only: [:show, :update, :destroy]
  before_action :_verify_admin

  # GET /api/admin/seasons/:season_id/weeks
  def index
    @weeks = @season.weeks.all
    render json: @weeks
  end

  # GET /api/admin/seasons/:season_id/weeks/:id
  def show
    render json: @week
  end

  # POST /api/admin/seasons/:season_id/weeks
  def create
    @week = @season.weeks.new(_week_params)
    if @week.save
      render json: @week, status: :created, location: api_admin_season_week_path(@season, @week)
    else
      error(WARNING, @week.errors.full_messages.join(', '), :unprocessable_entity)
    end
  end

  # PATCH/PUT /api/admin/seasons/:season_id/weeks/:id
  def update
    if @week.update(_week_params)
      head :no_content
    else
      error(WARNING, @week.errors.full_messages.join(', '), :unprocessable_entity)
    end
  end

  # DELETE /api/admin/seasons/:season_id/weeks/:id
  def destroy
    @week.destroy
    head :no_content
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

    def _verify_admin
      forbidden() unless current_user.admin?
    end
end

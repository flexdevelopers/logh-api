class API::Admin::WeeksController < API::BaseController

  before_action :set_season
  before_action :set_week, only: [:show, :update, :destroy]

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
    @week = @season.weeks.new(week_params)
    if @week.save
      render json: @week, status: :created, location: api_admin_season_week_path(@season, @week)
    else
      render json: @week.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /api/admin/seasons/:season_id/weeks/:id
  def update
    if @week.update(week_params)
      head :no_content
    else
      render json: @week.errors, status: :unprocessable_entity
    end
  end

  # DELETE /api/admin/seasons/:season_id/weeks/:id
  def destroy
    @week.destroy
    head :no_content
  end

  private

    def week_params
      params.require(:week).permit(:number, :starts_at, :complete)
    end

    def set_season
      @season = Season.find(params[:season_id])
    end

    def set_week
      @week = @season.weeks.find(params[:id])
    end
end

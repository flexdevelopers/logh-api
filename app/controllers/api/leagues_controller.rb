class API::LeaguesController < API::BaseController
  before_action :_set_season
  before_action :_set_league, only: [:show, :update, :destroy]

  # GET /api/seasons/:season_id/leagues
  def index
    render json: @season.leagues
  end

  # GET /api/seasons/:season_id/leagues/1
  def show
    render json: @league
  end

  # POST /api/seasons/:season_id/leagues
  def create
    @league = @season.leagues.new(_league_params)
    @league.commishes << current_user
    if @league.save
      render json: @league, status: :created, location: api_season_league_path(@season, @league)
    else
      render json: @league.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /api/seasons/:season_id/leagues/1
  def update
    if @league.update(_league_params)
      head :no_content
    else
      render json: @league.errors, status: :unprocessable_entity
    end
  end

  # DELETE /api/seasons/:season_id/leagues/1
  def destroy
    @league.destroy
    head :no_content
  end

  private

    def _set_season
      @season = Season.find(params[:season_id])
    end

    def _set_league
      @league = @season.leagues.find(params[:id])
    end

    def _league_params
      params.require(:league).permit(:name, :password, :password_confirmation)
    end
end
